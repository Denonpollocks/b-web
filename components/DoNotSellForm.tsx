"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const requestTypes = [
  "Do not sell or share my personal information",
  "Limit use of my sensitive personal information",
  "Tell me what personal information you hold about me",
  "Delete my personal information",
  "Correct inaccurate personal information",
] as const;

type RequestType = (typeof requestTypes)[number];

type FormState = {
  fullName: string;
  email: string;
  requestType: RequestType;
  additionalDetails: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  requestType: requestTypes[0],
  additionalDetails: "",
};

export function DoNotSellForm() {
  const [form, setForm] = useState<FormState>(initialFormState);

  const mailtoHref = useMemo(() => {
    const subject = `Privacy rights request: ${form.requestType}`;
    const body = [
      "U.S. STATE PRIVACY RIGHTS REQUEST",
      "",
      `Full name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Request type: ${form.requestType}`,
      "",
      "Additional details:",
      form.additionalDetails || "None",
    ].join("\n");

    return `mailto:${site.contact.privacyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} id="do-not-sell-form">
      <h2 className="text-2xl">Submit your request</h2>
      <p className="mt-0 text-sm">
        Complete this form to send your request to {site.contact.privacyEmail}. Required fields
        are marked with *.
      </p>

      <Field label="Full name *" className="mt-5">
        <input
          className="form-input"
          type="text"
          required
          value={form.fullName}
          onChange={handleChange("fullName")}
        />
      </Field>

      <Field label="Email *" className="mt-4">
        <input
          className="form-input"
          type="email"
          required
          value={form.email}
          onChange={handleChange("email")}
        />
      </Field>

      <Field label="Request type *" className="mt-4">
        <select
          className="form-select"
          required
          value={form.requestType}
          onChange={handleChange("requestType")}
        >
          {requestTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Additional details (optional)" className="mt-4">
        <textarea
          className="form-textarea min-h-[100px] resize-y"
          value={form.additionalDetails}
          onChange={handleChange("additionalDetails")}
        />
      </Field>

      <button type="submit" className="btn btn-primary btn-lg w-full mt-5">
        Submit request <ArrowRight size={16} />
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
