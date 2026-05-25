import { StatTile } from "./StatTile";
import { MockList } from "./MockList";

export function HeroViz() {
  return (
    <div className="relative">
      <div
        className="relative p-4 rounded-xl border border-line shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(85,204,225,0.08)] overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,28,50,0.92), rgba(10,15,30,0.92))",
          transform: "perspective(1400px) rotateY(-4deg) rotateX(2deg)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 200px at 20% -20%, rgba(85,204,225,0.2), transparent 60%)",
          }}
        />

        {/* mock window bar */}
        <div className="flex gap-2 mb-3.5 relative">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
        </div>

        <div className="flex gap-3 relative">
          {/* sidebar */}
          <div className="w-[70px] bg-white/[0.03] rounded-sm p-2 space-y-2">
            <div className="h-3.5 rounded bg-gradient-to-r from-brand to-transparent"></div>
            <div className="h-2.5 rounded bg-white/5"></div>
            <div className="h-2.5 rounded bg-white/5"></div>
            <div className="h-2.5 rounded bg-white/5"></div>
            <div className="h-2.5 rounded bg-white/5"></div>
            <div className="h-2.5 rounded bg-white/5"></div>
            <div className="h-2.5 rounded bg-white/5"></div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-3 gap-2.5 mb-3.5">
              <StatTile label="Revenue" value="$248.4k" delta="+18.2% MoM" />
              <StatTile label="Bookings" value="312" delta="+24 this week" />
              <StatTile label="Avg margin" value="19.4%" delta="+1.6 pts" />
            </div>
            <div className="bg-white/[0.03] border border-line rounded-sm h-[140px] flex items-end gap-1.5 p-3.5">
              {[38, 55, 47, 72, 64, 88, 76, 92].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm opacity-85"
                  style={{
                    height: `${h}%`,
                    background:
                      "linear-gradient(180deg, #55CCE1 0%, #2bb1c7 100%)",
                  }}
                />
              ))}
            </div>
            <MockList
              className="mt-3"
              rows={[
                { left: "Maldives · J. Patel", tag: { label: "Paid", tone: "green" } },
                {
                  left: "Bali Honeymoon · S. Khan",
                  tag: { label: "Paid", tone: "green" },
                },
                {
                  left: "Dubai City Break · Bardot",
                  tag: { label: "Pending", tone: "warm" },
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <FloatChip
        side="left"
        icon="$"
        title="Invoice reconciled"
        meta="Maldives — $4,210.00"
      />
      <FloatChip
        side="right"
        icon="✦"
        title="AI replied on WhatsApp"
        meta='"Sent itinerary to Maria"'
      />
    </div>
  );
}

function FloatChip({
  side,
  icon,
  title,
  meta,
}: {
  side: "left" | "right";
  icon: string;
  title: string;
  meta: string;
}) {
  const pos =
    side === "left"
      ? "left-[-2%] sm:left-[-8%] top-[30%] animate-float"
      : "right-[-2%] sm:right-[-6%] bottom-[14%] animate-float-reverse";

  return (
    <div
      className={`absolute z-10 rounded-2xl px-4 py-3 border border-line bg-bg-2/90 shadow-base text-sm flex items-center gap-2.5 backdrop-blur ${pos}`}
    >
      <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-brand-grad text-[#04121a] font-extrabold">
        {icon}
      </span>
      <div>
        <div className="text-white font-semibold">{title}</div>
        <div className="text-[0.74rem] text-ink-mute">{meta}</div>
      </div>
    </div>
  );
}
