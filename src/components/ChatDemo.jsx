import React from 'react';

const ChatBubble = ({ role, children }) => (
  <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
      role === 'user'
        ? 'bg-gradient-to-r from-[#7FD8BE]/30 to-[#29ABE2]/30 text-white border border-white/10'
        : 'bg-white/5 text-white/90 border border-white/10'
    } shadow-[0_0_30px_rgba(41,171,226,0.1)]`}>{children}</div>
  </div>
);

const ChatDemo = () => {
  return (
    <section id="demo" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,224,33,0.12),transparent_60%)] blur-xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="text-3xl font-bold md:text-4xl">How It Works — In 30 Seconds.</h3>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur">
            <div className="flex flex-col gap-3">
              <ChatBubble role="user">User: “I want to test drive the 2021 Audi Q5.”</ChatBubble>
              <ChatBubble role="ai">AI: “Great! Would you prefer 4:30 pm or 6:00 pm tomorrow?”</ChatBubble>
              <ChatBubble role="user">User: “6:00 pm works.”</ChatBubble>
              <ChatBubble role="ai">AI: “Booked! A confirmation was sent to your phone.”</ChatBubble>
            </div>
          </div>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-lg font-semibold">What happens in the background:</div>
          <ul className="mt-4 space-y-2 text-white/80">
            {['Lead identified','Availability checked','CRM updated','Confirmation sent','Optional financing link'].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#D9E021] to-[#29ABE2] shadow-[0_0_8px_#29ABE2]" />
                {i}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default ChatDemo;
