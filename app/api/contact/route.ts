import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

async function sendResendEmail({
  from,
  to,
  subject,
  html,
  replyTo,
}: {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html, reply_to: replyTo }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body?.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: true, mode: "demo" });
  }

  const ownerEmail = process.env.RESEND_TO_EMAIL ?? process.env.RESEND_FROM_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Siddharth Kumar <onboarding@resend.dev>";

  if (!ownerEmail) {
    return NextResponse.json(
      { error: "Set RESEND_TO_EMAIL or RESEND_FROM_EMAIL to receive submissions." },
      { status: 500 },
    );
  }

  const escapedMessage = body.message.replace(/\n/g, "<br />");

  await Promise.all([
    sendResendEmail({
      from: fromEmail,
      to: ownerEmail,
      subject: `Portfolio inquiry from ${body.name}`,
      html: `
        <h2>New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage}</p>
      `,
      replyTo: body.email,
    }),
    sendResendEmail({
      from: fromEmail,
      to: body.email,
      subject: "Thanks for contacting Siddharth Kumar",
      html: `
        <h2>Thanks for reaching out</h2>
        <p>I received your message and will get back to you shortly.</p>
        <p><strong>Your message:</strong></p>
        <p>${escapedMessage}</p>
      `,
    }),
  ]);

  return NextResponse.json({ ok: true, mode: "resend" });
}