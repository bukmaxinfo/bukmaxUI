export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-50">
            Welcome to bukmax.llc
          </h1>
          <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            A cool AI company building cool apps
          </p>
          <div className="pt-8">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - Placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <h2 className="text-4xl font-bold text-center mb-16 text-zinc-900 dark:text-zinc-50">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="text-4xl">🤖</div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              AI-Powered Solutions
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              [Placeholder: Describe your AI-powered solutions and capabilities]
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl">📱</div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Mobile Apps
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              [Placeholder: Describe your mobile app development services]
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl">⚡</div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Fast & Reliable
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              [Placeholder: Describe your performance and reliability standards]
            </p>
          </div>
        </div>
      </section>

      {/* Future Apps Section - Placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-zinc-900 dark:text-zinc-50">
          Our Apps
        </h2>
        <div className="text-center text-zinc-600 dark:text-zinc-400">
          <p>[Placeholder: This section will showcase your apps when they're ready]</p>
          <p className="mt-4">Add your app descriptions, screenshots, and download links here.</p>
        </div>
      </section>
    </div>
  );
}
