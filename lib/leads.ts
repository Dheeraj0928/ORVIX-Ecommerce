import { brand } from "@/config/brand";
import type { ContactValues } from "@/lib/validations/contact";

type NewsletterPayload = { email: string; source?: string };

/**
 * Deliver lead/newsletter payloads.
 * Prefer LEAD_WEBHOOK_URL (Make/Zapier/n8n/CRM). Falls back to server log.
 */
export async function deliverLead(payload: ContactValues) {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  const body = {
    type: "lead" as const,
    receivedAt: new Date().toISOString(),
    to: brand.contact.email,
    ...payload,
  };

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`Lead webhook failed: ${res.status}`);
    }
    return { delivered: "webhook" as const };
  }

  console.info("[orvix-lead]", body);
  return { delivered: "log" as const };
}

export async function deliverNewsletter(payload: NewsletterPayload) {
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL ?? process.env.LEAD_WEBHOOK_URL;
  const body = {
    type: "newsletter" as const,
    receivedAt: new Date().toISOString(),
    ...payload,
  };

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`Newsletter webhook failed: ${res.status}`);
    }
    return { delivered: "webhook" as const };
  }

  console.info("[orvix-newsletter]", body);
  return { delivered: "log" as const };
}
