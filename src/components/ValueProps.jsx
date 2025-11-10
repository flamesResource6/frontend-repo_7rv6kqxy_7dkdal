import React from 'react';
import { Rocket, Layout, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Speed by default',
    desc: 'Pre-built flows and components help you ship features in hours, not weeks.'
  },
  {
    icon: Layout,
    title: 'Beautiful building blocks',
    desc: 'Crafted UI primitives and layouts that work across devices and themes.'
  },
  {
    icon: Zap,
    title: 'Automations that help',
    desc: 'One-click deploys, content sync, and analytics that work out of the box.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'Secure by design with SSO, role-based access, and audit trails.'
  }
];

export default function ValueProps() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold">Everything you need to move fast</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Kapido combines design systems, content tools, and deployment into a single streamlined workflow.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 inline-flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
