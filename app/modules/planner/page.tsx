import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Split, FeatList } from "@/components/Split";
import { CtaStrip } from "@/components/CtaStrip";
import { Eyebrow } from "@/components/Eyebrow";
import { StatTile } from "@/components/mocks/StatTile";
import { MockList } from "@/components/mocks/MockList";

export const metadata: Metadata = {
  title: "Planner",
  description: "Cross-team task management, with insights on what's slipping and who's overloaded.",
};

const heatmap = [
  "bg-accent-green/50", "bg-accent-green/70", "bg-brand/60", "bg-accent-warm/70", "bg-red-500/70", "bg-accent-green/50",
  "bg-accent-green/40", "bg-brand/70", "bg-accent-green/60", "bg-accent-green/50", "bg-accent-warm/60", "bg-accent-green/40",
];

export default function PlannerModule() {
  return (
    <>
      <PageHero
        eyebrow={<Eyebrow icon="🗓️">Planner</Eyebrow>}
        title={
          <>
            Cross-team tasks{" "}
            <span className="gradient-text">that don't fall through.</span>
          </>
        }
        description="Becko Planner is the connective tissue between sales, ops, finance and content. Every task is linked to a booking, a customer or a campaign — so context never gets lost in chat."
        primaryCta={{ href: "/contact", label: "Book a demo" }}
        secondaryCta={{ href: "/features", label: "All features" }}
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Task Management</span>
            <h2 className="mt-3.5">Tasks linked to the work they actually serve.</h2>
            <p>
              Every task can attach to a booking, a customer, a quotation, an invoice or a
              campaign. Context jumps with the task — no more chasing across tabs to understand
              what someone's asking.
            </p>
            <FeatList
              items={[
                "Link tasks to bookings, customers, quotes, invoices, campaigns",
                "Assign, due-date, priority, subtasks, dependencies",
                "Kanban, list and calendar views",
                "WhatsApp + email task notifications",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <MockList
              rows={[
                { left: "Confirm flight times · Maldives #4821", tag: { label: "Today · Nia" } },
                { left: "Send balance reminder · Patel", tag: { label: "Overdue · Sara", tone: "warm" } },
                { left: "Approve Bali campaign creative", tag: { label: "Tomorrow · Imran" } },
                { left: "Reconcile Sept Emirates statement", tag: { label: "Fri · Finance", tone: "blue" } },
                { left: "Onboard new Hotelbeds tier", tag: { label: "Next wk · Ops" } },
              ]}
            />
          </div>
        }
      />

      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">Planner Insights</span>
            <h2 className="mt-3.5">See what's slipping. See who's drowning.</h2>
            <p>
              The insights view flags overdue tasks by owner, blocked dependencies, and load
              distribution across the team. Stop discovering problems in the Friday stand-up.
            </p>
            <FeatList
              items={[
                "Overdue heatmap per agent & per team",
                "Load distribution & capacity warnings",
                "SLA-aware escalation suggestions",
                "Weekly digest sent automatically",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-3 gap-2.5 mb-3.5">
              <StatTile label="Tasks open" value="182" />
              <StatTile label="Overdue" value="14" deltaTone="warm" />
              <StatTile label="Done this wk" value="96" />
            </div>
            <div className="grid grid-cols-6 gap-1.5">
              {heatmap.map((bg, i) => (
                <div key={i} className={`h-7 rounded ${bg}`}></div>
              ))}
            </div>
            <div className="text-[0.74rem] text-ink-mute mt-2">
              Per-agent task load · Mon → Sat
            </div>
          </div>
        }
      />

      <CtaStrip title="Connect the dots between teams." />
    </>
  );
}
