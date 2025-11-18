import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black py-12 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7FD8BE]/40 to-transparent" />
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(41,171,226,0.12),transparent_60%)] blur-xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="text-white/80">Dealerun is a product by Boltrun — building the next generation of AI digital employees.</div>
        <div className="mt-2 text-white/60">© 2025 Dealerun. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
