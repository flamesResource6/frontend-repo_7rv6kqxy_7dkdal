import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Pick a template',
    desc: 'Choose from battle-tested layouts tailored for marketing, docs, and apps.'
  },
  {
    step: '02',
    title: 'Customize visually',
    desc: 'Swap branding, edit content, and compose sections with drag-and-drop.'
  },
  {
    step: '03',
    title: 'Launch anywhere',
    desc: 'One-click deploy to your favorite platform with SSL and global CDN.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">How Kapido works</h2>
            <p className="mt-2 text-slate-600 max-w-xl">From idea to live site in minutes. No complexity, just momentum.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800">
            <CheckCircle2 className="h-4 w-4" /> Start building now
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm">
              <div className="text-xs font-mono text-slate-500">Step {step}</div>
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
        <div id="pricing" className="mt-12 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
          <h3 className="font-semibold">Simple pricing</h3>
          <div className="mt-4 grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: '$0', features: ['Basic components', 'Community support', '1 project'] },
              { name: 'Pro', price: '$19', features: ['Full library', 'Email support', 'Unlimited projects'] },
              { name: 'Teams', price: '$49', features: ['Roles & SSO', 'Priority support', 'Workspace controls'] },
            ].map((tier) => (
              <div key={tier.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-semibold">{tier.name}</h4>
                  <div className="text-lg font-bold text-amber-600">{tier.price}<span className="text-xs text-slate-500 font-normal">/mo</span></div>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-600" /> {f}</li>
                  ))}
                </ul>
                <button className="mt-4 w-full px-4 py-2 rounded-md bg-amber-500 text-white text-sm font-medium hover:bg-amber-600">Choose {tier.name}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
