export type Plan = {
  name: string;
  tagline: string;
  userRange: string;
  price: string; // "$500" or "Custom"
  unit?: string; // "/month"
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export type ProductLine = {
  id: "sales" | "full";
  shortLabel: string;
  longLabel: string;
  description: string;
  plans: Plan[];
};

export const productLines: ProductLine[] = [
  {
    id: "sales",
    shortLabel: "Sales & Marketing",
    longLabel: "Sales & Marketing Suite",
    description:
      "A focused engine for lead capture, quoting, content, and conversion — the fastest way to bring order to your travel funnel.",
    plans: [
      {
        name: "Starter",
        tagline: "For small travel teams getting organised",
        userRange: "1–5 users",
        price: "$500",
        unit: "/month",
        features: [
          "1–5 users",
          "Leads, quotations, itineraries",
          "Sales dashboards and analytics",
          "Marketing campaigns & engagement tools",
          "Internal chats, tasks and notifications",
        ],
        cta: { label: "Start free trial", href: "/contact" },
      },
      {
        name: "Growth",
        tagline: "For growing agencies managing higher lead volume",
        userRange: "6–25 users",
        price: "$1,500",
        unit: "/month",
        features: [
          "6–25 users",
          "Everything in Starter",
          "Advanced pipeline visibility",
          "Team collaboration tools",
          "Multi-user workflow support",
          "Better reporting depth",
        ],
        cta: { label: "Book a demo", href: "/contact" },
        featured: true,
      },
      {
        name: "Scale",
        tagline: "For established travel businesses running at volume",
        userRange: "26–50 users",
        price: "$2,250",
        unit: "/month",
        features: [
          "26–50 users",
          "Everything in Growth",
          "Deeper operational visibility",
          "Stronger role structure",
          "Higher usage capacity",
          "Priority support",
        ],
        cta: { label: "Book a demo", href: "/contact" },
      },
      {
        name: "Enterprise",
        tagline: "For multi-team and multi-brand operations",
        userRange: "50+ users",
        price: "Custom",
        features: [
          "50+ users",
          "Custom onboarding",
          "Custom usage limits",
          "Dedicated support",
          "Tailored rollout plan",
        ],
        cta: { label: "Talk to sales", href: "/contact" },
      },
    ],
  },
  {
    id: "full",
    shortLabel: "Full Platform",
    longLabel: "Business OS / Full Platform",
    description:
      "Everything in Sales & Marketing — plus finance, invoicing, HR, permissions and the full Becko operating system.",
    plans: [
      {
        name: "Core",
        tagline: "Run more than sales in one connected workspace",
        userRange: "1–5 users",
        price: "$750",
        unit: "/month",
        features: [
          "1–5 users",
          "Sales + Marketing Suite included",
          "Invoicing and finance tools",
          "Team management and permissions",
          "Department dashboards",
          "Internal operations workflows",
        ],
        cta: { label: "Start free trial", href: "/contact" },
      },
      {
        name: "Business",
        tagline: "For agencies ready to centralise the whole company",
        userRange: "6–25 users",
        price: "$2,250",
        unit: "/month",
        features: [
          "6–25 users",
          "Everything in Core",
          "Finance management",
          "Reconciliation and audit workflows",
          "Role-based user controls",
          "Cross-department visibility",
        ],
        cta: { label: "Book a demo", href: "/contact" },
        featured: true,
      },
      {
        name: "Scale",
        tagline: "For agencies running end-to-end operations on one platform",
        userRange: "26–50 users",
        price: "$3,500",
        unit: "/month",
        features: [
          "26–50 users",
          "Everything in Business",
          "Advanced management oversight",
          "Multi-department reporting",
          "Higher automation capacity",
          "Priority support and onboarding",
        ],
        cta: { label: "Book a demo", href: "/contact" },
      },
      {
        name: "Enterprise",
        tagline: "For larger travel companies with complex operations",
        userRange: "50+ users",
        price: "Custom",
        features: [
          "50+ users",
          "Enterprise onboarding",
          "Custom deployment scope",
          "Dedicated support model",
          "Optional integrations & migration support",
        ],
        cta: { label: "Talk to sales", href: "/contact" },
      },
    ],
  },
];

export const pricingNotes = [
  "Billed monthly",
  "Save 15% with annual billing",
  "Onboarding & migration available",
  "Custom enterprise rollout available",
];

export type Addon = {
  title: string;
  description: string;
  price: string;
};

export const addons: Addon[] = [
  {
    title: "Onboarding & setup",
    description: "Guided rollout with a Becko specialist — playbooks, configuration, brand setup, training.",
    price: "$1,000 – $5,000 · one-time",
  },
  {
    title: "Data migration",
    description: "We bring across bookings, customers, suppliers and finance balances from your existing tools.",
    price: "Custom",
  },
  {
    title: "Additional brand / workspace",
    description: "Extra branded workspace for multi-brand groups — own inbox, own pipeline, own books.",
    price: "$200 – $400 / month",
  },
  {
    title: "Premium AI credits",
    description: "Top up Flow Agent, Deal Maker and HR Agent usage for high-volume agencies.",
    price: "Usage-based",
  },
  {
    title: "Dedicated support",
    description: "Named account manager, SLA-backed response times, monthly business reviews.",
    price: "Custom",
  },
];
