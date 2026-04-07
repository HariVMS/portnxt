import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body = await request.json();
    const { name, mobile, email, business, message } = body;

    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "";
    const toEmail = process.env.RESEND_TO_EMAIL ?? "";

    const data = await resend.emails.send({
      from: `Port NxT Contact <${fromEmail}>`,
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Mobile:</strong> ${mobile || "N/A"}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Business Name:</strong> ${business || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "N/A"}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

