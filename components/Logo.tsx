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
        src="/images/w-becko.png"
        alt=""
        width={32}
        height={32}
        className="h-8 w-auto"
        priority
      />
      <span className="sr-only">Becko</span>
     
    </Link>
  );
}
