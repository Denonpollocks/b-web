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
  title: "Unified Messenger",
  description:
    "WhatsApp, Instagram, Facebook and email in one inbox — with AI flow agents, broadcasts, catalogs and full conversation pipelines.",
};

export default function MessengerModule() {
  return (
    <>
      <PageHero
        eyebrow={<Eyebrow icon="💬">Unified Messenger</Eyebrow>}
        title={
          <>
            One inbox. <span className="gradient-text">Every channel.</span> Every brand.
          </>
        }
        description="WhatsApp Business, Facebook Messenger, Instagram DMs, page comments and customer database — finally in one screen. Add an AI agent that books leads while you sleep."
        primaryCta={{ href: "/contact", label: "Book a demo" }}
        secondaryCta={{ href: "/features", label: "All features" }}
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Unified inbox</span>
            <h2 className="mt-3.5">Stop losing leads in three different apps.</h2>
            <p>
              Every message your brand receives — WhatsApp, Insta, Facebook, page comments —
              funnels into one threaded inbox. Assign to agents, snooze, tag, internal-note,
              and link every conversation to a customer profile.
            </p>
            <FeatList
              items={[
                "Multi-channel, multi-brand inbox",
                "Auto-link to existing customer by phone/email",
                "Snooze, tag, assign, internal notes",
                "Live typing & read receipts",
              ]}
            />
          </>
        }
        visual={
          <ChatMock
            threads={[
              { label: "💚 Maria · Maldives", active: true },
              { label: "📷 Rohan · Phuket" },
              { label: "📘 FB Lead · Bali" },
              { label: "💬 Comment · Reel #88" },
              { label: "💚 Sandra · Dubai" },
            ]}
            bubbles={[
              { type: "in", content: "Hi! Can you do Maldives for 2 in Nov?" },
              {
                type: "ai",
                content:
                  "Yes — found 6 packages in your dates. Want to see the W Maldives quote at $4,210pp?",
              },
              { type: "in", content: "Send please 🙏" },
              { type: "out", content: "✓ Quote sent · Pipeline → Quoted" },
            ]}
          />
        }
      />

      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">AI Flow Agents</span>
            <h2 className="mt-3.5">An AI agent on every channel — trained on your business.</h2>
            <p>
              Build a flow once. The AI knows your destinations, your pricing, your policies
              and your tone — and books while your team sleeps. Hand off to a human any time
              with full context.
            </p>
            <FeatList
              items={[
                "Train on playbooks, catalogs, FAQs and previous conversations",
                "Flow builder for guided journeys (lead-qualify, quote, balance-due)",
                "Full conversation logs & performance analytics",
                "Seamless human handoff with notes & tags preserved",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-3 gap-2.5 mb-3.5">
              <StatTile label="Avg response" value="8s" delta="−97%" />
              <StatTile label="AI handled" value="63%" delta="no human" />
              <StatTile label="Conversion" value="28%" delta="+12 pts" />
            </div>
            <MockList
              rows={[
                { left: "Playbook · Maldives enquiries", tag: { label: "Active" } },
                { left: "Playbook · Balance due reminder", tag: { label: "Active" } },
                { left: "Playbook · After-trip review", tag: { label: "Active" } },
                {
                  left: "Training · 2,840 past chats",
                  tag: { label: "Indexed", tone: "blue" },
                },
              ]}
            />
          </div>
        }
      />

      <Split
        copy={
          <>
            <span className="tag-pill">WhatsApp Business</span>
            <h2 className="mt-3.5">Everything WhatsApp Business should be.</h2>
            <p>
              Templates, broadcasts, deep-links, catalogs, automations, compliance and
              analytics — all baked in. Run your entire WhatsApp business inside Becko.
            </p>
            <FeatList
              items={[
                "Template management with Meta-approval status tracked live",
                "Segmented broadcasts with delivery, read & reply funnels",
                "Product catalogs synced from your booking inventory",
                "Deep-link generator with brand + agent context",
                "Automation builder for balance reminders, post-trip reviews, anniversaries",
                "Compliance dashboard — opt-ins, opt-outs, message-window status",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-2 gap-2.5">
              <WAStat label="Templates" value="24" delta="22 approved · 2 pending" />
              <WAStat label="Broadcasts" value="1,840" delta="94% delivered" />
              <WAStat label="Catalog SKUs" value="312" delta="All synced" />
              <WAStat label="Deep links" value="87" delta="1,240 clicks" />
            </div>
          </div>
        }
      />

      <Section>
        <SectionHead title="Every messenger workflow, covered." />
        <ModuleGrid cols={4}>
          <ModuleCard icon="📥" title="Inbox" description="Threaded, multi-channel inbox per brand." />
          <ModuleCard icon="📡" title="Pipeline" description="Conversation kanban: New → Engaged → Quoted → Booked." />
          <ModuleCard icon="🧠" title="AI Agents" description="Build, train, deploy and audit flow agents." />
          <ModuleCard icon="📚" title="Playbooks" description="Reusable conversation playbooks for common journeys." />
          <ModuleCard icon="📊" title="Analytics" description="Channel performance, response times, conversion rates." />
          <ModuleCard icon="📈" title="Conversation Metrics" description="Resolution time, AI vs human handle, satisfaction." />
          <ModuleCard icon="💬" title="Comments" description="FB & IG page comments piped into the inbox." />
          <ModuleCard icon="📞" title="Contacts & Users" description="Auto-linked to customer profiles." />
          <ModuleCard icon="📣" title="Broadcasts" description="WhatsApp & Facebook segmented broadcasts." />
          <ModuleCard icon="🛒" title="WhatsApp Catalogs" description="Sync booking inventory to WhatsApp." />
          <ModuleCard icon="🔗" title="Deep Links" description="One link → right brand, right agent, right context." />
          <ModuleCard icon="⚙️" title="Compliance" description="Opt-ins, opt-outs, 24h windows — Meta-aware by default." />
          <ModuleCard icon="📦" title="FB Subscribers" description="Manage subscribers from page subscriptions and broadcasts." />
          <ModuleCard icon="📷" title="Instagram Settings" description="Inbox preferences, DM templates, auto-replies." />
        </ModuleGrid>
      </Section>

      <CtaStrip
        title="Reply to every customer. Without hiring more agents."
        description="Pilot Becko Messenger on one brand for two weeks — measure the lift, then scale."
      />
    </>
  );
}

function WAStat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="p-3.5 bg-white/[0.04] border border-line rounded-sm">
      <div className="text-ink-mute text-[0.72rem] uppercase tracking-[0.1em]">{label}</div>
      <div className="text-white text-2xl font-bold mt-1">{value}</div>
      <div className="text-accent-green text-[0.78rem]">{delta}</div>
    </div>
  );
}
