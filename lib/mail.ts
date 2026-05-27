import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export type SendMailOptions = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

function getMailConfig() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "Gmail is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD in your environment.",
    );
  }

  return {
    user,
    pass,
    from: process.env.MAIL_FROM || user,
  };
}

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    const { user, pass } = getMailConfig();
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }
  return transporter;
}

export async function sendMail(options: SendMailOptions) {
  const { from } = getMailConfig();
  const transport = getTransporter();

  await transport.sendMail({
    from: `"Becko Website" <${from}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
}

export function getRecipient(kind: "demo" | "dmca" | "privacy") {
  const map = {
    demo: process.env.MAIL_TO_DEMO,
    dmca: process.env.MAIL_TO_DMCA,
    privacy: process.env.MAIL_TO_PRIVACY,
  } as const;

  const fallback = {
    demo: "hello@becko.app",
    dmca: "dmca@becko.app",
    privacy: "privacy@becko.app",
  } as const;

  return map[kind] || fallback[kind];
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function linesToHtml(lines: Record<string, string>) {
  return Object.entries(lines)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 8px 0;color:#6b7280;vertical-align:top;white-space:nowrap;"><strong>${escapeHtml(label)}</strong></td><td style="padding:8px 0;color:#111827;">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");
}

export function emailShell(title: string, rows: Record<string, string>) {
  return `
    <div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;">
      <h2 style="color:#07131d;margin:0 0 16px;">${escapeHtml(title)}</h2>
      <table style="border-collapse:collapse;width:100%;">${linesToHtml(rows)}</table>
      <p style="color:#6b7280;font-size:12px;margin-top:24px;">Sent from becko.app</p>
    </div>
  `;
}
