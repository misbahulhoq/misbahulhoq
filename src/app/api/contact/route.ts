import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message: userMessage } = await req.json();
    if (!email || !userMessage || !name || !subject) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.(name, email, subject, message)",
        },
        { status: 400 },
      );
    }
    // Send email
    mailTransporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: "extraordinarymisbah@gmail.com",
        subject,
        html: `
        <body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:40px 20px;">
          <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
            <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 30px;text-align:center;">
              <h1 style="margin:0;color:#fff;font-size:32px;font-weight:700;">New Contact Message</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:16px;">You've received a new inquiry</p>
            </div>
            <div style="padding:40px 30px;">
              <div style="margin-bottom:30px;padding:25px;background:linear-gradient(135deg,#f5f7fa 0%,#c3cfe2 100%);border-radius:15px;border-left:5px solid #667eea;">
                <div style="margin-bottom:20px;">
                  <p style="margin:0 0 8px;color:#667eea;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">From</p>
                  <p style="margin:0;color:#2d3748;font-size:20px;font-weight:700;">${name}</p>
                </div>
                <div>
                  <p style="margin:0 0 8px;color:#667eea;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Email</p>
                  <a href="mailto:${email}" style="margin:0;color:#764ba2;font-size:16px;text-decoration:none;font-weight:500;">${email}</a>
                </div>
              </div>
              <div style="margin-bottom:30px;padding:25px;background:linear-gradient(135deg,#ffecd2 0%,#fcb69f 100%);border-radius:15px;border-left:5px solid #ff6b6b;">
                <p style="margin:0 0 8px;color:#c23030;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Subject</p>
                <p style="margin:0;color:#2d3748;font-size:22px;font-weight:700;">${subject}</p>
              </div>
              <div style="margin-bottom:30px;padding:25px;background:#f8f9fa;border-radius:15px;border:2px dashed #dee2e6;">
                <p style="margin:0 0 15px;color:#667eea;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Message</p>
                <p style="margin:0;color:#2d3748;font-size:16px;line-height:1.8;white-space:pre-wrap;">${userMessage}</p>
              </div>
              <div style="text-align:center;margin-top:35px;">
                <a href="mailto:extraordinarymisbah@gmail.com" style="display:inline-block;padding:16px 40px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;text-decoration:none;border-radius:50px;font-weight:600;font-size:16px;">Reply to Message</a>
              </div>
            </div>
            <div style="background:#f8f9fa;padding:25px 30px;text-align:center;border-top:1px solid #e9ecef;">
              <p style="margin:0;color:#6c757d;font-size:14px;">This message was sent via your contact form</p>
              <p style="margin:10px 0 0;color:#adb5bd;font-size:12px;">© 2025 All rights reserved</p>
            </div>
          </div>
        </body>
      `,
      })
      .then((res) => {})
      .catch((err) => {
        console.error("email error", err);
      });

    return NextResponse.json(
      { success: true, message: "Message sent successfully.", data: null },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 },
    );
  }
}
