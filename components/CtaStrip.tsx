import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaStrip({
  title,
  description,
  cta = { href: "/contact", label: "Book a demo" },
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="cta-strip reveal-on-scroll">
          <div className="relative">
            <h2 className="mb-3">{title}</h2>
            {description && (
              <p className="max-w-[600px] mx-auto mb-7 text-[1.1rem]">{description}</p>
            )}
            <Link href={cta.href} className="btn btn-primary btn-lg">
              {cta.label}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
