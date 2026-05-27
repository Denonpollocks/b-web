import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { subprocessors } from "@/lib/subprocessors";

export const metadata: Metadata = {
  title: "Subprocessors",
  description:
    "Third-party subprocessors used by BECKO - TRAVEL OS LTD to deliver the Becko platform.",
};

const linkClass = "text-brand-light hover:text-white";

export default function SubprocessorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Subprocessors"
        description="Last updated: May 20, 2026"
      />

      <Section className="pt-4 pb-16">
        <div className="mx-auto max-w-[1100px] space-y-10">
          <div className="space-y-4 text-ink-dim max-w-[820px]">
            <p>
              BECKO - TRAVEL OS LTD engages the following third-party subprocessors to help
              deliver the Becko platform. Each subprocessor is bound by contractual obligations
              consistent with our{" "}
              <Link className={linkClass} href="/data-processing-addendum">
                Data Processing Addendum
              </Link>{" "}
              and our{" "}
              <Link className={linkClass} href="/privacy">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              We notify customers of material changes to this list at least 14 days in advance
              by updating this page and, where appropriate, by email to workspace administrators.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-line">
            <table className="w-full min-w-[720px] text-left text-sm border-collapse">
              <thead>
                <tr className="bg-white/[0.04] border-b border-line">
                  <th className="px-4 py-3.5 font-semibold text-white whitespace-nowrap">
                    Subprocessor
                  </th>
                  <th className="px-4 py-3.5 font-semibold text-white">Purpose</th>
                  <th className="px-4 py-3.5 font-semibold text-white whitespace-nowrap">
                    Location
                  </th>
                  <th className="px-4 py-3.5 font-semibold text-white">Data Categories</th>
                </tr>
              </thead>
              <tbody>
                {subprocessors.map((row, index) => (
                  <tr
                    key={row.name}
                    className={
                      index < subprocessors.length - 1 ? "border-b border-line" : undefined
                    }
                  >
                    <td className="px-4 py-3.5 text-ink align-top whitespace-nowrap">
                      {row.href ? (
                        <a
                          className={linkClass}
                          href={row.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row.name}
                        </a>
                      ) : (
                        row.name
                      )}
                      {row.name.startsWith("Stripe") && (
                        <span className="block mt-1 text-[0.82rem] text-ink-mute">
                          Also{" "}
                          <a
                            className={linkClass}
                            href="https://www.paddle.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Paddle
                          </a>
                          {" · "}TRU Connect (where enabled)
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-ink-dim align-top">{row.purpose}</td>
                    <td className="px-4 py-3.5 text-ink-dim align-top whitespace-nowrap">
                      {row.location}
                    </td>
                    <td className="px-4 py-3.5 text-ink-dim align-top">
                      {row.dataCategories}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="space-y-3 max-w-[820px]">
            <h2 className="text-2xl">Objections &amp; Questions</h2>
            <p className="text-ink-dim">
              To object to a new subprocessor on reasonable data-protection grounds, or to request
              additional information (including infrastructure regions and certifications), email{" "}
              <a className={linkClass} href="mailto:privacy@becko.app">
                privacy@becko.app
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
