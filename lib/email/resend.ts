import { Resend } from "resend";

let client: Resend | undefined;

/** Returns `undefined` when RESEND_API_KEY isn't configured — callers decide how to degrade. */
export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return undefined;

  client ??= new Resend(apiKey);
  return client;
}
