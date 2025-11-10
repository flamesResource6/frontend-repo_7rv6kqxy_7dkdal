import React from 'react';
import { Rocket, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-amber-100/60 bg-white/70">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          Kapido
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-md border border-slate-200 hover:bg-slate-50">Sign in</button>
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-amber-500 text-white hover:bg-amber-600 shadow-sm">Get started</button>
          <button className="md:hidden p-2 rounded-md border border-slate-200"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
}
