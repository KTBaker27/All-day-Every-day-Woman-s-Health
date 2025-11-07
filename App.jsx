import React from "react";

const logo = (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="24" height="24" rx="6" fill="url(#g)" />
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0" stopColor="#EAF8FF" />
        <stop offset="1" stopColor="#FFF7CF" />
      </linearGradient>
    </defs>
    <g transform="translate(4,4)">
      <path d="M8 2c1.657 0 3 1.343 3 3 0 3-3 5-3 5s-3-2-3-5c0-1.657 1.343-3 3-3z" fill="#fff" opacity="0.95"/>
    </g>
  </svg>
);

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFDFD] via-[#F8FBFF] to-[#FFFDF2] text-gray-800">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-white/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full p-1 bg-white/80 shadow-sm">{logo}</div>
            <div>
              <div className="text-lg font-semibold">All Day Every Day</div>
              <div className="text-xs text-gray-600 -mt-1">Woman's Health</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#wellness" className="hover:underline">Wellness</a>
            <a href="#supplements" className="hover:underline">Supplements</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#contact" className="bg-yellow-100 px-3 py-2 rounded-full text-sm shadow-sm">Contact</a>
          </nav>

          <div className="md:hidden">
            <button aria-label="open menu" className="p-2 rounded bg-white/70">☰</button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Feel radiant, every day.</h1>
            <p className="text-lg text-gray-700">Practical tips, gentle supplements, and lifestyle guidance to support women at every stage — all in a warm, uplifting space.</p>

            <div className="flex gap-3">
              <a href="#wellness" className="inline-block px-6 py-3 rounded-full bg-[#DFF7FF] hover:opacity-95 font-medium">Explore Wellness</a>
              <a href="#supplements" className="inline-block px-6 py-3 rounded-full border border-gray-200">Supplements</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">Join our newsletter for weekly tips and feel-good resources.</div>
            <form className="flex gap-2 max-w-md mt-2">
              <input aria-label="email" type="email" placeholder="Your email" className="flex-1 rounded-full px-4 py-2 border border-gray-200 focus:outline-none" />
              <button className="bg-yellow-100 px-4 py-2 rounded-full">Sign up</button>
            </form>

            <div className="mt-6 text-sm text-gray-500">Trusted & friendly — for every body.</div>
          </div>

          <div className="relative">
            <img className="rounded-2xl shadow-xl w-full object-cover h-96" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4f0c8f8d1d5ab0a4c3ed3dbd8e59c3b2" alt="happy woman with flowers" />
            <div className="absolute left-6 bottom-6 bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow"> 
              <div className="text-sm font-semibold">Morning moments</div>
              <div className="text-xs text-gray-600">Simple rituals for balanced days</div>
            </div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold">Our mission</h2>
              <p className="mt-4 text-gray-700">We believe women thrive when they have kind, science-backed guidance — and a community that reminds them to take a moment for themselves. Our content blends practical tips, approachable supplement education, and lifestyle inspiration.</p>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Evidence-informed supplement guides</li>
                <li>• Everyday wellness practices</li>
                <li>• Community stories and honest tips</li>
              </ul>

              <div className="mt-6">
                <a href="#contact" className="px-5 py-2 rounded-full bg-[#E7F8FF]">Work with us</a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b2f8f6b1c4e3b6a9b0d8a6f1c2e8a4d" alt="flowers closeup" className="w-full h-80 object-cover"/>
            </div>
          </div>
        </section>

        <section id="wellness" className="bg-white/60 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold">Wellness & Lifestyle</h3>
            <p className="mt-2 text-gray-700">Quick routines, mindful practices, and realistic habits that fit into busy lives.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                {title: 'Morning ritual', body: 'Gentle stretches, hydrating, 5-minute journaling.'},
                {title: 'Energy tips', body: 'Small food swaps and movement for steady energy.'},
                {title: 'Sleep support', body: 'Evening routines and calming rituals.'}
              ].map((c)=> (
                <article key={c.title} className="rounded-xl p-5 shadow-sm bg-[#FEFFFE]">
                  <h4 className="font-semibold">{c.title}</h4>
                  <p className="mt-2 text-gray-600 text-sm">{c.body}</p>
                  <a className="mt-3 inline-block text-sm text-blue-600" href="#blog">Read more →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="supplements" className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold">Supplements — gentle guidance</h3>
          <p className="mt-2 text-gray-700">Short educational notes to help you choose responsibly. Always consult a provider for personalized advice.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {title: 'Multivitamin', note: 'A daily base for general nourishment.'},
              {title: 'Omega-3', note: 'Supports mood and heart health.'},
              {title: 'Probiotic', note: 'Helps digestive balance and immunity.'}
            ].map((s)=> (
              <div key={s.title} className="p-5 rounded-2xl shadow bg-gradient-to-br from-[#F8FCFF] to-[#FFFDF0]">
                <div className="text-sm font-semibold">{s.title}</div>
                <p className="mt-2 text-gray-600 text-sm">{s.note}</p>
                <a href="#" className="mt-3 text-blue-600 inline-block text-sm">Learn more</a>
              </div>
            ))}
          </div>
        </section>

        <section id="blog" className="bg-white/60 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold">From the blog</h3>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[1,2,3].map(i=> (
                <article key={i} className="rounded-xl overflow-hidden shadow">
                  <img src={`https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=${i*11111111}`} alt="article" className="w-full h-44 object-cover"/>
                  <div className="p-4">
                    <h4 className="font-semibold">Simple ways to support daily energy</h4>
                    <p className="mt-2 text-sm text-gray-600">Small habits add up — practical tweaks you can start this week.</p>
                    <a className="mt-3 inline-block text-sm text-blue-600" href="#">Read post →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Contact & Collaborate</h3>
              <p className="mt-2 text-gray-700">Interested in partnering, contributing, or have questions? Send a note and we'll reply soon.</p>

              <form className="mt-6 space-y-3">
                <input placeholder="Your name" className="w-full rounded-lg border px-4 py-2" />
                <input placeholder="Email" className="w-full rounded-lg border px-4 py-2" />
                <textarea placeholder="Message" className="w-full rounded-lg border px-4 py-2 h-24" />
                <div>
                  <button className="px-5 py-2 rounded-full bg-yellow-100">Send message</button>
                </div>
              </form>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c4f0a2b3d7a0f7d" alt="relaxing scene" className="w-full h-80 object-cover"/>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/40 mt-8 py-6">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} All Day Every Day — Woman's Health</div>
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
