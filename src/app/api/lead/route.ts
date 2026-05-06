import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase";
import { sendEmail } from "@/app/lib/email";
import { calculateLeadScore, getScoreLabel } from "@/app/types/lead";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      jobTitle,
      companyName,
      deployableCapital,
      investmentTimeline,
      investorType,
      referralSource,
      message,
      consentMarketing,
      consentDataProcessing,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !country ||
      !city ||
      !jobTitle ||
      !companyName ||
      !deployableCapital ||
      !investmentTimeline ||
      !investorType ||
      !referralSource ||
      consentMarketing !== true ||
      consentDataProcessing !== true
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const leadScore = calculateLeadScore({
  firstName,
  lastName,
  email,
  phone,
  country,
  city,
  jobTitle,
  companyName,
  deployableCapital,
  investmentTimeline,
  investorType,
  referralSource,
  message,
  consentMarketing,
  consentDataProcessing,
});

const scoreLabel = getScoreLabel(leadScore).label;

    const fullName = `${firstName} ${lastName}`;

    const { data: lead, error } = await supabaseAdmin
      .from("leads")
      .insert({
        first_name: firstName,
        last_name: lastName,
        full_name: fullName,
        email,
        phone,
        country,
        city,
        job_title: jobTitle,
        company_name: companyName,
        deployable_capital: deployableCapital,
        investment_timeline: investmentTimeline,
        investor_type: investorType,
        referral_source: referralSource,
        message: message || null,
        consent_marketing: consentMarketing,
        consent_data_processing: consentDataProcessing,
        source: "Mandate Access Landing Page",
        status: "new",
        lead_score: leadScore,
        score_label: scoreLabel,
      })
      .select()
      .single();

    if (error) {
      console.error("SUPABASE LEAD INSERT ERROR:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });

      return NextResponse.json(
        {
          error: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
        },
        { status: 500 }
      );
    }

    await supabaseAdmin.from("lead_activities").insert({
      lead_id: lead.id,
      actor: "system",
      action_type: "lead_created",
      description: "Lead submitted from Mandate Access landing page",
      metadata: {
        source: "Mandate Access Landing Page",
        deployable_capital: deployableCapital,
        investor_type: investorType,
        referral_source: referralSource,
      },
    });

    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL || "capital@murivest.co.ke",
        subject: `New Mandate Access Lead: ${fullName}`,
        replyTo: email,
        html: `
          <h2>New Mandate Access Application</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${city}, ${country}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Job Title:</strong> ${jobTitle}</p>
          <p><strong>Investor Type:</strong> ${investorType}</p>
          <p><strong>Capital:</strong> ${deployableCapital}</p>
          <p><strong>Timeline:</strong> ${investmentTimeline}</p>
          <p><strong>Referral Source:</strong> ${referralSource}</p>
          <p><strong>Message:</strong> ${message || "None"}</p>
          <p><strong>View Lead:</strong> <a href="${process.env.NEXT_PUBLIC_SITE_URL || "http://murivest.co.ke"}/admin2/leads/${lead.id}">Open in Admin</a></p>
        `,
      });

      await sendEmail({
        to: email,
        subject: "Your Mandate Access Application Has Been Received",
        html: `
          <p>Dear ${firstName},</p>

          <p>Thank you for submitting your Mandate Access Application to Murivest Realty Group.</p>

          <p>Our Investment Desk has received your details and will review your profile before granting access to suitable commercial real estate opportunities.</p>

          <p>If your profile aligns with our active mandates, our team will contact you directly with the next steps.</p>

          <p>Regards,<br/>Murivest Investment Desk</p>
        `,
      });
    } catch (emailError) {
      console.error("EMAIL SEND ERROR:", emailError);
    }

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Lead API error:", error);

    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}