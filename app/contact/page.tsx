import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { ModuleCard, ModuleGrid } from "@/components/ModuleCard";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a 30-minute walkthrough of Becko on your own data. No commitment, full platform tour.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Book a <span className="gradient-text">30-minute walkthrough.</span>
          </>
        }
        description="We'll demo Becko mapped to your own workflows. No sales theatre, no 'let me get back to you' answers — just a real conversation with someone who has worked inside an agency."
      />

      <section className="pb-16">
        <div className="container">
          <div className="reveal-on-scroll">
            <ContactForm />
            <div className="text-center mt-10">
              <p className="text-ink-mute text-sm mb-3">Or reach us directly</p>
              <div className="flex justify-center gap-8 flex-wrap text-ink-dim">
                <span>
                  ✉{" "}
                  <a className="hover:text-white" href={`mailto:${site.contact.email}`}>
                    {site.contact.email}
                  </a>
                </span>
                <span>
                  🏢 {site.company.legalName}
                </span>
                <span>
                  🧾 Registration no. {site.company.registrationNumber}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead title="What to expect in the demo" />
        <ModuleGrid cols={3}>
          <ModuleCard icon="1️⃣" title="10 min · Your stack today" description="We map what you currently use — booking system, accounting, WhatsApp, CRM, ad platform — onto Becko's modules." />
          <ModuleCard icon="2️⃣" title="15 min · Live walkthrough" description="We click through the modules that matter most for your size — usually bookings, finance and messenger." />
          <ModuleCard icon="3️⃣" title="5 min · Migration & next steps" description="If it's a fit, we share a migration plan and a quote. If it isn't, we'll tell you what would be a better choice — honestly." />
        </ModuleGrid>
      </Section>
    </>
  );
}
