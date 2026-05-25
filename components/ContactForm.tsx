"use client";

import Link from "next/link";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

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

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);

  const mailtoHref = useMemo(() => {
    const fullName = `${form.firstName} ${form.lastName}`.trim();
    const subject = `Becko demo request from ${form.agencyName || fullName || "website lead"}`;
    const body = [
      "Hello Becko team,",
      "",
      "I'd like to book a demo.",
      "",
      `First name: ${form.firstName}`,
      `Last name: ${form.lastName}`,
      `Work email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone || "Not provided"}`,
      `Agency name: ${form.agencyName}`,
      `Team size: ${form.teamSize}`,
      `Brands: ${form.brands}`,
      "",
      "Biggest tool pain right now:",
      form.painPoint || "Not provided",
    ].join("\n");

    return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
    <form className="form-card" onSubmit={handleSubmit}>
      <h2 className="text-2xl">Tell us about your agency</h2>
      <p className="mt-0 text-sm">
        This opens an email to {site.contact.email} with your details pre-filled.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <Field label="First name">
          <input
            className="form-input"
            type="text"
            required
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
            placeholder="ada@agency.com"
            value={form.email}
            onChange={handleChange("email")}
          />
        </Field>
        <Field label="Phone (with WhatsApp)">
          <input
            className="form-input"
            type="tel"
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
          placeholder="Wanderlux Travel"
          value={form.agencyName}
          onChange={handleChange("agencyName")}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Field label="Team size">
          <select
            className="form-select"
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
          <select className="form-select" value={form.brands} onChange={handleChange("brands")}>
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
          placeholder="e.g. our booking system doesn't talk to our accounting; we lose WhatsApp leads to other agents..."
          value={form.painPoint}
          onChange={handleChange("painPoint")}
        />
      </Field>

      <button type="submit" className="btn btn-primary btn-lg w-full mt-5">
        Request demo <ArrowRight size={16} />
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
