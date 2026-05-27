import type { Metadata } from "next";
import Link from "next/link";
import {
  Inbox,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Zap,
  Bot,
  Database,
  Workflow,
  Globe,
  Lock,
  Image as ImageIcon,
} from "lucide-react";
import { Section, SectionHead } from "@/components/Section";
import { CtaStrip } from "@/components/CtaStrip";
import { Eyebrow } from "@/components/Eyebrow";
import { UnifiedInboxHero } from "@/components/messenger/UnifiedInboxHero";
import { ChannelTabs } from "@/components/messenger/ChannelTabs";
import { FlowBuilderViz } from "@/components/messenger/FlowBuilderViz";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Becko Messenger — Unified WhatsApp, Instagram & Facebook Inbox",
  description:
    "One inbox for WhatsApp, Instagram & Facebook Messenger. Reply faster, automate with AI flows, and turn every conversation into revenue — sold standalone.",
  alternates: {
    canonical: `${site.url}/products/messenger`,
  },
  openGraph: {
    title: "Becko Messenger — Unified WhatsApp, Instagram & Facebook Inbox",
    description:
      "One inbox for every channel your customers actually use. Built for revenue, with AI flows and messaging-policy compliance.",
    url: `${site.url}/products/messenger`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Becko Messenger — Unified WA, IG & FB Inbox",
    description:
      "Reply faster, automate smarter, turn every conversation into revenue.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Becko Messenger",
      description:
        "Unified inbox for WhatsApp Business, Instagram Direct and Facebook Messenger with visual flow builder, AI replies and conversion analytics.",
      brand: {
        "@type": "Brand",
        name: "Becko",
      },
      category: "Customer Messaging Platform",
      url: `${site.url}/products/messenger`,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "0",
        offerCount: 3,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Organization",
      name: site.name,
      legalName: site.company.legalName,
      url: site.url,
      email: site.contact.email,
    },
  ],
};

/* ───────────── data ───────────── */

const valueProps = [
  {
    icon: Inbox,
    title: "One inbox, every channel",
    body: "WhatsApp, Instagram DMs, Facebook Messenger, ad replies and post comments — all funnelled into a single threaded inbox per brand.",
    accent: "#55CCE1",
  },
  {
    icon: TrendingUp,
    title: "Built for revenue",
    body: "Click-to-message ad attribution, lead capture, conversation Kanban (lead → qualified → won) and conversion analytics across every platform.",
    accent: "#4ade80",
  },
  {
    icon: Sparkles,
    title: "Automate without losing the human",
    body: "Messenger Flows visual builder, AI replies trained on your brand voice, templates and OTN / recurring notifications — with one-click human handoff.",
    accent: "#DD2A7B",
  },
  {
    icon: ShieldCheck,
    title: "Compliant by default",
    body: "Tech Provider API scopes, automated STOP / opt-out enforcement, configurable data-retention windows and EU residency.",
    accent: "#6c83ff",
  },
];

const inboxFeatures: { title: string; body: string }[] = [
  {
    title: "Unified threading across platforms",
    body: "One customer, all channels — Maria's WhatsApp, Instagram and FB lead form collapse into one profile and one thread.",
  },
  {
    title: "Real-time sync via webhooks",
    body: "Sub-second event delivery from Meta — plus on-demand history catch-up so nothing's missed if your network blips.",
  },
  {
    title: "Kanban board for conversations",
    body: "Drag conversations through New → Engaged → Quoted → Won, just like a sales pipeline. Because they are one.",
  },
  {
    title: "Assignments, internal notes, mentions, SLA timers",
    body: "Route to the right agent, talk privately about a customer, and watch the SLA clock so nothing rots.",
  },
  {
    title: "Read receipts, typing indicators, rich attachments",
    body: "The polish your customers expect from a native channel — without leaving the unified inbox.",
  },
  {
    title: "Search across all conversations",
    body: "Full-text search across every channel, every brand, every agent — including media captions and AI summaries.",
  },
  {
    title: "Conversation quality metrics",
    body: "Our 12-metric scoring rubric grades response time, tone, resolution and upsell — auto-rolled-up per agent and per brand.",
  },
  {
    title: "Contacts auto-built from every thread",
    body: "Every message creates or enriches a contact record — phone, handle, ad source, last message, lifecycle stage.",
  },
  {
    title: "Broadcast lists (WhatsApp) and segments",
    body: "Build re-usable audience segments from any conversation property. Broadcast and measure delivery, read and reply.",
  },
  {
    title: "Mobile + desktop notifications",
    body: "Browser, push and email notifications with smart deduplication — no '47 unread' panic at 9am.",
  },
];

const flowBlocks = [
  {
    icon: Workflow,
    title: "Messenger Flows · visual whiteboard",
    body: "Drag-drop triggers, conditions, AI nodes and message nodes. Versioned, branchable, and testable in a sandbox.",
  },
  {
    icon: Bot,
    title: "AI auto-replies with brand voice",
    body: "Sliding-window memory plus pgvector long-term facts. Knows your destinations, pricing and tone — and when to hand off.",
  },
  {
    icon: ImageIcon,
    title: "Travel-search-in-chat",
    body: "Send rendered offer cards (PNG, native to each platform) directly inside conversations — no clunky web links.",
  },
  {
    icon: Zap,
    title: "Playbooks · cron follow-ups",
    body: "Time-based nudges: 24h after no reply, 3 days before departure, day-of post-trip review. Set once, run forever.",
  },
  {
    icon: Lock,
    title: "PII anonymisation before AI",
    body: "Names, phones, emails and IBANs are masked before any third-party AI call — and unmasked on output for the human.",
  },
];

const integrations = [
  { label: "WhatsApp", color: "#25D366" },
  { label: "Instagram", color: "#DD2A7B" },
  { label: "Messenger", color: "#0084FF" },
  { label: "Meta Ads", color: "#1877F2" },
  { label: "TikTok", color: "#ff0050" },
  { label: "GA4", color: "#F9AB00" },
  { label: "Search Console", color: "#4285F4" },
];

const tiers = [
  {
    name: "Starter",
    tagline: "For one brand getting serious about WhatsApp.",
    price: "$39",
    unit: "/mo",
    features: [
      "1 channel (WA, IG or FB)",
      "1 seat",
      "1,000 conversations / mo",
      "Templates & broadcasts",
      "Basic analytics",
    ],
    cta: { href: "/contact?plan=messenger-starter", label: "Start free trial" },
  },
  {
    name: "Growth",
    tagline: "Multi-channel, AI-powered and team-ready.",
    price: "$129",
    unit: "/mo",
    features: [
      "3 channels (WA + IG + FB)",
      "5 seats included",
      "10,000 conversations / mo",
      "Messenger Flows + AI replies",
      "Conversion analytics & SLA",
      "Lead-ads & Click-to-Message attribution",
    ],
    featured: true,
    cta: { href: "/contact?plan=messenger-growth", label: "Start free trial" },
  },
  {
    name: "Scale",
    tagline: "For agencies running multi-brand messenger ops.",
    price: "Custom",
    unit: "",
    features: [
      "Unlimited channels & seats",
      "Unlimited conversations",
      "Advanced analytics & exports",
      "Dedicated CSM + onboarding",
      "White-label & SSO",
      "Custom SLAs and data residency",
    ],
    cta: { href: "/contact?plan=messenger-scale", label: "Talk to sales" },
  },
];

const testimonials = [
  {
    quote:
      "We replaced three browser tabs and a Trello board with Becko Messenger. Reply time dropped from 4 hours to under 8 seconds for 60% of enquiries.",
    name: "Lena M.",
    role: "Head of Growth, Yala Travel",
  },
  {
    quote:
      "Click-to-WhatsApp ads finally make sense. We can see cost-per-conversation, see who converted, and re-broadcast to the qualified ones.",
    name: "Hassan K.",
    role: "Performance Lead, Bondi Voyages",
  },
  {
    quote:
      "The AI replies in our tone of voice — and crucially, knows when to tag a human. That trust is everything for a luxury brand.",
    name: "Priya R.",
    role: "Owner, Mira Honeymoons",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a WhatsApp Business account already?",
    a: "No — we provision your number on WhatsApp Cloud API directly with Meta. If you have an existing Business account, we'll port it without any customer-visible downtime.",
  },
  {
    q: "Can I keep my existing Facebook Page?",
    a: "Yes — connect it in 2 clicks. We become a Tech Provider on your Page, with the minimum scopes Meta allows. Your Page admin remains exactly as it is.",
  },
  {
    q: "Does this work without the rest of Becko CRM?",
    a: "Yes — Becko Messenger is sold standalone. The unified inbox, channels, Flows, AI replies and analytics all work on their own. You can add bookings, finance and the rest of the OS later, and your conversation history travels with you.",
  },
  {
    q: "How are WhatsApp conversations priced?",
    a: "Meta charges per 24-hour conversation window (rates vary by country and category — marketing, utility, authentication, service). We surface real-time cost-per-conversation in your dashboard so there are no surprises at month-end.",
  },
  {
    q: "Is my data stored in the EU?",
    a: "Yes — by default we run on Supabase EU region. We can pin data residency to a specific region for Scale-tier customers.",
  },
  {
    q: "Can I migrate from another inbox tool?",
    a: "Yes — contacts import via CSV in minutes. Per Meta API limits, conversation history starts fresh once your number is on Becko, but we'll help you preserve key context (tags, lifecycle stage, notes) during the cut-over.",
  },
];

/* ───────────── page ───────────── */

export default function MessengerProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1 · HERO */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 400px at 50% -10%, rgba(85,204,225,0.18), transparent 60%), radial-gradient(700px 300px at 90% 30%, rgba(221,42,123,0.10), transparent 65%)",
          }}
        />
        <div className="container relative grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 items-center">
          <div className="reveal-on-scroll">
            <Eyebrow icon="💬">Becko Messenger · Standalone</Eyebrow>
            <h1 className="mt-5 leading-[1.04]">
              One inbox for{" "}
              <span className="gradient-text">WhatsApp, Instagram & Facebook.</span>
            </h1>
            <p className="mt-5 text-[1.15rem] max-w-[560px]">
              Reply faster, automate smarter, and turn every conversation into
              revenue — across every channel your customers actually use.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact?product=messenger" className="btn btn-primary btn-lg">
                Start free trial
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact?intent=demo" className="btn btn-ghost btn-lg">
                Book a demo
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-ink-mute">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-accent-green" /> WhatsApp
                Business API
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock size={14} className="text-brand-light" /> GDPR & PCI-aware
              </span>
            </div>
          </div>
          <div className="reveal-on-scroll">
            <UnifiedInboxHero />
          </div>
        </div>
      </section>

      {/* 2 · WHY BECKO MESSENGER — 4-icon grid, staggered reveal */}
      <Section className="pt-10">
        <SectionHead
          eyebrow={<Eyebrow icon="✦" variant="tag">Why Becko Messenger</Eyebrow>}
          title={<>Four reasons teams switch — and stay.</>}
          description="A messenger product designed for the way modern customer conversations actually happen: on ads, on stories, on WhatsApp, on Reels."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueProps.map((v, i) => (
            <div
              key={v.title}
              className="reveal-on-scroll module-card group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className="module-card-icon"
                style={{
                  background: `linear-gradient(135deg, ${v.accent}26, ${v.accent}10)`,
                  borderColor: `${v.accent}55`,
                  color: v.accent,
                }}
              >
                <v.icon size={22} strokeWidth={1.9} />
              </span>
              <h3 className="text-[1.15rem] mb-2">{v.title}</h3>
              <p className="text-[0.94rem]">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3 · THE UNIFIED INBOX — alternating split, feature columns */}
      <section className="py-16 md:py-24 relative">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px 320px at 100% 50%, rgba(85,204,225,0.07), transparent 65%)",
          }}
        />
        <div className="container relative">
          <div className="max-w-[720px] mb-12 reveal-on-scroll">
            <Eyebrow icon="📥" variant="tag">The Unified Inbox</Eyebrow>
            <h2 className="mt-3.5">
              Channel-agnostic features.{" "}
              <span className="gradient-text">Built on WhatsApp Cloud API & Graph API.</span>
            </h2>
            <p className="mt-3 text-[1.05rem]">
              Everything you need to run a serious messenger operation — without
              juggling three browser tabs and a spreadsheet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 reveal-on-scroll">
            {inboxFeatures.map((f, i) => (
              <div
                key={f.title}
                className="flex gap-4 group"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand/10 border border-brand/25 text-brand-light flex items-center justify-center group-hover:bg-brand/15 group-hover:border-brand/40 transition-colors"
                  aria-hidden
                >
                  <CheckCircle2 size={16} strokeWidth={2} />
                </span>
                <div>
                  <h4 className="text-white font-semibold text-[1rem] mb-1">
                    {f.title}
                  </h4>
                  <p className="text-[0.9rem] leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · CHANNEL DEEP-DIVES — tabbed */}
      <Section
        id="channels"
        className="bg-gradient-to-b from-transparent via-white/[0.015] to-transparent"
      >
        <SectionHead
          eyebrow={<Eyebrow icon="🌐" variant="tag">Channel deep-dives</Eyebrow>}
          title={<>Every channel, deeply integrated.</>}
          description="Not just message-in / message-out — we map each platform's full capability surface so your team gets every feature Meta ships."
        />
        <ChannelTabs />
      </Section>

      {/* 5 · AUTOMATION & AI — full-bleed flow viz */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div className="reveal-on-scroll">
            <Eyebrow icon="🧠" variant="tag">Automation & AI</Eyebrow>
            <h2 className="mt-3.5">
              Visual flow builder.{" "}
              <span className="gradient-text">Brand-trained AI.</span>{" "}
              Human handoff in one click.
            </h2>
            <p className="mt-3 text-[1.05rem]">
              Build a flow once on the visual whiteboard. The AI handles routine
              enquiries in your tone of voice, with pgvector-powered long-term
              memory of your destinations, policies and pricing.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3">
              {flowBlocks.map((b) => (
                <div
                  key={b.title}
                  className="flex gap-3.5 items-start p-3.5 rounded-lg border border-line bg-white/[0.02] hover:bg-white/[0.04] hover:border-line-strong transition-all"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-accent/15 border border-accent/30 text-[#a4b4ff]">
                    <b.icon size={16} strokeWidth={1.9} />
                  </span>
                  <div>
                    <div className="text-white font-semibold text-[0.96rem]">
                      {b.title}
                    </div>
                    <div className="text-[0.86rem] text-ink-dim mt-0.5">{b.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-on-scroll">
            <FlowBuilderViz />
          </div>
        </div>
      </Section>

      {/* 6 · MARKETING & GROWTH — stat band */}
      <Section>
        <SectionHead
          eyebrow={<Eyebrow icon="📣" variant="tag">Marketing & growth</Eyebrow>}
          title={<>Marketing tools that live next to the conversation.</>}
        />
        <div className="stat-band reveal-on-scroll">
          <Stat label="Auto-built contacts" value="100%" sub="From every thread, deduped across channels" />
          <Stat label="Cross-channel opt-in tracking" value="STOP-aware" sub="Compliance by default" />
          <Stat label="Ad creative previews" value="High-res" sub="effective_image_url from Meta Graph" />
          <Stat label="Channel & Page health" value="Live" sub="Token, scope and webhook alerts" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <PerfCard
            title="Cross-platform performance dashboards"
            body="Revenue per channel, cost per reply, conversion by ad source, response time by agent — all in one rollup, exportable to CSV."
            tone="brand"
          />
          <PerfCard
            title="Broadcast lists with opt-in / opt-out tracking"
            body="Build segments from any conversation property. Send WhatsApp broadcasts that respect STOP and 24-hour windows automatically."
            tone="pink"
          />
        </div>
      </Section>

      {/* 7 · INTEGRATIONS & DATA — logo strip + cards */}
      <section className="py-16 md:py-24 border-y border-line bg-bg-1/40">
        <div className="container">
          <div className="text-center max-w-[720px] mx-auto mb-10 reveal-on-scroll">
            <Eyebrow icon="🔌" variant="tag">Integrations & data</Eyebrow>
            <h2 className="mt-3.5">
              Connects to the tools <span className="gradient-text">you already run on.</span>
            </h2>
          </div>

          {/* Integration chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12 reveal-on-scroll">
            {integrations.map((i) => (
              <span
                key={i.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/[0.03] text-white text-sm font-medium hover:bg-white/[0.06] transition-colors"
                style={{ borderColor: `${i.color}55` }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: i.color }}
                />
                {i.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Globe,
                title: "Native channels",
                body: "Meta (WhatsApp, Instagram, Facebook), TikTok, GA4, Google Search Console.",
              },
              {
                icon: Workflow,
                title: "Optional bundles",
                body: "Add full Becko CRM (leads, bookings, payments), Becko Studio (creatives), AI Deal Maker.",
              },
              {
                icon: Database,
                title: "Brand-scoped multi-tenant",
                body: "Webhooks out, REST API in. Every team member sees only their brand's conversations.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="reveal-on-scroll p-6 rounded-lg border border-line bg-surface hover:border-line-strong transition-colors"
              >
                <span className="inline-flex w-10 h-10 rounded-lg bg-brand/10 border border-brand/30 text-brand-light items-center justify-center mb-4">
                  <c.icon size={18} strokeWidth={1.9} />
                </span>
                <h3 className="text-[1.05rem] mb-1.5">{c.title}</h3>
                <p className="text-[0.92rem]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · SECURITY — compact */}
      <Section>
        <div className="max-w-[1000px] mx-auto reveal-on-scroll">
          <div
            className="rounded-xl border border-line p-8 md:p-10 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(85,204,225,0.08), rgba(108,131,255,0.06))",
            }}
          >
            <div
              aria-hidden
              className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-30 bg-brand"
            />
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <Eyebrow icon="🛡️" variant="tag">Security & compliance</Eyebrow>
                <h2 className="mt-3.5 text-[1.8rem]">
                  Platform-compliant. EU-hosted. STOP-respecting.
                </h2>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[0.95rem] text-ink-dim">
                  {[
                    "Tech Provider API scopes",
                    "Automated STOP / opt-out handling",
                    "Configurable data-retention windows",
                    "GDPR-ready (DPA available)",
                    "PCI-aware when bundled with Payments",
                    "Audit logs for every conversation action",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-brand-light flex-shrink-0 mt-0.5"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/security"
                className="btn btn-ghost whitespace-nowrap self-start md:self-center"
              >
                Read full posture
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 9 · PRICING TEASER */}
      <Section id="pricing">
        <SectionHead
          eyebrow={<Eyebrow icon="💼" variant="tag">Pricing</Eyebrow>}
          title={<>Start small. Scale to multi-brand without re-platforming.</>}
          description="Three tiers, all built on the same engine. Switch up any time."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={cn(
                "relative reveal-on-scroll rounded-lg border border-line p-7 flex flex-col bg-surface transition-all",
                t.featured && "border-brand shadow-glow",
              )}
              style={
                t.featured
                  ? {
                      background:
                        "linear-gradient(180deg, rgba(85,204,225,0.08), rgba(10,15,30,0.92))",
                    }
                  : undefined
              }
            >
              {t.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full text-[#04121a] whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(135deg, #55CCE1 0%, #2bb1c7 100%)",
                  }}
                >
                  Most popular
                </span>
              )}
              <h3 className="text-[1.25rem] mb-1">{t.name}</h3>
              <p className="text-[0.88rem] leading-snug min-h-[2.6em]">{t.tagline}</p>
              <div className="font-display font-extrabold text-white mt-5 mb-1 flex items-baseline gap-1.5">
                <span className="text-[2.25rem] leading-none">{t.price}</span>
                {t.unit && (
                  <span className="text-base text-ink-dim font-medium">{t.unit}</span>
                )}
              </div>
              <ul className="list-none p-0 mt-5 mb-7 space-y-2 flex-1">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2 items-start text-ink-dim text-[0.9rem] leading-snug"
                  >
                    <span className="text-brand font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={t.cta.href}
                className={cn("btn w-full mt-auto", t.featured ? "btn-primary" : "btn-ghost")}
              >
                {t.cta.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 reveal-on-scroll">
          <Link
            href="#pricing"
            className="text-brand-light hover:text-white text-sm font-semibold inline-flex items-center gap-1.5"
          >
            See full pricing comparison <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* 10 · SOCIAL PROOF */}
      <Section>
        <SectionHead
          eyebrow={<Eyebrow icon="✦" variant="tag">Loved by lean teams</Eyebrow>}
          title={<>Faster replies. Better numbers. Fewer apps.</>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal-on-scroll rounded-lg border border-line bg-surface p-7 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                aria-hidden
                className="text-5xl leading-none font-display text-brand-light mb-2 opacity-80"
              >
                "
              </span>
              <blockquote className="text-[0.98rem] text-ink leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-line">
                <div className="text-white font-semibold text-[0.92rem]">
                  {t.name}
                </div>
                <div className="text-ink-mute text-[0.8rem]">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Supported channel names */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-70 reveal-on-scroll">
          {["Meta", "WhatsApp", "Instagram", "Facebook", "TikTok"].map((b) => (
            <span
              key={b}
              className="text-[0.88rem] tracking-[0.18em] uppercase text-ink-mute font-semibold"
            >
              {b}
            </span>
          ))}
        </div>
      </Section>

      {/* 11 · FAQ */}
      <Section>
        <SectionHead
          eyebrow={<Eyebrow icon="❓" variant="tag">FAQ</Eyebrow>}
          title={<>Questions, answered.</>}
        />
        <div className="max-w-3xl mx-auto reveal-on-scroll">
          {faqs.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <p className="mt-4 text-[0.94rem]">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* 12 · FINAL CTA */}
      <CtaStrip
        title={
          <>
            Stop juggling tabs.{" "}
            <span className="gradient-text">Start closing conversations.</span>
          </>
        }
        description="14-day free trial · no card required · WhatsApp Cloud API provisioning on us."
        cta={{ href: "/contact?product=messenger", label: "Start free trial" }}
      />
    </>
  );
}

/* ───────────── small helpers ───────────── */

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div>
      <div className="text-[0.74rem] uppercase tracking-[0.1em] text-ink-mute mb-2">
        {label}
      </div>
      <div className="stat-value">{value}</div>
      <div className="text-ink-dim text-[0.86rem] mt-1">{sub}</div>
    </div>
  );
}

function PerfCard({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: "brand" | "pink";
}) {
  const grad =
    tone === "brand"
      ? "linear-gradient(135deg, rgba(85,204,225,0.12), rgba(108,131,255,0.06))"
      : "linear-gradient(135deg, rgba(221,42,123,0.12), rgba(245,133,41,0.06))";
  const border =
    tone === "brand" ? "border-brand/30" : "border-[#DD2A7B]/30";
  return (
    <div
      className={cn(
        "reveal-on-scroll rounded-xl p-7 border relative overflow-hidden",
        border,
      )}
      style={{ background: grad }}
    >
      <h3 className="text-[1.15rem] mb-2">{title}</h3>
      <p className="text-[0.94rem]">{body}</p>
    </div>
  );
}
