import type { Metadata } from "next";
import { Section, SectionHead } from "@/components/Section";
import { ModuleCard, ModuleGrid } from "@/components/ModuleCard";
import { PageHero } from "@/components/PageHero";
import { CtaStrip } from "@/components/CtaStrip";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Features",
  description:
    "The full Becko feature map — bookings, sales, finance, HR, marketing, messenger, content studio and more.",
};

type Feature = { icon: string; title: string; description: string };

const groups: {
  tagIcon: string;
  tagLabel: string;
  title: React.ReactNode;
  description?: string;
  features: Feature[];
}[] = [
  {
    tagIcon: "🧳",
    tagLabel: "Bookings",
    title: "A booking record that captures everything.",
    description:
      "From enquiry to ticketing, every detail of every booking — passengers, products, payments, commission, logs — sits in one record.",
    features: [
      { icon: "📋", title: "All Bookings", description: "Searchable, filterable table with status, supplier-status, payment-status, date and price filters." },
      { icon: "➕", title: "Create Booking", description: "Multi-step wizard — customer, passengers, products, financials, commission — with smart defaults." },
      { icon: "📥", title: "Import Booking", description: "Bulk-import from CSV, PNR or partner systems. PNR converter turns airline GDS strings into structured data." },
      { icon: "📊", title: "Pipeline", description: "Drag-and-drop kanban from enquiry → confirmed → ticketed, with stage automation and email logs." },
      { icon: "📈", title: "Product Analytics", description: "Which destinations, hotels or airlines drive your margin. Slice by brand, agent and date range." },
      { icon: "🗂️", title: "Templates", description: "Save high-converting itineraries as templates and reuse them in one click for repeat customers." },
      { icon: "🐞", title: "Error Tracking", description: "Logs every failed payment, broken supplier sync and reconciliation mismatch — so nothing silently breaks." },
      { icon: "👥", title: "Team Management", description: "Assign bookings to agents, set load thresholds and re-distribute work when someone's on leave." },
      { icon: "🎫", title: "Tickets", description: "Customer-facing tickets and admin tickets — one inbox per agent, one queue for managers." },
      { icon: "🔗", title: "Share Links", description: "Generate a token-secured link to share booking details with customers — they can pay in one click." },
      { icon: "🔒", title: "Booking Lock", description: "Lock high-value bookings to specific agents so nobody can edit them by accident." },
      { icon: "📝", title: "Activity Logs", description: "Every field change, who did it, when and why. Audit-ready by default." },
    ],
  },
  {
    tagIcon: "🎯",
    tagLabel: "Sales & CRM",
    title: "From lead to repeat customer, never lose the thread.",
    description: "Quotations, itineraries, customer 360 — all linked, all searchable, all ready for the next campaign.",
    features: [
      { icon: "👤", title: "Customer Profiles", description: "Every passport, preference, past trip, communication and outstanding balance in one record." },
      { icon: "🌟", title: "Customer Insights", description: "Lifetime value, repeat rate, favourite destinations and propensity-to-book scoring." },
      { icon: "🧭", title: "Masterview", description: "One screen for every sale across every brand. Roll up KPIs by team, brand or agent." },
      { icon: "🏆", title: "Team Performance", description: "Live leaderboards, conversion rates, average margin and quote-to-book times per agent." },
      { icon: "🏷️", title: "Brand Performance", description: "Per-brand bookings, margin, refunds and customer sentiment." },
      { icon: "🎯", title: "Leads Management", description: "Unified lead inbox from Facebook, Instagram, WhatsApp, website and walk-ins." },
      { icon: "📄", title: "Quotations", description: "Beautiful, branded quotes generated from booking products. Customers accept or counter in one click." },
      { icon: "🗺️", title: "Itineraries", description: "Day-by-day itinerary builder with combinations, custom inclusions and a public share link." },
      { icon: "🧩", title: "Combinations", description: "Pre-bundle multi-destination packages once, sell them many times." },
      { icon: "📊", title: "Quotation Analytics", description: "Which quotes won, which lost, and at what price-point. Stop guessing your win rate." },
    ],
  },
  {
    tagIcon: "💼",
    tagLabel: "Finance & Accounting",
    title: "A full agency-native finance suite.",
    description: "Built so that finance teams can close the books without exporting a single CSV. Designed with travel quirks in mind.",
    features: [
      { icon: "🧾", title: "Invoices", description: "Auto-generated from bookings. Balance-payment tracking, reminders, reconciliation and reports." },
      { icon: "💰", title: "Commissions", description: "Per-agent, per-brand ledger of earned, claimed, paid and remaining commission. Catches what spreadsheets miss." },
      { icon: "📒", title: "General Journal", description: "Auto-posted entries with debit & credit reconciliation views — a real double-entry GL." },
      { icon: "🏦", title: "Bank Ledger", description: "Every transaction, every account. Upload statements; AI categorisation suggests the right account." },
      { icon: "🔄", title: "Bank Reconciliation", description: "One-click bank reconciliation with reusable category rules. Bulk-categorise hundreds of rows." },
      { icon: "🛡️", title: "Becko Audit", description: "Audit-grade income, expense, transfer and management-account drill-downs." },
      { icon: "📈", title: "Cashflow Forecast", description: "30/60/90-day forward cashflow built from confirmed bookings, supplier dues and recurring expenses." },
      { icon: "📊", title: "P&L Statement", description: "Real-time P&L by brand, agent or period — exportable for accountants." },
      { icon: "📋", title: "Balance Sheet", description: "Always-on balance sheet with travel-specific accounts (bed bank credits, supplier deposits, etc.)." },
      { icon: "↩️", title: "Refunds", description: "Track refunds end-to-end with reason codes and supplier claw-back." },
      { icon: "💳", title: "Payment Gateways", description: "Stripe, PayPal and local rails — reconciled the moment money lands." },
      { icon: "⏰", title: "Payment Reminders", description: "Automated balance-due reminders by email and WhatsApp." },
      { icon: "🛌", title: "Bed Banks", description: "Track Hotelbeds, Webbeds and other bed-bank balances against your spend." },
      { icon: "📑", title: "Category Rules", description: "Train the system once — every future bank line in that pattern auto-categorises." },
    ],
  },
  {
    tagIcon: "🏨",
    tagLabel: "Suppliers",
    title: "Your supplier book — finally on the same page as your sales.",
    features: [
      { icon: "🏨", title: "Supplier Profiles", description: "Contact, payment terms, commercial agreements and historical performance per supplier." },
      { icon: "💸", title: "Supplier Cashflow", description: "Who you owe, when it's due, and what payments matched which bookings." },
      { icon: "📒", title: "Reconcile Supplier", description: "Match supplier statements line-by-line. Flag mismatches and credit notes automatically." },
      { icon: "📊", title: "Supplier Reports", description: "Volume, margin and reliability per supplier — pick winners with data, not gut feel." },
    ],
  },
  {
    tagIcon: "💬",
    tagLabel: "Unified Messenger",
    title: "One inbox for WhatsApp, Instagram, Facebook & comments.",
    features: [
      { icon: "📥", title: "Inbox", description: "Threaded multi-channel inbox per brand. Assign, snooze, tag, internal-note." },
      { icon: "👥", title: "Contacts & Users", description: "Every messenger contact is auto-linked to their customer profile." },
      { icon: "🧠", title: "AI Flow Agents", description: "Train an AI agent on playbooks, FAQs, and product catalogs. It books leads while you sleep." },
      { icon: "📡", title: "Pipeline", description: "A sales pipeline for conversations — leads progress from chat to confirmed booking visibly." },
      { icon: "📈", title: "Conversation Metrics", description: "Response time, resolution rate, agent vs. AI handle-time. SLA-ready." },
      { icon: "💚", title: "WhatsApp Business", description: "Templates, broadcasts, catalogs, deep-links, onboarding and compliance — all baked in." },
      { icon: "📣", title: "Broadcasts", description: "Segmented WhatsApp & Facebook broadcasts with delivery, read and reply tracking." },
      { icon: "📚", title: "Catalogs", description: "Sync your destinations to WhatsApp catalogs so customers can browse and tap to enquire." },
      { icon: "🔗", title: "Deep Links", description: "One link, lands them in WhatsApp with the right brand, the right agent, the right context." },
      { icon: "💬", title: "Comments", description: "Pull Facebook & Instagram comments into the inbox — never miss a public reply." },
    ],
  },
  {
    tagIcon: "📣",
    tagLabel: "Marketing",
    title: "Spend less, book more.",
    features: [
      { icon: "🎯", title: "Campaigns", description: "Plan, budget and measure cross-channel campaigns. Compare spend to bookings actually generated." },
      { icon: "📊", title: "Analytics", description: "Social, website and campaign analytics in one dashboard — per brand." },
      { icon: "🪝", title: "Lead Capture", description: "Facebook lead-ads, web forms, walk-in capture — straight into your sales pipeline." },
      { icon: "🔁", title: "Remarketing", description: "Audience-build past customers, abandoned quotes, and seasonal lookalikes — push to Meta in one click." },
      { icon: "🤖", title: "AI Deal Maker", description: "Detects under-utilised inventory and proposes destination-specific offers to the right customers." },
      { icon: "🎁", title: "Loyalty Programs", description: "Tiered programs with points, referrals and birthday triggers." },
      { icon: "📺", title: "Social Channels", description: "Plan and publish to Facebook, Instagram, TikTok from one composer." },
      { icon: "🎨", title: "Content Library", description: "One central place for all your brand assets, captions, hashtags and design templates." },
    ],
  },
  {
    tagIcon: "🎬",
    tagLabel: "Becko Studio",
    title: "A creative studio inside your operating system.",
    features: [
      { icon: "🎞️", title: "Video Creator", description: "Scene-based video editor — captions, gradients, shapes, Lottie, GIF, image and noise compositions." },
      { icon: "📚", title: "Template Gallery", description: "Hundreds of travel-specific video, story and reel templates. Drop in your destination and go." },
      { icon: "🧠", title: "AI Templates", description: "Generate on-brand templates from a prompt — keep colours, fonts and logo locked." },
      { icon: "✍️", title: "Caption Studio", description: "Auto-caption travel videos in multiple languages with destination-aware vocab." },
      { icon: "🔄", title: "Media Converter", description: "Convert assets to the right ratio & codec for Reels, Stories, TikTok and YouTube Shorts." },
      { icon: "🖼️", title: "Thumbnail Generator", description: "Generate scroll-stopping thumbnails with destination images, text overlays and brand colours." },
      { icon: "💾", title: "Asset Library", description: "Per-brand assets, fonts and logos so every output is on-brand without rework." },
    ],
  },
  {
    tagIcon: "👥",
    tagLabel: "HR & Planner",
    title: "The internal-ops layer most agency tools forget.",
    features: [
      { icon: "📅", title: "Attendance", description: "Daily clock-in, punctuality reports and remote-work tracking." },
      { icon: "🏖️", title: "Leave Management", description: "Apply, approve and calendar-view leave across your whole team." },
      { icon: "👤", title: "Employee Records", description: "Personal, contractual and document storage — searchable and access-controlled." },
      { icon: "🏷️", title: "Brand Management", description: "Assign employees to brands; brand-specific permissions and visibility." },
      { icon: "📁", title: "File Management", description: "HR documents, contracts and policies — version-controlled and acknowledgement-tracked." },
      { icon: "📊", title: "HR Reporting", description: "Headcount, attrition, attendance and leave-balance reports — at any rollup." },
      { icon: "🤖", title: "HR Agent", description: "AI HR assistant for policy questions, leave balances and document lookups." },
      { icon: "🗓️", title: "Planner", description: "Cross-team task management, with insights on what's slipping and who's overloaded." },
    ],
  },
  {
    tagIcon: "⚙️",
    tagLabel: "Platform",
    title: "Built like a serious business tool.",
    features: [
      { icon: "🛡️", title: "Role-based Permissions", description: "Menu permissions, user permissions and per-action access. Every screen is permissioned." },
      { icon: "📋", title: "Activity Log", description: "Audit trail of every meaningful change across the platform." },
      { icon: "📤", title: "Data Exports", description: "Export any dataset — bookings, finance, customers — to CSV or accounting integrations." },
      { icon: "🚦", title: "System Status", description: "Live status of integrations, queues and uptime." },
      { icon: "🔔", title: "Notifications", description: "Smart in-app, email and WhatsApp notifications tuned by role." },
      { icon: "📰", title: "Feed", description: "An internal social feed for company announcements, wins, kudos and policies." },
      { icon: "💬", title: "Internal Chats", description: "Direct and group chats inside Becko — no more Slack tax for small teams." },
      { icon: "📣", title: "Announcements", description: "Targeted internal announcements with read tracking." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Becko platform"
        title={
          <>
            Every job a travel agency does —{" "}
            <span className="gradient-text">in one place.</span>
          </>
        }
        description="Below is the full map of what Becko does out of the box. Click any module to see it in depth."
      />

      {groups.map((g, i) => (
        <Section key={i}>
          <SectionHead
            eyebrow={
              <Eyebrow icon={g.tagIcon} variant="tag">
                {g.tagLabel}
              </Eyebrow>
            }
            title={g.title}
            description={g.description}
          />
          <ModuleGrid cols={4}>
            {g.features.map((f) => (
              <ModuleCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </ModuleGrid>
        </Section>
      ))}

      <CtaStrip
        title="Want a walkthrough?"
        description="The fastest way to understand Becko is to see your own agency's workflows mapped onto it. 30 minutes, no commitment."
      />
    </>
  );
}
