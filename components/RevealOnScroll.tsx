"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const frame = window.requestAnimationFrame(() => {
      const els = document.querySelectorAll(".reveal-on-scroll:not(.visible)");
      els.forEach((el) => observer.observe(el));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
