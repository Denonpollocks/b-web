import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { Split, FeatList } from "@/components/Split";
import { ModuleCard, ModuleGrid } from "@/components/ModuleCard";
import { CtaStrip } from "@/components/CtaStrip";
import { Eyebrow } from "@/components/Eyebrow";
import { KanbanMock } from "@/components/mocks/KanbanMock";
import { StatTile } from "@/components/mocks/StatTile";
import { MockList } from "@/components/mocks/MockList";

export const metadata: Metadata = {
  title: "Bookings",
  description:
    "A complete booking management system built for travel agencies — pipeline, passengers, products, payments, commissions and logs in one record.",
};

export default function BookingsModule() {
  return (
    <>
      <PageHero
        eyebrow={<Eyebrow icon="🧳">Bookings module</Eyebrow>}
        title={
          <>
            The booking record,{" "}
            <span className="gradient-text">rebuilt for modern agencies.</span>
          </>
        }
        description="One canonical record per booking — passengers, products, payments, commission, supplier flow, logs — with a pipeline that's actually usable and a template engine that turns repeat trips into one-click revenue."
        primaryCta={{ href: "/contact", label: "See it on your data" }}
        secondaryCta={{ href: "/features", label: "All features" }}
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Pipeline</span>
            <h2 className="mt-3.5">A pipeline that mirrors how travel actually moves.</h2>
            <p>
              Enquiry. Quoted. Confirmed. Ticketed. Travelling. Closed. Drag bookings between
              stages, set automation per stage, and never wonder again what each agent is
              sitting on.
            </p>
            <FeatList
              items={[
                "Drag-and-drop kanban with bulk-actions",
                "Per-stage automations (send invoice, request balance, request docs)",
                "Email logs attached to every booking — never lose a thread",
                "Lock high-value bookings to specific agents",
              ]}
            />
          </>
        }
        visual={
          <KanbanMock
            columns={[
              {
                title: "Enquiry · 18",
                cards: [
                  { name: "Bali · S. Khan", meta: "Honeymoon, 7n", price: "$4,210" },
                  { name: "Maldives · J. Patel", meta: "Family, 5n", price: "$6,800" },
                ],
              },
              {
                title: "Quoted · 9",
                cards: [
                  { name: "Dubai · Bardot", meta: "City break", price: "$3,150" },
                  { name: "Sri Lanka · R. Mendis", meta: "Anniversary", price: "$5,420" },
                ],
              },
              {
                title: "Confirmed · 12",
                cards: [{ name: "Phuket · M. Lee", meta: "Group of 6", price: "$5,420" }],
              },
              {
                title: "Ticketed · 7",
                cards: [{ name: "Mauritius · D. Roy", meta: "9n villa", price: "$8,940" }],
              },
            ]}
          />
        }
      />

      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">The Record</span>
            <h2 className="mt-3.5">Every detail of a booking in one place.</h2>
            <p>
              Passengers, products, financials, commissions, supplier status, tickets, share
              links, and a complete activity log. No more juggling four tools to answer one
              customer email.
            </p>
            <FeatList
              items={[
                <>
                  <strong>Passengers</strong> — passport, DOB, dietary, special requests
                </>,
                <>
                  <strong>Products</strong> — flights, stays, transfers, activities — with supplier and cost
                </>,
                <>
                  <strong>Financials</strong> — sell price, cost, margin, payments, balance due
                </>,
                <>
                  <strong>Commission</strong> — earned, claimed, paid, remaining — per agent
                </>,
                <>
                  <strong>Logs</strong> — every change, every email, every payment
                </>,
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-2 gap-2.5 mb-3">
              <StatTile label="Sell price" value="$6,800" />
              <StatTile label="Margin" value="23.4%" />
              <StatTile label="Paid" value="$4,080" />
              <StatTile label="Balance" value="$2,720" delta="" deltaTone="warm" />
            </div>
            <MockList
              rows={[
                { left: "👤 Passenger · Jay Patel", tag: { label: "Verified" } },
                { left: "✈ Emirates EK 525 · 14 Nov", tag: { label: "Ticketed" } },
                { left: "🏨 W Maldives · 5n", tag: { label: "Confirmed" } },
                { left: "🚤 Speed boat transfer", tag: { label: "Confirmed" } },
                {
                  left: "💼 Commission · Agent Nia",
                  tag: { label: "Pending", tone: "warm" },
                },
              ]}
            />
          </div>
        }
      />

      <Section>
        <SectionHead title="Every job a booking workflow needs." description="Below: every screen Becko ships for bookings." />
        <ModuleGrid cols={4}>
          <ModuleCard icon="📋" title="All Bookings" description="Filter by status, supplier, payment status, agent, brand, date or price range. Save filter presets per agent." />
          <ModuleCard icon="➕" title="Create Booking" description="Wizard captures customer, passengers, products, financials, commission and supplier — with sensible defaults." />
          <ModuleCard icon="📥" title="Import Booking" description="Bulk import from CSV or paste a GDS PNR string — Becko parses and structures it for you." />
          <ModuleCard icon="🗂️" title="Booking Templates" description="Save proven itineraries as templates. Clone in one click for repeat customers." />
          <ModuleCard icon="🎫" title="Booking Tickets" description="Customer tickets (issues, special requests) and admin tickets (escalations) — one queue per agent." />
          <ModuleCard icon="📊" title="Product Analytics" description="Top-performing destinations, hotels, airlines. Cut by brand, agent or date." />
          <ModuleCard icon="🐞" title="Error Tracking" description="Every failed payment, broken sync or supplier mismatch surfaces here. Triage in one screen." />
          <ModuleCard icon="👥" title="Team Management" description="Workload heatmap, ownership rules, and one-click re-assignment when someone is on leave." />
          <ModuleCard icon="🔗" title="Share with Customer" description="Token-secured share link customers open to view their booking and pay any balance due." />
          <ModuleCard icon="🔒" title="Booking Lock" description="Lock a booking so only its owner can edit. Stop accidental over-writes on high-value trips." />
          <ModuleCard icon="⚙️" title="Settings" description="Configure stages, automations, document templates and per-brand rules." />
          <ModuleCard icon="📝" title="Booking Logs" description="An append-only audit trail per booking. Who changed what, when, why." />
        </ModuleGrid>
      </Section>

      <Section>
        <SectionHead
          eyebrow={<span className="tag-pill">Pain → Solved</span>}
          title="What this fixes today."
        />
        <ModuleGrid>
          <ModuleCard title={'"I can\'t find the latest version of the itinerary"'} description="Templates + share links + activity log means there's exactly one canonical booking record — and a customer always sees the latest." />
          <ModuleCard title={'"Two agents quoted the same lead at different prices"'} description="Booking lock + ownership rules + pipeline visibility kills double-quotes dead." />
          <ModuleCard title={'"We can\'t tell which destinations actually make money"'} description="Product analytics shows margin by destination, supplier and agent — not just top-line revenue." />
          <ModuleCard title={'"Re-typing the same trip for the 12th time"'} description="Templates and combinations turn repeat-business into one-click work." />
        </ModuleGrid>
      </Section>

      <CtaStrip
        title="Replace your booking spreadsheet today."
        description="Migration takes a week. Your team is operating cleaner by the weekend."
      />
    </>
  );
}
