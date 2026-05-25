import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { Split, FeatList } from "@/components/Split";
import { ModuleCard, ModuleGrid } from "@/components/ModuleCard";
import { CtaStrip } from "@/components/CtaStrip";
import { Eyebrow } from "@/components/Eyebrow";
import { ChatMock } from "@/components/mocks/ChatMock";
import { StatTile } from "@/components/mocks/StatTile";
import { MockList } from "@/components/mocks/MockList";

export const metadata: Metadata = {
  title: "HR & People",
  description:
    "The internal ops layer most agency tools forget — employees, attendance, leave, file management, reporting and an AI HR agent.",
};

export default function HrModule() {
  return (
    <>
      <PageHero
        eyebrow={<Eyebrow icon="👥">HR & People</Eyebrow>}
        title={
          <>
            The internal-ops layer{" "}
            <span className="gradient-text">most agency tools forget.</span>
          </>
        }
        description="Attendance, leave, employee records, brand assignments, file management, reporting — and an AI HR agent that answers policy questions so your manager doesn't have to."
        primaryCta={{ href: "/contact", label: "Book a demo" }}
        secondaryCta={{ href: "/features", label: "All features" }}
      />

      <Split
        copy={
          <>
            <span className="tag-pill">HR Dashboard</span>
            <h2 className="mt-3.5">One screen for everything HR.</h2>
            <p>
              Headcount, on-leave today, punctuality this week, attrition trend, open tickets —
              everything an HR manager glances at first thing on Monday.
            </p>
            <FeatList
              items={[
                "Live headcount and on-leave-today counters",
                "Punctuality and attendance reports",
                "Per-brand and per-team headcount roll-ups",
                "Open HR tickets and pending approvals",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-2 gap-2.5 mb-3">
              <StatTile label="Headcount" value="68" delta="+4 QoQ" />
              <StatTile label="On leave today" value="6" />
              <StatTile label="Punctuality" value="94%" />
              <StatTile label="Open requests" value="11" />
            </div>
            <MockList
              rows={[
                { left: "Nia · Annual leave", tag: { label: "12 → 18 Sep" } },
                { left: "Imran · Sick leave", tag: { label: "Today", tone: "warm" } },
                { left: "Sara · WFH", tag: { label: "Approved", tone: "blue" } },
              ]}
            />
          </div>
        }
      />

      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">HR Agent</span>
            <h2 className="mt-3.5">An AI HR assistant trained on your policies.</h2>
            <p>
              "How much leave do I have left?" "What's the bonus formula this quarter?" "Where
              do I claim a visa?" The HR agent answers — pulling from your file management and
              policies — so HR managers stop being a help-desk.
            </p>
            <FeatList
              items={[
                "Trained on your policy documents & FAQs",
                "Personalised answers ('you have 6.5 days left')",
                "Full chat history and fullscreen mode",
                "Escalation to HR manager with one click",
              ]}
            />
          </>
        }
        visual={
          <ChatMock
            height="300px"
            threads={[
              { label: "HR Agent", active: true },
              { label: "Leave balance" },
              { label: "Visa claim" },
              { label: "Bonus FAQ" },
            ]}
            bubbles={[
              { type: "in", content: "How many leave days do I have left this year?" },
              {
                type: "ai",
                content: (
                  <>
                    You have <strong>6.5 days</strong> of annual leave remaining, plus 2 days
                    of casual leave. Your next entitlement adds 1.5 days on 1 Oct.
                  </>
                ),
              },
              { type: "in", content: "Can I carry them forward?" },
              {
                type: "ai",
                content:
                  "Up to 5 days carry forward automatically per the policy. Your manager can approve more — want me to draft the request?",
              },
            ]}
          />
        }
      />

      <Section>
        <SectionHead title="HR tools your team will actually use." />
        <ModuleGrid cols={4}>
          <ModuleCard icon="📊" title="HR Dashboard" description="Headcount, attendance, leave, punctuality and open requests on one screen." />
          <ModuleCard icon="📅" title="Attendance" description="Daily clock-in, location-aware where required, punctuality reports." />
          <ModuleCard icon="🏖️" title="Leave Application" description="Apply, attach documents, route to the right approver, full audit trail." />
          <ModuleCard icon="🗓️" title="Leave Calendar" description="Team-wide leave calendar so nobody books over a busy week." />
          <ModuleCard icon="👤" title="Employees" description="Master employee record — personal, contractual, banking, visa, family." />
          <ModuleCard icon="🏷️" title="Brand Management" description="Assign employees to brands; brand-level access and metrics." />
          <ModuleCard icon="🗂️" title="Profile Management" description="Manage roles, designations, reporting lines and remuneration." />
          <ModuleCard icon="📁" title="File Management" description="Contracts, NDAs, policies — versioned, acknowledged and audit-ready." />
          <ModuleCard icon="📈" title="Reporting" description="Headcount, attrition, attendance, leave balances — at any cut." />
          <ModuleCard icon="🤖" title="HR Agent" description="AI assistant for everyday HR questions; trained on your docs." />
          <ModuleCard icon="⚙️" title="HR Settings" description="Policy library, approval flows, leave types, working calendars." />
        </ModuleGrid>
      </Section>

      <CtaStrip
        title="Free your HR manager from spreadsheet purgatory."
        description="Migrate one team in week one. The HR Agent goes live in week two."
      />
    </>
  );
}
