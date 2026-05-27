import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the Becko platform.",
};

type SectionContent = {
  heading: string;
  introParagraphs?: string[];
  paragraphs?: string[];
  bullets?: string[];
  bulletsFirst?: boolean;
};

const sections: SectionContent[] = [
  {
    heading: "1. Acceptance of Terms",
    paragraphs: [
      'By accessing or using the Becko platform ("Service"), provided by BECKO - TRAVEL OS LTD ("Becko", "we", "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service. We reserve the right to update these Terms at any time, and continued use of the Service constitutes acceptance of any changes.',
    ],
  },
  {
    heading: "2. Description of Service",
    paragraphs: [
      "Becko is a travel management, CRM, and messaging platform that provides tools for managing leads, bookings, quotations, customer relationships, multi-channel messaging (Facebook Messenger, Instagram DMs, WhatsApp), AI-powered agent automation, and related travel operations. The Service may include integrations with third-party platforms such as Meta (Facebook, Instagram, WhatsApp), OpenAI, and travel API providers.",
    ],
  },
  {
    heading: "3. User Accounts & Account Ownership",
    bulletsFirst: true,
    bullets: [
      "You must provide accurate and complete information when creating an account",
      "You are responsible for maintaining the confidentiality of your login credentials",
      "You are responsible for all activities that occur under your account",
      "You must notify us immediately of any unauthorised use of your account",
      "We reserve the right to suspend or terminate accounts that violate these Terms",
    ],
    paragraphs: [
      "Account Ownership. The business entity that subscribes to the Service is considered the owner of all organisational accounts, data, workspaces, conversations, leads, bookings, and user access created under that subscription. Individual employees, contractors, or agents accessing the Service on behalf of that entity do not acquire personal ownership of any data or workspace. Disputes regarding internal access, ownership, or transfer of control between members of a subscribing entity must be resolved by the entity, and Becko may rely on the instructions of the registered account owner or designated administrator.",
    ],
  },
  {
    heading: "4. User Responsibilities",
    introParagraphs: ["You agree not to:"],
    bullets: [
      "Use the Service for any unlawful purpose",
      "Upload or transmit any harmful, offensive, or infringing content",
      "Attempt to gain unauthorised access to other users' accounts or data",
      "Interfere with or disrupt the Service or its infrastructure",
      "Use automated tools to scrape, copy, or extract data from the Service",
      "Use messaging features to send spam, unsolicited promotional messages, or messages that violate Meta's Platform Terms",
      "Share or request payment card numbers, financial account details, or other sensitive financial data within messaging conversations",
      "Use the Service to facilitate conversations related to healthcare services via Messenger, Instagram, or WhatsApp (per Meta Developer Policies)",
      "Use Message Tags for promotional content, advertising, marketing, solicitations, upselling, deals, coupons, or discounts",
    ],
    paragraphs: [
      "Additional Prohibited Activities. You also agree not to:",
      "Reverse engineer, decompile, disassemble, decode, adapt, or otherwise attempt to derive or access the source code, models, prompts, datasets, workflows, architecture, or underlying technology of the Service",
      "Use bots, scripts, scraping tools, spiders, crawlers, or automated systems to extract data, benchmark the Service, or interfere with platform performance",
      "Use the Service to generate misleading, fraudulent, deceptive, defamatory, unlawful, or malicious content",
      "Use the Service to impersonate any person or entity, or falsely imply affiliation, endorsement, or human involvement where AI-generated responses are being used",
      "Use the Service for political spam, unlawful campaign messaging, election manipulation, or prohibited political advertising activity",
      "Upload or transmit malware, ransomware, viruses, malicious code, or harmful payloads",
      "Circumvent any security feature, rate limit, access restriction, or usage limitation implemented by Becko or any third-party provider",
      "Use the Service in any way that could damage, disable, overload, or impair the operation of the Service or connected third-party systems",
    ],
  },
  {
    heading: "5. Messaging Platform Compliance",
    introParagraphs: [
      "When using our messaging features (Facebook Messenger, Instagram DMs, WhatsApp), you agree to comply with:",
    ],
    bullets: [
      "Meta Platform Terms",
      "Meta Developer Policies",
      "WhatsApp Business Policy",
      "WhatsApp Commerce Policy",
      "Instagram Platform Terms",
    ],
    paragraphs: [
      'You must respect user opt-out requests immediately. When a user sends "STOP", "UNSUBSCRIBE", or "OPT OUT" in any Messenger, Instagram, or WhatsApp conversation, all automated messaging to that user must cease.',
      "WhatsApp-Specific Restrictions: You must not use WhatsApp broadcasts to contact people who have not initiated a conversation or explicitly opted in. Marketing templates sent via WhatsApp must comply with Meta's template review process. You must not use WhatsApp to market or sell regulated goods including alcohol, tobacco, weapons, gambling, adult content, or pharmaceutical products.",
      "Instagram-Specific Restrictions: Instagram DM automations are subject to the same 24-hour messaging window as Messenger. Replies outside this window require the HUMAN_AGENT tag and approved Meta feature status.",
      "WhatsApp Opt-In Requirements: Before sending WhatsApp messages to any end-user, you must: (a) have obtained their mobile phone number, and (b) have received their explicit opt-in permission confirming they wish to receive messages from your business. The opt-in must clearly state your business name and that the person is consenting to receive WhatsApp messages. You are solely responsible for ensuring opt-in compliance with applicable local laws, including GDPR, TCPA, and any other relevant regulations.",
      "Policy Violation Consequences: Violating WhatsApp or Meta messaging policies through Becko may result in escalating enforcement actions on your WhatsApp Business Account, imposed by Meta. These include: temporary template message blocks (1-3 days), full message sending restrictions (5-30 days), account locks preventing all messaging, or permanent account disablement. Prohibited content categories include but are not limited to: adult content (ADULT), alcohol (ALCOHOL), drugs (DRUGS), gambling (GAMBLING), scams (SCAM), weapons (WEAPONS), misleading claims (MISLEADING), and spam. For the full list of violations, refer to Meta's Policy Enforcement documentation.",
      "Appeals: If your account is subject to a policy enforcement action, you may appeal through Meta's Business Support Home. Becko will assist where possible but cannot guarantee the reversal of Meta-imposed restrictions.",
    ],
  },
  {
    heading: "6. Tech Provider Terms",
    introParagraphs: [
      "Becko operates as a technology service provider under Meta's Tech Provider programme. In this capacity:",
    ],
    bullets: [
      "We process Meta Platform Data solely on behalf of our client brands",
      "We do not use Platform Data for our own commercial purposes beyond providing the Service",
      "Each brand's data is maintained separately and cannot be accessed by other brands",
      "We maintain appropriate data security measures as required by Meta's Platform Terms",
      "We will cooperate with Meta's audits, reviews, and Data Use Checkups as required",
    ],
  },
  {
    heading: "7. Third-Party Service Providers",
    introParagraphs: [
      "We use the following third-party service providers to deliver the Service. All providers are bound by contractual obligations to protect your data:",
    ],
    bullets: [
      "Meta Platforms, Inc. — Messaging APIs (Messenger, Instagram, WhatsApp) and Lead Ads",
      "OpenAI — AI-powered automated response generation",
      "Supabase — Database, authentication, and file storage",
      "RapidAPI — Flight and hotel search API access",
      "Resend — Transactional email delivery",
    ],
  },
  {
    heading: "8. Subscription & Billing",
    paragraphs: [
      "Subscription fees are billed in advance on a recurring basis at the interval selected at sign-up (e.g. monthly or annually).",
      "Plans renew automatically at the end of each billing cycle unless cancelled before the renewal date.",
      "We may change pricing, plan structure, or included usage limits with at least 30 days' notice; changes take effect at the start of your next billing cycle.",
      "Failure to pay any amount when due may result in suspension or termination of the Service, restricted access to data export, and loss of integrations.",
      "All fees are exclusive of taxes. You are responsible for any applicable VAT, sales, use, withholding, or similar taxes, except for taxes on our net income.",
      "Free trials, where offered, are limited to one per business or entity. We may revoke trial access for suspected abuse, duplicate sign-ups, or evasion of these limits.",
      "Except where required by law (including the EU/UK right of withdrawal in Section 16), all payments are non-refundable, including for partial billing periods, unused features, or downgraded plans.",
      "Downgrading your plan may remove access to features, reduce usage allowances, or delete data tied to higher-tier capabilities. You are responsible for exporting any data before downgrading.",
      "Usage-based limits (such as messaging volume, AI generation credits, storage, automations, or seats) apply per plan and may incur overage charges or throttling once exceeded.",
      "Outstanding amounts may accrue reasonable late payment charges where permitted by applicable law.",
    ],
  },
  {
    heading: "9. Fair Usage",
    paragraphs: [
      "We may impose reasonable usage limits relating to API calls, AI generation, storage, messaging volume, automation execution, bandwidth, or seat count in order to protect platform stability, control third-party costs, and prevent abuse. Excessive, unusual, or abusive usage — including activity that materially exceeds typical customer patterns or that imposes disproportionate load on our infrastructure or upstream providers — may result in temporary throttling, additional fees, suspension, or termination.",
      "We reserve the right to monitor platform activity, automation behaviour, API usage, messaging volume, and system interactions for fraud prevention, abuse detection, spam prevention, security monitoring, and platform integrity purposes.",
    ],
  },
  {
    heading: "10. Service Availability & Third-Party Dependencies",
    paragraphs: [
      'The Service is provided on an "as available" and "as is" basis. Becko does not guarantee uninterrupted availability, uptime, or error-free operation. Unless separately agreed in writing under an enterprise agreement, we do not commit to any minimum uptime, response time, or service-level guarantee.',
      "Many features depend on third-party providers including Meta (Facebook, Instagram, WhatsApp), OpenAI, travel suppliers, cloud hosting providers, payment processors, and other API partners. Becko is not responsible for outages, latency, rate limits, API restrictions, policy changes, account bans, template rejections, deprecations, or any other interruptions caused by third-party services.",
      "API & Integration Changes. Third-party integrations and APIs may change, become restricted, be rate-limited, or be discontinued without notice by the relevant provider. Becko is not responsible for functionality loss, data unavailability, or business impact caused by third-party platform changes, and may modify or remove affected integrations from the Service accordingly.",
      "Service Modifications. We may modify, restrict, suspend, replace, discontinue, or remove any feature, functionality, API integration, workflow, or part of the Service at any time. We are not liable for any business interruption, loss of functionality, or loss of access arising from such modifications.",
    ],
  },
  {
    heading: "11. AI Features Disclaimer",
    paragraphs: [
      "AI-generated outputs — including automated replies, recommendations, summaries, itineraries, captions, content suggestions, translations, and any other content produced by AI models within the Service — are provided for informational and operational assistance only.",
      'You are solely responsible for reviewing, verifying, approving, and monitoring all AI-generated outputs before they are used, published, sent to customers, or relied upon for any business, financial, legal, medical, or travel-related decision. Becko makes no warranties regarding the accuracy, completeness, legality, reliability, non-infringement, or suitability of AI-generated content, and disclaims all liability for losses arising from your use of such content.',
      'AI models may produce inaccurate, biased, outdated, or fabricated information ("hallucinations"). You acknowledge that AI outputs do not constitute professional advice and must not be presented to your end-customers in a way that misrepresents them as guaranteed pricing, confirmed availability, or binding commitments.',
    ],
  },
  {
    heading: "12. Customer Input & Output",
    introParagraphs: [
      'You may provide prompts, messages, files, travel information, customer data, automation instructions, templates, workflows, or other content ("Input") to the Service and receive generated responses, recommendations, summaries, itineraries, automations, translations, captions, or other outputs ("Output"). Input and Output remain your responsibility.',
      "You are solely responsible for:",
    ],
    bullets: [
      "the legality, accuracy, quality, and appropriateness of all Input;",
      "reviewing and verifying all Output before use;",
      "ensuring compliance with applicable laws and platform policies; and",
      "ensuring that any communications sent through the Service are lawful, authorised, and appropriate.",
    ],
    paragraphs: [
      "Becko does not guarantee that Output will be accurate, complete, lawful, available, suitable, or free from errors or omissions.",
    ],
  },
  {
    heading: "13. Beta Features",
    paragraphs: [
      'Certain features may be labelled as beta, preview, alpha, or experimental ("Beta Features"). Beta Features are provided for evaluation purposes only, may contain bugs, errors, or incomplete functionality, and may be modified, suspended, or removed at any time without notice. Beta Features are provided "as is" without any warranties of any kind, and are excluded from any service-level commitments.',
    ],
  },
  {
    heading: "14. Customer Compliance Responsibilities",
    introParagraphs: [
      "You are solely responsible for ensuring that your use of the Service — including how you collect, store, process, message, market to, and bill your end-customers — complies with all applicable laws and regulations, including but not limited to:",
    ],
    bullets: [
      "EU General Data Protection Regulation (GDPR)",
      "UK Data Protection Act 2018 and UK GDPR",
      "Privacy and Electronic Communications Regulations (PECR)",
      "US Telephone Consumer Protection Act (TCPA) and CAN-SPAM Act",
      "Consumer protection, distance-selling, and unfair commercial practices laws",
      "Travel industry licensing and bonding requirements",
      "ATOL, IATA, ABTA, and equivalent regulatory obligations",
      "Anti-money-laundering, sanctions, and tax reporting obligations",
    ],
    paragraphs: [
      "Becko does not provide legal, regulatory, tax, or licensing advice. You should consult qualified professionals where appropriate.",
    ],
  },
  {
    heading: "15. Travel Suppliers & Bookings",
    paragraphs: [
      "Becko is a software platform. Becko is not a travel agent, tour operator, airline, hotel operator, ground handler, insurer, or financial intermediary, and does not contract with end-travellers for the supply of travel services.",
      "Becko is not responsible for the acts, errors, omissions, insolvency, cancellations, schedule changes, pricing inaccuracies, content inaccuracies, fulfilment failures, or service quality of any third-party travel supplier surfaced through the Service. All booking confirmations, cancellations, refunds, chargebacks, and customer service obligations are between you, your customer, and the relevant travel supplier, and are governed by their respective terms.",
    ],
  },
  {
    heading: "16. Intellectual Property",
    paragraphs: [
      "All content, features, and functionality of the Service — including but not limited to text, graphics, logos, and software — are the property of Becko and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of the Service without our prior written consent.",
      "You may not copy, reproduce, modify, create derivative works from, distribute, lease, sublicense, resell, commercially exploit, or otherwise use any part of the Service except as expressly permitted in writing by Becko. No rights are granted to you other than the limited right to access and use the Service in accordance with these Terms.",
    ],
  },
  {
    heading: "17. Data, Privacy, Retention & Backups",
    paragraphs: [
      "Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to the collection and use of your data as described in the Privacy Policy. You are responsible for ensuring that any personal data you input into the Service complies with applicable data protection laws.",
      "Data Anonymization for Service Improvement: When conversation data is used for AI training or analysis to improve service quality, all personally identifiable information (names, email addresses, phone numbers, and payment details) is automatically stripped and replaced with anonymous placeholders before processing. Anonymized data cannot be traced back to any individual.",
      "Data Retention. We may delete inactive accounts and associated data after a reasonable period following expiry, non-payment, or account termination. While we implement reasonable backup and security procedures, backups are operational and are not a substitute for your own records. You are responsible for maintaining your own copies of important data, including exporting bookings, conversations, contacts, and financial records before terminating, downgrading, or letting your account lapse.",
      "Backup Retention. Customer data may remain in secure backups for a limited period following deletion or termination before being permanently erased from backup systems. Backup systems are maintained for disaster recovery and operational continuity purposes only.",
    ],
  },
  {
    heading: "18. Aggregated & Anonymized Data",
    introParagraphs: [
      'Becko may generate aggregated, anonymized, statistical, or de-identified data derived from usage of the Service ("Aggregated Data").',
      "Aggregated Data:",
    ],
    bullets: [
      "does not identify any individual, customer, or business;",
      "may be used for analytics, benchmarking, service improvement, AI optimisation, operational insights, fraud detection, abuse prevention, security monitoring, and platform performance analysis; and",
      "remains the exclusive property of Becko.",
    ],
    paragraphs: [
      "Becko will not publicly disclose Aggregated Data in a manner that identifies any individual customer, end-user, or business.",
    ],
  },
  {
    heading: "19. Data Incident Reporting",
    introParagraphs: [
      "In the event of a data breach or security incident affecting Platform Data, we will:",
    ],
    bullets: [
      "Notify affected users within 72 hours of discovery where required by law",
      "Report the incident to Meta as required by Platform Terms",
      "Take immediate steps to contain and remediate the incident",
      "Document the incident and remediation steps",
    ],
  },
  {
    heading: "20. Export Controls & Sanctions",
    paragraphs: [
      "You may not access or use the Service in violation of any applicable export control, sanctions, or trade laws, including those of the United Kingdom, the European Union, and the United States. You represent that you are not located in, organised under the laws of, or ordinarily resident in any country or territory subject to comprehensive sanctions, and that you are not listed on any government sanctions or denied-party list. You will not use the Service to transmit, store, or process data on behalf of any such person or entity.",
    ],
  },
  {
    heading: "21. User-Generated Content & Indemnity",
    paragraphs: [
      'You retain ownership of content you submit ("User Content"), but you grant Becko a worldwide, non-exclusive, royalty-free licence to host, store, reproduce, modify, display and transmit it solely as necessary to operate the Service. You represent that you own or have all rights necessary to grant this licence.',
      "Messaging Responsibility. You are solely responsible for all messaging activity, broadcasts, automations, templates, workflows, campaigns, customer interactions, and communications sent through the Service by you or your users. Becko does not review or approve customer communications prior to transmission and is not responsible for any unlawful, misleading, offensive, infringing, or non-compliant content generated or transmitted through the Service.",
      "Indemnification. You agree to defend, indemnify and hold harmless Becko, its officers, directors, employees and agents from and against any claims, liabilities, damages, losses and expenses (including reasonable legal fees) arising out of or related to: (i) your User Content; (ii) your violation of these Terms; (iii) your violation of any third-party right, including any intellectual property, publicity, confidentiality, property or privacy right; (iv) your messaging activity, marketing, or end-customer interactions conducted via the Service; or (v) your use of the Service in breach of applicable law. This indemnity survives termination of these Terms.",
    ],
  },
  {
    heading: "22. Copyright & DMCA",
    paragraphs: [
      "Becko complies with the U.S. Digital Millennium Copyright Act (17 U.S.C. §512), the EU Digital Services Act (Article 16), and the UK Electronic Commerce (EC Directive) Regulations 2002. To submit a notice of claimed copyright infringement, see our Copyright & DMCA Policy at /copyright-dmca. Becko maintains a designated agent and a repeat-infringer policy under which accounts that receive two or more substantiated notices within any 12-month period may be terminated.",
    ],
  },
  {
    heading: "23. EU/UK Right of Withdrawal (Consumers)",
    paragraphs: [
      "If you are a consumer resident in the EEA or UK, under Directive 2011/83/EU (Consumer Rights Directive) and the UK Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 you have 14 calendar days from the date your subscription starts to withdraw without giving any reason. To exercise the right, send an unambiguous statement to support@becko.app. If you have started using the Service during the withdrawal period, you may owe a proportionate amount for usage to the date of withdrawal.",
    ],
  },
  {
    heading: "24. Force Majeure",
    paragraphs: [
      "Becko shall not be liable for any delay, failure, outage, suspension, interruption, or degradation of the Service resulting from events beyond our reasonable control, including but not limited to: internet outages, telecommunications failures, cloud infrastructure failures, cyberattacks, denial-of-service attacks, labor disputes, governmental actions, sanctions, war, natural disasters, epidemics, power failures, third-party API outages, supplier failures, Meta platform restrictions, or failures of external hosting or payment providers.",
    ],
  },
  {
    heading: "25. No Reliance",
    paragraphs: [
      "You acknowledge that you have not relied on any representation, warranty, statement, promise, marketing material, roadmap, future functionality, or projection not expressly set out in these Terms.",
      "No future functionality, feature, integration, or roadmap item shall create any obligation for Becko to continue development or delivery of such functionality.",
    ],
  },
  {
    heading: "26. Limitation of Liability",
    introParagraphs: [
      "To the fullest extent permitted by law, Becko shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service, including any loss of profits, revenue, data, goodwill, supplier relationships, end-customer relationships, or messaging access. Our total aggregate liability for any claim arising out of or related to the Service shall not exceed the greater of (a) the amount you have paid to us in the twelve months preceding the claim, or (b) GBP 100. Nothing in these Terms limits liability that cannot be excluded by applicable law (such as for death or personal injury caused by negligence, or fraud).",
      "Without limiting the foregoing, Becko shall not be liable for:",
    ],
    bullets: [
      "loss of messaging access,",
      "Meta account restrictions,",
      "WhatsApp bans,",
      "template rejections,",
      "lead loss,",
      "supplier failures,",
      "API outages,",
      "travel supplier insolvency,",
      "customer disputes,",
      "chargebacks,",
      "or actions taken by third-party providers.",
    ],
  },
  {
    heading: "27. Termination",
    introParagraphs: [
      "We may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice — including for non-payment, breach of these Terms, breach of third-party platform policies (such as Meta's), or to comply with law. Upon termination, your right to use the Service will immediately cease. We will delete your Platform Data within 30 days of termination unless retention is required by law. Any provisions of these Terms that by their nature should survive termination — including Subscription & Billing, AI Features Disclaimer, Customer Compliance Responsibilities, Indemnification, Limitation of Liability, and Governing Law — shall continue to apply.",
      "Immediate Suspension. We may immediately suspend, restrict, or terminate access to the Service without prior notice where reasonably necessary to:",
    ],
    bullets: [
      "prevent spam, abuse, fraud, or security threats;",
      "comply with legal obligations or law enforcement requests;",
      "comply with Meta or third-party platform requirements;",
      "protect the integrity, availability, or reputation of the Service; or",
      "prevent harm to Becko, its customers, users, infrastructure, or third-party providers.",
    ],
  },
  {
    heading: "28. Relationship of Parties",
    paragraphs: [
      "Nothing in these Terms creates any partnership, joint venture, agency, employment, fiduciary, or franchise relationship between you and Becko. You may not represent yourself as acting on behalf of Becko without our prior written consent.",
    ],
  },
  {
    heading: "29. Governing Law",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of England and Wales. Subject to any mandatory consumer protections available to you in your country of residence, any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
  {
    heading: "30. Contact Us",
    introParagraphs: [
      "These Terms are issued by BECKO - TRAVEL OS LTD, a company registered in England and Wales. If you have any questions about these Terms of Service, please contact us:",
    ],
    bullets: [
      "General: support@becko.app",
      "Privacy: privacy@becko.app",
      "Security: security@becko.app",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms of Service"
        description="Last updated: May 20, 2026"
      />

      <Section className="pt-4">
        <div className="mx-auto max-w-[820px] space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl">{section.heading}</h2>

              {!section.bulletsFirst &&
                section.introParagraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-ink-dim">
                    {paragraph}
                  </p>
                ))}

              {section.bulletsFirst && section.bullets && (
                <ul className="list-disc space-y-3 pl-6 text-ink-dim">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-ink-dim">
                  {paragraph}
                </p>
              ))}

              {!section.bulletsFirst && section.bullets && (
                <ul className="list-disc space-y-3 pl-6 text-ink-dim">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
