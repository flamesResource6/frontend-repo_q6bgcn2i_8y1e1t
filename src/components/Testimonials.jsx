import React from 'react';

const Testimonials = () => {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-3xl font-bold md:text-4xl">What Dealers Say.</h3>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="text-xl leading-relaxed text-white/90">
            “Dealerun followed up with 46 leads in 24 hours. We closed 3 cars that weekend.”
          </div>
          <div className="mt-4 text-white/60">— Miami Used-Car Dealer</div>
          <div className="mt-6 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="inline-block h-3.5 w-3.5 rounded-sm bg-gradient-to-br from-[#D9E021] via-[#7FD8BE] to-[#29ABE2] shadow-[0_0_10px_rgba(127,216,190,0.6)]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
