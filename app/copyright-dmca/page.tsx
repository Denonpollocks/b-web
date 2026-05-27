import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { DmcaForm } from "@/components/DmcaForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Copyright & DMCA Policy",
  description: "Copyright and DMCA policy for the Becko platform.",
};

type SectionContent = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: SectionContent[] = [
  {
    heading: "1. Respect for Intellectual Property",
    paragraphs: [
      'Becko respects the intellectual property rights of others and expects users of the Service to do the same. We respond to clear notices of alleged copyright infringement that comply with the U.S. Digital Millennium Copyright Act (DMCA), 17 U.S.C. §512, the EU Digital Services Act (Regulation 2022/2065, "DSA"), and the UK Electronic Commerce (EC Directive) Regulations 2002.',
    ],
  },
  {
    heading: "2. User-Generated Content Licence",
    paragraphs: [
      'When you upload, post, or transmit content through the Service ("User Content"), you represent and warrant that you own or have the necessary rights to that content, and you grant Becko a worldwide, non-exclusive, royalty-free licence to host, store, reproduce, modify, display, and transmit the content solely as necessary to provide the Service. You retain all ownership rights in your User Content.',
      "You are solely responsible for User Content you submit. Becko does not pre-screen User Content and is not liable for content uploaded by users. You agree to indemnify and hold Becko harmless from any claim arising from your User Content, including infringement claims.",
    ],
  },
  {
    heading: "3. Designated DMCA Agent",
    paragraphs: [
      "Notices of claimed copyright infringement should be sent to our designated agent:",
    ],
    bullets: [
      "Name: Becko DMCA Agent",
      "Email: dmca@becko.app",
      `Postal address: ${site.company.legalName} (registration no. ${site.company.registrationNumber}) — see site footer`,
      "Becko is registered with the U.S. Copyright Office DMCA Designated Agent directory under §512(c)(2).",
    ],
  },
  {
    heading: "4. Filing a DMCA Notice",
    paragraphs: [
      "To be effective, your notice must include all of the following (17 U.S.C. §512(c)(3)):",
    ],
    bullets: [
      "Your physical or electronic signature.",
      "Identification of the copyrighted work claimed to be infringed.",
      "Identification of the material that is claimed to be infringing, with information reasonably sufficient to allow us to locate it (e.g., URL).",
      "Your contact information (address, telephone, email).",
      "A statement of good-faith belief that the use is not authorised by the copyright owner, its agent, or the law.",
      "A statement, made under penalty of perjury, that the information is accurate and that you are authorised to act on behalf of the rights holder.",
    ],
  },
  {
    heading: "5. Counter-Notice",
    paragraphs: [
      "If your content was removed and you believe it was a mistake or misidentification, you may submit a counter-notice to dmca@becko.app including: (a) your signature; (b) identification of the removed material and its prior location; (c) a statement under penalty of perjury that the removal was a mistake or misidentification; and (d) your contact information and consent to U.S. federal jurisdiction (or, if outside the U.S., to any forum where the original complainant may be found).",
    ],
  },
  {
    heading: "6. Repeat Infringer Policy",
    paragraphs: [
      "In accordance with §512(i), Becko will, in appropriate circumstances, terminate the accounts of users who are determined to be repeat infringers. A user receiving two or more substantiated DMCA notices within a rolling 12-month period may have their account suspended or terminated without further notice.",
    ],
  },
  {
    heading: "7. Misrepresentation",
    paragraphs: [
      "Under 17 U.S.C. §512(f), any person who knowingly materially misrepresents that material is infringing, or that material was removed by mistake, may be liable for damages, including costs and attorneys' fees.",
    ],
  },
];

export default function CopyrightDmcaPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Copyright & DMCA Policy"
        description="Last updated: May 19, 2026"
      />

      <Section className="pt-4">
        <div className="mx-auto max-w-[820px] space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl">{section.heading}</h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={`${section.heading}-paragraph-${index}`} className="text-ink-dim">
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="list-disc space-y-3 pl-6 text-ink-dim">
                  {section.bullets.map((bullet, index) => (
                    <li key={`${section.heading}-bullet-${index}`}>
                      {bullet.startsWith("Email:") ? (
                        <>
                          Email:{" "}
                          <a
                            className="text-brand-light hover:text-white"
                            href="mailto:dmca@becko.app"
                          >
                            dmca@becko.app
                          </a>
                        </>
                      ) : (
                        bullet
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Section>

      <section className="pb-16">
        <div className="container">
          <div className="reveal-on-scroll">
            <DmcaForm />
            <p className="text-center text-ink-mute text-sm mt-8 max-w-xl mx-auto">
              Prefer email? Send your notice directly to{" "}
              <a className="text-brand-light hover:text-white" href="mailto:dmca@becko.app">
                dmca@becko.app
              </a>
              . For general legal enquiries, see our{" "}
              <Link className="text-brand-light hover:text-white" href="/terms">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
