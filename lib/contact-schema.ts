import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
  // Honeypot field: real users never fill this in; bots that auto-fill every input do.
  company: z.string().max(0, "Spam detected."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
