import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Por favor, informe seu nome."),
  email: z.string().trim().email("Por favor, informe um e-mail válido."),
  message: z
    .string()
    .trim()
    .min(10, "A mensagem precisa ter pelo menos 10 caracteres."),
  // Honeypot field: real users never fill this in; bots that auto-fill every input do.
  company: z.string().max(0, "Spam detectado."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
