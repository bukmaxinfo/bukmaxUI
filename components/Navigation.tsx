import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-xl font-800 tracking-tight text-[var(--fg-primary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            bukmax<span className="text-[var(--accent)]">.</span>llc
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="link-animated text-sm font-[family-name:var(--font-body)] font-400 text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-300 tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="link-animated text-sm font-[family-name:var(--font-body)] font-400 text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-300 tracking-wide uppercase"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="link-animated text-sm font-[family-name:var(--font-body)] font-400 text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-300 tracking-wide uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
