import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me · Visual Design Portfolio",
  description: "Get in touch for internships, collaborations, and freelance projects.",
};

const socials = [
  { label: "Email", val: "hello@design.id" },
  { label: "Instagram", val: "@designstudio" },
  { label: "LinkedIn", val: "linkedin.com/in/designer" },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-40 relative overflow-hidden min-h-screen" style={{ background: "var(--brown-deep)", color: "var(--cream)" }}>
          {/* Decorative */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <span className="star-shape w-5 h-5 absolute top-24 left-[20%] twinkle" />
            <span className="star-shape w-4 h-4 absolute bottom-24 right-[18%] twinkle" style={{ animationDelay: "1.4s" }} />
            <Image src="/assets/Layer_13.png" alt="" width={140} height={140}
              className="absolute top-12 right-16 sticker float opacity-50" />
            <Image src="/assets/Layer_7.png" alt="" width={100} height={100}
              className="absolute bottom-16 left-12 sticker drift opacity-40" />
            <Image src="/assets/20.png" alt="" width={80} height={80}
              className="absolute top-1/2 left-1/4 sticker wiggle opacity-30" />
          </div>

          <div className="max-w-2xl mx-auto px-6 text-center relative z-10 pt-8">
            <Image src="/assets/Layer_8.png" alt="" width={80} height={80}
              className="mx-auto mb-6 sticker wiggle" />
            <span className="scallop-note inline-block font-mono text-xs tracking-widest text-[#5E6B33] uppercase mb-4">Let&apos;s Talk</span>
            <h1 className="font-display text-5xl lg:text-6xl mb-6 leading-tight" style={{ color: "var(--cream)" }}>
              Got a project<br />
              <span className="italic text-[#E0A93C]">in mind?</span>
            </h1>
            <p className="text-[#D8CBAE] leading-relaxed mb-10" style={{ fontWeight: 300 }}>
              I&apos;m currently open to internships, collaborations, and freelance projects.
              Whether you have a full brief or just an idea — I&apos;d love to hear from you.
            </p>

            <ContactForm />

            <div className="flex justify-center gap-8 mt-12 text-sm">
              {socials.map(({ label, val }) => (
                <div key={label} className="text-center">
                  <p className="font-mono text-xs text-[#B8A878] uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-[#D8CBAE] text-xs">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
