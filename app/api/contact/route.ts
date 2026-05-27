import { NextResponse } from "next/server";
import { emailShell, getRecipient, sendMail } from "@/lib/mail";

type ContactType = "demo" | "dmca" | "privacy";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const type = body.type as ContactType;
    if (!type || !["demo", "dmca", "privacy"].includes(type)) {
      return badRequest("Invalid form type.");
    }

    if (type === "demo") {
      const {
        firstName,
        lastName,
        email,
        phone,
        agencyName,
        teamSize,
        brands,
        painPoint,
        product,
        plan,
        intent,
      } = body;

      if (
        !isNonEmptyString(firstName) ||
        !isNonEmptyString(lastName) ||
        !isNonEmptyString(email) ||
        !isNonEmptyString(agencyName)
      ) {
        return badRequest("Please fill in all required fields.");
      }

      const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
      const subject = `Becko demo request from ${agencyName.trim()}`;
      const rows: Record<string, string> = {
        Name: fullName,
        Email: email.trim(),
        Phone: isNonEmptyString(phone) ? phone.trim() : "Not provided",
        Agency: agencyName.trim(),
        "Team size": isNonEmptyString(teamSize) ? teamSize : "Not provided",
        Brands: isNonEmptyString(brands) ? brands : "Not provided",
        "Biggest tool pain": isNonEmptyString(painPoint) ? painPoint.trim() : "Not provided",
      };

      if (isNonEmptyString(product)) rows.Product = product.trim();
      if (isNonEmptyString(plan)) rows.Plan = plan.trim();
      if (isNonEmptyString(intent)) rows.Intent = intent.trim();

      await sendMail({
        to: getRecipient("demo"),
        subject,
        replyTo: email.trim(),
        text: Object.entries(rows)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
        html: emailShell("New demo request", rows),
      });

      return NextResponse.json({ ok: true });
    }

    if (type === "dmca") {
      const {
        fullName,
        email,
        postalAddress,
        phone,
        rightsHolder,
        copyrightedWork,
        infringingUrls,
        additionalDetails,
        goodFaith,
        perjury,
        signature,
      } = body;

      if (
        !isNonEmptyString(fullName) ||
        !isNonEmptyString(email) ||
        !isNonEmptyString(postalAddress) ||
        !isNonEmptyString(rightsHolder) ||
        !isNonEmptyString(copyrightedWork) ||
        !isNonEmptyString(infringingUrls) ||
        !isNonEmptyString(signature) ||
        !goodFaith ||
        !perjury
      ) {
        return badRequest("Please fill in all required fields and confirm both statements.");
      }

      const subject = `DMCA takedown notice from ${fullName.trim()}`;
      const rows: Record<string, string> = {
        "Full name": fullName.trim(),
        Email: email.trim(),
        "Postal address": postalAddress.trim(),
        Phone: isNonEmptyString(phone) ? phone.trim() : "Not provided",
        "Rights holder": rightsHolder.trim(),
        "Copyrighted work": copyrightedWork.trim(),
        "Infringing URL(s)": infringingUrls.trim(),
        "Additional details": isNonEmptyString(additionalDetails)
          ? additionalDetails.trim()
          : "None",
        "Good-faith statement": "Acknowledged",
        "Perjury statement": "Acknowledged",
        "Electronic signature": signature.trim(),
      };

      await sendMail({
        to: getRecipient("dmca"),
        subject,
        replyTo: email.trim(),
        text: Object.entries(rows)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
        html: emailShell("DMCA takedown notice", rows),
      });

      return NextResponse.json({ ok: true });
    }

    if (type === "privacy") {
      const { fullName, email, requestType, additionalDetails } = body;

      if (!isNonEmptyString(fullName) || !isNonEmptyString(email) || !isNonEmptyString(requestType)) {
        return badRequest("Please fill in all required fields.");
      }

      const subject = `Privacy rights request: ${requestType.trim()}`;
      const rows: Record<string, string> = {
        "Full name": fullName.trim(),
        Email: email.trim(),
        "Request type": requestType.trim(),
        "Additional details": isNonEmptyString(additionalDetails)
          ? additionalDetails.trim()
          : "None",
      };

      await sendMail({
        to: getRecipient("privacy"),
        subject,
        replyTo: email.trim(),
        text: Object.entries(rows)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
        html: emailShell("U.S. state privacy rights request", rows),
      });

      return NextResponse.json({ ok: true });
    }

    return badRequest("Invalid form type.");
  } catch (error) {
    console.error("Contact form error:", error);
    const message =
      error instanceof Error && error.message.includes("Gmail is not configured")
        ? "Email is not configured on the server yet."
        : "Unable to send your message right now. Please email us directly.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
