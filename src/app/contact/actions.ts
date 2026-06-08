"use server";

import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  firstName: z.string().trim().min(1, "Nama diperlukan").max(80),
  lastName: z.string().trim().min(1, "Nama syarikat atau brand diperlukan").max(80),
  email: z.string().trim().email("Sila masukkan e-mel yang sah"),
  companyWebsite: z.string().trim().max(0),
  projectType: z.enum([
    "Corporate Website",
    "E-Commerce",
    "Web System (SaaS)",
    "Landing Page",
    "Other",
  ]),
  message: z.string().trim().min(10, "Mesej mestilah sekurang-kurangnya 10 aksara").max(5000),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
};

const INBOX = "jombina.site@gmail.com";

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    companyWebsite: formData.get("companyWebsite"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof ContactSchema>;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Sila betulkan medan yang ditandakan.",
      fieldErrors,
    };
  }

  const { firstName, lastName, email, projectType, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: "Perkhidmatan e-mel belum dikonfigurasikan. Sila hubungi kami secara terus.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "JomBina Contact <onboarding@resend.dev>",
      to: [INBOX],
      replyTo: email,
      subject: `[JomBina] ${projectType} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="margin:0 0 16px;">Pertanyaan baru dari jombina.site</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding:6px 0; color:#71717a; width:140px;">Nama</td><td>${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
            <tr><td style="padding:6px 0; color:#71717a;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:6px 0; color:#71717a;">Jenis Projek</td><td>${escapeHtml(projectType)}</td></tr>
          </table>
          <h3 style="margin:24px 0 8px;">Mesej</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "Tidak dapat menghantar mesej anda sekarang. Sila cuba sebentar lagi.",
      };
    }

    return {
      status: "success",
      message:
        "Terima kasih! Pertanyaan anda dah masuk. Kami akan balas dalam masa 24 jam waktu bekerja.",
    };
  } catch (err) {
    console.error("Contact action error:", err);
    return {
      status: "error",
      message: "Sesuatu telah berlaku. Sila hantar e-mel terus kepada kami.",
    };
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
