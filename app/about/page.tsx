import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { Split } from "@/components/Split";
import { ModuleCard, ModuleGrid } from "@/components/ModuleCard";
import { CtaStrip } from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "About",
  description: "Why we built Becko — and how we think about travel software.",
};

const principles = [
  { icon: "🧭", title: "Bookings are the centre of the universe", description: "Every other workflow — finance, CRM, marketing — orbits the booking record. Nothing is bolted on." },
  { icon: "🪶", title: "Calm software, not loud software", description: "No upsells in the sidebar, no popovers begging for upgrades. Tools should disappear when you don't need them." },
  { icon: "🤖", title: "AI that earns its keep", description: "Not a chatbot demo. Real AI: replies in WhatsApp, generates deals from inventory, answers HR questions, drafts itineraries." },
  { icon: "🛡️", title: "Permissions are not optional", description: "An agency has sales, ops, finance, HR — each gets its own dashboard and its own menu. By default." },
  { icon: "🏷️", title: "Multi-brand is first-class", description: "Groups run several brands. Becko isn't 'one workspace per brand' — it's one platform, branded views." },
  { icon: "📤", title: "Your data is your data", description: "Everything is exportable, always. Open APIs. No vendor-lock-in moat." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Becko"
        title={
          <>
            We're building the <span className="gradient-text">operating system</span> the travel industry never got.
          </>
        }
        description="Travel agencies have been the last serious industry running their business on spreadsheets, WhatsApp, and a stitched-together stack of generic SaaS. We're fixing that."
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Origin</span>
            <h2 className="mt-3.5">Built from inside the industry.</h2>
            <p>
              Becko was born from a real travel agency operation — one that grew from a single
              brand into a multi-brand group and hit the same painful wall every successful
              agency hits: <em>the tools don't scale</em>.
            </p>
            <p>
              You buy a booking system. Then a CRM. Then accounting. Then a separate WhatsApp tool. Then
              a content tool for Reels. Then HR software. Suddenly you have twelve logins, three
              "sources of truth", and a finance team that spends one week of every month
              exporting CSVs.
            </p>
            <p>We've lived that pain. So we built the platform we wished existed.</p>
          </>
        }
        visual={
          <div className="visual-card">
            <div className="stat-band" style={{ gridTemplateColumns: "1fr 1fr", padding: 24 }}>
              <div className="text-center">
                <div className="stat-value">12 → 1</div>
                <div className="text-sm text-ink-dim mt-1">Tools replaced</div>
              </div>
              <div className="text-center">
                <div className="stat-value">14 hrs</div>
                <div className="text-sm text-ink-dim mt-1">Saved per agent / wk</div>
              </div>
              <div className="text-center">
                <div className="stat-value">3.8×</div>
                <div className="text-sm text-ink-dim mt-1">Faster quote-to-book</div>
              </div>
              <div className="text-center">
                <div className="stat-value">100%</div>
                <div className="text-sm text-ink-dim mt-1">Commission visibility</div>
              </div>
            </div>
          </div>
        }
      />

      <Section>
        <SectionHead
          title="How we think about the product"
          description="Six principles that guide every screen we ship."
        />
        <ModuleGrid>
          {principles.map((p) => (
            <ModuleCard
              key={p.title}
              icon={p.icon}
              title={p.title}
              description={p.description}
            />
          ))}
        </ModuleGrid>
      </Section>

      <Section>
        <SectionHead
          eyebrow={<span className="tag-pill">Manifesto</span>}
          title="Travel deserves better software."
        />
        <p className="max-w-[760px] mx-auto text-center text-[1.15rem] leading-relaxed">
          Most agency software was built for the front-desk era — by people who never sat next to a
          sales agent during a Sunday-night WhatsApp rush. We build with operators, not for them.
          Every feature ships from a real complaint we heard last week. Every release is judged by
          one metric: <strong className="text-white">did the day get easier?</strong>
        </p>
      </Section>

      <CtaStrip
        title="Build with us."
        description="If your agency feels stitched together — we'd love to talk."
      />
    </>
  );
}
