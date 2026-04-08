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

      {/* Our Games */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-700 tracking-tight mb-2">
              What We&apos;re Building
            </h2>
            <div className="accent-line mt-4 mb-6" />
            <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] font-300 max-w-2xl leading-relaxed">
              From AI-powered health tools to SpriteKit games — here&apos;s
              what we&apos;re shipping on iOS.
            </p>
          </div>

          {/* SportsMeal */}
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-2 flex lg:justify-center">
              <img
                src="/sportsmeal-icon.png"
                alt="SportsMeal"
                className="w-24 h-24 rounded-2xl"
              />
            </div>
            <div className="lg:col-span-10">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-700">
                  SportsMeal
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-[family-name:var(--font-body)] font-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  In Development
                </span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] leading-relaxed font-300 mb-5 max-w-2xl">
                A comprehensive AI-powered nutrition and health app. Photograph
                meals for instant calorie and macro estimates using Claude Vision,
                scan barcodes for packaged foods, manage your pantry with
                expiration tracking, and get personalized recipe suggestions.
                Integrates with Apple HealthKit for weight, steps, and workout
                syncing. Available in English and Chinese.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "AI meal photo analysis (Claude Vision)",
                  "Macro tracking: protein, carbs, fat",
                  "Barcode scanner via OpenFoodFacts",
                  "Pantry management & recipe generation",
                  "Apple HealthKit integration",
                  "Restaurant menu scanner",
                  "Meal templates & quick logging",
                  "iOS Widgets & Apple Watch companion",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] mt-1 text-xs">▸</span>
                    <span className="font-[family-name:var(--font-body)] text-sm text-[var(--fg-secondary)] font-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[var(--border)] my-12" />

          {/* WUQUAN */}
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-2 flex lg:justify-center">
              <img
                src="/wuquan-icon.png"
                alt="WUQUAN"
                className="w-24 h-24 rounded-2xl"
              />
            </div>
            <div className="lg:col-span-10">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-700">
                  舞拳 WUQUAN
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-[family-name:var(--font-body)] font-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  In Development
                </span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] leading-relaxed font-300 mb-5 max-w-2xl">
                A reimagined take on rock-paper-scissors that blends martial arts
                gestures with directional mechanics and shake detection. Players
                compete against an adaptive AI or a friend in local multiplayer,
                through a 5-phase gameplay loop: handshake, free movement, gesture
                selection, direction pointing, and result. Built with SpriteKit,
                featuring animated sparkles, haptic feedback, dynamic music, and
                difficulty scaling.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "Rock-Paper-Scissors + direction mechanics",
                  "Adaptive AI with gesture history tracking",
                  "Local 2-player on same device",
                  "Shake gesture detection via accelerometer",
                  "10-round matches with score tracking",
                  "Tutorial onboarding for new players",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] mt-1 text-xs">▸</span>
                    <span className="font-[family-name:var(--font-body)] text-sm text-[var(--fg-secondary)] font-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[var(--border)] my-12" />

          {/* 5 Endless Games */}
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-2 flex lg:justify-center">
              <img
                src="/endless-icon.png"
                alt="5 Endless Games"
                className="w-24 h-24 rounded-2xl"
              />
            </div>
            <div className="lg:col-span-10">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-700">
                  5 Endless Games
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-[family-name:var(--font-body)] font-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  Coming Soon
                </span>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] leading-relaxed font-300 mb-5 max-w-2xl">
                A collection of five addictive arcade mini-games in one app,
                designed for one-handed, pick-up-and-play sessions. Each game
                features an endless mode with progressive difficulty, shared
                high scores, and a unified game hub launcher. Built with
                SpriteKit and designed to be played in portrait.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl">
                {[
                  {
                    name: "颜色记忆",
                    en: "Color Memory",
                    color: "#8B5CF6",
                    desc: "Memorize and replay expanding color sequences. Speed increases, colors get trickier.",
                  },
                  {
                    name: "节奏拍拍",
                    en: "Rhythm Tap",
                    color: "#EC4899",
                    desc: "Tap falling notes in sync with the beat. Lanes increase as you progress.",
                  },
                  {
                    name: "弹弹球",
                    en: "Bounce Ball",
                    color: "#22C55E",
                    desc: "Tilt to guide a ball upward across procedural platforms. Score = height reached.",
                  },
                  {
                    name: "闪避大师",
                    en: "Dodge Master",
                    color: "#F97316",
                    desc: "Drag to dodge falling obstacles. Speed scales up, patterns get complex.",
                  },
                  {
                    name: "合并消除",
                    en: "Merge Pop",
                    color: "#3B82F6",
                    desc: "Drop and merge matching numbers in columns. Chain reactions score big.",
                  },
                ].map((game) => (
                  <div
                    key={game.en}
                    className="card-hover rounded-xl p-5 bg-[var(--bg-secondary)]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: game.color }}
                      />
                      <span className="font-[family-name:var(--font-display)] text-sm font-600">
                        {game.name}
                      </span>
                    </div>
                    <div className="font-[family-name:var(--font-body)] text-xs text-[var(--fg-muted)] mb-2 font-500">
                      {game.en}
                    </div>
                    <p className="font-[family-name:var(--font-body)] text-xs text-[var(--fg-secondary)] leading-relaxed font-300">
                      {game.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-24 border-t border-[var(--border)]">
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
                  "Swift / SpriteKit",
                  "TypeScript",
                  "React / Next.js",
                  "Python",
                  "LLM APIs",
                  "HealthKit / SwiftData",
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
