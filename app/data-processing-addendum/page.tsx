import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Data Processing Addendum (DPA)",
  description: "Data Processing Addendum for Becko platform customers acting as data controllers.",
};

const linkClass = "text-brand-light hover:text-white";

const sections = [
  {
    title: "1. Parties & Scope",
    body: (
      <>
        <p>
          This Data Processing Addendum (&quot;DPA&quot;) is entered into between the customer
          (&quot;Controller&quot;) and BECKO - TRAVEL OS LTD (&quot;Processor&quot;,
          &quot;Becko&quot;). It forms part of, and is subject to, the{" "}
          <Link className={linkClass} href="/terms">
            Terms of Service
          </Link>{" "}
          and governs the processing of personal data by Becko on behalf of the Controller in
          the course of providing the Service.
        </p>
        <p>
          This DPA applies to the extent personal data subject to the EU General Data Protection
          Regulation 2016/679 (&quot;GDPR&quot;), the UK GDPR and Data Protection Act 2018, or
          comparable data-protection laws is processed by Becko on behalf of the Controller.
        </p>
      </>
    ),
  },
  {
    title: "2. Definitions",
    body: (
      <p>
        Terms such as &quot;Controller&quot;, &quot;Processor&quot;, &quot;Data Subject&quot;,
        &quot;Personal Data&quot;, &quot;Processing&quot;, &quot;Sub-processor&quot;, and
        &quot;Supervisory Authority&quot; have the meaning given in the GDPR.
      </p>
    ),
  },
  {
    title: "3. Subject Matter & Duration",
    body: (
      <ul className="list-disc space-y-3 pl-6">
        <li>
          Subject matter: Provision of the Becko travel CRM, messaging, automation, and analytics
          platform.
        </li>
        <li>
          Duration: For the term of the underlying agreement plus the retention periods stated
          in the{" "}
          <Link className={linkClass} href="/privacy">
            Privacy Policy
          </Link>
          .
        </li>
        <li>
          Nature &amp; purpose: Hosting, storing, transmitting, analysing, and processing
          customer/end-user data to deliver the Service.
        </li>
        <li>
          Categories of data subjects: Controller&apos;s customers, leads, employees,
          contractors, and other end users.
        </li>
        <li>
          Categories of personal data: Contact details, communication content
          (Messenger/Instagram/WhatsApp/email), booking and travel data, payment metadata, lead
          form data, AI conversation context, and usage logs.
        </li>
      </ul>
    ),
  },
  {
    title: "4. Processor Obligations",
    body: (
      <>
        <p>Becko shall:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            Process personal data only on the Controller&apos;s documented instructions,
            including configuration within the platform and the Terms of Service
          </li>
          <li>
            Ensure persons authorised to process personal data are subject to confidentiality
            obligations
          </li>
          <li>
            Implement the technical and organisational security measures described in Section 7
          </li>
          <li>
            Assist the Controller, by appropriate measures, in responding to Data Subject requests
          </li>
          <li>
            Assist the Controller with data protection impact assessments and prior consultations
            where required
          </li>
          <li>
            Notify the Controller without undue delay (and in any event within 72 hours where
            feasible) on becoming aware of a Personal Data Breach
          </li>
          <li>
            Make available all information necessary to demonstrate compliance with Article 28
            GDPR
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Controller Obligations",
    body: (
      <>
        <p>The Controller represents and warrants that it:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li>
            Has a valid lawful basis for collecting, sharing, and instructing Becko to process the
            personal data
          </li>
          <li>
            Has provided all necessary notices and obtained all necessary consents from data
            subjects
          </li>
          <li>
            Will not upload categories of data prohibited by our{" "}
            <Link className={linkClass} href="/privacy">
              Privacy Policy
            </Link>{" "}
            /{" "}
            <Link className={linkClass} href="/acceptable-use-policy">
              Acceptable Use Policy
            </Link>{" "}
            unless explicitly permitted in writing
          </li>
          <li>
            Is responsible for managing user accounts, permissions, and credentials within its
            workspace
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Sub-processors",
    body: (
      <>
        <p>
          The Controller provides general written authorisation for Becko to engage sub-processors
          to deliver the Service. A current list is published at{" "}
          <Link className={linkClass} href="/subprocessors">
            /subprocessors
          </Link>{" "}
          and includes (without limitation) Supabase, Meta Platforms, OpenAI, Resend, AWS, Google
          Cloud, and RapidAPI providers.
        </p>
        <p>
          Supabase is engaged as a sub-processor on a dedicated-project-per-Controller basis. Each
          Controller&apos;s database, authentication, file storage, edge functions and secrets are
          provisioned inside a Supabase project exclusive to that Controller, with no shared
          database, schema, credentials or backend code between Controllers.
        </p>
        <p>
          Becko will notify the Controller of changes to sub-processors via email or via the
          subprocessor page at least 14 days in advance. The Controller may object on reasonable
          data-protection grounds; in that case the parties will discuss in good faith and, if no
          resolution is reached, the Controller may terminate the affected service.
        </p>
        <p>
          Becko remains liable for the acts and omissions of its sub-processors to the same extent
          as for its own.
        </p>
      </>
    ),
  },
  {
    title: "7. Security Measures",
    body: (
      <ul className="list-disc space-y-3 pl-6">
        <li>Encryption in transit (TLS 1.2+) and at rest</li>
        <li>Role-based access control and least-privilege policies</li>
        <li>Multi-factor authentication for administrative access</li>
        <li>Audit logging of access and changes</li>
        <li>
          Tenant isolation by dedicated Supabase project per Controller (separate database,
          authentication, storage, edge functions and secrets); intra-tenant brand isolation via
          Row-Level Security and brand_id checks where the Controller operates multiple brands
        </li>
        <li>Continuous monitoring, abuse detection, and rate limiting</li>
        <li>Backup, disaster-recovery, and business-continuity procedures</li>
        <li>
          Vendor security review and contractual data-protection terms with sub-processors
        </li>
        <li>Personnel training and confidentiality undertakings</li>
      </ul>
    ),
  },
  {
    title: "8. International Transfers",
    body: (
      <p>
        Where personal data is transferred outside the UK or EEA, the parties incorporate by
        reference the Standard Contractual Clauses (Commission Implementing Decision (EU)
        2021/914) and the UK International Data Transfer Addendum issued by the ICO, with Becko
        as data importer where applicable. The parties agree to the applicable modules and
        complete the annexes by reference to this DPA, the{" "}
        <Link className={linkClass} href="/privacy">
          Privacy Policy
        </Link>
        , and the{" "}
        <Link className={linkClass} href="/subprocessors">
          subprocessor list
        </Link>
        .
      </p>
    ),
  },
  {
    title: "9. Audit Rights",
    body: (
      <p>
        Becko will make available, upon reasonable written request and no more than once per
        year, summary security documentation, sub-processor list, and responses to standard
        security questionnaires (e.g. SIG-Lite, CAIQ). Where required by Article 28(3)(h) GDPR,
        the Controller may conduct an audit subject to: (a) 30 days&apos; prior written notice;
        (b) confidentiality undertakings; (c) audits being limited to information strictly
        necessary; and (d) the Controller bearing all costs.
      </p>
    ),
  },
  {
    title: "10. Data Subject Requests",
    body: (
      <p>
        The Controller is responsible for responding to data subject requests. Becko will, taking
        into account the nature of the processing, provide reasonable technical assistance through
        self-service tooling (export, deletion) and, where necessary, additional assistance at the
        Controller&apos;s cost.
      </p>
    ),
  },
  {
    title: "11. Personal Data Breach Notification",
    body: (
      <p>
        Becko will notify the Controller without undue delay after becoming aware of a Personal
        Data Breach affecting Controller&apos;s data, and will provide information reasonably
        required to meet the Controller&apos;s notification obligations under Articles 33 and 34
        GDPR.
      </p>
    ),
  },
  {
    title: "12. Return or Deletion",
    body: (
      <p>
        Upon termination of the Service, Becko will, at the Controller&apos;s choice, delete or
        return personal data, subject to legal retention requirements and the retention periods
        specified in the{" "}
        <Link className={linkClass} href="/privacy">
          Privacy Policy
        </Link>
        . Where the Controller chooses deletion, the dedicated Supabase project provisioned for
        the Controller is destroyed in its entirety, including the database, authentication users,
        storage objects, edge functions and secrets. Backups containing personal data will be
        deleted in accordance with our backup retention schedule.
      </p>
    ),
  },
  {
    title: "13. Liability & Order of Precedence",
    body: (
      <p>
        The liability provisions of the{" "}
        <Link className={linkClass} href="/terms">
          Terms of Service
        </Link>{" "}
        apply to this DPA. In the event of conflict between this DPA and the Terms of Service in
        respect of data protection matters, this DPA prevails.
      </p>
    ),
  },
  {
    title: "14. Acceptance & Contact",
    body: (
      <p>
        This DPA is automatically incorporated into and forms part of the{" "}
        <Link className={linkClass} href="/terms">
          Terms of Service
        </Link>
        . Customers requiring a counter-signed copy on Becko letterhead may request one from{" "}
        <a className={linkClass} href="mailto:privacy@becko.app">
          privacy@becko.app
        </a>
        .
      </p>
    ),
  },
];

export default function DataProcessingAddendumPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Data Processing Addendum (DPA)"
      description="Last updated: May 20, 2026"
      sections={sections}
    />
  );
}
