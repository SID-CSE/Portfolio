import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot field
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
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as ContactPayload | null;

    if (!body?.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Honeypot spam protection
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    // Trim values
    const name = body.name.trim();
    const email = body.email.trim();
    const message = body.message.trim();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Length validation
    if (
      name.length > 100 ||
      email.length > 100 ||
      message.length > 2000
    ) {
      return NextResponse.json(
        { error: "Input exceeds allowed length." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        ok: true,
        mode: "demo",
      });
    }

    const ownerEmail =
      process.env.RESEND_TO_EMAIL ??
      process.env.RESEND_FROM_EMAIL;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ??
      "Siddharth Kumar <onboarding@resend.dev>";

    if (!ownerEmail) {
      return NextResponse.json(
        {
          error:
            "Set RESEND_TO_EMAIL or RESEND_FROM_EMAIL in environment variables.",
        },
        { status: 500 }
      );
    }

    const escapedMessage = message.replace(/\n/g, "<br />");

    await Promise.all([
      // Email to you
      sendResendEmail({
        from: fromEmail,
        to: ownerEmail,
        subject: `Portfolio Inquiry from ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6">
            <h2>New Portfolio Inquiry</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Message:</strong></p>
            <p>${escapedMessage}</p>
          </div>
        `,
        replyTo: email,
      }),

      // Auto reply
      sendResendEmail({
        from: fromEmail,
        to: email,
        subject: "Thank you for contacting Siddharth Kumar",
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6">
            <h2>Thank You for Reaching Out</h2>

            <p>Hello ${name},</p>

            <p>
              Thank you for contacting me through my portfolio website.
              I have received your message and will get back to you as soon as possible.
            </p>

            <p><strong>Your Message:</strong></p>

            <blockquote style="border-left:4px solid #06b6d4;padding-left:12px;margin-left:0;">
              ${escapedMessage}
            </blockquote>

            <p>
              Best Regards,<br/>
              Siddharth Kumar
            </p>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({
      ok: true,
      mode: "resend",
    });
  } catch (error) {
    console.error("Contact Form Error:", error);

    return NextResponse.json(
      {
        error: "Failed to send email.",
      },
      {
        status: 500,
      }
    );
  }
}