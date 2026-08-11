/**
 * Smallest runnable check for lead validation + delivery path.
 * Run: npm run check
 */
import assert from "node:assert/strict";
import { contactSchema } from "../lib/validations/contact";
import { newsletterSchema } from "../lib/validations/newsletter";

const good = contactSchema.safeParse({
  intent: "consultation",
  name: "Test Seller",
  email: "seller@example.com",
  phone: "+919876543210",
  company: "Demo Co",
  marketplaces: "Amazon, Flipkart",
  message: "Need help scaling catalog and ads.",
});

assert.equal(good.success, true, "valid lead should pass");

const bad = contactSchema.safeParse({
  intent: "consultation",
  name: "A",
  email: "not-an-email",
  phone: "1",
  marketplaces: "",
  message: "short",
});

assert.equal(bad.success, false, "invalid lead should fail");

const newsOk = newsletterSchema.safeParse({ email: "ops@example.com" });
assert.equal(newsOk.success, true, "newsletter email should pass");

const newsBad = newsletterSchema.safeParse({ email: "nope" });
assert.equal(newsBad.success, false, "bad newsletter email should fail");

console.log("selfcheck ok");
