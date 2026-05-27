# Becko — Marketing Website (Next.js)

Marketing website for **Becko**, the all-in-one operating system for modern travel agencies.
Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **lucide-react** icons —
the same React stack as the Becko product app, so components and design tokens can flow
between marketing and product later.

## Setup

```bash
# install dependencies
npm install

# run dev server
npm run dev
# → http://localhost:3000

# production build
npm run build
npm run start
```

Node 18+ required.

## Project structure

```
claude-becko-website/
├── app/
│   ├── layout.tsx                  Root layout: fonts, Nav, Footer, metadata
│   ├── globals.css                 Tailwind + custom component classes
│   ├── page.tsx                    Homepage
│   ├── features/page.tsx           Full feature map
│   ├── pricing/page.tsx            Pricing tiers + FAQ
│   ├── about/page.tsx              About + manifesto
│   ├── contact/page.tsx            Book-a-demo form
│   └── modules/
│       ├── bookings/page.tsx
│       ├── sales-crm/page.tsx
│       ├── finance/page.tsx
│       ├── messenger/page.tsx
│       ├── marketing/page.tsx
│       ├── studio/page.tsx
│       ├── hr/page.tsx
│       └── planner/page.tsx
├── components/
│   ├── Nav.tsx                     Sticky nav with mobile menu (client)
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── PageHero.tsx                Reusable inner-page hero
│   ├── Section.tsx                 Section + SectionHead primitives
│   ├── ModuleCard.tsx              Feature card + grid
│   ├── Split.tsx                   Two-column copy/visual block + FeatList
│   ├── CtaStrip.tsx                Bottom-of-page CTA banner
│   ├── StatBand.tsx                Stat number row
│   ├── ContactForm.tsx             Demo request form (client)
│   ├── RevealOnScroll.tsx          IntersectionObserver scroll reveal
│   └── mocks/
│       ├── HeroViz.tsx             Fake dashboard mockup in the homepage hero
│       ├── KanbanMock.tsx          Pipeline kanban
│       ├── ChatMock.tsx            Multi-channel chat / HR-agent chat
│       ├── StatTile.tsx            Dashboard stat tile
│       └── MockList.tsx            Generic list row with tags
├── lib/
│   ├── cn.ts                       clsx + tailwind-merge helper
│   └── site.ts                     Nav, footer, modules data
├── tailwind.config.ts              Custom theme (Becko brand colors, fonts)
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## Routes

| Path | Source | Purpose |
| --- | --- | --- |
| `/` | `app/page.tsx` | Homepage — hero, problem, modules, splits, stats, why-Becko, CTA |
| `/features` | `app/features/page.tsx` | Full feature map across all modules |
| `/pricing` | `app/pricing/page.tsx` | Starter / Growth / Enterprise tiers + 7-question FAQ |
| `/about` | `app/about/page.tsx` | About + six product principles + manifesto |
| `/contact` | `app/contact/page.tsx` | Book-a-demo form + what-to-expect |
| `/modules/bookings` | `app/modules/bookings/page.tsx` | Bookings deep-dive |
| `/modules/sales-crm` | `app/modules/sales-crm/page.tsx` | Sales & CRM deep-dive |
| `/modules/finance` | `app/modules/finance/page.tsx` | Finance & accounting deep-dive |
| `/modules/messenger` | `app/modules/messenger/page.tsx` | WhatsApp/Insta/FB messenger deep-dive |
| `/modules/marketing` | `app/modules/marketing/page.tsx` | Marketing suite deep-dive |
| `/modules/studio` | `app/modules/studio/page.tsx` | Becko Studio (content creator) deep-dive |
| `/modules/hr` | `app/modules/hr/page.tsx` | HR module deep-dive |
| `/modules/planner` | `app/modules/planner/page.tsx` | Planner deep-dive |

Every route maps to a real module from the Becko product app (`booking-wizard-explore/`).

## Design tokens

Defined in `tailwind.config.ts`:

- **Background:** `bg-0` `#05080f` (page) · `bg-1` `#0a0f1e` · `bg-2` `#101729` · `bg-3` `#182238`
- **Ink:** `ink` `#e6edf7` · `ink-dim` `#9ba6bd` · `ink-mute` `#6b7693`
- **Brand:** `brand` `#55CCE1` · `brand-light` `#84EEFF` · `brand-deep` `#2bb1c7`
- **Accents:** `accent` `#6c83ff` · `accent-warm` `#ffb775` · `accent-pink` `#ff7ab8` · `accent-green` `#4ade80`
- **Surfaces:** `surface` `rgba(16,23,41,0.7)` · `surface-strong` `rgba(20,28,50,0.9)`
- **Fonts:** Inter (body) + Plus Jakarta Sans (display), both via `next/font/google`

Custom Tailwind component classes live in `app/globals.css`:
`.btn` `.btn-primary` `.btn-ghost` `.eyebrow` `.tag-pill` `.module-card` `.stat-band`
`.feat-list` `.cta-strip` `.visual-card` `.form-card` `.kanban*` `.chat-mock` `.bubble*`
`.faq-item` `.gradient-text` `.reveal-on-scroll`

## Legacy files to delete

The previous static-HTML version is still on disk as 0-byte stubs marked
`LEGACY FILE — safe to delete`. Once you're happy with the Next.js version, remove them:

```bash
cd claude-becko-website
rm -rf modules css js assets
rm index.html features.html pricing.html about.html contact.html
```

The `modules/` folder at the project root contains the legacy stubs. The new Next.js
module routes live under `app/modules/`, which is unrelated.

## Icons

All icons render as **lucide-react** SVGs, not emoji — for cross-OS consistency and crisp scaling.

The trick: cards still take an **emoji string** as the `icon` prop, but `lib/icons.tsx` maps it to a real Lucide component before render. Pages stay readable; the visual is consistent.

```tsx
// in any page
<ModuleCard icon="🧳" title="Bookings" description="..." />

// renders as a Lucide <Briefcase /> in your brand cyan
```

To use an icon in an eyebrow / tag pill, use the `<Eyebrow>` helper:

```tsx
import { Eyebrow } from "@/components/Eyebrow";

<PageHero
  eyebrow={<Eyebrow icon="💼">Finance & Accounting</Eyebrow>}
  …
/>

<SectionHead
  eyebrow={<Eyebrow icon="🎯" variant="tag">Sales & CRM</Eyebrow>}
  …
/>
```

To add a new emoji → icon mapping, edit `lib/icons.tsx`:

```ts
import { Rocket } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  // ...
  "🚀": Rocket,
};
```

If an emoji has no mapping, the original character is rendered as a fallback.

## Adding a new page

```bash
# Example: add a /case-studies page
mkdir -p app/case-studies
cat > app/case-studies/page.tsx <<'TSX'
import { PageHero } from "@/components/PageHero";
export default function Page() {
  return <PageHero eyebrow="Case studies" title="Real agencies." description="Real wins." />;
}
TSX
```

To make it appear in nav, add an entry to `navLinks` in `lib/site.ts`. To make it appear
in the footer, edit the relevant array in `footerLinks`.

## Contact forms (Nodemailer + Gmail)

Demo, DMCA, and Do Not Sell forms POST to `app/api/contact/route.ts` and send via Gmail.

1. Copy `.env.example` to `.env.local`
2. Create a [Google App Password](https://myaccount.google.com/apppasswords) for the Gmail account that will send mail
3. Set `GMAIL_USER` and `GMAIL_APP_PASSWORD` in `.env.local`
4. Optionally set `MAIL_TO_DEMO`, `MAIL_TO_DMCA`, and `MAIL_TO_PRIVACY` (defaults to hello@, dmca@, privacy@becko.app)

On Vercel, add the same variables under **Project → Settings → Environment Variables**.

## What this site sells

Becko consolidates twelve travel-agency tools into one OS:

1. **Bookings** — pipeline, templates, tickets, error tracking, team management, share links, lock, PNR converter
2. **Customers / CRM** — profiles, insights, lifetime value
3. **Sales** — masterview, performance, leads, quotations, itineraries, combinations, analytics
4. **Invoices** — balance payments, cashflow, reconciliation, reports, logs
5. **Suppliers** — cashflow, reports, reconciliation management
6. **Finance** — commissions, GL (debit/credit reconciliation), bank ledger, audit, category rules, cashflow forecast, P&L, balance sheet, refunds, payment gateways, payment reminders, bed banks
7. **HR** — dashboard, attendance, leave, employees, brand/profile/file management, reporting, **HR Agent (AI)**
8. **Planner** — tasks, insights, task management
9. **Feed / Chats / Notifications** — internal comms
10. **Marketing** — campaigns, analytics, leads, FB Leads, loyalty, AI Deal Maker, channels, social, **Messenger** (full FB/IG/WhatsApp suite: inbox, contacts, pipeline, flows, agents/playbooks/training/logs, analytics, conversation metrics, comments, broadcasts, catalogs, automations, deep-links, onboarding, compliance, subscribers)
11. **Becko Studio** — video creator, templates, AI templates + editor, captions, converter, thumbnails, assets
12. **Platform** — role-based menu/user permissions, activity log, system status, data exports, multi-brand, role-specific dashboards (sales agent / sales manager / admin manager / finance agent)

## License

Internal — © Becko 2026.
