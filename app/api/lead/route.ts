import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/leads";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const result = await deliverLead(parsed.data);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("[orvix-lead-error]", error);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }
}
