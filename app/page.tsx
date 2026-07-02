import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const destinations = [
  {
    href: "/about",
    label: "About Me",
    desc: "Who I am, what I'm drawn to, and the tools I work with.",
    sticker: "/assets/Layer_15.png",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    desc: "Selected brand, editorial, and character design projects.",
    sticker: "/assets/Layer_8.png",
  },
  {
    href: "/contact",
    label: "Contact Me",
    desc: "Got a project in mind? Let's talk about it.",
    sticker: "/assets/20.png",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="min-h-screen bg-grid-paper relative flex items-center overflow-hidden pt-10">
          <div className="absolute inset-0 pointer-events-none select-none">
            <span className="star-shape w-6 h-6 absolute top-28 left-[14%] twinkle" />
            <span className="star-shape w-4 h-4 absolute top-[60%] right-[8%] twinkle" style={{ animationDelay: "1s" }} />
            <span className="star-shape w-5 h-5 absolute bottom-28 left-[6%] twinkle" style={{ animationDelay: "1.8s" }} />
            <Image src="/assets/Layer_7.png" alt="" width={180} height={180}
              className="absolute top-12 right-16 sticker float opacity-90" style={{ animationDelay: "0s" }} />
            <Image src="/assets/20.png" alt="" width={120} height={120}
              className="absolute top-32 left-8 sticker drift opacity-80" style={{ animationDelay: "1.2s" }} />
            <Image src="/assets/10.png" alt="" width={90} height={90}
              className="absolute bottom-40 left-20 sticker float opacity-70" style={{ animationDelay: "2.1s" }} />
            <Image src="/assets/Layer_8.png" alt="" width={100} height={100}
              className="absolute bottom-20 right-32 sticker wiggle opacity-85" style={{ animationDelay: "0.8s" }} />
            <Image src="/assets/10.png" alt="" width={60} height={60}
              className="absolute top-1/2 right-8 sticker drift opacity-60" style={{ animationDelay: "3s" }} />
            <Image src="/assets/Layer_9.png" alt="" width={80} height={80}
              className="absolute top-20 left-1/3 sticker float opacity-60" style={{ animationDelay: "1.5s" }} />
          </div>

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32 relative z-10">
            <div>
              <span className="scallop-note inline-block font-mono text-xs tracking-widest text-[#5E6B33] uppercase mb-5">
                Visual Communication Designer
              </span>
              <h1 className="font-display text-6xl lg:text-8xl text-[#3E2A1C] leading-[0.95] mb-6">
                Design that<br />
                <span className="italic text-[#6E3024]">delights</span><br />
                &amp; endures.
              </h1>
              <p className="text-[#4A3B2A] text-lg leading-relaxed max-w-md mb-8" style={{ fontWeight: 300 }}>
                Hi there — I&apos;m a designer drawn to playful forms, tactile texture,
                and stories told through shape and color. I believe good design should make you
                feel something before you understand it.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full text-sm font-medium text-(--cream) transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "var(--brown)" }}
                >
                  See My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full text-sm font-medium border-2 transition-all hover:bg-[#5A3A26] hover:text-(--cream)"
                  style={{ borderColor: "var(--brown)", color: "var(--brown)" }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative h-96 lg:h-130 hidden lg:block">
              <Image src="/assets/Layer_14.png" alt="Lumie character" width={280} height={340}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 sticker float z-20" />
              <Image src="/assets/2.png" alt="Bear cookie" width={130} height={130}
                className="absolute top-8 left-8 sticker drift z-10" style={{ animationDelay: "0.6s" }} />
              <Image src="/assets/15.png" alt="Candy apple" width={140} height={160}
                className="absolute top-4 right-4 sticker float z-10" style={{ animationDelay: "1.8s" }} />
              <Image src="/assets/1.png" alt="Taiyaki" width={110} height={110}
                className="absolute bottom-16 left-0 sticker wiggle z-10" style={{ animationDelay: "0.3s" }} />
              <Image src="/assets/Layer_9.png" alt="Clover" width={80} height={80}
                className="absolute top-1/3 right-0 sticker drift z-10" style={{ animationDelay: "2.5s" }} />
            </div>
          </div>

          {/* Marquee strip */}
          <div
            className="absolute bottom-0 left-0 right-0 py-3 overflow-hidden border-t-2"
            style={{ background: "var(--brown)", color: "var(--cream)", borderColor: "var(--brown-deep)" }}
          >
            <div className="flex whitespace-nowrap marquee-track">
              {Array(6).fill(["Brand Identity", "✦", "Packaging Design", "✦", "Illustration", "✦", "Editorial", "✦", "Character Design", "✦", "Surface Design", "✦"]).flat().map((t, i) => (
                <span key={i} className="font-mono text-xs tracking-widest mx-4 uppercase">{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-dots-olive">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinations.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="card-hover block rounded-sm p-8 border-2"
                  style={{ background: "var(--cream)", borderColor: "var(--brown-deep)", boxShadow: "3px 4px 0 rgba(74,58,42,0.18)" }}
                >
                  <Image src={d.sticker} alt="" width={64} height={64} className="sticker mb-4" />
                  <h2 className="font-display text-2xl text-[#3E2A1C] mb-2">{d.label}</h2>
                  <p className="text-sm text-[#4A3B2A] leading-relaxed" style={{ fontWeight: 300 }}>{d.desc}</p>
                  <span className="inline-block mt-4 text-[#6E3024] font-mono text-xs uppercase tracking-wide">Visit page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
