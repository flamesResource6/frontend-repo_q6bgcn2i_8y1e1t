import React from 'react';

const Problem = () => {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      {/* neon grid */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(127,216,190,0.2)_95%),linear-gradient(0deg,transparent_95%,rgba(41,171,226,0.15)_95%)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The Missed Opportunity</h2>
        <p className="mt-4 max-w-3xl text-white/80">
          78% of dealership leads go unanswered after business hours. Customers choose the first responder — not the best one.
        </p>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          {/* frustrated silhouette */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#29ABE2]/10 via-[#7FD8BE]/10 to-transparent p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/80 ring-1 ring-white/10">
                <div className="h-40 w-40 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-xl" />
                <div className="absolute h-56 w-56 rounded-full border border-white/10" />
                <div className="absolute -bottom-6 h-40 w-40 rotate-12 rounded-[40%_60%_65%_35%/40%_35%_65%_60%] bg-[radial-gradient(circle_at_60%_40%,rgba(41,171,226,0.5),transparent_60%)] opacity-70" />
                <div className="absolute text-white/70">frustrated salesperson silhouette</div>
              </div>
            </div>
          </div>

          {/* neon analytics */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 h-40 w-full rounded-lg bg-gradient-to-tr from-[#D9E021]/20 via-[#7FD8BE]/20 to-[#29ABE2]/20 p-[1px]">
                <div className="h-full w-full rounded-lg bg-black/80" />
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {['Response Time','After-hours Leads','Lost Sales'].map((k) => (
                  <div key={k} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="text-[#7FD8BE]">{k}</div>
                    <div className="mt-1 text-2xl font-bold text-white">▲</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-white/70">neon analytics graphic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
