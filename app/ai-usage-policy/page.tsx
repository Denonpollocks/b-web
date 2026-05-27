import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Usage Policy",
  description:
    "How BECKO - TRAVEL OS LTD deploys artificial-intelligence features in the Becko platform.",
};

const linkClass = "text-brand-light hover:text-white";

export default function AiUsagePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="AI Usage Policy"
        description="Last updated: May 20, 2026"
      />

      <Section className="pt-4 pb-16">
        <div className="mx-auto max-w-[820px] space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl">1. Purpose</h2>
            <p className="text-ink-dim">
              This AI Usage Policy explains how BECKO - TRAVEL OS LTD (&quot;Becko&quot;) deploys
              artificial-intelligence features inside the Service, how customer data is handled in
              those workflows, and the responsibilities of users.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl">2. AI Capabilities</h2>
            <p className="text-ink-dim">The platform uses AI for, among other things:</p>
            <ul className="list-disc space-y-3 pl-6 text-ink-dim">
              <li>Automated responses in Messenger, Instagram, and WhatsApp conversations</li>
              <li>AI agents that assist with flight, hotel, and travel package recommendations</li>
              <li>Quotation, itinerary, and email drafting</li>
              <li>
                Creative generation in Becko Studio (images, video scenes, captions, templates)
              </li>
              <li>Lead enrichment, conversation summarisation, and quality scoring</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl">3. Models &amp; Providers</h2>
            <ul className="list-disc space-y-3 pl-6 text-ink-dim">
              <li>
                <strong className="text-ink">OpenAI</strong> (gpt-4o-mini and equivalents) — chat,
                agents, summarisation, drafting
              </li>
              <li>
                <strong className="text-ink">Google Gemini</strong> (via Lovable AI Gateway) — Becko
                Studio, travel-card generation, multimodal tasks
              </li>
              <li>
                <strong className="text-ink">DALL-E 3</strong> — image generation
              </li>
              <li>
                Additional models may be added; we will reflect them in our{" "}
                <Link className={linkClass} href="/subprocessors">
                  subprocessor list
                </Link>
              </li>
            </ul>
            <p className="text-ink-dim">
              API providers we use contractually agree not to train their foundation models on
              customer API data. Becko does not use customer conversations to train public AI
              foundation models.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl">4. PII Anonymization</h2>
            <p className="text-ink-dim">
              Any internal AI improvement, pattern extraction, or quality-review workflow strips
              personally identifiable information before processing. Identifiers such as names,
              email addresses, phone numbers, and payment card numbers are replaced with anonymous
              placeholders (e.g. [CUSTOMER], [EMAIL], [PHONE], [CARD]).
            </p>
            <ul className="list-disc space-y-3 pl-6 text-ink-dim">
              <li>Anonymized data cannot be traced back to individuals</li>
              <li>
                Raw conversation data containing PII is never used for model training or
                fine-tuning
              </li>
              <li>
                Each anonymization event is logged with metadata (number of tokens stripped) for
                audit purposes
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl">5. Limitations &amp; Hallucinations</h2>
            <p className="text-ink-dim">
              AI features are probabilistic and may produce inaccurate, incomplete, biased, or
              misleading outputs (&quot;hallucinations&quot;). The Service should not be relied upon
              as the sole source of truth for:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-ink-dim">
              <li>Prices, availability, fees, taxes, or refund amounts</li>
              <li>Flight schedules, baggage rules, visa requirements, or health regulations</li>
              <li>Legal, medical, financial, or tax advice</li>
              <li>Customer commitments, contracts, or binding offers</li>
            </ul>
            <p className="text-ink-dim">
              Users are solely responsible for reviewing and verifying AI-generated outputs before
              transmitting them to customers, suppliers, or third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl">6. Human Oversight</h2>
            <ul className="list-disc space-y-3 pl-6 text-ink-dim">
              <li>Brand administrators control whether AI agents are enabled per channel</li>
              <li>AI agents can hand off to human staff at any point</li>
              <li>
                Customers can opt out of AI-assisted conversations by replying with STOP or by
                requesting a human agent
              </li>
              <li>
                Significant business actions (refunds, cancellations, contract changes) should
                require human approval
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl">7. Prohibited Uses</h2>
            <p className="text-ink-dim">You must not use Becko AI features to:</p>
            <ul className="list-disc space-y-3 pl-6 text-ink-dim">
              <li>Deceive users about whether they are talking to a human</li>
              <li>Generate harmful, discriminatory, sexual, violent, or unlawful content</li>
              <li>
                Generate content that infringes intellectual property or impersonates real persons
              </li>
              <li>
                Make automated decisions with legal or similarly significant effects on individuals
                without appropriate safeguards under Article 22 GDPR
              </li>
              <li>
                Bypass safety controls, prompt-inject, or extract model weights / training data
              </li>
            </ul>
            <p className="text-ink-dim">
              See also our{" "}
              <Link className={linkClass} href="/acceptable-use-policy">
                Acceptable Use Policy
              </Link>{" "}
              §4.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl">8. Monitoring &amp; Moderation</h2>
            <p className="text-ink-dim">
              We may apply automated moderation to AI inputs and outputs to detect abuse, prompt
              injection, malware, illegal content, or policy violations. Such monitoring is performed
              on aggregated, anonymized, or pseudonymised data wherever feasible.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl">9. EU AI Act &amp; Regulatory Compliance</h2>
            <p className="text-ink-dim">
              Becko monitors emerging AI regulations including the EU AI Act, the UK AI regulatory
              framework, and relevant US state laws. We classify our AI features and apply appropriate
              transparency, documentation, and risk-management measures consistent with the
              regulatory category that applies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl">10. Contact</h2>
            <p className="text-ink-dim">
              Questions, opt-out requests, or AI-related complaints:{" "}
              <a className={linkClass} href={`mailto:${site.contact.privacyEmail}`}>
                {site.contact.privacyEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
