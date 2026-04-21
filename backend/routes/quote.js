const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const transporter = require("../mailer");

// Store uploads in /uploads, keep original extension
const storage = multer.diskStorage({
  destination(_, __, cb) {
    const dir = path.join(__dirname, "../uploads");
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename(_, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `quote-${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter(_, file, cb) {
    const allowed = [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".jpg", ".jpeg", ".png"];
    cb(null, allowed.includes(path.extname(file.originalname).toLowerCase()));
  },
});

function row(label, value) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 0;color:#6b7280;width:180px;vertical-align:top">${label}</td>
    <td style="padding:8px 0;font-weight:600;color:#111">${value}</td>
  </tr>`;
}

router.post("/", upload.single("attachment"), async (req, res) => {
  const {
    fullName, email, phone, company, designation, country,
    pincode, city, state,
    quoteType, serviceCategory, productCategory, productItem,
    orderScale, budget, timeline, details,
  } = req.body;

  if (!fullName?.trim() || !email?.trim()) {
    return res.status(400).json({ error: "Name and email are required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ errors: [{ field: "email", message: "A valid email address is required." }] });
  }
  if (phone && !/^\d{10}$/.test(phone)) {
    return res.status(400).json({ errors: [{ field: "phone", message: "Enter a valid 10-digit mobile number." }] });
  }

  const typeLabel = quoteType === "service" ? "Service Request" : "Product / Material Request";
  const categoryValue = quoteType === "service" ? serviceCategory : productCategory;
  const categoryLabel = quoteType === "service" ? "Service" : "Product Category";

  const location = [city, state, pincode, country].filter(Boolean).join(", ");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
      <div style="background:#1a2744;padding:24px 32px">
        <h2 style="color:#f5c842;margin:0;font-size:20px">New Quote Request</h2>
        <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:13px">Jigisha Group Website · ${typeLabel}</p>
      </div>

      <div style="padding:32px;background:#fff">

        <p style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;margin:0 0 12px">Contact Details</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
          ${row("Full Name", fullName)}
          ${row("Email", `<a href="mailto:${email}" style="color:#1a2744">${email}</a>`)}
          ${row("Phone", phone)}
          ${row("Company", company)}
          ${row("Designation", designation)}
          ${row("Location", location)}
        </table>

        <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 24px" />

        <p style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;margin:0 0 12px">Procurement Details</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
          ${row("Request Type", typeLabel)}
          ${row(categoryLabel, categoryValue)}
          ${productItem ? row("Specific Product", productItem) : ""}
          ${row("Order Scale", orderScale)}
          ${row("Budget Range", budget)}
          ${row("Timeline", timeline)}
        </table>

        <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 24px" />

        <p style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;margin:0 0 8px">Requirements</p>
        <p style="color:#111;font-size:14px;line-height:1.7;white-space:pre-wrap">${details}</p>

        ${req.file ? `
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0 16px" />
        <p style="font-size:13px;color:#6b7280">Attachment: <strong>${req.file.originalname}</strong> (see attached)</p>
        ` : ""}
      </div>

      <div style="padding:16px 32px;background:#f9fafb;font-size:12px;color:#9ca3af">
        Sent from jigisha.in quote form · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
      </div>
    </div>
  `;

  const attachments = req.file
    ? [{ filename: req.file.originalname, path: req.file.path }]
    : [];

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `[Quote] ${typeLabel} — ${categoryValue || "General"} — ${fullName}`,
      html,
      attachments,
    });

    // Clean up uploaded file after sending
    if (req.file) fs.unlink(req.file.path, () => {});

    res.json({ success: true });
  } catch (err) {
    console.error("Quote mail error:", err);
    if (req.file) fs.unlink(req.file.path, () => {});
    res.status(500).json({ error: "Failed to submit quote request. Please try again later." });
  }
});

module.exports = router;
