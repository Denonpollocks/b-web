import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Becko uses cookies and similar technologies on the platform and website.",
};

const sections = [
  {
    title: "1. Introduction",
    body: (
      <p>
        This Cookie Policy explains how BECKO - TRAVEL OS LTD ("Becko", "we", "us")
        uses cookies and similar technologies on the Becko platform and on our
        marketing website. It should be read alongside our Privacy Policy.
      </p>
    ),
  },
  {
    title: "2. What Are Cookies?",
    body: (
      <p>
        Cookies are small text files stored on your device when you visit a
        website. Similar technologies include local storage, session storage,
        pixels, and SDKs. They allow a site to recognise your device, remember
        preferences, and measure performance.
      </p>
    ),
  },
  {
    title: "3. Cookies Inside the Becko Application",
    body: (
      <>
        <p>
          The Becko application (`app.becko.app` and brand subdomains) uses only
          strictly necessary cookies and browser storage required to operate the
          Service:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Session authentication tokens (Supabase Auth)</li>
          <li>Security tokens and CSRF protection</li>
          <li>In-app preferences (theme, last-used brand, sidebar state)</li>
          <li>Service worker cache for offline reliability</li>
        </ul>
        <p>
          No consent banner is shown inside the application because no consent is
          required for strictly necessary technologies under GDPR Art. 5(3)
          ePrivacy and UK PECR Reg. 6(4). The Becko application does not run
          third-party analytics, advertising pixels, or cross-site tracking.
        </p>
      </>
    ),
  },
  {
    title: "4. Cookies on Our Marketing Website",
    body: (
      <>
        <p>
          Our public marketing website (`becko.app`) may use additional cookies
          that require your consent. These typically fall into the following
          categories:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Strictly Necessary: Required for the site to function.</li>
          <li>Analytics: Google Analytics 4 - measures aggregate site usage.</li>
          <li>
            Advertising / Marketing: Meta Pixel, TikTok Pixel, LinkedIn Insight
            Tag - measure ad effectiveness and enable remarketing.
          </li>
          <li>Functional: Embedded video players, chat widgets, and form tools.</li>
        </ul>
        <p>
          A consent banner is shown on first visit to `becko.app`, allowing you to
          accept, reject, or customise non-essential cookies. You can change your
          preferences at any time via the cookie settings link in the website
          footer.
        </p>
      </>
    ),
  },
  {
    title: "5. Managing Cookies",
    body: (
      <>
        <p>
          Most browsers allow you to view, manage, delete, and block cookies via
          their settings. Note that disabling strictly necessary cookies will
          prevent the Becko application from functioning correctly (you will not be
          able to stay signed in).
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <Link
              href="https://support.google.com/chrome/answer/95647"
              className="text-brand-light hover:text-white"
            >
              Google Chrome
            </Link>
          </li>
          <li>
            <Link
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
              className="text-brand-light hover:text-white"
            >
              Mozilla Firefox
            </Link>
          </li>
          <li>
            <Link
              href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
              className="text-brand-light hover:text-white"
            >
              Apple Safari
            </Link>
          </li>
          <li>
            <Link
              href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
              className="text-brand-light hover:text-white"
            >
              Microsoft Edge
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Changes to This Policy",
    body: (
      <p>
        We may update this Cookie Policy from time to time. Material changes will
        be reflected on this page with a revised "Last updated" date.
      </p>
    ),
  },
  {
    title: "7. Contact",
    body: (
      <p>
        Questions about cookies? Email{" "}
        <a className="text-brand-light hover:text-white" href="mailto:privacy@becko.app">
          privacy@becko.app
        </a>
        .
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookie Policy"
      title="Cookie Policy"
      description="Last updated: May 20, 2026"
      sections={sections}
    />
  );
}
