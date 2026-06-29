"use client";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-sm p-8 border-2" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(224,169,60,0.4)" }}>
        <p className="font-display text-3xl text-[#E0A93C] italic mb-2">Message sent!</p>
        <p className="text-sm text-[#D8CBAE] opacity-80">I&apos;ll get back to you within a few days ✦</p>
      </div>
    );
  }

  return (
    <div className="rounded-sm p-8 space-y-4 border-2" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(224,169,60,0.25)" }}>
      <input
        type="text"
        placeholder="Your name"
        className="w-full rounded-sm px-4 py-3 text-sm outline-none placeholder:text-[#9C8F73]"
        style={{ background: "rgba(255,255,255,0.07)", color: "var(--cream)", border: "1px solid rgba(224,169,60,0.25)" }}
      />
      <input
        type="email"
        placeholder="Email address"
        className="w-full rounded-sm px-4 py-3 text-sm outline-none placeholder:text-[#9C8F73]"
        style={{ background: "rgba(255,255,255,0.07)", color: "var(--cream)", border: "1px solid rgba(224,169,60,0.25)" }}
      />
      <textarea
        rows={4}
        placeholder="Tell me about your project…"
        className="w-full rounded-sm px-4 py-3 text-sm outline-none placeholder:text-[#9C8F73] resize-none"
        style={{ background: "rgba(255,255,255,0.07)", color: "var(--cream)", border: "1px solid rgba(224,169,60,0.25)" }}
      />
      <button
        onClick={() => setSent(true)}
        className="w-full py-4 rounded-sm font-medium text-sm transition-all hover:opacity-90 active:scale-[0.98]"
        style={{ background: "var(--gold)", color: "var(--brown-deep)" }}
      >
        Send Message →
      </button>
    </div>
  );
}
