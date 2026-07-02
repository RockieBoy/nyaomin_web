import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Me · Visual Design Portfolio",
  description: "About La Nina Cantika Aghna K., a concept art, illustration, and character design artist.",
};

const experiences = [
  { period: "2020–2025", place: "Freelancer", roles: "Illustrator, Concept Artist, Character Designer" },
  { period: "2020–2025", place: "Animoishii Studio", roles: "Moderator Staff, Owner, Main Artist" },
  { period: "2024", place: "Cryspy (Pre-Production)", roles: "Character Designing, Concept Artist" },
  { period: "2024–2025", place: "DIVERSITY Apparel", roles: "Main Artist, Employee" },
  { period: "2025", place: "Nécho", roles: "Co-Founder, Illustrator" },
  { period: "2025–Now", place: "Studio Hissho", roles: "Illustrator, Mentor Intern" },
];

const skills = [
  { label: "Team Work", pct: 80 },
  { label: "Time Management", pct: 75 },
  { label: "Communication", pct: 60 },
  { label: "Work Ethic", pct: 55 },
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
              <span className="scallop-note inline-block font-display text-3xl text-[#3E2A1C] px-8 py-3">
                La Nina Cantika Aghna K.
              </span>
            </div>

            <div className="relative">
              <div className="polaroid w-80 lg:w-96 -rotate-1">
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src="/assets/imageprofile.png"
                    alt="La Nina's portrait"
                    fill
                    sizes="(max-width: 1024px) 320px, 384px"
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="absolute -bottom-3 right-6 text-5xl text-[#3E2A1C]">☆</span>
              <div className="wax-seal w-16 h-16 absolute -bottom-8 -left-8">
                <Image src="/assets/Layer_9.png" alt="Clover seal" width={36} height={36} />
              </div>
            </div>
          </div>

          {/* Right: bio panel */}
          <div
            className="relative overflow-hidden pt-28 pb-24 px-10 lg:px-16 flex flex-col justify-start"
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

            <div className="flex gap-4 mb-10">
              {[
                { src: "/assets/icon01.png", label: "Tool 1" },
                { src: "/assets/icon02.png", label: "Tool 2" },
                { src: "/assets/icon03.png", label: "Tool 3" },
                { src: "/assets/icon04.png", label: "Tool 4" },
              ].map(({ src, label }) => (
                <Image key={label} src={src} alt={label} width={56} height={56} className="object-contain" />
              ))}
            </div>

            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-display text-4xl text-[#3E2A1C]">Pengalaman</h2>
              <span className="star-shape w-6 h-6 twinkle" />
            </div>
            <div className="w-32 h-0.75 mb-6" style={{ background: "var(--brown)" }} />

            <div className="space-y-0 max-w-md">
              {experiences.map(({ period, place, roles }, i) => (
                <div
                  key={i}
                  className="py-3 border-b"
                  style={{ borderColor: "rgba(74,58,42,0.15)" }}
                >
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-mono text-xs text-[#5E6B33] tracking-widest">{period}</span>
                    <span className="font-display text-lg text-[#3E2A1C]">{place}</span>
                  </div>
                  <p className="text-sm text-[#4A3B2A] mt-0.5" style={{ fontWeight: 300 }}>{roles}</p>
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
