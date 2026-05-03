import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase";

function isAuthorized(request: NextRequest): boolean {
  const token = request.headers.get("x-admin-token");

  if (!process.env.ADMIN_SECRET_TOKEN) {
    console.error("ADMIN_SECRET_TOKEN is missing in .env.local");
    return false;
  }

  return token === process.env.ADMIN_SECRET_TOKEN;
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await request.json();

    if (!body.status) {
      return NextResponse.json(
        { error: "Status is required" },
        { status: 400 }
      );
    }

    const { data: existingLead } = await supabaseAdmin
      .from("leads")
      .select("status")
      .eq("id", id)
      .single();

    const oldStatus = existingLead?.status || "unknown";

    const { data: lead, error } = await supabaseAdmin
      .from("leads")
      .update({
        status: body.status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Lead status update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await supabaseAdmin.from("lead_activities").insert({
      lead_id: id,
      actor: body.actor || "admin",
      action_type: "status_changed",
      description: `Status changed from ${oldStatus} to ${body.status}`,
      metadata: {
        from: oldStatus,
        to: body.status,
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Lead status API error:", error);

    return NextResponse.json(
      { error: "Server error while updating status." },
      { status: 500 }
    );
  }
}