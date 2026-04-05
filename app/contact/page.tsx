"use client";

import { useState, FormEvent } from "react";

const PROJECT_TYPES = [
  "iOS App",
  "Web App",
  "AI / ML",
  "Game Development",
  "Other",
];

const BUDGET_RANGES = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Project Inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.company ? `Company: ${form.company}` : null,
        `Project Type: ${form.projectType}`,
        `Budget Range: ${form.budget}`,
        ``,
        `Project Description:`,
        form.description,
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:bukmax.info@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm font-[family-name:var(--font-body)] text-[var(--fg)] placeholder:text-[var(--fg-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 focus:border-[var(--accent)] transition-colors";

  const labelClass =
    "block text-sm font-500 font-[family-name:var(--font-body)] text-[var(--fg-secondary)] mb-2";

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
              <span className="text-[var(--accent)]">something together</span>
            </h1>
            <p className="animate-fade-up delay-100 font-[family-name:var(--font-body)] text-xl text-[var(--fg-secondary)] leading-relaxed font-300 max-w-2xl">
              Have a project in mind? Fill out the form below and we&apos;ll get
              back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="card-hover rounded-xl p-10 bg-[var(--bg-secondary)]">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-[var(--accent)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-700">
                      Your email client should open now
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] text-sm font-300 max-w-md mx-auto">
                      Just hit send in your email app and we&apos;ll get back to
                      you within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-[var(--accent)] text-sm font-500 hover:text-[var(--accent-dim)] transition-colors font-[family-name:var(--font-body)]"
                    >
                      ← Fill out again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-700 mb-2">
                      Project Inquiry
                    </h2>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[var(--fg-muted)] font-300 mb-8">
                      Tell us about your project and we&apos;ll take it from
                      there.
                    </p>

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Name <span className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email <span className="text-[var(--accent)]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company{" "}
                        <span className="text-[var(--fg-muted)] font-300">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    {/* Project Type + Budget row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className={labelClass}>
                          Project Type{" "}
                          <span className="text-[var(--accent)]">*</span>
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={form.projectType}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Select a type
                          </option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className={labelClass}>
                          Budget Range{" "}
                          <span className="text-[var(--accent)]">*</span>
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          required
                          value={form.budget}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Select a range
                          </option>
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label htmlFor="description" className={labelClass}>
                        Project Description{" "}
                        <span className="text-[var(--accent)]">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={5}
                        placeholder="Tell us about your project — goals, timeline, any technical requirements..."
                        value={form.description}
                        onChange={handleChange}
                        className={`${inputClass} resize-vertical`}
                      />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Send Inquiry →
                    </button>
                  </form>
                )}
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
                        text: "Fill out the project inquiry form",
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

                {/* Direct email fallback */}
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
                        Prefer email?
                      </h3>
                      <p className="font-[family-name:var(--font-body)] text-[var(--fg-secondary)] text-sm mb-4 font-300">
                        You can also reach us directly at:
                      </p>
                      <a
                        href="mailto:bukmax.info@gmail.com"
                        className="font-[family-name:var(--font-body)] text-[var(--accent)] font-500 hover:text-[var(--accent-dim)] transition-colors link-animated"
                      >
                        bukmax.info@gmail.com
                      </a>
                    </div>
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
