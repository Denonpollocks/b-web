import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { Split, FeatList } from "@/components/Split";
import { ModuleCard, ModuleGrid } from "@/components/ModuleCard";
import { CtaStrip } from "@/components/CtaStrip";
import { Eyebrow } from "@/components/Eyebrow";
import { StatTile } from "@/components/mocks/StatTile";
import { MockList } from "@/components/mocks/MockList";

export const metadata: Metadata = {
  title: "Sales & CRM",
  description:
    "From lead to repeat customer in one timeline. Quotations, itineraries, combinations and a full customer 360 — all native travel.",
};

export default function SalesCrmModule() {
  return (
    <>
      <PageHero
        eyebrow={<Eyebrow icon="🎯">Sales & CRM</Eyebrow>}
        title={
          <>
            From lead to repeat customer —{" "}
            <span className="gradient-text">never lose the thread.</span>
          </>
        }
        description="Becko's sales suite tracks every quote, every itinerary, every conversation and every booking — against a single customer record that the whole agency shares."
        primaryCta={{ href: "/contact", label: "Book a demo" }}
        secondaryCta={{ href: "/features", label: "All features" }}
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Lead capture</span>
            <h2 className="mt-3.5">Every lead, from every channel, in one queue.</h2>
            <p>
              Facebook lead ads, Instagram DMs, WhatsApp enquiries, web forms, walk-ins — all
              routed to the right brand, the right agent, in seconds. No more "did anyone reply
              to that?"
            </p>
            <FeatList
              items={[
                "Auto-routing rules per brand, region or agent load",
                "Source tracking — see which channel actually books",
                "SLA timers on every lead to flag slow responders",
                "Auto-link to existing customers based on phone/email",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <MockList
              rows={[
                { left: "📘 FB lead · Maria — Bali", tag: { label: "2m ago" } },
                { left: "📷 IG DM · Rohan — Phuket", tag: { label: "5m ago" } },
                { left: "💚 WhatsApp · Sara — Maldives", tag: { label: "11m ago" } },
                {
                  left: "🌐 Web form · Davis family",
                  tag: { label: "SLA 24m", tone: "warm" },
                },
                { left: "🚶 Walk-in · Mr. Singh", tag: { label: "Live" } },
              ]}
            />
            <div className="mt-3.5 p-3.5 bg-white/[0.03] border border-line rounded-sm text-[0.86rem] text-ink-dim">
              <strong className="text-white">Auto-routed</strong> · Maria → Agent Nia (Bali
              specialist) · WhatsApp template "First-touch · Bali" sent automatically.
            </div>
          </div>
        }
      />

      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">Quotations</span>
            <h2 className="mt-3.5">Quotes that actually convert.</h2>
            <p>
              Build a quotation from a template or from a live itinerary in 90 seconds. Send a
              branded, public link the customer can accept on their phone. Track who opened,
              who shared, and who counter-offered.
            </p>
            <FeatList
              items={[
                "Reusable quotation templates per destination",
                "Branded public share link with one-click acceptance",
                "Customer open / share / accept tracking",
                "Quote-to-booking conversion analytics by agent",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-3 gap-2.5 mb-3.5">
              <StatTile label="Quotes sent" value="124" />
              <StatTile label="Opened" value="98" delta="79%" />
              <StatTile label="Won" value="42" delta="34%" />
            </div>
            <div className="bg-white/[0.03] border border-line rounded-sm h-[140px] flex items-end gap-1.5 p-3.5">
              {[35, 48, 60, 55, 75, 68, 82, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm opacity-85"
                  style={{
                    height: `${h}%`,
                    background: "linear-gradient(180deg, #55CCE1 0%, #2bb1c7 100%)",
                  }}
                />
              ))}
            </div>
          </div>
        }
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Itineraries</span>
            <h2 className="mt-3.5">
              Day-by-day itineraries customers want to forward to friends.
            </h2>
            <p>
              Drag in flights, hotels, transfers and activities. Combine multi-destination
              trips into reusable combinations. Send a public link with maps, photos and your
              branding — no PDF wrestling.
            </p>
            <FeatList
              items={[
                "Drag-and-drop itinerary builder, day-by-day",
                "Combinations: pre-bundle multi-stop packages",
                "Brand-aware itinerary share link with photos & maps",
                "Auto-attach to the booking when accepted",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <MockList
              rows={[
                { left: <strong className="text-white">Day 1 · Arrival in Malé</strong>, tag: { label: "Day 1" } },
                { left: "✈ Emirates EK 525 · DXB → MLE", tag: { label: "10:45" } },
                { left: "🚤 Speed boat to W Maldives", tag: { label: "14:30" } },
                { left: <strong className="text-white">Day 2 · Overwater bliss</strong>, tag: { label: "Day 2" } },
                { left: "🥞 Breakfast at Fish", tag: { label: "08:00" } },
                { left: "🤿 House reef snorkel", tag: { label: "11:00" } },
                { left: "💆 Couples spa · AWAY", tag: { label: "15:00" } },
              ]}
            />
          </div>
        }
      />

      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">Customer 360</span>
            <h2 className="mt-3.5">Every customer, fully understood.</h2>
            <p>
              Past trips, preferences, passport numbers, conversations across every channel,
              outstanding balances, lifetime value — one record, no surprises.
            </p>
            <FeatList
              items={[
                "Unified profile: bookings, quotes, messages, finance",
                "Auto-merge duplicates across WhatsApp / FB / IG",
                "Lifetime value, repeat rate, propensity score",
                "GDPR-aware data deletion workflow",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="flex gap-3.5 items-center mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-[#03121b] text-lg"
                style={{
                  background: "linear-gradient(135deg, #55CCE1, #6c83ff)",
                }}
              >
                SK
              </div>
              <div>
                <div className="text-white font-bold text-[1.1rem]">Sara Khan</div>
                <div className="text-ink-mute text-sm">
                  Customer since 2022 · LTV $18,940
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-3.5">
              <StatTile label="Trips" value="7" />
              <StatTile label="Avg margin" value="22%" />
              <StatTile label="Repeat rate" value="86%" />
            </div>
            <MockList
              rows={[
                { left: "🏝️ Maldives · Oct 2025", tag: { label: "Repeat" } },
                { left: "🗾 Japan · Apr 2025", tag: { label: "5★" } },
                { left: "🇮🇹 Italy · Sep 2024", tag: { label: "Repeat" } },
              ]}
            />
          </div>
        }
      />

      <Section>
        <SectionHead title="The full sales toolkit." />
        <ModuleGrid>
          <ModuleCard icon="🧭" title="Masterview" description="Every brand, every team, every booking — rolled up in one screen managers actually open." />
          <ModuleCard icon="🏆" title="Team Performance" description="Conversion rate, margin, quote-to-book time and SLAs per agent — fair, transparent, comparable." />
          <ModuleCard icon="🏷️" title="Brand Performance" description="Drill into each brand's funnel, customer mix, profit and refunds." />
          <ModuleCard icon="📊" title="Quotation Analytics" description="What's winning, what's losing, and at what price point. Pricing decisions, made on data." />
          <ModuleCard icon="🌟" title="Customer Insights" description="Cohorts, churn signals and 'ready-to-book' segments you can market to." />
          <ModuleCard icon="⚙️" title="Sales Settings" description="Configure routing rules, SLA targets, quotation templates and itinerary defaults per brand." />
        </ModuleGrid>
      </Section>

      <CtaStrip
        title="Turn enquiries into bookings — without losing your weekends."
        description="See how Becko's sales suite plugs into your own funnel."
      />
    </>
  );
}
