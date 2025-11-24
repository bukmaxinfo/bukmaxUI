import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4 text-zinc-900 dark:text-zinc-50">
              bukmax.llc
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              A cool AI company building cool apps
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
              Contact
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              bukmax.info@bukmax.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>&copy; {new Date().getFullYear()} bukmax.llc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
