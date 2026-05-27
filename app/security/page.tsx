import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security",
  description: `High-level security practices for the Becko website and enquiries handled by ${site.company.legalName}.`,
};

const sections = [
  {
    title: "Approach",
    body: (
      <>
        <p>
          Becko aims to protect website data and business communications using reasonable
          administrative, technical, and organisational safeguards.
        </p>
        <p>
          Our controls may include secure hosting, access controls, routine software updates,
          and limiting access to enquiry information to people who need it for support or sales
          follow-up.
        </p>
      </>
    ),
  },
  {
    title: "Reporting a security issue",
    body: (
      <>
        <p>
          If you believe you have found a vulnerability or security issue affecting the website,
          please email{" "}
          <a
            className="text-brand-light hover:text-white"
            href={`mailto:${site.contact.securityEmail}`}
          >
            {site.contact.securityEmail}
          </a>
          .
        </p>
        <p>
          Please include a clear description of the issue, steps to reproduce it, and any
          relevant screenshots or technical details. We appreciate responsible disclosure.
        </p>
      </>
    ),
  },
  {
    title: "Company details",
    body: (
      <p>
        This website is operated by {site.company.legalName} (registration no.{" "}
        {site.company.registrationNumber}).
      </p>
    ),
  },
];

export default function SecurityPage() {
  return (
    <LegalPage
      eyebrow="Security"
      title="Security overview"
      description="A short overview of how Becko approaches website security and how to report issues."
      sections={sections}
    />
  );
}
