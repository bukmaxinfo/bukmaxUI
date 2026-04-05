import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — bukmax.llc",
  description:
    "Learn about bukmax.llc — a lean AI studio that ships intelligent software fast.",
};

export default function About() {
  return (
    <div className="geo-grid pt-16">
      {/* Header */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="accent-line mb-6 animate-slide-right" />
            <h1 className="animate-fade-up font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-800 tracking-tight mb-6">
              A small team with
              <br />
              <span className="text-[var(--accent)]">big ambitions</span>
            </h1>
            <p className="animate-fade-up delay-100 font-[family-name:var(--font-body)] text-xl text-[var(--fg-secondary)] leading-relaxed font-300 max-w-2xl">
              bukmax.llc is an AI software studio. We exist to turn bold ideas
              into polished, intelligent products — fast, and without the bloat.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-700 tracking-tight mb-2">
                Our Story
              </h2>
              <div className="accent-line mt-4" />
            </div>
            <div className="lg:col-span-7 space-y-6 font-[family-name:var(--font-body)] text-[var(--fg-secondary)] text-lg leading-relaxed font-300">
              <p>
                We started bukmax because we saw a gap: AI was transforming
                industries, but most teams couldn&apos;t access the talent or
                tools to build with it. Enterprise consultancies moved too slow.
                Freelancers lacked the depth.
              </p>
              <p>
                So we built a studio that combines deep technical AI expertise
                with startup-speed execution. Every project gets senior
                attention, clear communication, and code that&apos;s built to
                last — not just to demo.
              </p>
              <p>
                Based on a simple belief:{" "}
                <span className="text-[var(--fg-primary)] font-500">
                  great software should be smart, fast, and a joy to use.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-700 tracking-tight mb-4">
              How We Work
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] font-300 max-w-lg mx-auto">
              Our principles shape every decision, from architecture to pixel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "◆",
                title: "Ship Fast",
                desc: "Working software over perfect plans. We iterate in tight loops and put real products in front of real users.",
              },
              {
                icon: "◈",
                title: "Stay Lean",
                desc: "Small team, zero overhead. Every person on your project is a senior builder who owns outcomes, not tasks.",
              },
              {
                icon: "▲",
                title: "Build Smart",
                desc: "AI isn't a buzzword here — it's a tool. We use it where it creates real value, not where it sounds impressive.",
              },
              {
                icon: "○",
                title: "Own It",
                desc: "Full transparency, honest timelines, no hand-offs. We treat your product like our own because reputation is everything.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="card-hover rounded-xl p-8 bg-[var(--bg-primary)]"
              >
                <div className="text-[var(--accent)] text-2xl mb-5">
                  {value.icon}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-700 mb-3">
                  {value.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[var(--fg-secondary)] leading-relaxed font-300">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-700 tracking-tight mb-2">
                Tech We Love
              </h2>
              <div className="accent-line mt-4" />
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Python",
                  "TypeScript",
                  "React / Next.js",
                  "Swift / iOS",
                  "LLM APIs",
                  "Cloud (AWS/GCP)",
                  "PostgreSQL",
                  "Docker",
                  "TensorFlow",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-5 py-4 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] font-[family-name:var(--font-body)] text-sm text-[var(--fg-secondary)] text-center hover:border-[var(--accent)]/30 hover:text-[var(--fg-primary)] transition-all duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-800 tracking-tight mb-6">
            Want to work with us?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] text-lg mb-10 font-300">
            We&apos;re always looking for interesting problems to solve.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
