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
  title: "Marketing Suite",
  description:
    "Campaigns, lead capture, remarketing, loyalty and an AI deal-maker — connected directly to your bookings, so every dollar of spend is measured.",
};

export default function MarketingModule() {
  return (
    <>
      <PageHero
        eyebrow={<Eyebrow icon="📣">Marketing Suite</Eyebrow>}
        title={
          <>
            Spend less. <span className="gradient-text">Book more.</span>
          </>
        }
        description="Stop guessing whether Meta ads moved the needle. Becko ties every campaign, lead and message to a real booking — so you can see exactly which dollar of spend created which dollar of revenue."
        primaryCta={{ href: "/contact", label: "Book a demo" }}
        secondaryCta={{ href: "/features", label: "All features" }}
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Campaigns</span>
            <h2 className="mt-3.5">
              Plan, run and measure campaigns against revenue — not vanity metrics.
            </h2>
            <p>
              Plan a campaign once. Becko links every lead, every WhatsApp conversation, every
              booking back to it. Per-brand campaign insights show CPL, CAC and ROAS that
              actually correspond to bookings.
            </p>
            <FeatList
              items={[
                "Per-brand campaign planner with budget & KPIs",
                "Auto-link leads → conversations → bookings → revenue",
                "Side-by-side campaign performance ranking",
                "Spend vs. margin, not spend vs. clicks",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-2 gap-2.5 mb-3.5">
              <StatTile label="Spend" value="$8.4k" />
              <StatTile label="Bookings" value="31" delta="+12 WoW" />
              <StatTile label="Revenue" value="$94.2k" />
              <StatTile label="ROAS" value="11.2×" delta="+1.8×" />
            </div>
            <MockList
              rows={[
                { left: "Maldives Nov · IG Reels", tag: { label: "ROAS 14.6×" } },
                { left: "Bali Honeymoon · FB", tag: { label: "ROAS 9.8×" } },
                {
                  left: "Dubai City Break · TikTok",
                  tag: { label: "ROAS 1.4×", tone: "warm" },
                },
              ]}
            />
          </div>
        }
      />

      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">AI Deal Maker</span>
            <h2 className="mt-3.5">An AI that turns idle inventory into bookings.</h2>
            <p>
              The deal-maker scans your supplier deals, bed-bank credits and slow-selling SKUs.
              It proposes destination-specific offers, picks the right customer segment, and
              drafts the WhatsApp message — your team just clicks send.
            </p>
            <FeatList
              items={[
                "Inventory-aware deal generation",
                "Auto-segments by past bookings, preferences & LTV",
                "Drafts on-brand WhatsApp messages",
                "Measures uplift booking-by-booking",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="p-3.5 bg-brand/[0.06] border border-line-strong rounded mb-3">
              <div className="flex items-center gap-2.5 mb-2">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[#03121b] font-extrabold"
                  style={{ background: "linear-gradient(135deg, #55CCE1, #6c83ff)" }}
                >
                  ✦
                </span>
                <strong className="text-white">Deal proposal · 3 mins ago</strong>
              </div>
              <p className="m-0 text-ink-dim text-[0.92rem]">
                Bali · 7 nights · $1,840pp · save 18%. Bed-bank stock expires Sep 30. Suggested
                audience: <strong className="text-white">214 customers</strong> who booked SE-Asia
                in last 24 months. Draft WhatsApp ready.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              <StatTile label="Idle bed-bank" value="$22k" />
              <StatTile label="Suggested deals" value="4" />
              <StatTile label="Projected" value="$58k" />
            </div>
          </div>
        }
      />

      <Section>
        <SectionHead title="The whole marketing department, in one tab." />
        <ModuleGrid cols={4}>
          <ModuleCard icon="🎯" title="Campaigns" description="Plan, budget & track per-brand cross-channel campaigns." />
          <ModuleCard icon="📊" title="Marketing Analytics" description="Social, website & campaign dashboards per brand." />
          <ModuleCard icon="🪝" title="Leads" description="Unified lead inbox from FB, IG, WhatsApp, web & walk-in." />
          <ModuleCard icon="📘" title="Facebook Leads" description="Facebook lead-ads piped straight into the sales pipeline." />
          <ModuleCard icon="🔁" title="Remarketing" description="Audience-build past customers & abandoned quotes — push to Meta." />
          <ModuleCard icon="🤖" title="AI Deal Maker" description="AI-proposed offers from inventory + customer-fit signals." />
          <ModuleCard icon="🎁" title="Loyalty Programs" description="Tiered programs with points, referrals and trigger automations." />
          <ModuleCard icon="🎨" title="Content Hub" description="Plan, store and approve creative assets per brand." />
          <ModuleCard icon="🎬" title="Content Studio" description="Compose social-ready posts with on-brand assets in one place." />
          <ModuleCard icon="📺" title="Social Channels" description="Publish to Facebook, Instagram, TikTok from one composer." />
          <ModuleCard icon="🌐" title="Website Analytics" description="Pageviews & goal tracking tied to bookings." />
          <ModuleCard icon="⚙️" title="Marketing Settings" description="Pixels, UTMs, channels and per-brand defaults." />
        </ModuleGrid>
      </Section>

      <CtaStrip
        title="Marketing that books revenue — not just impressions."
        description="See how Becko's marketing suite ties to your own funnel in a 30-minute walkthrough."
      />
    </>
  );
}
