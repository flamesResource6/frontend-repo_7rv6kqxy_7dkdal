import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ValueProps from './components/ValueProps.jsx';
import HowItWorks from './components/HowItWorks.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
      </main>
      <footer className="border-t mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Kapido Technologies Pvt. Ltd.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
