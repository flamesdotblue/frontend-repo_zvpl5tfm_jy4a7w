import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="relative overflow-hidden py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-pretty text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to vibe with your code?
        </h3>
        <p className="mt-3 text-slate-300">
          Join the nut beta to start building playful, interactive projects in minutes. Invite-only for now — claim your spot.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const input = form.querySelector('input');
            if (input) {
              alert(`Thanks! We'll be in touch at ${input.value}`);
              input.value = '';
            }
          }}
        >
          <input
            type="email"
            required
            placeholder="you@studio.dev"
            className="w-full flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-0 transition focus:border-white/20 focus:bg-white/10"
          />
          <button
            type="submit"
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-white/10 transition hover:translate-y-[-1px] hover:shadow-2xl"
          >
            Join beta
          </button>
        </form>
        <p className="mt-3 text-xs text-slate-400">By joining, you agree to receive product updates. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default CTA;
