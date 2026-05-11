export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center text-3xl">🔥</div>
            <span className="text-3xl font-bold tracking-tighter">Forge-it</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-emerald-400 transition">Hoe het werkt</a>
            <a href="#" className="hover:text-emerald-400 transition">Voorbeelden</a>
            <a href="#" className="hover:text-emerald-400 transition">Prijzen</a>
          </div>
          <button className="bg-white text-zinc-950 px-8 py-3 rounded-3xl font-semibold hover:bg-emerald-400 hover:text-white transition-all">
            Start gratis
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-900/30 text-emerald-400 text-sm font-medium px-5 py-2 rounded-3xl mb-6">
              Agentic AI • 2026
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              One input.<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Infinite empire.</span>
            </h1>
            <p className="text-2xl text-zinc-400 max-w-lg mb-10">
              Upload één video, podcast of tekst. Onze agent maakt automatisch 25+ perfecte posts, shorts, carousels en threads voor álle platformen — en leert je stijl.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 px-10 py-6 rounded-3xl font-bold text-xl flex items-center gap-3 hover:scale-105 transition">
                🔥 Nu gratis proberen
                <span className="text-2xl">→</span>
              </button>
              <button className="border border-zinc-700 hover:border-zinc-400 px-8 py-6 rounded-3xl text-lg font-medium transition">
                Bekijk 47 seconden demo
              </button>
            </div>
            <p className="text-zinc-500 text-sm mt-8">Al 2.847 creators besparen 15+ uur per week</p>
          </div>

          {/* Visual hero */}
          <div className="relative">
            <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-4 shadow-2xl">
              <div className="bg-black rounded-2xl aspect-video flex items-center justify-center text-6xl">
                📤
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="bg-zinc-800 rounded-2xl p-3 text-center text-xs">📱 TikTok</div>
                <div className="bg-zinc-800 rounded-2xl p-3 text-center text-xs">📘 LinkedIn</div>
                <div className="bg-zinc-800 rounded-2xl p-3 text-center text-xs">🧵 X Thread</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">In 3 stappen naar je content-imperium</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center text-4xl mb-6">1️⃣</div>
              <h3 className="text-2xl font-semibold mb-3">Upload</h3>
              <p className="text-zinc-400">Video, audio, podcast, tekst, PDF of YouTube-link</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center text-4xl mb-6">2️⃣</div>
              <h3 className="text-2xl font-semibold mb-3">Agent leert</h3>
              <p className="text-zinc-400">Eénmalig je brand voice + stijl</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center text-4xl mb-6">3️⃣</div>
              <h3 className="text-2xl font-semibold mb-3">Infinite empire</h3>
              <p className="text-zinc-400">25+ perfecte outputs + auto-post</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <div className="bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-2xl font-semibold">Klaar om nooit meer handmatig te repurposen?</p>
          <button className="mt-6 bg-zinc-950 text-white px-12 py-5 rounded-3xl font-bold text-xl">Start gratis — geen creditcard nodig</button>
        </div>
      </div>

      <footer className="py-12 text-center text-zinc-500 text-sm">
        Forge-it © 2026 • Ons miljardenbedrijf in de maak
      </footer>
    </main>
  );
}
