"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { HoneypotField } from "@/components/HoneypotField";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  agencyName: string;
  teamSize: string;
  brands: string;
  painPoint: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  agencyName: "",
  teamSize: "1 - 5",
  brands: "1 brand",
  painPoint: "",
};

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialFormState);
  const [honeypot, setHoneypot] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const { state, errorMessage, submit, reset } = useFormSubmit();

  const product = searchParams.get("product") ?? undefined;
  const plan = searchParams.get("plan") ?? undefined;
  const intent = searchParams.get("intent") ?? undefined;

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await submit({
      type: "demo",
      website: honeypot,
      ...form,
      product,
      plan,
      intent,
    });
    if (ok) {
      setSubmittedEmail(form.email);
      setForm(initialFormState);
    }
  };

  if (state === "success") {
    return (
      <div className="form-card text-center">
        <CheckCircle2 size={40} className="text-accent-green mx-auto mb-4" />
        <h2 className="text-2xl mb-2">Request received</h2>
        <p className="text-ink-dim text-sm max-w-md mx-auto">
          Thanks — we&apos;ve received your demo request and will reply to{" "}
          <strong className="text-white">{submittedEmail}</strong> shortly.
        </p>
        <button type="button" className="btn btn-ghost mt-6" onClick={reset}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="form-card relative" onSubmit={handleSubmit}>
      <HoneypotField value={honeypot} onChange={setHoneypot} />

      <h2 className="text-2xl">Tell us about your agency</h2>
      <p className="mt-0 text-sm">
        We&apos;ll email you at {site.contact.email} to confirm your demo slot.
      </p>

      {(product || plan) && (
        <p className="mt-3 text-sm text-brand-light">
          {product === "messenger" && "Messenger product · "}
          {plan && `Plan interest: ${plan.replace(/-/g, " ")}`}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <Field label="First name">
          <input
            className="form-input"
            type="text"
            required
            disabled={state === "loading"}
            placeholder="Ada"
            value={form.firstName}
            onChange={handleChange("firstName")}
          />
        </Field>
        <Field label="Last name">
          <input
            className="form-input"
            type="text"
            required
            disabled={state === "loading"}
            placeholder="Lovelace"
            value={form.lastName}
            onChange={handleChange("lastName")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Field label="Work email">
          <input
            className="form-input"
            type="email"
            required
            disabled={state === "loading"}
            placeholder="ada@agency.com"
            value={form.email}
            onChange={handleChange("email")}
          />
        </Field>
        <Field label="Phone (with WhatsApp)">
          <input
            className="form-input"
            type="tel"
            disabled={state === "loading"}
            placeholder="+1 555 0100"
            value={form.phone}
            onChange={handleChange("phone")}
          />
        </Field>
      </div>

      <Field label="Agency name" className="mt-4">
        <input
          className="form-input"
          type="text"
          required
          disabled={state === "loading"}
          placeholder="Wanderlux Travel"
          value={form.agencyName}
          onChange={handleChange("agencyName")}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Field label="Team size">
          <select
            className="form-select"
            disabled={state === "loading"}
            value={form.teamSize}
            onChange={handleChange("teamSize")}
          >
            <option>1 - 5</option>
            <option>6 - 15</option>
            <option>16 - 50</option>
            <option>51 - 200</option>
            <option>200+</option>
          </select>
        </Field>
        <Field label="Brands">
          <select
            className="form-select"
            disabled={state === "loading"}
            value={form.brands}
            onChange={handleChange("brands")}
          >
            <option>1 brand</option>
            <option>2 - 3 brands</option>
            <option>4 - 10 brands</option>
            <option>10+ brands</option>
          </select>
        </Field>
      </div>

      <Field label="What's the biggest tool-pain right now?" className="mt-4">
        <textarea
          className="form-textarea min-h-[120px] resize-y"
          disabled={state === "loading"}
          placeholder="e.g. our booking system doesn't talk to our accounting; we lose WhatsApp leads to other agents..."
          value={form.painPoint}
          onChange={handleChange("painPoint")}
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
        {state === "loading" ? "Sending…" : "Request demo"} <ArrowRight size={16} />
      </button>
      <p className="text-[0.78rem] text-ink-mute mt-3 text-center">
        By submitting, you agree to our{" "}
        <Link className="text-brand-light hover:text-white" href="/terms">
          terms
        </Link>{" "}
        and{" "}
        <Link className="text-brand-light hover:text-white" href="/privacy">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="form-card">
          <h2 className="text-2xl">Tell us about your agency</h2>
          <p className="mt-2 text-sm text-ink-dim">Loading form…</p>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
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
