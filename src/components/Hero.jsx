import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs text-amber-700 shadow-sm">
          <Sparkles className="h-4 w-4" />
          Meet Kapido — build and ship faster
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
          The lightning-fast way to create modern sites
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Kapido helps you design, launch, and iterate stunning web experiences
          at breakneck speed. Templates, components, and automation built for
          teams who move fast.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3 rounded-md bg-amber-500 text-white font-medium hover:bg-amber-600 shadow">
            Start free
          </button>
          <button className="px-6 py-3 rounded-md border border-slate-200 font-medium hover:bg-slate-50">
            Live demo
          </button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['1,200+', 'Teams onboarded'],
            ['300k', 'Components used'],
            ['99.9%', 'Uptime'],
            ['< 5 min', 'Avg. setup time'],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-xl border bg-white/70 border-slate-200 p-6 shadow-sm">
              <div className="text-2xl font-bold">{stat}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
