import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { DoNotSellForm } from "@/components/DoNotSellForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information",
  description:
    "Exercise your California and U.S. state privacy rights to opt out of sale or sharing of personal information.",
};

const linkClass = "text-brand-light hover:text-white";

const rights = [
  "Opt out of the sale or sharing of your personal information.",
  "Limit the use and disclosure of sensitive personal information.",
  "Know what personal information we have collected about you.",
  "Delete personal information we hold about you.",
  "Correct inaccurate personal information.",
  "Not be discriminated against for exercising any of these rights.",
];

export default function DoNotSellPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Do Not Sell or Share My Personal Information"
        description="California & other U.S. state privacy rights · Last updated: May 19, 2026"
      />

      <Section className="pt-4">
        <div className="mx-auto max-w-[820px] space-y-6 text-ink-dim">
          <p>
            Under the California Consumer Privacy Act of 2018 (&quot;CCPA&quot;), as amended by the
            California Privacy Rights Act (&quot;CPRA&quot;), and equivalent laws in Virginia
            (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA) and other
            U.S. states, you have the right to:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            {rights.map((right) => (
              <li key={right}>{right}</li>
            ))}
          </ul>
          <p>
            Becko does not sell personal information for monetary consideration. However, our use
            of third-party analytics and advertising cookies (e.g., Google Analytics, Meta Pixel)
            may constitute &quot;sharing&quot; or a &quot;sale&quot; under the broad definitions
            used by CCPA/CPRA. Submitting the form below will opt you out of these activities and
            instruct us to honour Global Privacy Control (GPC) signals from your browser going
            forward.
          </p>
          <p>
            See our{" "}
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className={linkClass} href="/cookie-policy">
              Cookie Policy
            </Link>{" "}
            for more detail on how we use cookies on this marketing website.
          </p>
        </div>
      </Section>

      <section className="pb-16">
        <div className="container">
          <div className="reveal-on-scroll">
            <DoNotSellForm />
            <p className="text-center text-ink-mute text-sm mt-8 max-w-xl mx-auto">
              You may also designate an authorised agent to make a request on your behalf.
              Authorised agents must provide written permission signed by you, and we may require
              you to verify your identity directly. Contact:{" "}
              <a className={linkClass} href={`mailto:${site.contact.privacyEmail}`}>
                {site.contact.privacyEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
