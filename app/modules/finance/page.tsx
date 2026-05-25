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
  title: "Finance & Accounting",
  description:
    "Travel-native accounting — invoices, journals, P&L, balance sheet, commission ledger and bank reconciliation. No bolt-on, no QuickBooks workaround.",
};

export default function FinanceModule() {
  return (
    <>
      <PageHero
        eyebrow={<Eyebrow icon="💼">Finance & Accounting</Eyebrow>}
        title={
          <>
            Travel-native accounting.{" "}
            <span className="gradient-text">No bolt-on, no workaround.</span>
          </>
        }
        description="Every booking auto-posts the right journal entries. Bank statements reconcile themselves. Commissions, refunds, bed-bank credits and supplier balances stay clean — and a real P&L is one click away."
        primaryCta={{ href: "/contact", label: "Book a demo" }}
        secondaryCta={{ href: "/features", label: "All features" }}
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Auto-journal</span>
            <h2 className="mt-3.5">Booking happens → the GL updates itself.</h2>
            <p>
              Every booking, refund, supplier payment and commission posts the right
              double-entry journal automatically. You're never "writing journals at month-end"
              again.
            </p>
            <FeatList
              items={[
                "Auto-post booking revenue, supplier cost, commission and tax",
                "Refund handling with supplier claw-back & customer credit notes",
                "Multi-currency with realised/unrealised FX",
                "Period close with audit-grade lock-down",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="text-[0.78rem] text-ink-mute uppercase tracking-[0.12em] mb-2.5">
              Journal · Booking #4821
            </div>
            <MockList
              rows={[
                {
                  left: "Dr · Trade Receivables",
                  right: <span className="text-white font-semibold">$6,800.00</span>,
                },
                {
                  left: "Cr · Revenue — Maldives",
                  right: <span className="text-white font-semibold">$6,800.00</span>,
                },
                {
                  left: "Dr · Cost of Sale",
                  right: <span className="text-white font-semibold">$5,210.00</span>,
                },
                {
                  left: "Cr · Supplier — W Maldives",
                  right: <span className="text-white font-semibold">$5,210.00</span>,
                },
                {
                  left: "Dr · Commission Expense",
                  right: <span className="text-white font-semibold">$272.00</span>,
                },
                {
                  left: "Cr · Commission Payable · Nia",
                  right: <span className="text-white font-semibold">$272.00</span>,
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
            <span className="tag-pill">Bank reconciliation</span>
            <h2 className="mt-3.5">Bulk-match a month of bank lines in 90 seconds.</h2>
            <p>
              Upload statements (CSV, OFX, PDF). AI suggests categories. Set a rule once —
              every future line matching that pattern auto-categorises. Reconciliation goes
              from days to minutes.
            </p>
            <FeatList
              items={[
                "Statement upload & auto-parse",
                "AI-suggested categorisation & bulk-actions bar",
                "Reusable category rules with pattern matching",
                "Per-statement detail view with mismatch flagging",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <MockList
              rows={[
                { left: "STRIPE PAYOUT 11-Aug", tag: { label: "Auto-rule · Stripe sweep" } },
                {
                  left: "HOTELBEDS TOPUP",
                  tag: { label: "Auto-rule · Bed bank", tone: "blue" },
                },
                { left: "EMIRATES AIRLINES", tag: { label: "Auto-rule · Airline cost" } },
                { left: "WELLS FARGO FEE", tag: { label: "Bank fee" } },
                {
                  left: "UNKNOWN · CHQ 11421",
                  tag: { label: "Needs review", tone: "warm" },
                },
              ]}
            />
            <div className="mt-3.5 p-3.5 bg-brand/[0.08] border border-line-strong rounded-sm text-[0.86rem] text-white">
              ✦ <strong>147 of 152</strong> lines auto-categorised. Train 1 new rule to clear
              the rest.
            </div>
          </div>
        }
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Commissions</span>
            <h2 className="mt-3.5">A commission ledger that never forgets.</h2>
            <p>
              Every booking's commission is earned, claimed, paid and remaining — per agent,
              per brand. No more "I think we owe Nia for August" — you'll know to the cent.
            </p>
            <FeatList
              items={[
                "Per-agent ledger with earned, claimed, paid, remaining",
                "Commission-change tracking with audit trail",
                "Claimed-commission workflow with manager approvals",
                "Supplier overrides & tiered structures supported",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-2 gap-2.5 mb-3">
              <StatTile label="Earned YTD" value="$48.2k" />
              <StatTile label="Paid" value="$31.4k" />
              <StatTile label="Claimed pending" value="$11.6k" deltaTone="warm" />
              <StatTile label="Unclaimed" value="$5.2k" />
            </div>
            <MockList
              rows={[
                {
                  left: "Nia · Maldives × 8 bookings",
                  tag: { label: "$2,180 paid" },
                },
                {
                  left: "Imran · Dubai × 11 bookings",
                  tag: { label: "$1,920 paid" },
                },
                {
                  left: "Sara · Bali × 6 bookings",
                  tag: { label: "$840 claimed", tone: "warm" },
                },
              ]}
            />
          </div>
        }
      />

      <Section>
        <SectionHead title="A full finance suite, agency-native." />
        <ModuleGrid cols={4}>
          <ModuleCard icon="🧾" title="Invoices" description="Auto-issued from bookings. Balance payments, reminders, reconciliation, reports and logs." />
          <ModuleCard icon="📒" title="General Journal" description="True double-entry GL with debit & credit reconciliation views." />
          <ModuleCard icon="🏦" title="Bank Ledger" description="Every bank account, every transaction — searchable, exportable, sliceable." />
          <ModuleCard icon="📊" title="P&L Statement" description="Live P&L by brand, agent or period. Drill into any number." />
          <ModuleCard icon="📋" title="Balance Sheet" description="Always-on balance sheet with travel-specific accounts (bed bank credits, supplier deposits)." />
          <ModuleCard icon="📈" title="Cashflow Forecast" description="Forward 30/60/90 cashflow from confirmed bookings, supplier dues and recurring spend." />
          <ModuleCard icon="↩️" title="Refunds" description="Customer credit notes & supplier claw-back, with reason codes." />
          <ModuleCard icon="🛌" title="Bed Banks" description="Track Hotelbeds, Webbeds and similar balance accounts against your spend." />
          <ModuleCard icon="💳" title="Payment Gateways" description="Stripe, PayPal and local rails — reconciled the moment payouts land." />
          <ModuleCard icon="⏰" title="Payment Reminders" description="Automatic balance-due reminders by email and WhatsApp." />
          <ModuleCard icon="🛡️" title="Becko Audit" description="Audit-grade income, expense, transfer and management-account views." />
          <ModuleCard icon="📑" title="Category Rules" description="Train the system once — future bank lines auto-categorise." />
          <ModuleCard icon="💸" title="Expenses" description="Capture, approve and book operating expenses against the right cost centre." />
          <ModuleCard icon="⚙️" title="Finance Settings" description="Chart of accounts, FX, period-locks, tax codes and approval workflows." />
        </ModuleGrid>
      </Section>

      <CtaStrip
        title="Close the books in hours, not weeks."
        description="Becko's finance team builds the migration plan with your accountant. Aim: a clean close on month one."
      />
    </>
  );
}
