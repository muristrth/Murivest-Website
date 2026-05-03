import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase";

function isAuthorized(request: NextRequest): boolean {
  const token = request.headers.get("x-admin-token");

  if (!process.env.ADMIN_SECRET_TOKEN) {
    console.error("ADMIN_SECRET_TOKEN is missing");
    return false;
  }

  return token === process.env.ADMIN_SECRET_TOKEN;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;

    const { data: lead, error: leadError } = await supabaseAdmin
      .from("leads")
      .select("*")
      .eq("id", id)
      .single();

    if (leadError || !lead) {
      console.error("Lead fetch error:", leadError);
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    const { data: activities, error: activitiesError } = await supabaseAdmin
      .from("lead_activities")
      .select("*")
      .eq("lead_id", id)
      .order("created_at", { ascending: false });

    if (activitiesError) {
      console.error("Lead activities fetch error:", activitiesError);
    }

    let emailEvents: any[] = [];

    const { data: emails, error: emailError } = await supabaseAdmin
      .from("email_events")
      .select("*")
      .eq("lead_id", id)
      .order("created_at", { ascending: false });

    if (!emailError && emails) {
      emailEvents = emails;
    }

    return NextResponse.json({
      lead,
      activities: activities || [],
      emailEvents,
    });
  } catch (error) {
    console.error("Lead detail API error:", error);

    return NextResponse.json(
      { error: "Server error while loading lead." },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await request.json();

    const { data: lead, error } = await supabaseAdmin
      .from("leads")
      .update({
        internal_notes: body.internal_notes ?? null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Lead notes update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await supabaseAdmin.from("lead_activities").insert({
      lead_id: id,
      actor: "admin",
      action_type: "notes_updated",
      description: "Internal notes updated",
      metadata: {},
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Lead PATCH API error:", error);

    return NextResponse.json(
      { error: "Server error while updating lead." },
      { status: 500 }
    );
  }
}