export const site = {
  name: "Becko",
  tagline: "The operating system for modern travel agencies.",
  description:
    "Becko is the all-in-one travel agency platform that unifies bookings, finance, sales, CRM, marketing, messenger, HR, and content into a single intelligent workspace.",
  url: "https://becko.app",
  contact: {
    email: "hello@becko.app",
    privacyEmail: "privacy@becko.app",
    securityEmail: "security@becko.app",
    abuseEmail: "abuse@becko.app",
    dmcaEmail: "dmca@becko.app",
  },
  company: {
    legalName: "BECKO - TRAVEL OS LTD",
    registrationNumber: "17232783",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/modules/bookings", label: "Modules" },
  { href: "/products/messenger", label: "Messenger" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const modules = [
  {
    slug: "bookings",
    icon: "🧳",
    title: "Bookings",
    summary:
      "End-to-end booking lifecycle — pipeline, passengers, products, locks, logs, refunds, tickets.",
  },
  {
    slug: "sales-crm",
    icon: "🎯",
    title: "Sales & CRM",
    summary:
      "Leads, quotations, itineraries, combinations and a single 360° customer profile.",
  },
  {
    slug: "finance",
    icon: "💼",
    title: "Finance & Accounting",
    summary:
      "Invoices, journals, P&L, balance sheet, commission ledger, bank reconciliation — agency-native.",
  },
  {
    slug: "messenger",
    icon: "💬",
    title: "Unified Messenger",
    summary:
      "WhatsApp, Instagram, Facebook, and Email in one inbox with AI flow agents and broadcasts.",
  },
  {
    slug: "marketing",
    icon: "📣",
    title: "Marketing Suite",
    summary:
      "Campaigns, lead capture, remarketing, loyalty programs and an AI deal maker that books revenue.",
  },
  {
    slug: "studio",
    icon: "🎬",
    title: "Becko Studio",
    summary:
      "Video creator, AI templates, captions and asset library — make on-brand content without a designer.",
  },
  {
    slug: "hr",
    icon: "👥",
    title: "HR & People",
    summary:
      "Employees, attendance, leave, brand & profile management, plus an AI HR agent.",
  },
  {
    slug: "planner",
    icon: "🗓️",
    title: "Planner",
    summary:
      "Cross-team task management with insights on what's slipping and who's overloaded.",
  },
] as const;

export const footerLinks = {
  product: [
    { href: "/features", label: "All features" },
    { href: "/products/messenger", label: "Messenger (standalone)" },
    { href: "/modules/bookings", label: "Bookings" },
    { href: "/modules/sales-crm", label: "Sales & CRM" },
    { href: "/modules/finance", label: "Finance" },
    { href: "/modules/messenger", label: "Messenger" },
    { href: "/modules/marketing", label: "Marketing" },
    { href: "/modules/studio", label: "Becko Studio" },
    { href: "/modules/hr", label: "HR" },
    { href: "/modules/planner", label: "Planner" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/do-not-sell", label: "Do not sell" },
    { href: "/data-processing-addendum", label: "DPA" },
    { href: "/subprocessors", label: "Subprocessors" },
    { href: "/gdpr", label: "GDPR" },
    { href: "/cookie-policy", label: "Cookie policy" },
    { href: "/terms", label: "Terms" },
    { href: "/acceptable-use-policy", label: "Acceptable use" },
    { href: "/ai-usage-policy", label: "AI usage" },
    { href: "/copyright-dmca", label: "Copyright & DMCA" },
    { href: "/data-deletion", label: "Data deletion" },
    { href: "/security", label: "Security" },
  ],
} as const;
