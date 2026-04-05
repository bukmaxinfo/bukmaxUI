export default function Home() {
  return (
    <div className="geo-grid">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] text-xs font-[family-name:var(--font-body)] text-[var(--fg-secondary)] tracking-widest uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  AI-Powered Software Studio
                </div>
              </div>

              <h1 className="animate-fade-up delay-100 font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-800 leading-[0.95] tracking-tight">
                We build apps
                <br />
                that{" "}
                <span className="text-[var(--accent)]">think</span>
                <span className="text-[var(--fg-muted)]">.</span>
              </h1>

              <p className="animate-fade-up delay-200 font-[family-name:var(--font-body)] text-lg text-[var(--fg-secondary)] max-w-xl leading-relaxed font-300">
                bukmax.llc crafts intelligent software that solves real problems.
                From concept to launch, we build AI-powered applications that
                people actually love to use.
              </p>

              <div className="animate-fade-up delay-300 flex flex-wrap gap-4 pt-4">
                <a href="/contact" className="btn-primary">
                  Start a Project
                </a>
                <a href="/about" className="btn-outline">
                  How We Work
                </a>
              </div>
            </div>

            {/* Geometric visual */}
            <div className="lg:col-span-5 hidden lg:flex justify-center">
              <div className="animate-scale-in delay-400 relative w-80 h-80">
                {/* Rotating squares */}
                <div className="absolute inset-0 border border-[var(--border)] rotate-12 rounded-2xl animate-float" />
                <div className="absolute inset-4 border border-[var(--accent)]/20 -rotate-6 rounded-2xl animate-float delay-200" />
                <div className="absolute inset-8 bg-[var(--bg-secondary)] border border-[var(--border)] rotate-3 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="font-[family-name:var(--font-display)] text-6xl font-800 text-[var(--accent)]">
                      bk
                    </div>
                    <div className="font-[family-name:var(--font-body)] text-xs text-[var(--fg-muted)] tracking-[0.3em] uppercase">
                      since 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="accent-line mb-6" />
                <h2 className="font-[family-name:var(--font-display)] text-4xl font-700 tracking-tight mb-4">
                  What we do
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] leading-relaxed font-300">
                  We combine deep AI expertise with sharp product thinking to
                  ship software that makes a difference.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                {
                  number: "01",
                  title: "AI Applications",
                  desc: "Custom AI-powered apps built from the ground up — intelligent automation, natural language interfaces, and predictive systems that learn and adapt.",
                },
                {
                  number: "02",
                  title: "Mobile & Web",
                  desc: "Cross-platform apps with native-quality UX. We design and develop products that feel as good as they perform.",
                },
                {
                  number: "03",
                  title: "Data Intelligence",
                  desc: "Turn raw data into actionable insights. We build pipelines, dashboards, and ML models that power smarter decisions.",
                },
                {
                  number: "04",
                  title: "Rapid Prototyping",
                  desc: "From idea to working prototype in weeks, not months. We validate fast so you can iterate with confidence.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="card-hover rounded-xl p-8 bg-[var(--bg-secondary)]"
                >
                  <div className="font-[family-name:var(--font-display)] text-sm text-[var(--accent)] font-600 mb-4">
                    {item.number}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] text-sm leading-relaxed font-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10+", label: "Projects Shipped" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "< 4wk", label: "Avg. Time to MVP" },
              { value: "24/7", label: "Support & Monitoring" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-12 px-6 text-center ${i < 3 ? "border-r border-[var(--border)]" : ""}`}
              >
                <div className="font-[family-name:var(--font-display)] text-3xl font-800 text-[var(--accent)] mb-2">
                  {stat.value}
                </div>
                <div className="font-[family-name:var(--font-body)] text-xs text-[var(--fg-muted)] tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.03] blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center relative">
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-800 tracking-tight mb-6">
            Ready to build something{" "}
            <span className="text-[var(--accent)]">cool</span>?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] text-lg mb-10 font-300 max-w-xl mx-auto">
            Whether you have a fully scoped project or just a spark of an idea,
            we&apos;d love to hear about it.
          </p>
          <a href="/contact" className="btn-primary text-lg px-10 py-4">
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </div>
  );
}
