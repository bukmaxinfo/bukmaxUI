import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — bukmax.llc",
  description: "Get in touch with bukmax.llc to discuss your next project.",
};

export default function Contact() {
  return (
    <div className="geo-grid pt-16">
      {/* Header */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="accent-line mb-6 animate-slide-right" />
            <h1 className="animate-fade-up font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-800 tracking-tight mb-6">
              Let&apos;s build
              <br />
              <span className="text-[var(--accent)]">
                something together
              </span>
            </h1>
            <p className="animate-fade-up delay-100 font-[family-name:var(--font-body)] text-xl text-[var(--fg-secondary)] leading-relaxed font-300 max-w-2xl">
              Have a project in mind? A question? Or just want to say hello?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact methods */}
            <div className="lg:col-span-7 space-y-6">
              <div className="card-hover rounded-xl p-10 bg-[var(--bg-secondary)]">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-[var(--accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-700 mb-2">
                      Email Us
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] text-sm mb-4 font-300">
                      Best for project inquiries and detailed questions. We
                      typically respond within 24 hours.
                    </p>
                    <a
                      href="mailto:bukmax.info@bukmax.com"
                      className="font-[family-name:var(--font-body)] text-[var(--accent)] font-500 hover:text-[var(--accent-dim)] transition-colors link-animated"
                    >
                      bukmax.info@bukmax.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-hover rounded-xl p-10 bg-[var(--bg-secondary)]">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-[var(--accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-700 mb-2">
                      Response Time
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] text-sm font-300">
                      We&apos;re a small, focused team. Expect a thoughtful
                      reply within one business day — usually faster.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-hover rounded-xl p-10 bg-[var(--bg-secondary)]">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-[var(--accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-700 mb-2">
                      What to Include
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] text-sm font-300">
                      Tell us about your project, timeline, and budget range.
                      The more context you share, the better our initial
                      conversation will be.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="rounded-xl p-10 bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-700 mb-6">
                    Quick start
                  </h3>
                  <div className="space-y-5 font-[family-name:var(--font-body)]">
                    {[
                      {
                        step: "01",
                        text: "Send us an email with your project idea",
                      },
                      {
                        step: "02",
                        text: "We'll schedule a discovery call within 48h",
                      },
                      {
                        step: "03",
                        text: "Receive a proposal with scope and timeline",
                      },
                      {
                        step: "04",
                        text: "Kick off and start building together",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4 items-start">
                        <span className="font-[family-name:var(--font-display)] text-xs text-[var(--accent)] font-600 mt-1 shrink-0">
                          {item.step}
                        </span>
                        <span className="text-sm text-[var(--fg-secondary)] font-300 leading-relaxed">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-10 bg-[var(--accent)]/5 border border-[var(--accent)]/10">
                  <p className="font-[family-name:var(--font-body)] text-sm text-[var(--fg-secondary)] font-300 leading-relaxed">
                    <span className="text-[var(--accent)] font-500">
                      No cold pitches.
                    </span>{" "}
                    Every conversation starts with listening. We want to
                    understand your problem before we propose a solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
