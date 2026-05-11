export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl">🔥</div>
            <h1 className="text-3xl font-bold tracking-tight">Forge-it</h1>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-emerald-400">How it works</a>
            <a href="#" className="hover:text-emerald-400">Pricing</a>
            <a href="#" className="hover:text-emerald-400">Blog</a>
            <button className="bg-white text-zinc-950 px-6 py-2.5 rounded-3xl font-semibold hover:bg-emerald-400 hover:text-white transition">
              Try for free
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">
            One input.<br />
            <span className="text-emerald-400">Infinite empire.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-md mx-auto">
            Upload één video, podcast of tekst → onze agent bouwt automatisch je hele content-imperium.
          </p>
        </div>

        {/* Upload Zone */}
        <div className="border-2 border-dashed border-zinc-700 rounded-3xl p-16 text-center hover:border-emerald-400 transition-all">
          <div className="mx-auto w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-4xl">
            📤
          </div>
          <h3 className="text-2xl font-semibold mb-2">Sleep je content hierheen</h3>
          <p className="text-zinc-400 mb-8">of</p>
          <button 
            className="bg-white text-zinc-950 px-10 py-4 rounded-3xl font-semibold text-lg hover:bg-emerald-400 hover:text-white transition shadow-xl"
          >
            Kies bestand (video, audio, tekst, PDF…)
          </button>
          <p className="text-xs text-zinc-500 mt-6">Max 500 MB • Ondersteunt MP4, MP3, TXT, PDF, YouTube-link</p>
        </div>

        {/* Forge Button */}
        <div className="flex justify-center mt-12">
          <button 
            className="bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 px-16 py-6 rounded-3xl font-bold text-2xl shadow-2xl hover:scale-105 transition flex items-center gap-4"
          >
            🔥 Forge it
            <span className="text-3xl">→</span>
          </button>
        </div>

        <p className="text-center text-zinc-500 mt-8 text-sm">
          Onze agent leert je brand voice en maakt 25+ perfecte posts, shorts, threads en carousels
        </p>
      </div>

      {/* Fake results preview (later echt) */}
      <div className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-5xl mx-auto px-8">
          <p className="text-emerald-400 text-sm font-medium mb-4">⚡ Voorbeeld wat de agent maakt</p>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-zinc-800 rounded-3xl p-6">📱 TikTok / Reels short</div>
            <div className="bg-zinc-800 rounded-3xl p-6">📘 LinkedIn carousel</div>
            <div className="bg-zinc-800 rounded-3xl p-6">🧵 X-thread</div>
          </div>
        </div>
      </div>
    </main>
  );
}
