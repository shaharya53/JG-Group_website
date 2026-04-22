const express = require("express");
const router  = express.Router();
const transporter = require("../mailer");

/* ── helpers ── */
function row(label, value) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:9px 0;color:#6b7280;width:170px;font-size:13px;vertical-align:top">${label}</td>
      <td style="padding:9px 0;font-weight:600;color:#111827;font-size:13px">${value}</td>
    </tr>`;
}

function section(title) {
  return `
    <tr>
      <td colspan="2" style="padding:20px 0 8px">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#9ca3af;border-bottom:1px solid #f3f4f6;padding-bottom:6px">
          ${title}
        </p>
      </td>
    </tr>`;
}

/* ── POST /api/contact ── */
router.post("/", async (req, res) => {
  const {
    fullName, email, phone, company,
    enquiryType,
    pincode, city, state, country,
    message,
  } = req.body;

  /* ── validation ── */
  const errors = [];
  if (!fullName?.trim())  errors.push({ field: "fullName", message: "Full name is required." });
  if (!email?.trim())     errors.push({ field: "email",    message: "Email address is required." });
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
                          errors.push({ field: "email",    message: "Please enter a valid email address." });
  if (!message?.trim())   errors.push({ field: "message",  message: "Please describe your inquiry." });
  if (errors.length) return res.status(400).json({ errors });

  const location = [city, state, pincode, country].filter(Boolean).join(", ") || null;
  const now = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  /* ── email HTML ── */
  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:620px;margin:32px auto;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.06)">

    <!-- Header -->
    <div style="background:#0a192f;padding:28px 36px">
      <table style="width:100%"><tr>
        <td>
          <h2 style="margin:0;color:#f5c842;font-size:19px;letter-spacing:-.01em">New Contact Enquiry</h2>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.45);font-size:12px">Jigisha Group of Companies · jigisha.in</p>
        </td>
        <td style="text-align:right">
          <span style="display:inline-block;background:rgba(245,200,66,0.15);color:#f5c842;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:6px 14px;border-radius:20px;border:1px solid rgba(245,200,66,0.3)">
            ${enquiryType || "General"}
          </span>
        </td>
      </tr></table>
    </div>

    <!-- Body -->
    <div style="padding:32px 36px;background:#ffffff">
      <table style="width:100%;border-collapse:collapse">

        ${section("Contact Details")}
        ${row("Full Name",   fullName.trim())}
        ${row("Email",       `<a href="mailto:${email.trim()}" style="color:#2563eb;text-decoration:none">${email.trim()}</a>`)}
        ${row("Phone",       phone || null)}
        ${row("Company",     company || null)}
        ${row("Location",    location)}

        ${section("Inquiry Details")}
        ${row("Interest Area", enquiryType || null)}
        ${row("Message", `<span style="white-space:pre-wrap;line-height:1.65">${message.trim()}</span>`)}

      </table>
    </div>

    <!-- Footer -->
    <div style="padding:14px 36px;background:#f9fafb;border-top:1px solid #f3f4f6">
      <p style="margin:0;font-size:11px;color:#9ca3af">
        Submitted via jigisha.in contact form &nbsp;·&nbsp; ${now} IST
      </p>
    </div>
  </div>
</body>
</html>`;

  /* ── auto-reply to sender ── */
  const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:580px;margin:32px auto;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden">
    <div style="background:#0a192f;padding:28px 36px">
      <h2 style="margin:0;color:#f5c842;font-size:18px">Thank you for reaching out!</h2>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.5);font-size:13px">Jigisha Group of Companies</p>
    </div>
    <div style="padding:32px 36px;background:#fff;font-size:14px;color:#374151;line-height:1.7">
      <p>Dear <strong>${fullName.trim()}</strong>,</p>
      <p>
        We have received your inquiry and a member of our team will get back to you
        <strong>within 24 hours</strong>.
      </p>
      <p style="margin:0 0 6px"><strong>Your inquiry summary:</strong></p>
      <div style="background:#f8fafc;border-left:3px solid #2563eb;padding:14px 18px;border-radius:0 8px 8px 0;font-size:13px;color:#1e293b">
        ${enquiryType ? `<p style="margin:0 0 4px"><strong>Interest Area:</strong> ${enquiryType}</p>` : ""}
        <p style="margin:0;white-space:pre-wrap">${message.trim()}</p>
      </div>
      <p style="margin-top:24px">
        In the meantime, feel free to call us at
        <a href="tel:+918989167888" style="color:#2563eb;text-decoration:none"><strong>+91 89891 67888</strong></a>
        or email us at
        <a href="mailto:info@jigisha.in" style="color:#2563eb;text-decoration:none">info@jigisha.in</a>.
      </p>
      <p>Warm regards,<br /><strong>Jigisha Group — Customer Relations</strong></p>
    </div>
    <div style="padding:14px 36px;background:#f9fafb;border-top:1px solid #f3f4f6;font-size:11px;color:#9ca3af">
      © ${new Date().getFullYear()} Jigisha Group of Companies · Bhopal, India
    </div>
  </div>
</body>
</html>`;

  try {
    /* send notification to team */
    await transporter.sendMail({
      from:    process.env.MAIL_FROM,
      to:      process.env.MAIL_TO,
      replyTo: email.trim(),
      subject: `[Contact] ${enquiryType || "General Enquiry"} — ${fullName.trim()}`,
      html,
    });

    /* send auto-reply to user */
    await transporter.sendMail({
      from:    process.env.MAIL_FROM,
      to:      email.trim(),
      subject: "We received your inquiry — Jigisha Group",
      html:    autoReplyHtml,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Contact mail error:", err.message);
    res.status(500).json({ error: "Failed to send your message. Please try again later." });
  }
});

module.exports = router;
