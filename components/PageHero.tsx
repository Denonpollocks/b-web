import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="pt-24 pb-12 text-center relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 300px at 50% 0%, rgba(85, 204, 225, 0.13), transparent 60%)",
        }}
      />
      <div className="container relative">
        {typeof eyebrow === "string" ? (
          <span className="eyebrow">{eyebrow}</span>
        ) : (
          eyebrow
        )}
        <h1 className="mt-5 text-balance">{title}</h1>
        <p className="max-w-[720px] mx-auto mt-4 text-[1.15rem]">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn btn-primary">
                {primaryCta.label}
                <ArrowRight size={16} />
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-ghost">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
