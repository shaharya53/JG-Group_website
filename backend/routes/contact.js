const express = require("express");
const router = express.Router();
const transporter = require("../mailer");

router.post("/", async (req, res) => {
  const { fullName, email, phone, company, enquiryType, message } = req.body;

  if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email address is required." });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
      <div style="background:#1a2744;padding:24px 32px">
        <h2 style="color:#f5c842;margin:0;font-size:20px">New Contact Enquiry</h2>
        <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:13px">Jigisha Group Website</p>
      </div>
      <div style="padding:32px;background:#fff">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px">Full Name</td><td style="padding:8px 0;font-weight:600;color:#111">${fullName}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0;font-weight:600;color:#111"><a href="mailto:${email}" style="color:#1a2744">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0;font-weight:600;color:#111">${phone}</td></tr>` : ""}
          ${company ? `<tr><td style="padding:8px 0;color:#6b7280">Company</td><td style="padding:8px 0;font-weight:600;color:#111">${company}</td></tr>` : ""}
          ${enquiryType ? `<tr><td style="padding:8px 0;color:#6b7280">Enquiry Type</td><td style="padding:8px 0;font-weight:600;color:#111">${enquiryType}</td></tr>` : ""}
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0" />
        <p style="color:#6b7280;font-size:13px;margin:0 0 8px">Message</p>
        <p style="color:#111;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</p>
      </div>
      <div style="padding:16px 32px;background:#f9fafb;font-size:12px;color:#9ca3af">
        Sent from jigisha.in contact form · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `[Contact] ${enquiryType || "General Enquiry"} — ${fullName}`,
      html,
    });
    res.json({ success: true });
  } catch (err) {
    console.error("Contact mail error:", err);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

module.exports = router;
