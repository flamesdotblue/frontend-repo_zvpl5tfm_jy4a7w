import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative isolate min-h-[90vh] overflow-hidden">
      {/* Background gradient accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-2xl" />
      </div>

      {/* Spline canvas */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
        <div className="relative">
          <h1 className="text-balance bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Build vibes, not just code — meet nut
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            A playful, modern coding playground that turns your ideas into immersive, interactive experiences.
            Craft projects with 3D scenes, motion, and instant previews.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-white/10 transition hover:translate-y-[-1px] hover:shadow-2xl">
              Start creating
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15">
              Explore features
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-400">No credit card required • Free during beta</p>
        </div>

        <div className="relative h-[450px] w-full rounded-2xl ring-1 ring-white/10 md:h-[560px]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* subtle overlay for depth without blocking interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
