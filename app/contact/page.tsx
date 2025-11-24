import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - bukmax.llc",
  description: "Get in touch with bukmax.llc",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-12 text-zinc-900 dark:text-zinc-50">
          Contact Us
        </h1>

        <div className="space-y-12">
          <div>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
              We'd love to hear from you! Whether you have a question about our apps,
              want to discuss a potential project, or just want to say hello.
            </p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Get In Touch
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:bukmax.info@bukmax.com"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    bukmax.info@bukmax.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                    Location
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    [Placeholder: Your business address or city/country]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🕒</div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    [Placeholder: Your business hours or "Available 24/7" if applicable]
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-50">
              Social Media
            </h2>
            <div className="flex gap-6">
              <p className="text-zinc-600 dark:text-zinc-400">
                [Placeholder: Add your social media links - Twitter, LinkedIn, GitHub, etc.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
