import Link from "next/link";
import { footerLinks, site } from "@/lib/site";
import { CookieSettingsButton } from "./CookieSettingsButton";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-1 border-t border-line pt-16 pb-8 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <Logo className="mb-4" />
            <p className="max-w-[280px] text-sm">
              The operating system for modern travel agencies. Bookings, finance, sales,
              marketing — one platform, one source of truth.
            </p>
          </div>

          <FooterCol title="Product" links={footerLinks.product} />
          <FooterCol title="Company" links={footerLinks.company} />
          <FooterCol title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col gap-3 text-ink-mute text-[0.82rem]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span>© {year} {site.company.legalName}. All rights reserved.</span>
            <span>Made for travel teams that want their evenings back.</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-[0.78rem]">
            <span>
              Registered business name: {site.company.legalName}
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <CookieSettingsButton />
              <span>Registration no. {site.company.registrationNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h5 className="text-[0.78rem] tracking-[0.12em] uppercase text-ink-mute mb-4 font-semibold">
        {title}
      </h5>
      <ul className="list-none p-0 m-0">
        {links.map((l) => (
          <li key={l.label} className="py-1">
            <Link href={l.href} className="text-ink-dim hover:text-white text-sm">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
