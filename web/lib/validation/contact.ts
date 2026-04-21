import { z } from "zod";

/** Honeypot : doit rester vide (anti-bots basiques). */
export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "name").max(200),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(10000),
  /** Champ anti-robot — doit être vide */
  website: z
    .string()
    .optional()
    .refine((v) => !v || v.length === 0, { message: "honeypot" }),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email(),
  consent: z.boolean().refine((v) => v === true, { message: "consent" }),
  company: z
    .string()
    .optional()
    .refine((v) => !v || v.length === 0, { message: "honeypot" }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
