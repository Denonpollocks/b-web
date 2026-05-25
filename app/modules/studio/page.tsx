import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHead } from "@/components/Section";
import { Split, FeatList } from "@/components/Split";
import { ModuleCard, ModuleGrid } from "@/components/ModuleCard";
import { CtaStrip } from "@/components/CtaStrip";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Becko Studio",
  description:
    "A creative studio inside your travel OS — video creator, AI templates, captions, thumbnails and a brand asset library.",
};

const reels = [
  { title: "Maldives Hook", grad: "from-[#1b4f72] to-[#0a3b5a]", color: "text-brand-light" },
  { title: "Dubai City", grad: "from-[#5a3a1b] to-[#3a2412]", color: "text-accent-warm" },
  { title: "Bali Honeymoon", grad: "from-[#1b5a3a] to-[#0a3a24]", color: "text-accent-green" },
  { title: "Phuket Family", grad: "from-[#5a1b4f] to-[#3a0a3a]", color: "text-accent-pink" },
  { title: "Sri Lanka Wild", grad: "from-[#3a1b1b] to-[#241010]", color: "text-brand-light" },
  { title: "Japan Quiet", grad: "from-[#1b1b5a] to-[#0a0a3a]", color: "text-[#a4b4ff]" },
];

export default function StudioModule() {
  return (
    <>
      <PageHero
        eyebrow={<Eyebrow icon="🎬">Becko Studio</Eyebrow>}
        title={
          <>
            Pro-grade content. <span className="gradient-text">Zero design degree.</span>
          </>
        }
        description="A scene-based video creator, AI templates, caption studio, thumbnail generator and a brand-locked asset library — all sitting next to your bookings so your team can post in minutes."
        primaryCta={{ href: "/contact", label: "Book a demo" }}
        secondaryCta={{ href: "/features", label: "All features" }}
      />

      <Split
        copy={
          <>
            <span className="tag-pill">Video Creator</span>
            <h2 className="mt-3.5">A timeline editor built for travel reels.</h2>
            <p>
              Build scene-by-scene compositions — text, captions, gradients, shapes, Lottie, GIF,
              image, noise — with effects, animations, properties and a real preview window.
              Export Reels, Stories, Shorts or 16:9 in one click.
            </p>
            <FeatList
              items={[
                "Scene-based composition builder with timeline",
                "Caption, Color, Gif, Gradient, Image, Lottie, Noise, Shape, Text scenes",
                "Effects gallery & animation wrapper",
                "Properties panel for fine-grained control",
                "Multi-format export (Reels, Stories, Shorts, 16:9)",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-[80px_1fr] gap-2.5 h-[280px]">
              <div className="bg-white/[0.04] border border-line rounded-sm p-2 flex flex-col gap-1.5">
                <div className="h-[18px] rounded bg-gradient-to-r from-brand to-transparent"></div>
                <div className="h-3.5 rounded bg-white/5"></div>
                <div className="h-3.5 rounded bg-white/5"></div>
                <div className="h-3.5 rounded bg-white/5"></div>
                <div className="h-3.5 rounded bg-white/5"></div>
              </div>
              <div
                className="border border-line rounded-sm relative overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#0a3b5a,#062035)",
                }}
              >
                <div className="text-center text-white p-8">
                  <div className="font-display text-2xl font-extrabold tracking-tight">
                    Maldives in November
                  </div>
                  <div className="text-sm text-brand-light mt-1.5">
                    from $1,840 · all-inclusive
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/10">
                  <div
                    className="h-full"
                    style={{
                      width: "46%",
                      background: "linear-gradient(90deg, #55CCE1, #84EEFF)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-1.5 mt-2.5">
              <div className="flex-1 h-[34px] bg-brand/[0.18] border border-line-strong rounded-sm flex items-center justify-center text-[0.74rem] text-white">
                Scene 1 · Hook
              </div>
              <div className="flex-1 h-[34px] bg-white/[0.04] border border-line rounded-sm flex items-center justify-center text-[0.74rem] text-ink-dim">
                Scene 2 · Reveal
              </div>
              <div className="flex-1 h-[34px] bg-white/[0.04] border border-line rounded-sm flex items-center justify-center text-[0.74rem] text-ink-dim">
                Scene 3 · CTA
              </div>
            </div>
          </div>
        }
      />

      <Split
        reverse
        copy={
          <>
            <span className="tag-pill">AI Templates</span>
            <h2 className="mt-3.5">Generate on-brand templates from a prompt.</h2>
            <p>
              "Make me a Maldives Reel hook." Becko Studio generates a template using your
              locked brand colours, fonts and logo. Tweak in the editor, then publish.
            </p>
            <FeatList
              items={[
                "AI template generator from text prompt",
                "Brand kit (colours, fonts, logo) locked across every output",
                "Template gallery — hundreds of travel-specific starting points",
                "AI prompt dialog inside the editor for spot-changes",
              ]}
            />
          </>
        }
        visual={
          <div className="visual-card">
            <div className="grid grid-cols-3 gap-2">
              {reels.map((r) => (
                <div
                  key={r.title}
                  className={`aspect-[9/16] border border-line rounded-sm p-2.5 flex flex-col justify-end bg-gradient-to-br ${r.grad}`}
                >
                  <div className="text-[0.78rem] font-bold text-white">{r.title}</div>
                  <div className={`text-[0.66rem] ${r.color}`}>Reel · 9:16</div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <Section>
        <SectionHead title="Everything you need to post daily, beautifully." />
        <ModuleGrid cols={4}>
          <ModuleCard icon="🎞️" title="Video Creator" description="Scene-based timeline editor with text, captions, images, GIFs, Lottie, shapes, gradients and noise." />
          <ModuleCard icon="📚" title="Template Gallery" description="Hundreds of pre-built, on-brand video, story and reel templates for travel." />
          <ModuleCard icon="🧠" title="AI Templates" description="Generate brand-locked templates from a prompt — refine inside the editor." />
          <ModuleCard icon="✏️" title="AI Template Editor" description="Iterate with AI prompts inline — change copy, change palette, change motion." />
          <ModuleCard icon="✍️" title="Caption Studio" description="Auto-caption travel videos in multiple languages with destination-aware vocab." />
          <ModuleCard icon="🔄" title="Media Converter" description="Convert to Reels, Stories, TikTok and Shorts ratios & codecs." />
          <ModuleCard icon="🖼️" title="Thumbnail Generator" description="Punchy thumbnails with destination images, text and brand colours." />
          <ModuleCard icon="💾" title="Asset Library" description="Per-brand fonts, logos, photos and Lottie — locked and re-usable across every export." />
        </ModuleGrid>
      </Section>

      <CtaStrip
        title="Your social calendar, finally consistent."
        description="Becko Studio is included in every Becko plan — so your content team can ship without leaving the OS."
      />
    </>
  );
}
