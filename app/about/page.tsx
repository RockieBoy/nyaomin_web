import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Me · Visual Design Portfolio",
  description: "About La Nina Cantika Aghna K., a concept art, illustration, and character design artist.",
};

const skills = [
  { label: "Team Work", pct: 80 },
  { label: "Time Management", pct: 75 },
  { label: "Communication", pct: 60 },
  { label: "Work Ethic", pct: 55 },
];

type Tool = { label: string; abbr: string; bg: string; color: string; border?: string };

const tools: Tool[] = [
  { label: "Procreate", abbr: "Pr", bg: "#FFFFFF", color: "#1A1A1A", border: "#D8D0BE" },
  { label: "Illustrator", abbr: "Ai", bg: "#1A0C02", color: "#FF7C00" },
  { label: "Photoshop", abbr: "Ps", bg: "#001E36", color: "#31A8FF" },
  { label: "ibisPaint", abbr: "iP", bg: "#101010", color: "#FFFFFF" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
          {/* Left: photo panel */}
          <div className="bg-dots-olive relative overflow-hidden flex flex-col items-center justify-center pt-28 pb-16 px-10">
            <div className="relative mb-8">
              <span className="star-shape w-7 h-7 absolute -top-3 -left-4 twinkle" />
              <span className="scallop-note inline-block font-display text-xl text-[#3E2A1C] px-6 py-2">
                La Nina Cantika Aghna K.
              </span>
            </div>

            <div className="relative">
              <div className="polaroid w-72 lg:w-80 -rotate-1">
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src="/assets/Layer_15.png"
                    alt="La Nina's portrait"
                    fill
                    sizes="(max-width: 1024px) 288px, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="absolute -bottom-3 right-6 text-2xl text-[#3E2A1C]">☆</span>
              <div className="wax-seal w-16 h-16 absolute -bottom-8 -left-8">
                <Image src="/assets/Layer_9.png" alt="Clover seal" width={36} height={36} />
              </div>
            </div>
          </div>

          {/* Right: bio panel */}
          <div
            className="relative overflow-hidden pt-28 pb-16 px-10 lg:px-16 flex flex-col justify-center"
            style={{ background: "var(--cream)" }}
          >
            <Image
              src="/assets/Layer_9.png"
              alt=""
              width={110}
              height={110}
              className="absolute top-10 right-10 sticker float opacity-90 hidden lg:block"
            />

            <h1 className="font-display text-6xl text-[#3E2A1C] mb-2">Hello!</h1>
            <div className="w-24 h-0.75 mb-6" style={{ background: "var(--brown)" }} />

            <p className="text-[#4A3B2A] leading-relaxed mb-10 max-w-md" style={{ fontWeight: 300 }}>
              Saya La Nina, keunggulan saya berada pada Concept Art, Illustration, dan
              Character Designing. Saya suka membuat ide konsep sebuah karakter yang
              menyambung dengan dunia dan cerita karakter itu sendiri. Saya berharap
              dapat menyumbangkan kreativitas dan keterampilan pada studio ini.
            </p>

            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-display text-4xl text-[#3E2A1C]">Social Skills</h2>
              <span className="star-shape w-7 h-7 twinkle" />
            </div>
            <div className="w-32 h-0.75 mb-8" style={{ background: "var(--brown)" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mb-10 max-w-lg">
              {skills.map(({ label, pct }) => (
                <div key={label}>
                  <p className="font-display text-lg text-[#3E2A1C] mb-2">{label}</p>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {tools.map(({ label, abbr, bg, color, border }) => (
                <div
                  key={label}
                  title={label}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-display text-xl font-bold"
                  style={{
                    background: bg,
                    color,
                    border: border ? `1px solid ${border}` : undefined,
                    boxShadow: "2px 3px 0 rgba(74,58,42,0.18)",
                  }}
                >
                  {abbr}
                </div>
              ))}
            </div>

            <Image
              src="/assets/Layer_14.png"
              alt=""
              width={190}
              height={230}
              className="absolute -bottom-2 right-0 sticker float opacity-95 hidden lg:block"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
