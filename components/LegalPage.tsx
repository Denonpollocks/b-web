import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

type LegalSection = {
  title: string;
  body: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  description,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <Section className="pt-4">
        <div className="mx-auto max-w-[820px] space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-2xl">{section.title}</h2>
              <div className="space-y-4 text-ink-dim">{section.body}</div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
