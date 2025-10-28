import React from 'react';
import { Code, Zap, Shield } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]">
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-2xl bg-gradient-to-t from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
  </div>
);

const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tools that feel like play
          </h2>
          <p className="mt-3 text-pretty text-slate-300">
            nut blends code, design, and motion into one flow so you can ideate faster and ship with style.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Code}
            title="Live playground"
            desc="Edit, preview, and iterate in real time with zero setup. Your canvas updates as you type."
          />
          <FeatureCard
            icon={Zap}
            title="Motion-first"
            desc="Animate interactions with sensible defaults powered by Framer Motion and 3D-ready scenes."
          />
          <FeatureCard
            icon={Shield}
            title="Secure by default"
            desc="Best practices, isolated sandboxes, and safe sharing links keep your experiments protected."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
