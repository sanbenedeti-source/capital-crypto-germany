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

export async function sendLeadEmail(data: {
  name: string;
  email: string;
  phone?: string;
  platform?: string;
  wallet?: string;
  transactionHash?: string;
  description?: string;
}) {
  await transporter.sendMail({
    from: `"Capital Crypto Germany" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    replyTo: data.email,
    subject: `Neuer Lead - ${data.name}`,
    html: `
      <h2>Neuer Lead</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>E-Mail:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone || "-"}</p>
      <p><strong>Plattform/Broker:</strong> ${data.platform || "-"}</p>
      <p><strong>Wallet:</strong> ${data.wallet || "-"}</p>
      <p><strong>Transaktions-Hash:</strong> ${data.transactionHash || "-"}</p>
      <p><strong>Beschreibung:</strong><br>${data.description || "-"}</p>
    `,
  });
}

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