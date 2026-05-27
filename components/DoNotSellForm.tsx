"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { HoneypotField } from "@/components/HoneypotField";

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
  const [honeypot, setHoneypot] = useState("");
  const { state, errorMessage, submit, reset } = useFormSubmit();

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await submit({ type: "privacy", website: honeypot, ...form });
    if (ok) setForm(initialFormState);
  };

  if (state === "success") {
    return (
      <div className="form-card text-center">
        <CheckCircle2 size={40} className="text-accent-green mx-auto mb-4" />
        <h2 className="text-2xl mb-2">Request received</h2>
        <p className="text-ink-dim text-sm max-w-md mx-auto">
          Your privacy request has been sent to {site.contact.privacyEmail}. We will respond
          within the timeframe required by applicable law.
        </p>
        <button type="button" className="btn btn-ghost mt-6" onClick={reset}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className="form-card relative" onSubmit={handleSubmit} id="do-not-sell-form">
      <HoneypotField value={honeypot} onChange={setHoneypot} />

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
          disabled={state === "loading"}
          value={form.fullName}
          onChange={handleChange("fullName")}
        />
      </Field>

      <Field label="Email *" className="mt-4">
        <input
          className="form-input"
          type="email"
          required
          disabled={state === "loading"}
          value={form.email}
          onChange={handleChange("email")}
        />
      </Field>

      <Field label="Request type *" className="mt-4">
        <select
          className="form-select"
          required
          disabled={state === "loading"}
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
          disabled={state === "loading"}
          value={form.additionalDetails}
          onChange={handleChange("additionalDetails")}
        />
      </Field>

      {errorMessage && (
        <p className="text-red-400 text-sm mt-4" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-lg w-full mt-5"
        disabled={state === "loading"}
      >
        {state === "loading" ? "Sending…" : "Submit request"} <ArrowRight size={16} />
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
