import { cn } from "@/lib/cn";

export type MockListRow = {
  left: React.ReactNode;
  right?: React.ReactNode;
  tag?: { label: string; tone?: "green" | "warm" | "blue" | "pink" };
};

const toneClass = {
  green:
    "bg-accent-green/[0.12] text-accent-green border-accent-green/25",
  warm: "bg-accent-warm/[0.12] text-accent-warm border-accent-warm/25",
  blue: "bg-accent/15 text-[#a4b4ff] border-accent/30",
  pink: "bg-accent-pink/15 text-accent-pink border-accent-pink/30",
};

export function MockList({ rows, className }: { rows: MockListRow[]; className?: string }) {
  return (
    <div
      className={cn(
        "bg-white/[0.02] border border-line rounded-sm p-2.5",
        className,
      )}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          className={cn(
            "flex justify-between items-center px-1.5 py-2 text-[0.78rem] text-ink-dim",
            i < rows.length - 1 && "border-b border-dashed border-white/5",
          )}
        >
          <span>{row.left}</span>
          {row.tag ? (
            <span
              className={cn(
                "text-[0.66rem] px-2 py-0.5 rounded-full border",
                toneClass[row.tag.tone ?? "green"],
              )}
            >
              {row.tag.label}
            </span>
          ) : (
            row.right
          )}
        </div>
      ))}
    </div>
  );
}
