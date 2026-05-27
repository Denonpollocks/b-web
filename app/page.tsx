import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHead } from "@/components/Section";
import { ModuleCard, ModuleGrid } from "@/components/ModuleCard";
import { Split, FeatList } from "@/components/Split";
import { CtaStrip } from "@/components/CtaStrip";
import { StatBand } from "@/components/StatBand";
import { HeroViz } from "@/components/mocks/HeroViz";
import { KanbanMock } from "@/components/mocks/KanbanMock";
import { ChatMock } from "@/components/mocks/ChatMock";
import { StatTile } from "@/components/mocks/StatTile";
import { MockList } from "@/components/mocks/MockList";
import { modules } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
            <div>
              <span className="eyebrow">All-in-one Travel Operating System</span>
              <h1 className="mt-5">
                Run your entire <span className="gradient-text">travel agency</span> from
                one calm workspace.
              </h1>
              <p className="mt-7 max-w-[560px] text-[1.18rem]">
                Becko replaces twelve disconnected tools — bookings, accounting, CRM,
                quotations, WhatsApp, marketing, content studio, HR — with one intelligent
                platform built for the people who actually sell travel.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Book a demo <ArrowRight size={16} />
                </Link>
                <Link href="/features" className="btn btn-ghost btn-lg">
                  Explore the platform
                </Link>
              </div>
              <div className="mt-8 flex gap-6 flex-wrap text-ink-mute text-sm">
                {[
                  "WhatsApp, Instagram & Facebook in one inbox",
                  "Bookings, finance & CRM in one place",
                  "Built for multi-brand travel agencies",
                ].map(
                  (t) => (
                    <span key={t} className="before:content-['✓'] before:text-brand before:font-bold before:mr-1.5">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            <HeroViz />
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="py-10 border-b border-line">
        <div className="container">
          <p className="text-center text-[0.82rem] tracking-[0.16em] uppercase text-ink-mute mb-6">
            Built for travel agencies of every shape — from boutique villas to multi-brand groups
          </p>
          <div className="flex justify-center items-center gap-x-15 gap-y-3 flex-wrap opacity-55 font-display font-bold tracking-tight text-ink-dim text-[1.4rem] [&>*]:mx-7">
            <span>Wanderlux</span>
            <span>OceanVoyage</span>
            <span>BlueSkies Travel</span>
            <span>Atlas Holidays</span>
            <span>Mosaic Trips</span>
            <span>Voyageur Group</span>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <Section>
        <SectionHead
          eyebrow={<span className="eyebrow">The Problem</span>}
          title={
            <>Travel agencies are stitched together with spreadsheets, WhatsApp, and prayer.</>
          }
          description="You're running on a different stack for every job — and the seams are leaking money."
        />
        <ModuleGrid>
          <ModuleCard icon="📑" title="10+ disconnected tools" description="Booking system here. Accounting software there. CRM in a spreadsheet. WhatsApp on a personal phone. Nothing talks." />
          <ModuleCard icon="⏳" title="Hours wasted on admin" description="Manual data re-entry across tools, reconciliation by hand, and chasing payments through screenshots eats your weekends." />
          <ModuleCard icon="💸" title="Commissions slip through" description="Without a single ledger tying bookings to suppliers, refunds, and agent pay-outs, commissions go unclaimed for months." />
          <ModuleCard icon="🤐" title="Customers feel ignored" description="Leads arrive on Facebook, Instagram, WhatsApp, and email — and most fall through the cracks before anyone replies." />
          <ModuleCard icon="📊" title="No real view of the business" description="What's your margin per agent this quarter? Which supplier hurt your P&L? You shouldn't need a CFO to find out." />
          <ModuleCard icon="🚪" title="Knowledge walks out the door" description="When an agent leaves, their inbox, their client relationships, and their itineraries leave with them." />
        </ModuleGrid>
      </Section>

      {/* THE SOLUTION / MODULES */}
      <Section>
        <SectionHead
          eyebrow={<span className="eyebrow">The Solution</span>}
          title={
            <>
              One platform. Every workflow.{" "}
              <span className="gradient-text">Built for travel.</span>
            </>
          }
          description="Becko unifies the twelve jobs an agency runs every day. No more switching tabs, no more re-typing customer details, no more spreadsheets pretending to be a system."
        />
        <ModuleGrid cols={4}>
          {modules.map((m) => (
            <ModuleCard
              key={m.slug}
              icon={m.icon}
              title={m.title}
              description={m.summary}
              href={`/modules/${m.slug}`}
              more="Learn more"
            />
          ))}
        </ModuleGrid>
      </Section>

      {/* SPLIT: PIPELINE */}
      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">Bookings</span>
            <h2 className="mt-3.5">
              A booking pipeline you can actually <em>see</em>.
            </h2>
            <p>
              Drag a booking from enquiry to confirmed to ticketed. Lock high-value bookings
              to senior agents. Get email logs, error tracking and instant share links —
              without ever switching apps.
            </p>
            <FeatList
              items={[
                "Drag-and-drop booking pipeline with stage automation",
                "Per-booking passenger, product, financials, commission and log tabs",
                "Lock toggle, bulk actions, PNR converter and share-with-customer links",
                "Template engine for repeat itineraries — re-use in one click",
              ]}
            />
            <Link href="/modules/bookings" className="btn btn-ghost mt-6">
              Explore Bookings →
            </Link>
          </>
        }
        visual={
          <KanbanMock
            columns={[
              {
                title: "Enquiry",
                cards: [
                  { name: "Bali Honeymoon", meta: "S. Khan · 7 nights", price: "$4,210" },
                  { name: "Maldives", meta: "J. Patel · 5 nights", price: "$6,800" },
                ],
              },
              {
                title: "Quoted",
                cards: [{ name: "Dubai", meta: "Bardot · 4 nights", price: "$3,150" }],
              },
              {
                title: "Confirmed",
                cards: [
                  { name: "Phuket", meta: "M. Lee · 6 nights", price: "$5,420" },
                  { name: "Sri Lanka", meta: "Ruth · 8 nights", price: "$7,300" },
                ],
              },
              {
                title: "Ticketed",
                cards: [
                  { name: "Mauritius", meta: "D. Roy · 9 nights", price: "$8,940" },
                ],
              },
            ]}
          />
        }
      />

      {/* SPLIT: MESSENGER */}
      <Split
        copy={
          <>
            <span className="tag-pill">Messenger</span>
            <h2 className="mt-3.5">Every conversation, every channel, one inbox.</h2>
            <p>
              WhatsApp Business, Facebook Messenger, Instagram DMs and your customer database —
              all in one screen. Train an AI flow agent on your products and policies; it
              replies in your tone, in your customer's language, 24/7.
            </p>
            <FeatList
              items={[
                "Unified inbox across WhatsApp, Instagram and Facebook",
                "AI flow agents with playbooks, training data and full conversation logs",
                "WhatsApp catalogs, broadcasts, deep-links and template compliance",
                "Facebook lead-ad capture → straight into your sales pipeline",
              ]}
            />
            <Link href="/modules/messenger" className="btn btn-ghost mt-6">
              Explore Messenger →
            </Link>
          </>
        }
        visual={
          <ChatMock
            threads={[
              { label: "Maria · Maldives 🏝️", active: true },
              { label: "Joseph · Dubai" },
              { label: "Sandra · Bali" },
              { label: "FB Lead · Phuket" },
              { label: "Ravi · Sri Lanka" },
            ]}
            bubbles={[
              { type: "in", content: "Hi! Do you have packages to Maldives in November?" },
              {
                type: "ai",
                content:
                  "Yes! I've found 6 packages in your dates. Family-friendly resort with overwater villas starts at $4,210 pp. Want me to send the itinerary?",
              },
              { type: "in", content: "Yes please, send it 🙏" },
              { type: "out", content: "✓ Itinerary sent · Lead → Quoted" },
            ]}
            footer={
              <div className="flex gap-1.5 items-center text-[0.72rem] text-ink-mute mt-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green shadow-[0_0_6px_#4ade80]"></span>
                Auto-replied in 4 seconds · Logged to CRM
              </div>
            }
          />
        }
      />

      {/* SPLIT: FINANCE */}
      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">Finance</span>
            <h2 className="mt-3.5">Travel-native accounting. No bolt-on, no QuickBooks workaround.</h2>
            <p>
              Every booking auto-posts the right journal entries. Bank statements reconcile
              themselves with category rules. Commissions, refunds, supplier balances and
              bed-bank credits stay clean — and a real P&amp;L is one click away.
            </p>
            <FeatList
              items={[
                "Auto-journal: bookings, payments, refunds and commissions post to the GL automatically",
                "Bank-statement upload with AI categorization & reusable rules",
                "Commission ledger that tracks claimed, paid and remaining per agent and brand",
                "P&L, balance sheet, cash-flow forecast and Becko Audit — built for finance teams",
              ]}
            />
            <Link href="/modules/finance" className="btn btn-ghost mt-6">
              Explore Finance →
            </Link>
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-3 gap-2.5 mb-3.5">
              <StatTile label="Cash position" value="$184.6k" delta="+$22.4k WoW" />
              <StatTile label="Outstanding" value="$42.1k" delta="12 invoices" deltaTone="warm" />
              <StatTile label="Margin YTD" value="21.6%" delta="+2.4 pts" />
            </div>
            <MockList
              rows={[
                { left: "🏨 Marriott · Bali Oct", tag: { label: "Reconciled" } },
                { left: "✈ Emirates · TKT 176-22931", tag: { label: "Reconciled" } },
                { left: "💳 Hotelbeds — bed bank topup", tag: { label: "Auto-rule", tone: "blue" } },
                { left: "🔁 Refund — booking #4821", tag: { label: "Pending", tone: "warm" } },
                { left: "💼 Commission — Agent Nia", tag: { label: "Paid" } },
              ]}
            />
          </div>
        }
      />

      {/* STAT BAND */}
      <StatBand
        stats={[
          { value: "12 → 1", label: "Tools consolidated" },
          { value: "14 hrs", label: "Saved per agent per week" },
          { value: "3.8×", label: "Faster quote-to-booking" },
          { value: "100%", label: "Visibility on commissions" },
        ]}
      />

      {/* WHY BECKO */}
      <Section>
        <SectionHead
          eyebrow={<span className="eyebrow">Why Becko</span>}
          title={
            <>
              Other tools are generic.{" "}
              <span className="gradient-text">Becko speaks travel.</span>
            </>
          }
          description="We didn't bend a generic CRM into a travel use-case. Every workflow — from PNR conversion to bed-bank credit to commission claw-back — is native."
        />
        <ModuleGrid>
          <ModuleCard icon="🧭" title="Built around bookings" description="Every other module — finance, CRM, marketing — orbits the booking. Nothing is bolted on." />
          <ModuleCard icon="🤖" title="AI where it earns its keep" description="AI agents on WhatsApp, AI deal-maker for upsells, AI HR agent, AI content templates. Not a chatbot demo — a colleague." />
          <ModuleCard icon="🛡️" title="Permissioned by role" description="Sales agents, sales managers, admin, finance — each role gets its own dashboard and its own menu. Granular permissions on every screen." />
          <ModuleCard icon="🏷️" title="Multi-brand by default" description="Run several brands under one roof. Each brand has its own messenger, leads, performance and books — rolled up in masterview." />
          <ModuleCard icon="📡" title="Real-time everything" description="Live notifications, live feed, live chats, live dashboards. Your team works off the same truth, not a yesterday-export." />
          <ModuleCard icon="🔌" title="Open and integrated" description="Supabase-backed, API-ready, with WhatsApp Cloud, Meta, Stripe and bank-statement integrations baked in." />
        </ModuleGrid>
      </Section>

      <CtaStrip
        title={
          <>
            Stop renting twelve tools.{" "}
            <span className="gradient-text">Own your stack.</span>
          </>
        }
        description="Book a 30-minute walk-through. We'll show you Becko on your own data, migration included."
      />
    </>
  );
}
