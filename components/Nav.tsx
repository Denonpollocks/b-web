"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/modules")) return pathname.startsWith("/modules");
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="sticky top-0 z-50 nav-surface border-b border-line">
      <div className="container flex items-center justify-between py-4">
        <Logo />

        <ul
          className={cn(
            "hidden md:flex items-center gap-7 list-none m-0 p-0",
          )}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive(link.href) ? "text-white" : "text-ink-dim hover:text-white",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <Link href="/contact" className="btn btn-primary btn-sm">
            Book a demo
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-line text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-[64px] nav-surface border-b border-line transition-transform duration-300",
          open ? "translate-y-0" : "-translate-y-[120%]",
        )}
      >
        <ul className="container py-6 flex flex-col list-none m-0 p-0 gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-line">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-3.5",
                  isActive(link.href) ? "text-white" : "text-ink-dim",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
