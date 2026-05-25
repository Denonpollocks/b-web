import { cn } from "@/lib/cn";

type Props = {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "green" | "warm" | "blue";
  className?: string;
};

const deltaColor = {
  green: "text-accent-green",
  warm: "text-accent-warm",
  blue: "text-[#a4b4ff]",
};

export function StatTile({ label, value, delta, deltaTone = "green", className }: Props) {
  return (
    <div
      className={cn(
        "bg-white/[0.04] border border-line rounded-sm p-3",
        className,
      )}
    >
      <div className="text-[0.7rem] uppercase tracking-[0.08em] text-ink-mute">
        {label}
      </div>
      <div className="text-[1.1rem] font-bold text-white mt-1">{value}</div>
      {delta && (
        <div className={cn("text-[0.7rem] mt-0.5", deltaColor[deltaTone])}>{delta}</div>
      )}
    </div>
  );
}
