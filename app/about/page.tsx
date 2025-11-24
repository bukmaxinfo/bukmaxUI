import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - bukmax.llc",
  description: "Learn more about bukmax.llc and our mission",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-12 text-zinc-900 dark:text-zinc-50">
          About bukmax.llc
        </h1>

        <div className="space-y-8 text-lg text-zinc-600 dark:text-zinc-400">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
              Who We Are
            </h2>
            <p>
              [Placeholder: Introduce your company - when was it founded, what's your mission,
              what makes you unique?]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
              Our Mission
            </h2>
            <p>
              A cool AI company building cool apps. [Placeholder: Expand on your mission statement -
              what problems are you solving? Who are you helping?]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
              What We Do
            </h2>
            <p>
              [Placeholder: Describe your services and products in detail. What technologies do you
              use? What types of apps do you build?]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
              Our Team
            </h2>
            <p>
              [Placeholder: Introduce your team members, their backgrounds, and expertise.
              What makes your team special?]
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
              Our Values
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>[Placeholder: Value 1 - e.g., Innovation]</li>
              <li>[Placeholder: Value 2 - e.g., Quality]</li>
              <li>[Placeholder: Value 3 - e.g., Customer Focus]</li>
              <li>[Placeholder: Value 4 - e.g., Transparency]</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
