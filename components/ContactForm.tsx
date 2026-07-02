"use client";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-sm p-8 border-2" style={{ background: "var(--cream)", borderColor: "var(--brown-deep)" }}>
        <p className="font-display text-3xl text-[#3E2A1C] italic mb-2">Message sent!</p>
        <p className="text-sm text-[#4A3B2A] opacity-80">I&apos;ll get back to you within a few days ✦</p>
      </div>
    );
  }

  const fieldStyle = {
    background: "var(--cream)",
    color: "var(--brown-deep)",
    border: `1px solid var(--brown-deep)`,
  };

  return (
    <div className="rounded-sm p-8 space-y-4 border-2" style={{ background: "rgba(242,234,211,0.6)", borderColor: "var(--brown-deep)" }}>
      <input
        type="text"
        placeholder="Your name"
        className="w-full rounded-sm px-4 py-3 text-sm outline-none placeholder:text-[#9C8057]"
        style={fieldStyle}
      />
      <input
        type="email"
        placeholder="Email address"
        className="w-full rounded-sm px-4 py-3 text-sm outline-none placeholder:text-[#9C8057]"
        style={fieldStyle}
      />
      <textarea
        rows={4}
        placeholder="Tell me about your project…"
        className="w-full rounded-sm px-4 py-3 text-sm outline-none placeholder:text-[#9C8057] resize-none"
        style={fieldStyle}
      />
      <button
        onClick={() => setSent(true)}
        className="w-full py-4 rounded-sm font-medium text-sm transition-all hover:opacity-90 active:scale-[0.98]"
        style={{ background: "var(--brown-deep)", color: "var(--cream)" }}
      >
        Send Message →
      </button>
    </div>
  );
}
