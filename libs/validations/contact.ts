import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  content: z.string().min(30),
  token: z.string().optional(),
});

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;
