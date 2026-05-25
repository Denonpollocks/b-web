"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Channel = "wa" | "ig" | "fb";

type Thread = {
  id: string;
  channel: Channel;
  name: string;
  preview: string;
  time: string;
  unread?: number;
};

const THREADS: Thread[] = [
  {
    id: "wa-maria",
    channel: "wa",
    name: "Maria · Maldives 4N",
    preview: "Can you do W Maldives in Nov?",
    time: "now",
    unread: 2,
  },
  {
    id: "ig-rohan",
    channel: "ig",
    name: "@rohan.travels",
    preview: "Loved the reel! Phuket pkg?",
    time: "2m",
    unread: 1,
  },
  {
    id: "fb-lead",
    channel: "fb",
    name: "FB Lead Ad · Bali",
    preview: "Hi! Just submitted the form…",
    time: "8m",
  },
  {
    id: "wa-sandra",
    channel: "wa",
    name: "Sandra · Dubai weekend",
    preview: "Confirmed! Sending payment.",
    time: "1h",
  },
  {
    id: "ig-comment",
    channel: "ig",
    name: "Reel comment · @ari",
    preview: "Price?",
    time: "1h",
  },
];

const CHANNEL_META: Record<
  Channel,
  { label: string; dot: string; ring: string; bubble: string }
> = {
  wa: {
    label: "WhatsApp",
    dot: "bg-[#25D366]",
    ring: "ring-[#25D366]/30",
    bubble: "from-[#25D366]/20 to-[#128C7E]/10",
  },
  ig: {
    label: "Instagram",
    dot: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    ring: "ring-[#DD2A7B]/30",
    bubble: "from-[#DD2A7B]/20 to-[#8134AF]/10",
  },
  fb: {
    label: "Messenger",
    dot: "bg-[#0084FF]",
    ring: "ring-[#0084FF]/30",
    bubble: "from-[#0084FF]/20 to-[#6c83ff]/10",
  },
};

const SEQUENCE: { from: "in" | "ai" | "out"; text: string; delay: number }[] = [
  { from: "in", text: "Can you do W Maldives in Nov for 2?", delay: 600 },
  {
    from: "ai",
    text: "Found 6 options matching your dates. W Maldives — $4,210pp, overwater villa, all-incl. Want me to lock it?",
    delay: 1800,
  },
  { from: "in", text: "Yes please — also need flights from LHR ✈️", delay: 1500 },
  {
    from: "out",
    text: "✓ Quote sent · pipeline → Quoted · flights added",
    delay: 1500,
  },
];

export function UnifiedInboxHero() {
  const [activeId, setActiveId] = useState<string>("wa-maria");
  const [visibleBubbles, setVisibleBubbles] = useState(1);

  // Rotate active thread every ~6s
  useEffect(() => {
    const id = setInterval(() => {
      setActiveId((curr) => {
        const idx = THREADS.findIndex((t) => t.id === curr);
        return THREADS[(idx + 1) % THREADS.length].id;
      });
    }, 6500);
    return () => clearInterval(id);
  }, []);

  // Animate bubbles into view for the active Maldives thread
  useEffect(() => {
    if (activeId !== "wa-maria") {
      setVisibleBubbles(SEQUENCE.length);
      return;
    }
    setVisibleBubbles(1);
    let cancelled = false;
    let acc = SEQUENCE[0].delay;
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i < SEQUENCE.length; i++) {
      acc += SEQUENCE[i].delay;
      timers.push(
        setTimeout(() => {
          if (!cancelled) setVisibleBubbles((v) => Math.max(v, i + 1));
        }, acc),
      );
    }
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [activeId]);

  const active = THREADS.find((t) => t.id === activeId)!;
  const channel = CHANNEL_META[active.channel];

  return (
    <div className="relative">
      {/* Soft glow halo behind the device */}
      <div
        aria-hidden
        className="absolute -inset-12 pointer-events-none blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(420px 220px at 20% 30%, rgba(85,204,225,0.28), transparent 60%), radial-gradient(360px 240px at 80% 70%, rgba(221,42,123,0.22), transparent 65%)",
        }}
      />

      <div
        className="relative rounded-xl border border-line overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,28,50,0.92), rgba(10,15,30,0.96))",
          boxShadow:
            "0 50px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(85,204,225,0.08)",
          transform: "perspective(1500px) rotateY(-3deg) rotateX(2deg)",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-white/[0.02]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[0.7rem] text-ink-mute tracking-wide">
            becko.app · Unified Inbox
          </div>
          <div className="flex items-center gap-1.5 text-[0.66rem] text-accent-green">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Live
          </div>
        </div>

        <div className="grid grid-cols-[180px_1fr] sm:grid-cols-[230px_1fr] h-[420px]">
          {/* Thread list */}
          <div className="border-r border-line bg-white/[0.015] overflow-y-auto p-2 space-y-1">
            {THREADS.map((t) => {
              const meta = CHANNEL_META[t.channel];
              const isActive = t.id === activeId;
              return (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={cn(
                    "w-full text-left p-2 rounded-md transition-all flex gap-2.5 items-start group relative",
                    isActive
                      ? "bg-brand/10 ring-1 ring-brand/30"
                      : "hover:bg-white/[0.04]",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[0.6rem] font-bold text-white relative",
                      meta.dot,
                    )}
                    title={meta.label}
                  >
                    {t.channel === "wa" ? "W" : t.channel === "ig" ? "IG" : "M"}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "text-[0.72rem] font-semibold truncate",
                          isActive ? "text-white" : "text-ink",
                        )}
                      >
                        {t.name}
                      </span>
                      <span className="text-[0.6rem] text-ink-mute flex-shrink-0">
                        {t.time}
                      </span>
                    </span>
                    <span className="block text-[0.68rem] text-ink-dim truncate mt-0.5">
                      {t.preview}
                    </span>
                  </span>
                  {t.unread && (
                    <span className="absolute top-1.5 right-1.5 text-[0.55rem] font-bold bg-brand text-[#03121b] rounded-full w-4 h-4 flex items-center justify-center">
                      {t.unread}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Conversation */}
          <div className="flex flex-col">
            {/* Thread header */}
            <div className="px-4 py-3 border-b border-line flex items-center justify-between bg-white/[0.015]">
              <div className="flex items-center gap-2.5">
                <span
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-[0.6rem] font-bold text-white",
                    channel.dot,
                  )}
                >
                  {active.channel === "wa"
                    ? "W"
                    : active.channel === "ig"
                      ? "IG"
                      : "M"}
                </span>
                <div>
                  <div className="text-[0.82rem] text-white font-semibold leading-tight">
                    {active.name}
                  </div>
                  <div className="text-[0.66rem] text-ink-mute flex items-center gap-1">
                    {channel.label} · typing
                    <span className="inline-flex gap-0.5 ml-1">
                      <span className="w-1 h-1 bg-ink-mute rounded-full animate-bounce" />
                      <span
                        className="w-1 h-1 bg-ink-mute rounded-full animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                      />
                      <span
                        className="w-1 h-1 bg-ink-mute rounded-full animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[0.62rem] text-brand-light font-semibold uppercase tracking-wider">
                Pipeline · Quoted
              </div>
            </div>

            {/* Bubbles */}
            <div className="flex-1 overflow-hidden p-4 space-y-2 flex flex-col">
              {SEQUENCE.slice(0, visibleBubbles).map((b, i) => (
                <div
                  key={`${activeId}-${i}`}
                  className={cn(
                    "bubble max-w-[78%] animate-[reveal_0.35s_ease_both]",
                    b.from === "in" && "bubble-in",
                    b.from === "out" && "bubble-out",
                    b.from === "ai" && "bubble-ai",
                  )}
                >
                  {b.text}
                </div>
              ))}
              {/* Composer */}
              <div className="mt-auto pt-3 flex items-center gap-2 border-t border-line/60">
                <div className="flex-1 px-3 py-2 bg-white/[0.04] border border-line rounded-full text-[0.74rem] text-ink-mute">
                  Reply on {channel.label}…
                </div>
                <span className="w-8 h-8 rounded-full bg-brand-grad flex items-center justify-center text-[#03121b] text-sm">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <FloatChip
        side="left"
        title="Ad reply auto-captured"
        meta="Click-to-WA · Maldives ad #4"
        accent="brand"
      />
      <FloatChip
        side="right"
        title="AI handled in 8s"
        meta="No human required · saved"
        accent="pink"
      />
    </div>
  );
}

function FloatChip({
  side,
  title,
  meta,
  accent,
}: {
  side: "left" | "right";
  title: string;
  meta: string;
  accent: "brand" | "pink";
}) {
  const pos =
    side === "left"
      ? "left-[-2%] sm:left-[-9%] top-[18%] animate-float"
      : "right-[-2%] sm:right-[-7%] bottom-[16%] animate-float-reverse";

  const dot =
    accent === "brand"
      ? "bg-brand-grad text-[#04121a]"
      : "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white";

  return (
    <div
      className={`absolute z-10 rounded-2xl px-3.5 py-2.5 border border-line bg-bg-2/95 shadow-base text-sm flex items-center gap-2.5 backdrop-blur ${pos}`}
    >
      <span
        className={`w-7 h-7 rounded-lg flex items-center justify-center font-extrabold ${dot}`}
      >
        ✦
      </span>
      <div>
        <div className="text-white font-semibold text-[0.82rem] leading-tight">
          {title}
        </div>
        <div className="text-[0.68rem] text-ink-mute">{meta}</div>
      </div>
    </div>
  );
}
