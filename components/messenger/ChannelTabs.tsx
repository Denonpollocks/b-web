"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Check } from "lucide-react";

type ChannelId = "wa" | "ig" | "fb";

type ChannelTab = {
  id: ChannelId;
  short: string;
  label: string;
  badge: string;
  headline: string;
  blurb: string;
  features: string[];
  requires: string;
  accent: string; // hex for accent
  gradient: string; // tailwind gradient classes
  visual: React.ReactNode;
};

const wa: ChannelTab = {
  id: "wa",
  short: "WhatsApp",
  label: "WhatsApp Business",
  badge: "Official Cloud API",
  headline: "WhatsApp that actually scales.",
  blurb:
    "Cloud-hosted by Meta. Templates, broadcasts, deep-links, two-way conversations, and live cost-per-conversation analytics from the Meta Graph API — without running a single server.",
  features: [
    "WhatsApp Cloud API · Meta-hosted, no infra",
    "Template messages (marketing, utility, authentication)",
    "Broadcasts with built-in STOP/opt-out compliance",
    "Media, location, quick replies, list & CTA buttons",
    "Click-to-WhatsApp Ads attribution → lead source captured",
    "Cost per conversation, delivery, read rate, MAU billing",
    "Multi-agent assignment with active throttling",
    "Automated payment reminders & booking confirmations",
  ],
  requires:
    "Meta Business verified · phone number · display name approval (we handle the submission).",
  accent: "#25D366",
  gradient: "from-[#25D366]/15 to-[#128C7E]/5",
  visual: <WhatsAppViz />,
};

const ig: ChannelTab = {
  id: "ig",
  short: "Instagram",
  label: "Instagram Direct",
  badge: "Pro account · Graph API",
  headline: "Turn every Reel comment into a DM.",
  blurb:
    "DMs, Story replies, Story mentions, post comments — all funnel into the same thread. Auto-reply on ad comments, then hand off to a human with full context.",
  features: [
    "Instagram DMs, Story replies & Story mentions",
    "Post-comment replies with sentiment routing",
    "Quick reactions, media, voice notes",
    "Ad-comment auto-replies (turn engagement into DMs)",
    "Saved replies & AI-suggested responses",
    "Insights: response time, reply rate, conversions per campaign",
    "Graceful handling of 24-hour Story insight expiry",
  ],
  requires:
    "Instagram Professional account linked to a Facebook Page. 2-click connect.",
  accent: "#DD2A7B",
  gradient: "from-[#F58529]/15 via-[#DD2A7B]/10 to-[#8134AF]/10",
  visual: <InstagramViz />,
};

const fb: ChannelTab = {
  id: "fb",
  short: "Messenger",
  label: "Facebook Messenger",
  badge: "Pages · Lead Ads · OTN",
  headline: "Every Page interaction, one place.",
  blurb:
    "Organic posts, ad replies, comments, OTN tokens, lead-form submissions and token health — all wired into the same inbox with real-time webhooks.",
  features: [
    "Page inbox: organic, ad-post replies & comments",
    "Get Started button + persistent menu sync",
    "OTN tokens & recurring notifications for out-of-window broadcasts",
    "Page-post management (read/reply, per-post insights)",
    "Lead-ads & Click-to-Messenger attribution",
    "Real-time Facebook Lead form ingestion via webhooks",
    "Login health monitoring (token validity, missing scopes alerts)",
  ],
  requires:
    "A Facebook Page you admin. Connect Becko as a Meta Tech Provider in 2 clicks.",
  accent: "#0084FF",
  gradient: "from-[#0084FF]/15 to-[#6c83ff]/10",
  visual: <FacebookViz />,
};

const TABS: ChannelTab[] = [wa, ig, fb];

export function ChannelTabs() {
  const [activeId, setActiveId] = useState<ChannelId>("wa");
  const active = TABS.find((t) => t.id === activeId)!;

  return (
    <div className="reveal-on-scroll">
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Channel deep-dives"
        className="flex justify-center"
      >
        <div className="inline-flex p-1.5 rounded-full bg-surface border border-line gap-1 flex-wrap justify-center">
          {TABS.map((t) => {
            const isActive = t.id === activeId;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(t.id)}
                className={cn(
                  "px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2",
                  isActive
                    ? "text-[#03121b] shadow-[0_8px_22px_rgba(85,204,225,0.35)]"
                    : "text-ink-dim hover:text-white",
                )}
                style={
                  isActive
                    ? {
                        background: `linear-gradient(135deg, ${t.accent} 0%, ${t.accent}CC 100%)`,
                        boxShadow: `0 10px 28px ${t.accent}66`,
                      }
                    : undefined
                }
              >
                <span
                  aria-hidden
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: isActive ? "#03121b" : t.accent,
                    opacity: isActive ? 0.6 : 1,
                  }}
                />
                {t.short}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active panel */}
      <div
        key={active.id}
        className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start animate-[reveal_0.6s_ease_both]"
      >
        <div>
          <span
            className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border"
            style={{
              color: active.accent,
              borderColor: `${active.accent}55`,
              background: `${active.accent}10`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: active.accent }}
            />
            {active.label} · {active.badge}
          </span>
          <h3 className="text-[1.7rem] sm:text-[2rem] mt-4 leading-tight">
            {active.headline}
          </h3>
          <p className="mt-3 text-[1rem]">{active.blurb}</p>

          <ul className="mt-6 space-y-2.5 list-none p-0">
            {active.features.map((f) => (
              <li key={f} className="flex gap-3 items-start text-ink-dim text-[0.95rem]">
                <span
                  className="flex-shrink-0 mt-1 w-[18px] h-[18px] rounded-full flex items-center justify-center"
                  style={{
                    background: `${active.accent}30`,
                    boxShadow: `0 0 0 3px ${active.accent}14`,
                  }}
                >
                  <Check size={11} strokeWidth={3} style={{ color: active.accent }} />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-7 p-4 rounded-lg border text-[0.86rem] text-ink-dim"
            style={{
              background: `${active.accent}08`,
              borderColor: `${active.accent}30`,
            }}
          >
            <span
              className="text-[0.66rem] font-bold uppercase tracking-[0.12em] mr-2"
              style={{ color: active.accent }}
            >
              What you need
            </span>
            {active.requires}
          </div>
        </div>

        {/* Visual */}
        <div
          className={cn(
            "rounded-xl border border-line p-5 sm:p-6 bg-gradient-to-br relative overflow-hidden",
            active.gradient,
          )}
          style={{
            boxShadow: `0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px ${active.accent}1A`,
          }}
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-40"
            style={{ background: active.accent }}
          />
          <div className="relative">{active.visual}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Channel-specific mini visualisations ─── */

function WhatsAppViz() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2.5">
        <Tile label="Conversations" value="12,840" delta="+18% MoM" accent="#25D366" />
        <Tile label="Read rate" value="92%" delta="WA avg · 70%" accent="#25D366" />
        <Tile label="Cost / conv" value="$0.024" delta="−12% vs Q3" accent="#25D366" />
        <Tile label="Templates" value="24" delta="22 approved" accent="#25D366" />
      </div>
      <div className="bg-white/[0.04] border border-line rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[0.7rem] uppercase tracking-wider text-ink-mute">
            Broadcast · Black Friday escape
          </span>
          <span className="text-[0.66rem] text-[#25D366] font-semibold">Live</span>
        </div>
        <div className="space-y-2">
          <Bar label="Delivered" pct={96} color="#25D366" />
          <Bar label="Read" pct={88} color="#25D366" />
          <Bar label="Replied" pct={34} color="#25D366" />
          <Bar label="Opted out" pct={2} color="#ff7ab8" />
        </div>
      </div>
    </div>
  );
}

function InstagramViz() {
  return (
    <div className="space-y-3">
      <div className="bg-white/[0.04] border border-line rounded-lg p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" />
            <div>
              <div className="text-[0.76rem] text-white font-semibold">
                Reel · "Maldives in 60 sec"
              </div>
              <div className="text-[0.62rem] text-ink-mute">12.4k views · 248 comments</div>
            </div>
          </div>
          <span className="text-[0.62rem] text-[#DD2A7B] font-semibold uppercase tracking-wider">
            Auto-reply on
          </span>
        </div>
        <div className="space-y-2">
          {[
            { user: "@ari", text: "Price for 4 nights?", replied: true },
            { user: "@jules", text: "Available in March?", replied: true },
            { user: "@noah", text: "DM me pls 🙏", replied: true },
          ].map((c) => (
            <div
              key={c.user}
              className="flex items-center justify-between text-[0.7rem] text-ink-dim border-b border-dashed border-white/5 pb-1.5 last:border-0"
            >
              <span>
                <span className="text-white font-medium">{c.user}</span> · {c.text}
              </span>
              <span className="text-[#DD2A7B] text-[0.6rem] font-semibold">
                → DM sent
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        <Tile label="Comment replies" value="248" delta="100% auto" accent="#DD2A7B" />
        <Tile label="DM conversions" value="42" delta="+9 today" accent="#DD2A7B" />
        <Tile label="Reply time" value="6s" delta="median" accent="#DD2A7B" />
      </div>
    </div>
  );
}

function FacebookViz() {
  return (
    <div className="space-y-3">
      <div className="bg-white/[0.04] border border-line rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[0.7rem] uppercase tracking-wider text-ink-mute">
            Page health
          </span>
          <span className="text-[0.66rem] text-accent-green font-semibold">
            ● All systems
          </span>
        </div>
        <div className="space-y-2">
          {[
            { k: "Access token", v: "Valid · 58 days" },
            { k: "Required scopes", v: "12 / 12" },
            { k: "OTN tokens active", v: "1,284" },
            { k: "Webhook delivery", v: "99.97%" },
          ].map((r) => (
            <div
              key={r.k}
              className="flex items-center justify-between text-[0.74rem] text-ink-dim"
            >
              <span>{r.k}</span>
              <span className="text-white font-medium">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/[0.04] border border-line rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[0.7rem] uppercase tracking-wider text-ink-mute">
            Recent lead-form leads
          </span>
          <span className="text-[0.62rem] text-[#0084FF] font-semibold">
            Webhook · live
          </span>
        </div>
        <div className="space-y-1.5">
          {[
            { name: "S. Khan", form: "Bali Honeymoon", time: "2m" },
            { name: "P. Owusu", form: "Family Maldives", time: "11m" },
            { name: "M. Tanaka", form: "Dubai weekend", time: "34m" },
          ].map((l) => (
            <div
              key={l.name}
              className="flex items-center justify-between text-[0.7rem] border-b border-dashed border-white/5 pb-1 last:border-0"
            >
              <span className="text-white">
                {l.name}{" "}
                <span className="text-ink-mute">· {l.form}</span>
              </span>
              <span className="text-ink-mute text-[0.62rem]">{l.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tile({
  label,
  value,
  delta,
  accent,
}: {
  label: string;
  value: string;
  delta: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-md p-2.5 border"
      style={{
        background: `${accent}08`,
        borderColor: `${accent}25`,
      }}
    >
      <div className="text-[0.62rem] uppercase tracking-[0.08em] text-ink-mute">
        {label}
      </div>
      <div className="text-white font-bold text-[1.05rem] leading-tight mt-0.5">
        {value}
      </div>
      <div className="text-[0.62rem] mt-0.5" style={{ color: accent }}>
        {delta}
      </div>
    </div>
  );
}

function Bar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[0.66rem] text-ink-dim mb-0.5">
        <span>{label}</span>
        <span className="text-white font-medium">{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${pct}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
}
