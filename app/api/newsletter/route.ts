import { NextResponse } from "next/server";
import { z } from "zod";
import { deliverNewsletter } from "@/lib/leads";

const schema = z.object({
  email: z.email(),
  source: z.string().optional(),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  try {
    const result = await deliverNewsletter(parsed.data);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("[orvix-newsletter-error]", error);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }
}
