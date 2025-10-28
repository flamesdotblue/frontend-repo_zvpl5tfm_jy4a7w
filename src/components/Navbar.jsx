import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30 transition-transform group-hover:scale-105">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">nut</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-slate-300 transition hover:text-white">Features</a>
          <a href="#pricing" className="text-sm text-slate-300 transition hover:text-white">Pricing</a>
          <a href="#cta" className="text-sm text-slate-300 transition hover:text-white">Get started</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-white">Sign in</button>
          <button className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15">Join beta</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
