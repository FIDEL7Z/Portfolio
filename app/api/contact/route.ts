import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { getResendClient } from "@/lib/email/resend";
import { siteConfig } from "@/lib/content";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid submission.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { name, email, message, company } = parsed.data;

  // Honeypot tripped — pretend success so bots don't learn to avoid the field.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const resend = getResendClient();

  if (!resend) {
    if (process.env.NODE_ENV !== "production") {
      console.info(
        "[contact] RESEND_API_KEY not set — logging submission instead of sending:",
        {
          name,
          email,
          message,
        },
      );
      return NextResponse.json({ ok: true, dev: true });
    }

    return NextResponse.json(
      {
        error:
          "Contact form is not configured yet. Please email directly instead.",
      },
      { status: 503 },
    );
  }

  const { error } = await resend.emails.send({
    from: `Portfolio Contact <onboarding@resend.dev>`,
    to: siteConfig.email,
    replyTo: email,
    subject: `New message from ${name} via portfolio`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
