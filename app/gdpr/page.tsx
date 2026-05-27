import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "GDPR Compliance",
  description:
    "How BECKO – TRAVEL OS LTD meets its obligations under the EU GDPR and UK GDPR.",
};

const linkClass = "text-brand-light hover:text-white";

const sections = [
  {
    title: "1. What is the GDPR?",
    body: (
      <>
        <p>
          The GDPR is the European Union&apos;s data protection framework, in force since 25
          May 2018, and is mirrored in the United Kingdom by the UK GDPR and the Data
          Protection Act 2018. It gives individuals in the EU/EEA and the UK enforceable
          rights over their personal data, and places binding obligations on the organisations
          that collect, store, share or otherwise process it.
        </p>
        <p>
          Becko is a travel CRM and operations platform. Our clients — tour operators, travel
          agencies, DMCs and travel brands — use Becko to manage leads, customers, bookings,
          payments, suppliers and messaging. Much of that data relates to identifiable
          travellers and prospects, which means GDPR is central to how we build, operate and
          secure the product.
        </p>
      </>
    ),
  },
  {
    title: "2. How Becko complies — at a glance",
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>A GDPR-aligned Data Processing Addendum available to every client.</li>
        <li>Public sub-processor list with notice of material changes.</li>
        <li>
          EU Standard Contractual Clauses (2021) and the UK IDTA in place for international
          transfers.
        </li>
        <li>Encryption in transit (TLS 1.2+) and at rest, with managed key rotation.</li>
        <li>
          Row-Level Security and application-layer brand isolation across the multi-tenant
          database.
        </li>
        <li>Mandatory MFA for administrative access and least-privilege internal roles.</li>
        <li>
          Automatic PII redaction (names, emails, phone numbers, payment data) before any AI
          model call.
        </li>
        <li>
          Comprehensive audit and activity logs covering authentication, data exports and
          admin actions.
        </li>
        <li>
          Documented incident response with a target controller-notification window of 72
          hours.
        </li>
        <li>Self-serve data deletion and export flows for data subjects.</li>
      </ul>
    ),
  },
  {
    title: "3. Controller, Processor and Sub-processor – Becko's role",
    body: (
      <>
        <p>
          For personal data that our clients upload, capture or generate through the platform
          (leads, customers, travellers, passengers, conversations, bookings, supplier
          contacts), the client is the Data Controller and Becko acts as Data Processor. We
          process that data only on documented instructions from the client, as set out in our
          DPA.
        </p>
        <p>
          For data we determine the purposes and means of — such as account, billing and
          subscription information, security telemetry, service logs and product analytics
          about how the platform itself is used — Becko acts as an independent Data Controller.
        </p>
        <p>
          We engage a small number of carefully vetted sub-processors (for example cloud
          infrastructure, transactional email, AI providers and messaging APIs). All
          sub-processors are bound by written agreements that impose data protection obligations
          equivalent to those we accept under the DPA.
        </p>
      </>
    ),
  },
  {
    title: "4. Lawful bases relevant to a travel CRM",
    body: (
      <>
        <p>
          The lawful bases most commonly relied on when Becko is used in a travel context are:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-ink">Contract</strong> — to quote, book and deliver travel
            services a traveller has requested.
          </li>
          <li>
            <strong className="text-ink">Legitimate interests</strong> — for fraud prevention,
            service security, internal analytics and limited B2B follow-up, balanced against the
            rights of the individual.
          </li>
          <li>
            <strong className="text-ink">Consent</strong> — for marketing emails, WhatsApp and
            Messenger broadcasts, non-essential cookies, and any optional profiling.
          </li>
          <li>
            <strong className="text-ink">Legal obligation</strong> — for tax,
            anti-money-laundering, accounting and travel-industry regulatory record keeping.
          </li>
        </ul>
        <p>
          The client (Controller) is responsible for selecting and documenting the appropriate
          lawful basis for each processing activity carried out through Becko.
        </p>
      </>
    ),
  },
  {
    title: "5. Data subject rights and how to exercise them",
    body: (
      <>
        <p>Individuals whose data is processed through Becko have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Access the personal data held about them.</li>
          <li>Have inaccurate or incomplete data corrected.</li>
          <li>
            Have their data deleted (the &quot;right to be forgotten&quot;) subject to legal
            retention requirements.
          </li>
          <li>Restrict or object to certain processing, including direct marketing.</li>
          <li>Receive their data in a portable, machine-readable format (JSON/CSV).</li>
          <li>
            Not be subject to solely automated decisions producing legal or similarly
            significant effects.
          </li>
          <li>Withdraw consent at any time where consent is the lawful basis.</li>
          <li>
            Lodge a complaint with a supervisory authority (in the UK, the{" "}
            <a
              className={linkClass}
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              ICO
            </a>
            ).
          </li>
        </ul>
        <p>
          Requests can be made through{" "}
          <Link className={linkClass} href="/data-deletion">
            /data-deletion
          </Link>
          ,{" "}
          <Link className={linkClass} href="/do-not-sell">
            /do-not-sell
          </Link>
          , or by emailing{" "}
          <a className={linkClass} href="mailto:privacy@becko.app">
            privacy@becko.app
          </a>
          . Where Becko is the Processor, we will forward the request to the relevant client
          without undue delay and assist them in responding. We aim to action verified requests
          within 30 days, extendable by a further 60 days where permitted by Article 12(3).
        </p>
      </>
    ),
  },
  {
    title: "6. International data transfers",
    body: (
      <p>
        Becko is headquartered in the United Kingdom. Some sub-processors host or process data
        outside the UK and EEA, including the United States. Where transfers occur, we rely on
        a recognised transfer mechanism, typically the European Commission&apos;s 2021 Standard
        Contractual Clauses and the UK International Data Transfer Addendum, supplemented by
        additional technical and organisational measures (encryption, access controls, transfer
        impact assessments) as appropriate. The current list of sub-processors and the regions
        in which they operate is published at{" "}
        <Link className={linkClass} href="/subprocessors">
          /subprocessors
        </Link>
        .
      </p>
    ),
  },
  {
    title: "7. Security measures (Article 32)",
    body: (
      <>
        <p>
          We implement and maintain layered safeguards proportionate to the risk of the
          processing, including:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            TLS 1.2+ for all data in transit; encryption at rest for databases, backups and
            object storage.
          </li>
          <li>
            PostgreSQL Row-Level Security plus application-layer brand_id isolation between
            tenants.
          </li>
          <li>
            Mandatory MFA for administrative consoles and rotating secrets for
            service-to-service calls.
          </li>
          <li>
            Role-based access control, granular menu permissions and least-privilege internal
            access reviews.
          </li>
          <li>
            Centralised audit logs covering logins, exports, role changes and sensitive admin
            actions.
          </li>
          <li>
            Daily encrypted backups with documented restore procedures and disaster-recovery
            objectives.
          </li>
          <li>Vulnerability management and a public responsible disclosure programme.</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. AI and automated processing",
    body: (
      <p>
        Becko uses AI models (currently OpenAI&apos;s GPT family and Google Gemini, via the
        Lovable AI Gateway for some surfaces) to power features such as content generation,
        Becko Studio creative tools, travel-card enrichment and assistive replies. Before any
        prompt is sent to an external model, Becko automatically redacts personally identifiable
        information — including names, email addresses, phone numbers and payment card details.
        We do not allow our AI sub-processors to use customer content to train their public
        foundation models. Materially impactful decisions — pricing, booking confirmation,
        refunds, supplier commitments — always require human review. See the{" "}
        <Link className={linkClass} href="/ai-usage-policy">
          AI Usage Policy
        </Link>{" "}
        for the full position.
      </p>
    ),
  },
  {
    title: "9. Messaging, marketing and ePrivacy",
    body: (
      <p>
        Messaging features (email, WhatsApp Cloud API, Messenger, Instagram, SMS) are powerful
        and tightly regulated. Clients are responsible for obtaining and recording valid consent
        before sending marketing communications, complying with the WhatsApp Business and Meta
        platform policies, and honouring opt-out requests immediately. Becko enforces automatic
        STOP/opt-out handling on supported channels and blocks further outbound messages to
        opted-out recipients. Detailed rules are set out in the{" "}
        <Link className={linkClass} href="/acceptable-use-policy">
          Acceptable Use Policy
        </Link>
        .
      </p>
    ),
  },
  {
    title: "10. Personal data breach notification",
    body: (
      <p>
        If Becko becomes aware of a personal data breach affecting client data, we will notify
        the impacted client(s) without undue delay and, where feasible, within 72 hours of
        becoming aware of it. Our notification will, to the extent then known, describe the
        nature of the breach, the categories and approximate number of data subjects and records
        concerned, the likely consequences, and the measures taken or proposed to address it and
        mitigate possible adverse effects (Article 33(3)).
      </p>
    ),
  },
  {
    title: "11. Records of processing (Article 30)",
    body: (
      <p>
        Becko maintains an internal record of the processing activities carried out on behalf of
        clients, including categories of data, purposes, sub-processors and applicable transfer
        mechanisms. A summary relevant to a specific client engagement can be requested by
        Controllers at{" "}
        <a className={linkClass} href="mailto:privacy@becko.app">
          privacy@becko.app
        </a>{" "}
        under the DPA.
      </p>
    ),
  },
  {
    title: "12. Children's data",
    body: (
      <p>
        The Becko platform is a B2B tool not directed at children. Where bookings involve
        travellers under the age of 16, the client (Controller) is responsible for ensuring that
        any required parental or guardian consent has been obtained before personal data is
        entered into Becko.
      </p>
    ),
  },
  {
    title: "13. Your responsibilities as a Becko client",
    body: (
      <>
        <p>When you use Becko as a Data Controller you are responsible for:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Identifying and documenting a lawful basis for each processing activity.</li>
          <li>Providing a transparent privacy notice to your travellers, leads and contacts.</li>
          <li>Collecting and recording valid consent for marketing and non-essential cookies.</li>
          <li>
            Configuring user roles, brand isolation and menu permissions inside Becko to
            enforce least-privilege.
          </li>
          <li>
            Responding to data subject requests within statutory timeframes and instructing
            Becko where assistance is required.
          </li>
          <li>
            Ensuring that any third-party tools you integrate with (CRMs, supplier APIs,
            automation tools) are themselves GDPR-compliant.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "14. Common questions",
    body: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg text-ink">Does GDPR require my data to be stored inside the EU?</h3>
          <p className="mt-2">
            No. GDPR does not mandate EU-only hosting. It requires that any transfer outside the
            EEA/UK is protected by an approved mechanism such as Standard Contractual Clauses or
            the UK IDTA, together with appropriate supplementary measures.
          </p>
        </div>
        <div>
          <h3 className="text-lg text-ink">Does GDPR apply to me if I&apos;m based outside the EU?</h3>
          <p className="mt-2">
            It can. GDPR applies whenever you process personal data of individuals located in the
            EU or UK in connection with offering them goods or services or monitoring their
            behaviour, regardless of where your business is located.
          </p>
        </div>
        <div>
          <h3 className="text-lg text-ink">What happens to my data if I close my Becko account?</h3>
          <p className="mt-2">
            On termination, customer personal data is deleted or anonymised in accordance with the
            timelines set out in our DPA and{" "}
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>
            , except where retention is required by law (for example accounting and tax records).
          </p>
        </div>
        <div>
          <h3 className="text-lg text-ink">
            How do third-party travel integrations (Brightsun, Ratehawk, Meta, payment gateways)
            fit in?
          </h3>
          <p className="mt-2">
            These integrations are sub-processors when Becko routes data to them on your
            instruction, and independent controllers when you connect to them directly. Either way,
            you remain responsible for ensuring the integration is appropriate for the personal data
            involved.
          </p>
        </div>
        <div>
          <h3 className="text-lg text-ink">How do I delete a specific traveller or contact?</h3>
          <p className="mt-2">
            Use the deletion controls within the relevant customer, lead, contact or conversation
            record. Any data also passed to third parties (suppliers, payment providers, marketing
            tools) must be deleted with those providers directly.
          </p>
        </div>
        <div>
          <h3 className="text-lg text-ink">Will Becko sign a custom DPA?</h3>
          <p className="mt-2">
            Our standard DPA at{" "}
            <Link className={linkClass} href="/data-processing-addendum">
              /data-processing-addendum
            </Link>{" "}
            is designed to satisfy Article 28 requirements. Enterprise clients with specific
            requirements can contact{" "}
            <a className={linkClass} href="mailto:legal@becko.app">
              legal@becko.app
            </a>
            .
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "15. Resources and contact",
    body: (
      <>
        <p>Related Becko policies:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/data-processing-addendum">
              Data Processing Addendum
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/subprocessors">
              Sub-processors
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/acceptable-use-policy">
              Acceptable Use Policy
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/ai-usage-policy">
              AI Usage Policy
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/cookie-policy">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/security">
              Security Vulnerability Disclosure
            </Link>
          </li>
        </ul>
        <p className="mt-4">
          Data protection enquiries:{" "}
          <a className={linkClass} href="mailto:privacy@becko.app">
            privacy@becko.app
          </a>
        </p>
        <p>
          Controller: {site.company.legalName}, United Kingdom.
        </p>
      </>
    ),
  },
];

export default function GdprPage() {
  return (
    <LegalPage
      eyebrow="GDPR Compliance"
      title="GDPR Compliance"
      description={
        <>
          How {site.company.legalName} meets its obligations under the EU General Data Protection
          Regulation (Regulation (EU) 2016/679) and the UK GDPR · Last updated: May 20, 2026
        </>
      }
      sections={[
        {
          title: "Disclaimer",
          body: (
            <p>
              This page summarises how Becko approaches the EU and UK GDPR. It is provided for
              transparency and general information only, reflects our interpretation of the
              legislation as of the date above, and does not constitute legal advice. GDPR is
              highly fact-specific; you should consult qualified counsel to determine how it
              applies to your organisation, your travellers and your specific use of the Becko
              platform. {site.company.legalName} makes no warranties, express or implied,
              regarding the information on this page.
            </p>
          ),
        },
        ...sections,
      ]}
    />
  );
}
