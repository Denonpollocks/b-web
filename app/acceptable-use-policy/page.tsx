import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Acceptable Use Policy for the Becko platform operated by BECKO - TRAVEL OS LTD.",
};

const linkClass = "text-brand-light hover:text-white";

type SectionContent = {
  heading: string;
  introParagraphs?: string[];
  paragraphs?: string[];
  bullets?: string[];
};

const sections: SectionContent[] = [
  {
    heading: "1. Purpose",
    paragraphs: ["purpose"],
  },
  {
    heading: "2. Prohibited Content",
    introParagraphs: ["You must not use the Service to create, store, send, or transmit content that:"],
    bullets: [
      "Is unlawful, defamatory, fraudulent, deceptive, or misleading",
      "Infringes intellectual property, privacy, publicity, or other rights",
      "Contains malware, viruses, worms, or other malicious code",
      "Is sexually explicit, exploits minors, or promotes self-harm or violence",
      "Promotes hate, harassment, or discrimination based on protected characteristics",
      "Markets regulated or prohibited goods (e.g. weapons, illegal drugs, tobacco, adult content, gambling where unlicensed)",
    ],
  },
  {
    heading: "3. Messaging, WhatsApp & Broadcasts",
    introParagraphs: [
      "The Service includes WhatsApp, Messenger, Instagram, SMS, and email messaging capabilities. When using these channels you must:",
    ],
    bullets: [
      "Obtain valid, documented, explicit opt-in from every recipient before sending marketing or template messages",
      "Maintain records of opt-in source, timestamp, and consent language",
      "Comply with the WhatsApp Business Policy, WhatsApp Commerce Policy, Meta Platform Terms, and TCPA / PECR / GDPR as applicable",
      "Honour opt-out requests (STOP, UNSUBSCRIBE, OPT OUT) immediately and indefinitely",
      "Never purchase, scrape, or import contact lists without verifiable consent",
      'Not send unsolicited bulk messages, spam, or "cold" outreach',
      "Not impersonate any person, brand, or business you are not authorised to represent",
      "Respect platform-imposed messaging windows (24-hour rule, template categories, frequency caps)",
    ],
  },
  {
    heading: "4. Automation & AI Use",
    bullets: [
      "You must clearly identify automated messages or AI agents to recipients when required by law",
      "You must not use AI agents to deceive users about whether they are speaking to a human",
      "You must review AI-generated content for accuracy before relying on it for bookings, pricing, refunds, or legal commitments",
      "You must not use AI features to generate harmful, defamatory, discriminatory, or unlawful content",
      "You must not attempt to extract model weights, prompts, training data, or reverse-engineer AI components",
    ],
  },
  {
    heading: "5. System Integrity",
    introParagraphs: ["You must not:"],
    bullets: [
      "Probe, scan, or test the vulnerability of the Service except via our responsible disclosure programme",
      "Bypass rate limits, throttling, authentication, or any other access control",
      "Overload, flood, or otherwise disrupt the Service or its infrastructure",
      "Use the Service to mine cryptocurrency or run unrelated workloads",
      "Scrape, crawl, or mass-export data using unofficial methods",
      "Resell, white-label, or sublicense the Service without a written agreement",
    ],
  },
  {
    heading: "6. Data Handling",
    bullets: [
      "Do not upload payment card numbers, government IDs, biometrics, medical records, passport scans, visa documents, or GDPR special-category data unless explicitly supported and contracted",
      "Only process personal data for which you have a valid lawful basis",
      "Honour data subject requests (access, deletion, correction) within statutory deadlines",
      "Maintain employee training and access controls within your organisation",
    ],
  },
  {
    heading: "7. Monitoring & Enforcement",
    introParagraphs: [
      "We monitor platform activity, messaging behaviour, automation usage, API requests, and system interactions for fraud prevention, abuse detection, spam prevention, security monitoring, platform integrity, and policy enforcement. We may, at our discretion and without prior notice:",
    ],
    bullets: [
      "Throttle, suspend, or terminate offending accounts",
      "Remove or block offending content or messages",
      "Disable specific features (broadcasts, AI agents, integrations)",
      "Report unlawful activity to Meta, regulators, or law enforcement",
    ],
  },
  {
    heading: "8. Reporting Abuse",
    paragraphs: ["reporting"],
  },
  {
    heading: "9. Changes",
    paragraphs: [
      "We may update this AUP from time to time. Continued use of the Service after changes constitutes acceptance.",
    ],
  },
];

function PurposeParagraph() {
  return (
    <p className="text-ink-dim">
      This Acceptable Use Policy (&quot;AUP&quot;) governs how customers and end users may use the
      Becko platform operated by BECKO - TRAVEL OS LTD. It supplements our{" "}
      <Link className={linkClass} href="/terms">
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link className={linkClass} href="/privacy">
        Privacy Policy
      </Link>
      . Violations may result in suspension or termination without notice.
    </p>
  );
}

function ReportingParagraph() {
  return (
    <p className="text-ink-dim">
      To report abuse, spam, phishing, or policy violations involving the Becko platform, email{" "}
      <a className={linkClass} href={`mailto:${site.contact.abuseEmail}`}>
        {site.contact.abuseEmail}
      </a>
      . To report a security vulnerability, see our{" "}
      <Link className={linkClass} href="/security">
        Security
      </Link>{" "}
      page.
    </p>
  );
}

export default function AcceptableUsePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Acceptable Use Policy"
        description="Last updated: May 20, 2026"
      />

      <Section className="pt-4 pb-16">
        <div className="mx-auto max-w-[820px] space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl">{section.heading}</h2>

              {section.introParagraphs?.map((paragraph, index) => (
                <p key={`${section.heading}-intro-${index}`} className="text-ink-dim">
                  {paragraph}
                </p>
              ))}

              {section.paragraphs?.map((paragraph, index) => {
                if (paragraph === "purpose") {
                  return <PurposeParagraph key={`${section.heading}-purpose`} />;
                }
                if (paragraph === "reporting") {
                  return <ReportingParagraph key={`${section.heading}-reporting`} />;
                }
                return (
                  <p key={`${section.heading}-paragraph-${index}`} className="text-ink-dim">
                    {paragraph}
                  </p>
                );
              })}

              {section.bullets && (
                <ul className="list-disc space-y-3 pl-6 text-ink-dim">
                  {section.bullets.map((bullet, index) => (
                    <li key={`${section.heading}-bullet-${index}`}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
