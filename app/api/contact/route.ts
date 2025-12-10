import { promises as fs } from "fs";
import path from "path";
import Handlebars from "handlebars";
import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

type Payload = {
  email?: string;
  details?: string;
};

type ValidationOk = { ok: true; email: string; details: string };
type ValidationError = { ok: false; message: string };

function validate(body: Payload): ValidationOk | ValidationError {
  const email = body.email?.trim();
  const details = body.details?.trim();
  if (!email || !details) {
    return { ok: false, message: "Email et détails sont obligatoires." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { ok: false, message: "Email invalide." };
  }
  return { ok: true, email, details };
}

async function renderTemplate(templatePath: string, data: Record<string, string>) {
  const source = await fs.readFile(templatePath, "utf8");
  const template = Handlebars.compile(source);
  return template(data);
}

function createTransport() {
  // Support double naming: SMTP_* (recommandé) ou EMAIL_* (type Gmail)
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    EMAIL_USER,
    EMAIL_PASSWORD,
    SMTP_SERVICE,
  } = process.env;

  // Priorité : config SMTP explicite
  if (SMTP_HOST && SMTP_PORT && (SMTP_USER || EMAIL_USER) && (SMTP_PASS || EMAIL_PASSWORD)) {
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER || EMAIL_USER,
        pass: SMTP_PASS || EMAIL_PASSWORD,
      },
    });
  }

  // Sinon, fallback service (ex: Gmail)
  if (SMTP_SERVICE && (SMTP_USER || EMAIL_USER) && (SMTP_PASS || EMAIL_PASSWORD)) {
    return nodemailer.createTransport({
      service: SMTP_SERVICE,
      auth: {
        user: SMTP_USER || EMAIL_USER,
        pass: SMTP_PASS || EMAIL_PASSWORD,
      },
    });
  }

  throw new Error("Configuration SMTP manquante côté serveur.");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Payload;
    const validation = validate(body);
    if (!validation.ok) {
      return Response.json({ error: validation.message }, { status: 400 });
    }

    const { email, details } = validation;
    const templatePath = path.join(process.cwd(), "emails", "contact.hbs");
    const html = await renderTemplate(templatePath, { email, details });

    const transporter = createTransport();
    // L'expéditeur devient l'email saisi dans le formulaire (dynamique)
    const fromEmail: string = email;
    const toEmail: string =
      process.env.TO_EMAIL ||
      process.env.RECIPIENT_EMAIL ||
      process.env.SMTP_USER ||
      process.env.EMAIL_USER ||
      "";

    await transporter.sendMail({
      from: fromEmail, // expéditeur = saisie utilisateur
      to: toEmail,
      replyTo: email,
      subject: "Nouvelle demande DJ Mah",
      html,
      text: `Nouvelle demande DJ Mah\n\nEmail: ${email}\n\nDétails:\n${details}`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact API error", error);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// CORS preflight / utilitaire
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

