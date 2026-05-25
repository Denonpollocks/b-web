"use client";

import { Bot, MessageCircle, GitBranch, Sparkles, Clock } from "lucide-react";

type Node = {
  id: string;
  x: number;
  y: number;
  kind: "trigger" | "condition" | "ai" | "message" | "delay";
  title: string;
  meta?: string;
};

const NODES: Node[] = [
  { id: "trigger", x: 8, y: 18, kind: "trigger", title: "New WA message", meta: "Channel · WhatsApp" },
  { id: "ai", x: 38, y: 18, kind: "ai", title: "Classify intent", meta: "AI · brand voice" },
  { id: "cond", x: 38, y: 62, kind: "condition", title: "Is booking enquiry?", meta: "if intent = booking" },
  { id: "send", x: 70, y: 18, kind: "message", title: "Reply with quote", meta: "Travel-search card" },
  { id: "delay", x: 70, y: 62, kind: "delay", title: "Wait 24h", meta: "If no reply" },
];

const EDGES: [string, string][] = [
  ["trigger", "ai"],
  ["ai", "send"],
  ["ai", "cond"],
  ["cond", "delay"],
];

const KIND_META: Record<
  Node["kind"],
  { color: string; icon: typeof Bot; label: string }
> = {
  trigger: { color: "#55CCE1", icon: MessageCircle, label: "Trigger" },
  ai: { color: "#DD2A7B", icon: Sparkles, label: "AI" },
  condition: { color: "#ffb775", icon: GitBranch, label: "Condition" },
  message: { color: "#4ade80", icon: Bot, label: "Action" },
  delay: { color: "#6c83ff", icon: Clock, label: "Delay" },
};

export function FlowBuilderViz() {
  return (
    <div
      className="relative rounded-xl border border-line p-5 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(20,28,50,0.92), rgba(10,15,30,0.96))",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-[0.7rem] uppercase tracking-[0.1em] text-ink-mute font-semibold">
            Flow · Maldives enquiry → quote
          </span>
        </div>
        <span className="text-[0.66rem] text-brand-light font-semibold">v 12 · live</span>
      </div>

      <div className="relative h-[320px]">
        {/* SVG edges */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="flow-edge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#55CCE1" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#6c83ff" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {EDGES.map(([from, to], i) => {
            const a = NODES.find((n) => n.id === from)!;
            const b = NODES.find((n) => n.id === to)!;
            // simple bezier-ish path
            const x1 = a.x + 11;
            const y1 = a.y + 7;
            const x2 = b.x;
            const y2 = b.y + 7;
            const mx = (x1 + x2) / 2;
            return (
              <g key={i}>
                <path
                  d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
                  stroke="url(#flow-edge)"
                  strokeWidth="0.35"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="1 1.5"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  r="0.7"
                  fill="#84EEFF"
                  vectorEffect="non-scaling-stroke"
                >
                  <animateMotion
                    dur={`${2 + i * 0.6}s`}
                    repeatCount="indefinite"
                    path={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {NODES.map((n) => {
          const meta = KIND_META[n.kind];
          const Icon = meta.icon;
          return (
            <div
              key={n.id}
              className="absolute rounded-lg border bg-bg-2/95 backdrop-blur p-2.5 w-[160px] shadow-base transition-transform hover:-translate-y-0.5"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                borderColor: `${meta.color}55`,
                boxShadow: `0 10px 30px ${meta.color}22, 0 0 0 1px ${meta.color}22`,
              }}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <span
                  className="w-5 h-5 rounded flex items-center justify-center"
                  style={{ background: `${meta.color}25`, color: meta.color }}
                >
                  <Icon size={11} strokeWidth={2.4} />
                </span>
                <span
                  className="text-[0.58rem] uppercase tracking-[0.1em] font-semibold"
                  style={{ color: meta.color }}
                >
                  {meta.label}
                </span>
              </div>
              <div className="text-[0.78rem] text-white font-semibold leading-tight">
                {n.title}
              </div>
              {n.meta && (
                <div className="text-[0.62rem] text-ink-mute mt-0.5">{n.meta}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
