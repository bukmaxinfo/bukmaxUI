import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 py-16">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-xl font-800 tracking-tight"
            >
              bukmax<span className="text-[var(--accent)]">.</span>llc
            </Link>
            <p className="font-[family-name:var(--font-body)] text-sm text-[var(--fg-muted)] mt-4 leading-relaxed font-300 max-w-xs">
              AI-powered software studio. We build intelligent apps that solve
              real problems.
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-xs font-600 tracking-[0.2em] uppercase text-[var(--fg-muted)] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3 font-[family-name:var(--font-body)]">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-animated text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-300 font-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-xs font-600 tracking-[0.2em] uppercase text-[var(--fg-muted)] mb-5">
              Contact
            </h4>
            <a
              href="mailto:bukmax.info@bukmax.com"
              className="link-animated font-[family-name:var(--font-body)] text-sm text-[var(--fg-secondary)] hover:text-[var(--accent)] transition-colors duration-300 font-300"
            >
              bukmax.info@bukmax.com
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--border)] py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-body)] text-xs text-[var(--fg-muted)] font-300">
            &copy; {new Date().getFullYear()} bukmax.llc. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-body)] text-xs text-[var(--fg-muted)] font-300">
            Built with care in the age of AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
