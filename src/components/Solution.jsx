import React from 'react';
import { Bot, MessageSquareText, PhoneIncoming, CalendarDays, LayoutDashboard, Languages } from 'lucide-react';

const features = [
  { icon: MessageSquareText, label: 'AI Chat + SMS' },
  { icon: PhoneIncoming, label: 'Missed Call Recovery' },
  { icon: CalendarDays, label: 'Appointment Booking' },
  { icon: LayoutDashboard, label: 'Dealer Dashboard' },
  { icon: Languages, label: 'Multi-Language' },
];

const Solution = () => {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(217,224,33,0.1),transparent_60%)] blur-xl" />
        <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(41,171,226,0.12),transparent_60%)] blur-xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold md:text-4xl">Meet Your AI Agent</h2>
        <p className="mt-3 max-w-3xl text-white/80">
          Responds in 5 seconds • Speaks English & Spanish • Books test drives • Syncs with your CRM.
        </p>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          {/* AI humanoid illustration placeholder matching brand */}
          <div className="relative">
            <div className="aspect-square w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#29ABE2]/10 via-[#7FD8BE]/10 to-transparent p-[2px]">
              <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-black/80">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_30%,rgba(127,216,190,0.25),transparent_60%)]" />
                <Bot className="relative z-10 h-36 w-36 text-[#7FD8BE] drop-shadow-[0_0_30px_rgba(127,216,190,0.6)]" />
                <div className="absolute bottom-4 text-center text-white/70">AI agent illustration</div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-[#7FD8BE]/30 hover:shadow-[0_0_40px_rgba(41,171,226,0.15)]">
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D9E021]/20 via-[#7FD8BE]/20 to-[#29ABE2]/20">
                    <Icon className="h-5 w-5 text-[#29ABE2]" />
                  </span>
                  <span className="text-base font-semibold">{label}</span>
                </div>
                <div className="text-sm text-white/70">Feature</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
