import { z } from "zod";

export const contactSchema = z.object({
  intent: z.enum(["consultation", "audit"]),
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  company: z.string().optional(),
  marketplaces: z.string().min(2, "Tell us where you sell"),
  message: z.string().min(10, "Share a bit more context"),
});

export type ContactValues = z.infer<typeof contactSchema>;
