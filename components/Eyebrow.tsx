import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/cn";

type Props = {
  icon?: string;
  children: React.ReactNode;
  variant?: "eyebrow" | "tag";
  className?: string;
};

/**
 * Eyebrow / tag-pill label with an optional Lucide icon. Pass `icon` as an
 * emoji string — it'll be auto-mapped to a Lucide SVG via lib/icons.
 *
 *   <Eyebrow icon="🧳">Bookings module</Eyebrow>
 *   <Eyebrow icon="🎯" variant="tag">Sales & CRM</Eyebrow>
 */
export function Eyebrow({ icon, children, variant = "eyebrow", className }: Props) {
  const LucideIcon = getIcon(icon);

  return (
    <span
      className={cn(
        variant === "eyebrow" ? "eyebrow" : "tag-pill",
        "inline-flex items-center gap-2",
        className,
      )}
    >
      {LucideIcon ? (
        <LucideIcon
          size={variant === "eyebrow" ? 14 : 13}
          strokeWidth={1.9}
          className="text-current"
        />
      ) : null}
      <span>{children}</span>
    </span>
  );
}
