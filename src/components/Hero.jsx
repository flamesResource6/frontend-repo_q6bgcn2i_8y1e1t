import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(127,216,190,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(217,224,33,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute top-10 left-0 h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,rgba(41,171,226,0.15),transparent_60%)] blur-2xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-10 pb-24 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
            <span className="text-3xl font-extrabold tracking-tight [text-shadow:0_0_20px_rgba(41,171,226,0.5)]">
              <span className="bg-gradient-to-r from-[#D9E021] via-[#7FD8BE] to-[#29ABE2] bg-clip-text text-transparent">Dealerun</span>
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Your 24/7 AI Sales Team That Never Sleeps.
        </h1>
        <p className="mt-4 max-w-3xl text-center text-lg text-white/80 md:text-xl">
          Dealerun captures every lead, follows up instantly, and never forgets a prospect.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing" className="relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D9E021] via-[#7FD8BE] to-[#29ABE2] opacity-90 blur-[6px]" aria-hidden />
            <span className="relative rounded-full bg-black px-6 py-3 ring-1 ring-white/10">
              <span className="bg-gradient-to-r from-[#D9E021] via-[#7FD8BE] to-[#29ABE2] bg-clip-text text-transparent">Try Free Pilot</span>
            </span>
          </a>

          <a href="#demo" className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/40">
            <Play className="h-4 w-4 text-[#7FD8BE] transition group-hover:text-[#29ABE2]" />
            Watch 60-Second Demo
          </a>
        </div>

        {/* Futuristic car outline & streak hint */}
        <div className="pointer-events-none mt-16 grid w-full max-w-5xl grid-cols-12 gap-2 opacity-80">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          ))}
        </div>

        <p className="pointer-events-none mt-6 text-center text-sm text-white/60">
          Background: black with teal and lime glow, soft motion light streaks, futuristic car outline.
        </p>
      </div>
    </section>
  );
};

export default Hero;
