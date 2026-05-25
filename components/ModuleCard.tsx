import Link from "next/link";
import { cn } from "@/lib/cn";
import { getIcon } from "@/lib/icons";

type Props = {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  href?: string;
  more?: string;
  className?: string;
};

function renderIcon(icon: React.ReactNode) {
  if (icon == null) return null;

  // If a string is passed, try to map an emoji to a Lucide icon.
  // Fall back to the original text (e.g. "1️⃣", "2️⃣", "3️⃣") if we don't have a mapping.
  if (typeof icon === "string") {
    const LucideIcon = getIcon(icon);
    if (LucideIcon) {
      return <LucideIcon size={22} strokeWidth={1.75} />;
    }
    return <span aria-hidden>{icon}</span>;
  }
  return icon;
}

export function ModuleCard({ icon, title, description, href, more, className }: Props) {
  const inner = (
    <>
      {icon != null && <span className="module-card-icon">{renderIcon(icon)}</span>}
      <h3 className="text-[1.2rem] mb-2">{title}</h3>
      {description && <p className="text-[0.94rem] mb-3">{description}</p>}
      {href && more && (
        <span className="inline-flex items-center gap-1 text-sm text-brand-light font-semibold">
          {more} →
        </span>
      )}
    </>
  );

  const classes = cn("module-card reveal-on-scroll", className);

  return href ? (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  ) : (
    <div className={classes}>{inner}</div>
  );
}

export function ModuleGrid({
  children,
  cols = "auto",
  className,
}: {
  children: React.ReactNode;
  cols?: "auto" | 3 | 4;
  className?: string;
}) {
  const colClass =
    cols === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : cols === 4
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        : "grid-cols-[repeat(auto-fit,minmax(280px,1fr))]";
  return <div className={cn("grid gap-5", colClass, className)}>{children}</div>;
}
