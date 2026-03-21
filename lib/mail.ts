import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendAutoReply(data: {
  fullName: string;
  email: string;
}) {
  await transporter.sendMail({
    from: `"Capital Crypto Germany" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: "Ihre Anfrage wurde erhalten",
    html: `
      <h2>Hallo ${data.fullName},</h2>
      <p>vielen Dank für Ihre Anfrage.</p>
      <p>Unser Team prüft derzeit Ihren Fall und wird sich in Kürze bei Ihnen melden.</p>
      <br/>
      <p><strong>Capital Crypto Germany</strong></p>
    `,
  });
}