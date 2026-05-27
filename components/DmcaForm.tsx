"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

type FormState = {
  fullName: string;
  email: string;
  postalAddress: string;
  phone: string;
  rightsHolder: string;
  copyrightedWork: string;
  infringingUrls: string;
  additionalDetails: string;
  goodFaith: boolean;
  perjury: boolean;
  signature: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  postalAddress: "",
  phone: "",
  rightsHolder: "",
  copyrightedWork: "",
  infringingUrls: "",
  additionalDetails: "",
  goodFaith: false,
  perjury: false,
  signature: "",
};

export function DmcaForm() {
  const [form, setForm] = useState<FormState>(initialFormState);

  const mailtoHref = useMemo(() => {
    const subject = `DMCA takedown notice from ${form.fullName || "rights holder"}`;
    const body = [
      "DMCA TAKEDOWN NOTICE",
      "",
      `Full name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Postal address: ${form.postalAddress}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Rights holder: ${form.rightsHolder}`,
      "",
      "Copyrighted work:",
      form.copyrightedWork,
      "",
      "URL(s) of infringing material:",
      form.infringingUrls,
      "",
      "Additional details:",
      form.additionalDetails || "None",
      "",
      "Good-faith statement: I have a good-faith belief that the use of the material is not authorised by the copyright owner, its agent, or the law.",
      `Acknowledged: ${form.goodFaith ? "Yes" : "No"}`,
      "",
      "Perjury statement: I swear, under penalty of perjury, that the information in this notice is accurate and that I am the rights holder or authorised to act on the rights holder's behalf.",
      `Acknowledged: ${form.perjury ? "Yes" : "No"}`,
      "",
      `Electronic signature: ${form.signature}`,
    ].join("\n");

    return `mailto:${site.contact.dmcaEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        event.target.type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : event.target.value;
      setForm((current) => ({ ...current, [field]: value }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} id="dmca-form">
      <h2 className="text-2xl">Submit a DMCA takedown notice</h2>
      <p className="mt-0 text-sm">
        Complete this form to send a notice to {site.contact.dmcaEmail}. Required fields
        are marked with *.
      </p>

      <Field label="Your full name *" className="mt-5">
        <input
          className="form-input"
          type="text"
          required
          value={form.fullName}
          onChange={handleChange("fullName")}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Field label="Email *">
          <input
            className="form-input"
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
          />
        </Field>
        <Field label="Phone">
          <input
            className="form-input"
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
          />
        </Field>
      </div>

      <Field label="Postal address *" className="mt-4">
        <input
          className="form-input"
          type="text"
          required
          value={form.postalAddress}
          onChange={handleChange("postalAddress")}
        />
      </Field>

      <Field label="Rights holder *" className="mt-4">
        <input
          className="form-input"
          type="text"
          required
          placeholder="Name of the copyright owner"
          value={form.rightsHolder}
          onChange={handleChange("rightsHolder")}
        />
      </Field>

      <Field label="Describe the copyrighted work *" className="mt-4">
        <textarea
          className="form-textarea min-h-[100px] resize-y"
          required
          value={form.copyrightedWork}
          onChange={handleChange("copyrightedWork")}
        />
      </Field>

      <Field label="URL(s) of infringing material *" className="mt-4">
        <textarea
          className="form-textarea min-h-[100px] resize-y"
          required
          placeholder="One URL per line"
          value={form.infringingUrls}
          onChange={handleChange("infringingUrls")}
        />
      </Field>

      <Field label="Additional details" className="mt-4">
        <textarea
          className="form-textarea min-h-[80px] resize-y"
          value={form.additionalDetails}
          onChange={handleChange("additionalDetails")}
        />
      </Field>

      <label className="flex items-start gap-3 mt-5 cursor-pointer">
        <input
          className="mt-1 shrink-0"
          type="checkbox"
          required
          checked={form.goodFaith}
          onChange={handleChange("goodFaith")}
        />
        <span className="text-sm text-ink-dim">
          I have a good-faith belief that the use of the material is not authorised by
          the copyright owner, its agent, or the law.
        </span>
      </label>

      <label className="flex items-start gap-3 mt-4 cursor-pointer">
        <input
          className="mt-1 shrink-0"
          type="checkbox"
          required
          checked={form.perjury}
          onChange={handleChange("perjury")}
        />
        <span className="text-sm text-ink-dim">
          I swear, under penalty of perjury, that the information in this notice is
          accurate and that I am the rights holder or authorised to act on the rights
          holder&apos;s behalf.
        </span>
      </label>

      <Field label="Electronic signature (type your full name) *" className="mt-4">
        <input
          className="form-input"
          type="text"
          required
          placeholder="Type your full legal name"
          value={form.signature}
          onChange={handleChange("signature")}
        />
      </Field>

      <button type="submit" className="btn btn-primary btn-lg w-full mt-5">
        Submit notice <ArrowRight size={16} />
      </button>
    </form>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="form-label">{label}</span>
      {children}
    </label>
  );
}
