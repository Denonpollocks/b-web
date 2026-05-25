import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Becko platform.",
};

type SectionContent = {
  heading: string;
  introParagraphs?: string[];
  paragraphs?: string[];
  bullets?: string[];
  extraBullets?: string[];
  closingParagraphs?: string[];
  bulletsFirst?: boolean;
};

const sections: SectionContent[] = [
  {
    heading: "1. Introduction",
    paragraphs: [
      `BECKO - TRAVEL OS LTD ("Becko", "we", "our", or "us") operates a travel management, CRM, and messaging platform. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our services, including data obtained through Facebook Lead Ads, Facebook Messenger, Instagram Direct Messages, WhatsApp Business, and AI-powered agent interactions.`,
      `This policy applies to all users of the Becko platform, including travel customers, brand employees, and any individuals who interact with our connected messaging services.`,
      `Becko is designed to align with major global privacy and data protection frameworks, including the EU GDPR, UK GDPR, Swiss FADP, the California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA) and other US state privacy laws (VCDPA, CPA, CTDPA, UCPA, TDPSA), Brazil's LGPD, Mexico's Federal Law on Protection of Personal Data Held by Private Parties, Argentina's Personal Data Protection Law, Chile's Law N°19.628, Colombia's Statutory Law 1581, Peru's Law N°29733, Singapore's PDPA, and the New Zealand Privacy Act 2020.`,
    ],
  },
  {
    heading: "2. Data Controller & Processor Roles",
    introParagraphs: [
      `For customer data processed through the Becko platform on behalf of client businesses, the client business acts as the Data Controller and BECKO - TRAVEL OS LTD acts as the Data Processor. Becko processes personal data solely in accordance with the documented instructions of the client business and applicable law.`,
      `For limited operational purposes, Becko may act as an independent Data Controller, including for:`,
    ],
    bullets: [
      `Billing and account management`,
      `Fraud prevention`,
      `Security monitoring`,
      `Abuse detection`,
      `Compliance obligations`,
      `Platform administration`,
    ],
    paragraphs: [
      `Becko has no direct relationship with the travellers, leads, subscribers, or end customers whose data is uploaded into the platform by our client businesses. If you are such an individual, you should direct rights requests to the client business that collected your data; we will support that business in responding to you under our Data Processing Addendum.`,
    ],
  },
  {
    heading: "3. Lawful Basis for Processing",
    introParagraphs: [
      `We process personal data under the following lawful bases as defined by the General Data Protection Regulation (GDPR):`,
    ],
    bullets: [
      `Consent: When you initiate a conversation with us via Messenger, Instagram, or WhatsApp, or opt in to receive notifications (One-Time or Recurring Notifications). You may withdraw consent at any time by sending "STOP" or "UNSUBSCRIBE" in any conversation.`,
      `Contract Performance: Processing necessary to fulfil travel bookings, manage reservations, process payments, and deliver the services you have requested.`,
      `Legitimate Interest: Responding to customer inquiries, providing customer support, monitoring service quality, and preventing fraud — where our interest does not override your fundamental rights.`,
      `Legal Obligation: Retaining booking and financial records as required by applicable tax and accounting regulations.`,
    ],
  },
  {
    heading: "4. Information We Collect",
    introParagraphs: [
      `We may collect the following categories of personal data:`,
    ],
    bullets: [
      `Contact Information: Full name, email address, phone number, mailing address.`,
      `Account & Authentication Data: Login credentials, OAuth access tokens, multi-factor authentication settings, profile information, user preferences.`,
      `Lead Data from Facebook: Information submitted through Facebook Lead Ad forms, including name, email, phone number, and any custom form fields.`,
      `Booking & Travel Data: Travel dates, destinations, passenger details, and booking preferences.`,
      `Payment Data: Billing address, payment-card type, last 4 digits and expiry of the card, billing email and phone. Full card numbers are handled by our PCI-compliant payment processors and never stored on Becko servers.`,
      `Device & Technical Data: IP address, device identifiers, browser type and version, operating system, screen resolution, language and timezone, and other unique technical identifiers collected automatically when you access the Service.`,
      `Usage & Interaction Data: Dashboard events, feature usage, audit logs, click and navigation events used for product analytics, debugging, and security review.`,
      `Geolocation Data: Approximate location derived from your IP address. We do not collect precise GPS location.`,
      `Social Network Data: Where you sign in via a third-party identity provider or connect a social channel, we may receive profile fields such as username, display name, profile picture, language, timezone, and the scopes you authorise.`,
      `Communications & Support Data: Emails, in-app messages, support tickets, chat transcripts with our team, and associated metadata.`,
      `Inferences: Limited inferences derived from the data above — for example lead-scoring signals, engagement scores, or quality metrics — used to operate the Service.`,
      `Messenger Conversation Data: Messages sent and received via Facebook Messenger, including text content, attachments (images, files), timestamps, sender names, and read receipts.`,
      `Instagram Direct Message Data: Messages exchanged via Instagram DMs, story mentions, story replies, and associated media.`,
      `WhatsApp Message Data: Messages exchanged via WhatsApp Business API, including text, media, documents, and delivery status.`,
      `Notification Opt-In Data: One-Time Notification (OTN) tokens and Recurring Notification opt-in preferences collected when you consent to receive follow-up messages.`,
      `AI Interaction Data: Messages processed by our AI agents for automated responses, including flight search queries, hotel search queries, and booking inquiries.`,
      `Travel Search Data: Flight and hotel search parameters (dates, destinations, passenger counts) processed through third-party travel APIs on your behalf.`,
      `Ad Referral Data: Information about which advertisement or campaign directed you to contact us, including ad IDs, campaign names, and referral sources.`,
    ],
  },
  {
    heading: "5. How We Collect Personal Data",
    introParagraphs: [
      `We collect personal data from the following categories of sources:`,
    ],
    bullets: [
      `Directly from you — when you create an account, fill out a form, complete a booking, contact support, or send us a message on any connected channel.`,
      `Automatically as you use the Service — through server logs, cookies and similar technologies (see §22), and product telemetry that records how features are used so we can secure, debug, and improve the platform.`,
      `From third parties — including Meta (Messenger, Instagram, WhatsApp, Lead Ads webhooks), identity providers used for single sign-on, payment processors, anti-fraud services, and travel-supplier APIs that return data in response to searches you initiate.`,
      `From our client businesses ("Customer Content") — our clients import, upload, or otherwise submit personal data about their travellers, leads, employees, or other individuals so that they can use the Service. We process such Customer Content strictly on the client's documented instructions as set out in our Data Processing Addendum. Clients are responsible for having a lawful basis to share that data with us and for providing any required notices to the individuals concerned.`,
    ],
  },
  {
    heading: "6. How We Use Your Information",
    bullets: [
      `To manage travel bookings and provide customer service`,
      `To process and respond to leads from Facebook Lead Ads`,
      `To communicate with you about your bookings, quotes, and inquiries via your preferred messaging channel`,
      `To provide automated responses through AI-powered agents to assist with travel inquiries, flight searches, and hotel searches`,
      `To send follow-up messages you have opted in to receive (One-Time Notifications and Recurring Notifications)`,
      `To send broadcast messages to opted-in subscribers about travel offers and updates`,
      `To improve our services, AI agent performance, and user experience`,
      `To comply with legal obligations`,
      `To monitor conversation quality metrics for service improvement`,
    ],
  },
  {
    heading: "7. Facebook Messenger & Instagram Data",
    introParagraphs: [
      `When you communicate with one of our brands via Facebook Messenger or Instagram Direct Messages, we receive and store your messages through Meta's Webhooks API. This data is used solely for the purpose of:`,
    ],
    bullets: [
      `Responding to your messages and inquiries`,
      `Providing automated responses via AI agents or message flows`,
      `Managing your conversation status and assigning support agents`,
      `Capturing contact details (phone numbers, email addresses) you voluntarily share in conversation`,
      `Processing One-Time Notification (OTN) and Recurring Notification opt-ins you explicitly consent to`,
    ],
    paragraphs: [
      `We do not use Messenger or Instagram conversation data for advertising, profiling, or any purpose other than supporting the messaging experience and providing the services you have requested.`,
      `Instagram-Specific Data: Instagram DM data is subject to the same retention and deletion policies as Messenger data. Story mentions and story replies you send are stored as conversation context to provide continuity in your customer service experience.`,
      `Opt-Out: You can stop receiving automated messages at any time by sending "STOP", "UNSUBSCRIBE", or "OPT OUT" in any Messenger or Instagram conversation. We will immediately cease all automated messaging and confirm your opt-out. You may still receive replies from human agents to messages you initiate.`,
    ],
  },
  {
    heading: "8. WhatsApp Business Data",
    introParagraphs: [
      `When you interact with our business via WhatsApp, your messages are processed through Meta's WhatsApp Cloud API. In this context, Meta acts as a data processor on behalf of our business.`,
      `WhatsApp message data is retained by Meta for a maximum of 30 days at rest (or 1 hour if "No Storage" mode is enabled), after which it is automatically deleted from Meta's servers.`,
      `All messages are encrypted in transit (TLS 1.2+) and at rest (AES-256).`,
      `Meta does not use WhatsApp message content for advertising purposes.`,
      `Meta's Cloud API infrastructure is SOC 2 Type II and ISO 27001 certified, with GDPR and LGPD compliant transfer mechanisms.`,
      `You have the right to request access to or deletion of any WhatsApp conversation data we hold about you.`,
      `Opt-In Disclosure: Before sending you WhatsApp messages, our client businesses are required to obtain your explicit opt-in consent. This means you must have voluntarily provided your mobile phone number and confirmed that you wish to receive messages from the specific business. The opt-in process clearly states the business's name and the nature of messages you will receive. Opt-in methods comply with applicable local laws and Meta's requirements.`,
      `Data Storage Options: Depending on the configuration chosen by our client businesses, WhatsApp data may be stored under one of the following modes:`,
    ],
    bullets: [
      `Standard Storage: Messages are retained on Meta's servers for up to 30 days. Media attachments (images, videos, documents) are downloadable for up to 7 days, after which they are permanently deleted from Meta's servers.`,
      `Local Storage: Businesses may configure data-at-rest to be stored in a specific country or region. Note that phone numbers extracted from shared contact cards (vCards) may be stored on Meta's data centres regardless of Local Storage settings.`,
      `No Storage: When enabled, messages are retained on Meta's servers for only 1 hour. Failed webhook delivery retries are limited to 1 hour (vs. 7 days in standard mode). If our systems experience brief downtime during this window, incoming messages may be permanently lost.`,
    ],
    paragraphs: [
      `WhatsApp Marketing Messages: We comply with the WhatsApp Business Policy and WhatsApp Commerce Policy. Marketing template messages are only sent to users who have explicitly opted in. We do not use WhatsApp to market or sell regulated goods including alcohol, tobacco, weapons, or adult content.`,
      `Opt-Out: You can stop receiving automated WhatsApp messages at any time by sending "STOP", "UNSUBSCRIBE", or "OPT OUT" in any WhatsApp conversation. We will immediately cease all automated messaging, including welcome messages, away messages, AI agent responses, and broadcast messages.`,
    ],
  },
  {
    heading: "9. AI Agent Data Processing & Anonymization",
    introParagraphs: [
      `Our platform uses AI-powered agents (powered by OpenAI) to assist with automated responses in conversations. When an AI agent is active:`,
    ],
    bullets: [
      `Your messages are sent to OpenAI's API for processing. OpenAI does not use API data to train its models (per OpenAI's API data usage policy).`,
      `AI-generated responses may include flight search results and hotel search results retrieved from third-party travel APIs (via RapidAPI).`,
      `Conversation context is stored locally in our database to provide relevant responses. This context is brand-scoped and isolated.`,
      `We do not use your conversation data to train custom AI models without your explicit consent.`,
    ],
    paragraphs: [
      `AI Model Training Clarification: Becko does not use customer conversations to train public AI foundation models. Any internal AI improvement processes rely solely on anonymized pattern analysis and operational quality review. Personally identifiable information is stripped prior to any internal analysis workflows.`,
      `Automatic PII Anonymization: All conversation data used for AI training, pattern extraction, or conversation analysis is automatically anonymized before processing. Our system strips personal identifiers — including names, email addresses, phone numbers, and payment card numbers — and replaces them with anonymous placeholders (e.g., [CUSTOMER], [EMAIL], [PHONE], [CARD]). This means:`,
    ],
    extraBullets: [
      `Anonymized training data cannot be traced back to any individual`,
      `Raw conversation data containing personal information is never used for model training — only anonymized behavioral patterns are stored`,
      `Each anonymization event is logged with metadata (number of PII tokens stripped) for audit purposes`,
      `Operational data (your active inbox messages, session context) remains intact to support the messaging experience but is not used for training`,
    ],
    closingParagraphs: [
      `AI Training Consent: If a brand agent chooses to use conversation data for AI training purposes (to improve response quality), this uses only the anonymized patterns and techniques observed in conversations, not personally identifiable information. You may opt out of AI training by contacting us.`,
    ],
  },
  {
    heading: "10. Facebook Lead Ads Data",
    paragraphs: [
      `When you submit a lead through a Facebook Lead Ad form connected to our platform, we receive and store the information you provided. This data is used solely for the purpose of responding to your inquiry and providing travel-related services. We comply with Meta's Platform Terms and Data Use policies.`,
    ],
  },
  {
    heading: "11. Data Storage & Security Measures",
    introParagraphs: [
      `Your data is stored securely using industry-standard encryption and access controls. We use Supabase as our backend infrastructure, which provides enterprise-grade security including encryption at rest and in transit. Access to personal data is restricted to authorised personnel only.`,
      `BECKO - TRAVEL OS LTD implements appropriate technical and organisational security measures designed to protect personal data, including:`,
    ],
    bullets: [
      `Encryption in transit (TLS)`,
      `Encryption at rest`,
      `Role-based access controls`,
      `Least-privilege access policies`,
      `Audit logging`,
      `Authentication controls (including MFA for administrators)`,
      `Backup and disaster recovery procedures`,
      `Monitoring and abuse detection systems`,
      `Restricted internal access to personal data`,
    ],
    paragraphs: [
      `Brand data is isolated — each brand's data (conversations, leads, customer records) is maintained separately and cannot be accessed by other brands using our platform.`,
    ],
  },
  {
    heading: "12. Shared Responsibility Model",
    paragraphs: [
      `While Becko maintains platform-level security controls, client businesses are responsible for:`,
    ],
    bullets: [
      `Managing user permissions`,
      `Securing account credentials`,
      `Configuring access controls`,
      `Training employees on proper data handling`,
      `Ensuring lawful use of the platform`,
    ],
  },
  {
    heading: "13. Abuse & Fraud Monitoring",
    paragraphs: [
      `We may monitor platform activity, messaging behaviour, automation usage, API requests, and system interactions for the purposes of:`,
    ],
    bullets: [
      `Fraud prevention`,
      `Abuse detection`,
      `Spam prevention`,
      `Security monitoring`,
      `Platform integrity`,
      `Policy enforcement`,
    ],
  },
  {
    heading: "14. Sensitive Data Restrictions",
    introParagraphs: [
      `Unless explicitly supported by the Service and agreed in writing, users must not upload, transmit, or process the following categories of data through the platform:`,
    ],
    bullets: [
      `Payment card data`,
      `Government identification numbers`,
      `Biometric data`,
      `Medical records`,
      `Passport scans`,
      `Visa documentation`,
      `Special category data under GDPR`,
    ],
    paragraphs: [
      `Becko does not intentionally collect or process Special Categories of Personal Data as a Controller. Where such data is submitted through the Service by a client business, the client business is the Controller and Becko acts strictly as a Processor under the Data Processing Addendum.`,
    ],
  },
  {
    heading: "15. Data Sharing & Third-Party Service Providers",
    introParagraphs: [
      `We do not sell your personal data. We may share data with the following categories of trusted third-party service providers solely for the purpose of delivering our services:`,
    ],
    bullets: [
      `Meta Platforms, Inc. — For Facebook Messenger, Instagram DM, WhatsApp Business, and Lead Ads integrations`,
      `OpenAI — For AI-powered automated response generation`,
      `Supabase — For secure data storage, authentication, and backend infrastructure`,
      `RapidAPI / Travel API providers — For flight and hotel search functionality requested by users`,
      `Resend — For transactional email delivery (booking confirmations, invoices)`,
      `AWS / Google Cloud — For hosting and infrastructure components where applicable`,
    ],
    paragraphs: [
      `All third parties are contractually obligated to protect your data and process it only as instructed by us. A current list of subprocessors is available on our Subprocessors page.`,
    ],
  },
  {
    heading: "16. International Data Transfers",
    paragraphs: [
      `Personal data may be processed in the United Kingdom, the European Economic Area, the United States, and other jurisdictions where our service providers operate (including Supabase, Resend, OpenAI, Meta, Google, and AWS). Where data is transferred out of the UK or EEA, we rely on Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914) and, where applicable, the UK International Data Transfer Addendum, supplemented by additional safeguards.`,
    ],
  },
  {
    heading: "17. Data Retention",
    paragraphs: [
      `We retain personal data for as long as necessary to fulfil the purposes for which it was collected, or as required by law:`,
    ],
    bullets: [
      `Lead data: Retained for up to 24 months unless you request earlier deletion`,
      `Messenger/Instagram/WhatsApp conversations: Retained for up to 24 months from the last message, or until you request deletion`,
      `Notification tokens: Retained until used (OTN) or until you opt out (recurring)`,
      `Booking and financial records: Retained as required by applicable tax and accounting regulations`,
      `AI training data: Retained for up to 12 months, or until you opt out`,
      `WhatsApp media attachments: Media sent to our business via WhatsApp is downloadable for up to 7 days (or 1 hour if No Storage is enabled), after which it is permanently deleted from Meta's servers. Media stored in our own systems follows the conversation retention policy above.`,
    ],
  },
  {
    heading: "18. Disaster Recovery & Backups",
    paragraphs: [
      `We maintain backup and disaster recovery procedures designed to support platform continuity, resilience, and restoration of data in the event of system failure or security incidents. Backups are encrypted, access-controlled, and tested periodically to ensure recoverability.`,
    ],
  },
  {
    heading: "19. Aggregated & De-identified Data",
    paragraphs: [
      `We may create aggregated, de-identified, or anonymised data from the personal data we process — for example, by stripping personal identifiers and combining records into statistical datasets. This data cannot reasonably be used to re-identify any individual. We may retain and use such aggregated data indefinitely for lawful business purposes including analysing usage patterns, securing the platform, improving AI quality, benchmarking performance, and producing industry research. We will not attempt to re-identify aggregated data and we will not share it in a form that could identify you.`,
    ],
  },
  {
    heading: "20. Business Transfers",
    paragraphs: [
      `If BECKO - TRAVEL OS LTD is involved in a merger, acquisition, financing, reorganisation, sale of company assets, or insolvency proceeding, personal data we hold may be transferred to a successor or affiliated entity as part of that transaction. Where legally required, we will notify you and, where applicable, the relevant client Controller, before personal data becomes subject to a different privacy policy. Any successor entity will be required to honour the commitments made in this Privacy Policy with respect to data collected prior to the transfer.`,
    ],
  },
  {
    heading: "21. Your Rights",
    introParagraphs: [
      `Subject to applicable law, you have the right to:`,
    ],
    bullets: [
      `Access the personal data we hold about you`,
      `Request correction of inaccurate data`,
      `Request deletion of your data (see our Data Deletion page)`,
      `Withdraw consent for marketing communications and automated messaging`,
      `Opt out of AI training on your conversation data`,
      `Request a portable copy of your data`,
      `Lodge a complaint with a data protection authority`,
      `Object to processing based on legitimate interests`,
      `Opt out of the "sale" or "sharing" of personal information and of cross-context behavioural advertising (Becko does not engage in either, but you may still exercise this right)`,
      `Limit the use of sensitive personal information`,
    ],
    paragraphs: [
      `How to exercise your rights. Submit requests to privacy@becko.app with enough information for us to verify your identity (for example, the email associated with your account, and where appropriate the brand or booking reference). We may decline or charge a reasonable fee for requests that are manifestly unfounded, excessive, or repetitive, and we will explain our reasoning before doing so.`,
      `Response timelines. We aim to respond to verified requests within 30 days under UK and EU GDPR. Under the CCPA/CPRA we will confirm receipt within 10 business days and respond within 45 days, extendable once by a further 45 days where reasonably necessary and with notice to you.`,
      `Authorised agents. You may use an authorised agent to submit a request on your behalf. We may require: (a) signed written permission from you authorising the agent; (b) verification of your identity directly with us; and (c) confirmation that the agent is authorised to act for you. This does not apply where the agent has been granted power of attorney under applicable law.`,
      `Non-discrimination. We will not deny you our Service, charge you different prices, or provide a lower quality of service because you exercised any of your privacy rights.`,
    ],
  },
  {
    heading: "22. Data Portability",
    paragraphs: [
      `Where technically feasible, data export requests may be provided in commonly used machine-readable formats including JSON or CSV. Requests can be submitted via privacy@becko.app and are typically fulfilled within 30 days, subject to identity verification.`,
    ],
  },
  {
    heading: "23. Law Enforcement & Legal Requests",
    paragraphs: [
      `We may disclose personal data where required by applicable law, court order, regulatory obligation, or lawful governmental request. Where legally permitted, we will notify the affected client business before disclosing data processed on their behalf.`,
    ],
  },
  {
    heading: "24. Children's Privacy",
    paragraphs: [
      `Our services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately and we will promptly delete it.`,
    ],
  },
  {
    heading: "25. Cookies & Tracking",
    paragraphs: [
      `The Becko application uses only strictly necessary cookies and browser storage required to operate the Service — session authentication, security tokens, CSRF protection, and remembering your in-app preferences (such as theme and last-used brand). No consent banner is shown because no consent is required for strictly necessary technologies under GDPR Art. 5(3) ePrivacy / UK PECR Reg. 6(4).`,
      `Becko does not run third-party analytics, advertising pixels, or cross-site tracking inside the application (no Google Analytics, no Meta Pixel, no TikTok Pixel, no advertising SDKs). We do not build behavioural profiles of Becko users and we do not sell or share Becko user data with advertising networks. Any analytics or marketing tracking that exists on our public marketing website (becko.app) is governed by the separate Cookie Policy published there.`,
    ],
  },
  {
    heading: "26. Do Not Track & Global Privacy Control",
    paragraphs: [
      `Because the Becko application does not run third-party advertising, analytics, or cross-site tracking technologies, there is no profile-building activity inside the app for a "Do Not Track" (DNT) browser signal to disable. We therefore do not currently respond to DNT headers. Where required by applicable US state law, we honour the Global Privacy Control (GPC) signal as a valid opt-out of "sale" and "sharing" of personal information.`,
    ],
  },
  {
    heading: "27. California Privacy Rights (CCPA / CPRA)",
    paragraphs: [
      `If you are a California resident, you have the right to: (a) know what personal information we collect, use or disclose; (b) request deletion; (c) request correction; (d) opt out of the sale or sharing of personal information; (e) limit the use of sensitive personal information; and (f) not be discriminated against for exercising these rights. Becko does not sell personal information for monetary consideration and does not "share" personal information for cross-context behavioural advertising — the Becko application runs no third-party advertising or analytics pixels. You may still exercise any of the rights above at any time.`,
      `Submit a request via our Do Not Sell or Share page or email privacy@becko.app. You may use an authorised agent to submit a request — see §21 for verification requirements and response timelines. Equivalent rights are available to residents of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA), and other US states.`,
      `Nevada residents. Under NRS 603A.340, Nevada consumers may direct businesses not to sell certain categories of personal information. Becko does not currently sell personal information as defined under Nevada law. To submit a Nevada Do Not Sell request, email privacy@becko.app with the subject line "Nevada Do Not Sell Request" and the email associated with your account.`,
    ],
  },
  {
    heading: "28. UK GDPR, EU Representation & Global Jurisdictions",
    paragraphs: [
      `For users in the United Kingdom, the controller is BECKO - TRAVEL OS LTD, registered with the UK Information Commissioner's Office (ICO). You may lodge a complaint with the ICO at ico.org.uk. For users in the European Economic Area, complaints may be filed with your local supervisory authority. Where we process data of EEA residents from outside the EEA, we appoint an Article 27 representative; contact details are available on request from privacy@becko.app.`,
      `Switzerland. For users in Switzerland, processing is governed by the revised Federal Act on Data Protection (FADP). You may contact the Swiss Federal Data Protection and Information Commissioner (FDPIC) regarding our processing of your personal data.`,
      `Brazil (LGPD). For users in Brazil, processing is governed by Lei Geral de Proteção de Dados (Law No. 13.709/2018). You may exercise the rights afforded by the LGPD by contacting privacy@becko.app, and you may lodge a complaint with Brazil's National Data Protection Authority (ANPD).`,
      `Other jurisdictions. Where local law in Mexico, Argentina, Chile, Colombia, Peru, Singapore (PDPA), New Zealand (Privacy Act 2020), or another jurisdiction grants you additional or different rights, we will honour those rights to the extent applicable. Contact privacy@becko.app and indicate your jurisdiction so we can route your request appropriately.`,
    ],
  },
  {
    heading: "29. Security Vulnerability Reporting",
    paragraphs: [
      `If you discover a security vulnerability in our platform, please report it responsibly via our Security Vulnerability Reporting page or email us at security@becko.app.`,
    ],
  },
  {
    heading: "30. Changes to This Policy",
    paragraphs: [
      `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised "Last updated" date, and, where appropriate, by email or in-app notice. Continued use of the Service after changes take effect constitutes acceptance of the updated policy.`,
    ],
  },
  {
    heading: "31. Contact Us",
    introParagraphs: [
      `If you have any questions about this Privacy Policy, wish to exercise your data rights, or need to report a concern, please contact us:`,
    ],
    bullets: [
      `Legal Entity: BECKO - TRAVEL OS LTD`,
      `Email: privacy@becko.app`,
      `Data Deletion Requests: Data Deletion Instructions`,
      `Security Issues: security@becko.app`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="Last updated: May 21, 2026"
      />

      <Section className="pt-4">
        <div className="mx-auto max-w-[820px] space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl">{section.heading}</h2>

              {!section.bulletsFirst &&
                section.introParagraphs?.map((paragraph, index) => (
                  <p key={`${section.heading}-intro-${index}`} className="text-ink-dim">
                    {paragraph}
                  </p>
                ))}

              {section.bulletsFirst && section.bullets && (
                <ul className="list-disc space-y-3 pl-6 text-ink-dim">
                  {section.bullets.map((bullet, index) => (
                    <li key={`${section.heading}-bullet-first-${index}`}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.paragraphs?.map((paragraph, index) => (
                <p key={`${section.heading}-paragraph-${index}`} className="text-ink-dim">
                  {paragraph}
                </p>
              ))}

              {!section.bulletsFirst && section.bullets && (
                <ul className="list-disc space-y-3 pl-6 text-ink-dim">
                  {section.bullets.map((bullet, index) => (
                    <li key={`${section.heading}-bullet-${index}`}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.extraBullets && (
                <ul className="list-disc space-y-3 pl-6 text-ink-dim">
                  {section.extraBullets.map((bullet, index) => (
                    <li key={`${section.heading}-extra-bullet-${index}`}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.closingParagraphs?.map((paragraph, index) => (
                <p key={`${section.heading}-closing-paragraph-${index}`} className="text-ink-dim">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
