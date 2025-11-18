import React from 'react';

const Navigation = () => {
  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex justify-center">
      <div className="pointer-events-auto mt-4 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-white backdrop-blur">
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="font-semibold">
            <span className="bg-gradient-to-r from-[#D9E021] via-[#7FD8BE] to-[#29ABE2] bg-clip-text text-transparent">Dealerun</span>
          </a>
          <a href="#problem" className="text-white/70 hover:text-white">Problem</a>
          <a href="#solution" className="text-white/70 hover:text-white">Solution</a>
          <a href="#demo" className="text-white/70 hover:text-white">Demo</a>
          <a href="#pricing" className="text-white/70 hover:text-white">Pricing</a>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
