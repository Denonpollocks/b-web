import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 font-display font-extrabold text-[1.3rem] text-white tracking-tight",
        className,
      )}
    >
      <span className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-lg text-[#04121a] font-black bg-brand-grad shadow-[0_6px_16px_rgba(85,204,225,0.4)]">
        B
      </span>
      Becko
    </Link>
  );
}
