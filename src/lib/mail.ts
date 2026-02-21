import type { ContactFormData } from "@/types";

/**
 * Sends the contact form submission via your preferred email provider.
 *
 * This example uses Resend (https://resend.com) — swap it out for
 * Nodemailer, SendGrid, Postmark, etc. as needed.
 *
 * Install:  npm install resend
 * Env vars: RESEND_API_KEY, CONTACT_TO_EMAIL
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const { name, email, subject, message } = data;

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!toEmail || !apiKey) {
    throw new Error(
      "Missing environment variables: RESEND_API_KEY and/or CONTACT_TO_EMAIL"
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Contact Form <onboarding@resend.dev>`,
      to: [toEmail],
      reply_to: email,
      subject: subject?.trim() ? `[Contact] ${subject}` : `[Contact] New message from ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(`Email send failed: ${JSON.stringify(error)}`);
  }
}