import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(127,216,190,0.14),transparent_60%)] blur-xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(41,171,226,0.14),transparent_60%)] blur-xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h3 className="text-3xl font-bold md:text-4xl">Pricing</h3>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Starter Pilot */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-2xl font-semibold">Starter Pilot</div>
            <div className="mt-2 text-3xl font-extrabold">$499/mo</div>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>30-day free trial</li>
              <li>Single AI Agent</li>
              <li>Chat + SMS Follow-Up</li>
            </ul>
          </div>
          {/* Pro */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-2xl font-semibold">Pro</div>
            <div className="mt-2 text-3xl font-extrabold">$999/mo</div>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>All Starter Features</li>
              <li>Advanced Analytics</li>
              <li>CRM Integration</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#" className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D9E021] via-[#7FD8BE] to-[#29ABE2] opacity-90 blur-[6px]" aria-hidden />
            <span className="relative rounded-full bg-black px-8 py-3 ring-1 ring-white/10">Launch My AI Agent.</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
