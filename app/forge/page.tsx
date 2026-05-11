'use client';

import { useState } from 'react';

export default function Forge() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'forging' | 'done'>('idle');
  const [results, setResults] = useState<string[]>([]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const forgeIt = async () => {
    if (!file) return;
    setStatus('uploading');
    await new Promise(resolve => setTimeout(resolve, 800));

    setStatus('forging');
    await new Promise(resolve => setTimeout(resolve, 1800));

    setResults([
      "📱 TikTok / Reels short (47s) - hook + CTA",
      "📘 LinkedIn carousel (5 slides)",
      "🧵 X Thread (8 posts)",
      "📧 Newsletter snippet",
      "📌 Instagram caption + carousel",
      "🔍 SEO-optimized blog intro"
    ]);
    setStatus('done');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-20">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-center mb-4">Forge-it</h1>
        <p className="text-emerald-400 text-center text-xl mb-12">Upload → Agent doet de rest</p>

        <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-12">
          {!file ? (
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-zinc-800 rounded-3xl flex items-center justify-center text-6xl mb-8">📤</div>
              <h2 className="text-3xl font-semibold mb-3">Sleep je content hier</h2>
              <p className="text-zinc-400 mb-8">Video, audio, podcast, tekst, PDF of YouTube-link</p>
              <label className="cursor-pointer bg-white text-zinc-950 px-10 py-5 rounded-3xl font-bold text-lg inline-block hover:bg-emerald-400 hover:text-white transition">
                Kies bestand
                <input type="file" className="hidden" onChange={handleFile} />
              </label>
            </div>
          ) : (
            <div>
              <p className="text-emerald-400 mb-4">Gekozen bestand: <span className="font-medium text-white">{file.name}</span></p>
              
              {status === 'idle' && (
                <button
                  onClick={forgeIt}
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 py-8 rounded-3xl font-bold text-3xl hover:scale-105 transition"
                >
                  🔥 FORGE IT
                </button>
              )}

              {status === 'uploading' && <p className="text-center text-xl">📤 Uploaden...</p>}
              {status === 'forging' && <p className="text-center text-xl">🧠 Agent is bezig... (dit duurt normaal 47 seconden)</p>}
              
              {status === 'done' && (
                <div>
                  <p className="text-emerald-400 text-2xl font-bold mb-8 text-center">✅ Je content-imperium is klaar!</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.map((result, i) => (
                      <div key={i} className="bg-zinc-800 p-6 rounded-3xl text-sm font-medium">
                        {result}
                      </div>
                    ))}
                  </div>
                  <button className="mt-10 w-full bg-white text-zinc-950 py-6 rounded-3xl font-bold text-xl">
                    Download alles of post automatisch
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-zinc-500 mt-12 text-sm">
          Dit is een demo — de echte Grok-agent komt binnen 48 uur live
        </p>
      </div>
    </div>
  );
}
