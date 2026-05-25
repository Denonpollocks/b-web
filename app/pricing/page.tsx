import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { CtaStrip } from "@/components/CtaStrip";
import { PricingTabs } from "@/components/PricingTabs";
import { addons } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing that scales with your travel business. Choose the focused Sales & Marketing Suite, or the full Becko Business OS.",
};

const faqs = [
  {
    q: "What's the difference between Sales & Marketing and Full Platform?",
    a: "Sales & Marketing is a focused front-of-house suite — leads, quotations, itineraries, campaigns, messenger and analytics. The Full Platform adds everything behind the front desk: invoicing, finance, reconciliation, HR, role-based permissions, and the full operating system across departments.",
  },
  {
    q: "Can we start on Sales & Marketing and upgrade later?",
    a: "Yes — that's the whole point. Most agencies start with Sales & Marketing to bring order to the funnel, then move to the Full Platform once finance and HR want in. Your data carries across when you upgrade.",
  },
  {
    q: "What does migration look like?",
    a: "For any paid plan, we run the migration with you — bookings, customers, suppliers and (on Full Platform) finance balances. Most agencies are operating on Becko within 7–14 days.",
  },
  {
    q: "Can I keep my existing WhatsApp Business number?",
    a: "Yes. We help you port to WhatsApp Cloud API on day one. Your customers don't see the switch.",
  },
  {
    q: "What about AI usage — is it metered?",
    a: "AI Flow Agents, HR Agent and Deal-Maker usage is included up to a generous fair-use allowance per plan. We'll tell you if you're approaching it — no surprise bills. Heavy users can top up with Premium AI Credits.",
  },
  {
    q: "Where is data stored?",
    a: "Default: secure cloud regions in the US, EU and APAC. Enterprise plans can pin data residency to a specific region.",
  },
  {
    q: "Can I export my data?",
    a: "Always. Every dataset — bookings, finance, customers, conversations — is exportable to CSV from the Settings → Exports screen.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — 14 days, fully featured, no credit card required. We'll also run a free pilot on your own data for serious evaluators.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Pricing that scales with your{" "}
            <span className="gradient-text">travel business.</span>
          </>
        }
        description="Choose the setup that fits your team today — a focused sales & marketing engine, or the full AI-powered business operating system."
      />

      <section className="pb-12">
        <div className="container">
          <PricingTabs />
        </div>
      </section>

      <Section>
        <SectionHead
          title={
            <>
              Add-ons that pay for themselves
            </>
          }
          description="Optional services for agencies that want a hand getting up to speed — or extra capacity once they're flying."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {addons.map((a) => (
            <div
              key={a.title}
              className="module-card reveal-on-scroll flex flex-col"
            >
              <h3 className="text-[1.1rem] mb-2">{a.title}</h3>
              <p className="text-[0.92rem] flex-1">{a.description}</p>
              <div className="mt-4 pt-4 border-t border-line text-brand-light font-semibold text-[0.92rem]">
                {a.price}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead title="FAQs" />
        <div className="max-w-3xl mx-auto">
          {faqs.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <p className="mt-4 text-[0.94rem]">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaStrip
        title="Not sure which plan? Let's figure it out together."
        description="Book a 30-minute call and we'll size the right plan for your agency."
      />
    </>
  );
}
