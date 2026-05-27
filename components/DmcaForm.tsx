"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { HoneypotField } from "@/components/HoneypotField";

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
  const [honeypot, setHoneypot] = useState("");
  const { state, errorMessage, submit, reset } = useFormSubmit();

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        event.target.type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : event.target.value;
      setForm((current) => ({ ...current, [field]: value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await submit({ type: "dmca", website: honeypot, ...form });
    if (ok) setForm(initialFormState);
  };

  if (state === "success") {
    return (
      <div className="form-card text-center">
        <CheckCircle2 size={40} className="text-accent-green mx-auto mb-4" />
        <h2 className="text-2xl mb-2">Notice received</h2>
        <p className="text-ink-dim text-sm max-w-md mx-auto">
          Your DMCA notice has been sent to {site.contact.dmcaEmail}. We will review it and
          respond as required by law.
        </p>
        <button type="button" className="btn btn-ghost mt-6" onClick={reset}>
          Submit another notice
        </button>
      </div>
    );
  }

  return (
    <form className="form-card relative" onSubmit={handleSubmit} id="dmca-form">
      <HoneypotField value={honeypot} onChange={setHoneypot} />

      <h2 className="text-2xl">Submit a DMCA takedown notice</h2>
      <p className="mt-0 text-sm">
        Complete this form to send a notice to {site.contact.dmcaEmail}. Required fields are
        marked with *.
      </p>

      <Field label="Your full name *" className="mt-5">
        <input
          className="form-input"
          type="text"
          required
          disabled={state === "loading"}
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
            disabled={state === "loading"}
            value={form.email}
            onChange={handleChange("email")}
          />
        </Field>
        <Field label="Phone">
          <input
            className="form-input"
            type="tel"
            disabled={state === "loading"}
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
          disabled={state === "loading"}
          value={form.postalAddress}
          onChange={handleChange("postalAddress")}
        />
      </Field>

      <Field label="Rights holder *" className="mt-4">
        <input
          className="form-input"
          type="text"
          required
          disabled={state === "loading"}
          placeholder="Name of the copyright owner"
          value={form.rightsHolder}
          onChange={handleChange("rightsHolder")}
        />
      </Field>

      <Field label="Describe the copyrighted work *" className="mt-4">
        <textarea
          className="form-textarea min-h-[100px] resize-y"
          required
          disabled={state === "loading"}
          value={form.copyrightedWork}
          onChange={handleChange("copyrightedWork")}
        />
      </Field>

      <Field label="URL(s) of infringing material *" className="mt-4">
        <textarea
          className="form-textarea min-h-[100px] resize-y"
          required
          disabled={state === "loading"}
          placeholder="One URL per line"
          value={form.infringingUrls}
          onChange={handleChange("infringingUrls")}
        />
      </Field>

      <Field label="Additional details" className="mt-4">
        <textarea
          className="form-textarea min-h-[80px] resize-y"
          disabled={state === "loading"}
          value={form.additionalDetails}
          onChange={handleChange("additionalDetails")}
        />
      </Field>

      <label className="flex items-start gap-3 mt-5 cursor-pointer">
        <input
          className="mt-1 shrink-0"
          type="checkbox"
          required
          disabled={state === "loading"}
          checked={form.goodFaith}
          onChange={handleChange("goodFaith")}
        />
        <span className="text-sm text-ink-dim">
          I have a good-faith belief that the use of the material is not authorised by the
          copyright owner, its agent, or the law.
        </span>
      </label>

      <label className="flex items-start gap-3 mt-4 cursor-pointer">
        <input
          className="mt-1 shrink-0"
          type="checkbox"
          required
          disabled={state === "loading"}
          checked={form.perjury}
          onChange={handleChange("perjury")}
        />
        <span className="text-sm text-ink-dim">
          I swear, under penalty of perjury, that the information in this notice is accurate
          and that I am the rights holder or authorised to act on the rights holder&apos;s
          behalf.
        </span>
      </label>

      <Field label="Electronic signature (type your full name) *" className="mt-4">
        <input
          className="form-input"
          type="text"
          required
          disabled={state === "loading"}
          placeholder="Type your full legal name"
          value={form.signature}
          onChange={handleChange("signature")}
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
        {state === "loading" ? "Sending…" : "Submit notice"} <ArrowRight size={16} />
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
