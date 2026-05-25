"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { productLines, pricingNotes, type Plan } from "@/lib/pricing";

export function PricingTabs() {
  const [activeId, setActiveId] = useState<"sales" | "full">("sales");
  const active = productLines.find((p) => p.id === activeId)!;

  return (
    <div className="reveal-on-scroll">
      {/* Toggle */}
      <div className="flex justify-center mb-3">
        <div
          role="tablist"
          aria-label="Choose a Becko product line"
          className="inline-flex p-1.5 rounded-full bg-surface border border-line gap-1"
        >
          {productLines.map((line) => {
            const isActive = line.id === activeId;
            return (
              <button
                key={line.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(line.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
                  isActive
                    ? "text-[#03121b] shadow-[0_8px_22px_rgba(85,204,225,0.35)]"
                    : "text-ink-dim hover:text-white",
                )}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(135deg, #55CCE1 0%, #2bb1c7 100%)",
                      }
                    : undefined
                }
              >
                {line.shortLabel}
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-center text-ink-dim max-w-2xl mx-auto mb-12 text-[0.98rem]">
        {active.description}
      </p>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-[1240px] mx-auto">
        {active.plans.map((plan) => (
          <PriceCard key={plan.name} plan={plan} />
        ))}
      </div>

      {/* Notes */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-ink-mute text-sm">
        {pricingNotes.map((n, i) => (
          <span key={i} className="inline-flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-brand"></span>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function PriceCard({ plan }: { plan: Plan }) {
  const isCustom = plan.price.toLowerCase() === "custom";

  return (
    <div
      className={cn(
        "relative bg-surface border border-line rounded-lg p-7 transition-all flex flex-col",
        plan.featured && "border-brand shadow-glow",
      )}
      style={
        plan.featured
          ? {
              background:
                "linear-gradient(180deg, rgba(85,204,225,0.08), rgba(10,15,30,0.92))",
            }
          : undefined
      }
    >
      {plan.featured && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.7rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full text-[#04121a] whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #55CCE1 0%, #2bb1c7 100%)",
          }}
        >
          Most popular
        </span>
      )}

      <div className="flex items-baseline gap-2 mb-1">
        <h3 className="text-[1.25rem] mb-0">{plan.name}</h3>
        <span className="text-[0.78rem] text-ink-mute font-medium">
          · {plan.userRange}
        </span>
      </div>
      <p className="text-[0.88rem] leading-snug min-h-[2.6em]">{plan.tagline}</p>

      <div className="font-display font-extrabold text-white mt-5 mb-1 flex items-baseline gap-1.5">
        {isCustom ? (
          <span className="text-[2.25rem] leading-none">Custom</span>
        ) : (
          <>
            <span className="text-[2.5rem] leading-none">{plan.price}</span>
            {plan.unit && (
              <span className="text-base text-ink-dim font-medium">
                {plan.unit}
              </span>
            )}
          </>
        )}
      </div>

      <ul className="list-none p-0 mt-5 mb-7 space-y-2 flex-1">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex gap-2 items-start text-ink-dim text-[0.9rem] leading-snug"
          >
            <span className="text-brand font-bold flex-shrink-0 mt-0.5">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={plan.cta.href}
        className={cn(
          "btn w-full mt-auto",
          plan.featured ? "btn-primary" : "btn-ghost",
        )}
      >
        {plan.cta.label}
      </Link>
    </div>
  );
}
