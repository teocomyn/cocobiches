import { z } from "zod";

export const seminaireDevisSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email(),
  company: z.string().trim().min(1).max(200),
  phone: z.string().trim().min(6).max(30).optional(),
  dates: z.string().trim().min(3).max(200),
  participants: z.coerce.number().int().min(5).max(200),
  format: z.enum(["journee", "demi-journee", "residentiel", "privatisation"]),
  yurt: z.boolean().optional(),
  message: z.string().trim().max(5000).optional(),
  website: z
    .string()
    .optional()
    .refine((v) => !v || v.length === 0, { message: "honeypot" }),
});

export type SeminaireDevisInput = z.infer<typeof seminaireDevisSchema>;
