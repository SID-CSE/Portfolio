import { NextResponse } from "next/server";

type ContactPayload = {
  type?: "contact" | "feedback";
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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as ContactPayload | null;

    if (!body?.message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Honeypot spam protection
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const type = body.type === "feedback" ? "feedback" : "contact";
    const isFeedback = type === "feedback";
    const name = body.name?.trim() || (isFeedback ? "Anonymous visitor" : "");
    const email = body.email?.trim() || "";
    const message = body.message.trim();

    if (!isFeedback && (!name || !email)) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

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

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email || "Anonymous");
    const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />");

    if (isFeedback) {
      await sendResendEmail({
        from: fromEmail,
        to: ownerEmail,
        subject: "Anonymous Portfolio Feedback",
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6">
            <h2>Anonymous Portfolio Feedback</h2>

            <p><strong>Visitor:</strong> Anonymous</p>

            <p><strong>Feedback:</strong></p>
            <p>${escapedMessage}</p>
          </div>
        `,
      });

      return NextResponse.json({
        ok: true,
        mode: "resend",
      });
    }

    await Promise.all([
      // Email to you
      sendResendEmail({
        from: fromEmail,
        to: ownerEmail,
        subject: `Portfolio Inquiry from ${safeName}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6">
            <h2>New Portfolio Inquiry</h2>

            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>

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

            <p>Hello ${safeName},</p>

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
