import Image from "next/image";
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
      <Image
        src="/images/becko_travel_software.svg"
        alt="Becko Travel Software"
        width={100}
        height={100}
        className="h-24 w-auto"
        priority
      />
    </Link>
  );
}
