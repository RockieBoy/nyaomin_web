"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── DATA ──────────────────────────────────────────────── */
const projects = [
  {
    id: "kawaii-snacks",
    title: "Kawaii Snack Branding",
    category: "Brand Identity",
    year: "2024",
    tags: ["Branding", "Packaging", "Illustration"],
    hero: "/assets/2.png",
    thumbs: ["/assets/1.png", "/assets/2.png", "/assets/3.png", "/assets/5.png"],
    problem: "A local Japanese-inspired snack brand needed a visual identity that felt warm, nostalgic, and irresistibly cute — without sliding into generic kawaii clichés.",
    goal: "Build a brand system playful enough for social media while refined enough for physical packaging and retail shelves.",
    insight: "Research revealed that customers of cute-food brands aren't just buying snacks — they're buying an emotional moment. The visual language had to trigger delight before the first bite.",
    process: "I started with texture studies and shape language experiments. The scalloped circle motif (from the biscuit forms) became the recurring structure across logo, labels, and pattern.",
    decision: "Warm amber tones with cream backgrounds keep the palette appetising without being sugary. Each product character has a distinct silhouette so they're recognisable even at small sizes on feeds.",
    result: "A cohesive brand family spanning 8 SKUs, social templates, and a retail shelf kit. The taiyaki character was adapted into a sticker set that gained 12k downloads in launch week.",
    reflection: "Designing for 'cute' is harder than it looks — it requires precision. One wrong curve and it tips into generic. I learned to commit to a specific type of cute and stay disciplined about it.",
    color: "#F5E6CC",
  },
  {
    id: "clover-green",
    title: "Clover Green Studio",
    category: "Visual Identity",
    year: "2024",
    tags: ["Identity", "Editorial", "Web"],
    hero: "/assets/Layer_7.png",
    thumbs: ["/assets/Layer_7.png", "/assets/Layer_8.png", "/assets/Layer_9.png", "/assets/Layer_10.png"],
    problem: "A sustainable lifestyle studio wanted an identity that communicated freshness and optimism without resorting to typical eco-design tropes (earthy browns, recycling symbols, sans-serif minimalism).",
    goal: "Design a system that feels botanical and alive — with personality beyond 'green brand'.",
    insight: "The four-leaf clover has built-in storytelling: luck, nature, finding something rare. It became the conceptual anchor for everything: the logo is a clover, the grid is four-quadrant, the brand story is about finding rare beauty in everyday things.",
    process: "I developed three directions — botanical illustration, geometric abstraction, and textile-inspired. The client immediately responded to the embroidered texture treatment, which became the hero aesthetic.",
    decision: "Using real macro photography of clover leaves and embroidered patches created tactile depth that digital-only brands can't replicate. This physical-to-digital tension became a brand signature.",
    result: "Identity rolled out across editorial magazine, web, packaging, and retail installations. Recognised in Jakarta Design Week 2024.",
    reflection: "Concept-first design is more durable. When the four-leaf-clover idea was solid, every subsequent decision (color, texture, grid) made itself.",
    color: "#D4EBC8",
  },
  {
    id: "candy-apple-editorial",
    title: "Sweet Obsession Editorial",
    category: "Editorial Design",
    year: "2025",
    tags: ["Editorial", "Art Direction", "Photography"],
    hero: "/assets/15.png",
    thumbs: ["/assets/15.png", "/assets/24.png", "/assets/Layer_16.png", "/assets/20.png"],
    problem: "A student-run food culture magazine wanted a special issue on 'obsession with sweetness' — they needed editorial design as visceral as the subject matter.",
    goal: "Create layouts where the design itself feels indulgent and slightly excessive, matching the editorial tone about overconsumption and desire.",
    insight: "Candy apples are the perfect metaphor: beauty layered over something raw. I used the apple-peel image as a recurring motif — the reveal of what's beneath the gloss.",
    process: "Shot reference imagery of peeling, dripping, and melting forms. Built a type system where the display face drips slightly. Used full-bleed images with text swimming in negative space.",
    decision: "The red and cream palette with glossy photography creates tension between clinical white space and visceral imagery. No softening — this magazine should feel almost uncomfortable in its beauty.",
    result: "16-page editorial spread. Won Best Student Editorial at Bandung Creative Festival. Now being adapted into a web editorial series.",
    reflection: "Constraint as concept: once 'peeling back layers' became the metaphor, the design choices became obvious. Concept is a compass.",
    color: "#F5D5CC",
  },
  {
    id: "mascot-universe",
    title: "Lumie Mascot Universe",
    category: "Character Design",
    year: "2025",
    tags: ["Character Design", "Motion", "Brand"],
    hero: "/assets/Layer_14.png",
    thumbs: ["/assets/Layer_13.png", "/assets/Layer_14.png", "/assets/Layer_15.png", "/assets/10.png"],
    problem: "A youth mental-health app needed a mascot that could carry emotional weight — happy, anxious, restful, curious — without being patronising or childish.",
    goal: "Create a character system flexible enough to express the full spectrum of feelings authentically, across animation, UI, and print.",
    insight: "The character needed to feel like a companion, not a guide. I studied how toy figurines create attachment through minimal facial expression — the ambiguity lets the viewer project their own emotion.",
    process: "Developed Lumie as a soft, glow-in-the-dark figure. The minimal face (two dots, a small mouth) can shift meaning entirely through body posture. This was the breakthrough.",
    decision: "The yellow-green palette was chosen because it reads simultaneously as 'alive/glowing' and 'slightly unwell' — a perfect middle ground for mental health honesty. No forced cheerful yellow.",
    result: "8-character pose library, 24 emotion states, animated micro-interactions, and a sticker pack with 200k+ downloads. Integrated into the app's onboarding and daily check-in flows.",
    reflection: "The best mascots are a little melancholy. They feel real because they're not always happy. Designing for emotional range, not just positivity, made Lumie beloved.",
    color: "#E0EDCC",
  },
  {
    id: "golden-patch",
    title: "Golden Archive Patches",
    category: "Surface Design",
    year: "2023",
    tags: ["Surface Design", "Textile", "Merchandise"],
    hero: "/assets/20.png",
    thumbs: ["/assets/20.png", "/assets/10.png", "/assets/Layer_8.png", "/assets/Layer_9.png"],
    problem: "An indie fashion label wanted a merchandise line that captured the nostalgia of embroidered school patches — but elevated for adult collectors.",
    goal: "Design a patch collection that feels handcrafted and archival, collectible enough to be displayed, wearable enough to actually sell.",
    insight: "Embroidery has inherent credibility — the texture signals craft and care. I leaned into the imperfection, making sure digital renditions preserved the thread-direction and slight irregularity that mass production usually irons out.",
    process: "Started with physical embroidery samples, photographed at macro scale, then built a design system from those textures. The gold star series became the anchor — simple, recognisable, endlessly combinable.",
    decision: "Five-pointed stars in three sizes let the patches work as individual pieces or arranged constellations. The gold thread against dark fabric creates visual hierarchy without color complexity.",
    result: "Series of 12 patches, sold as individual and limited collector sets. Sold out within 48 hours of launch. Picked up by three online vintage-adjacent retailers.",
    reflection: "Designing things people want to keep is harder than designing things people notice. I care more about durability than virality now.",
    color: "#F5ECC8",
  },
];

/* ── HELPERS ──────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── COMPONENTS ───────────────────────────────────────── */
function Nav({ onNav }: { onNav: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-sm" : "py-5"
      }`}
      style={{ background: scrolled ? "rgba(247,243,236,0.92)" : "transparent", backdropFilter: scrolled ? "blur(10px)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => onNav("home")}
          className="font-display text-xl text-[#4A7C59] italic tracking-tight"
        >
          riko.
        </button>
        <nav className="flex gap-8 text-sm font-medium text-[#3D3D38]">
          {["about", "portfolio", "contact"].map((id) => (
            <button key={id} onClick={() => onNav(id)} className="capitalize hover:text-[#4A7C59] transition-colors">
              {id}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden" style={{ background: "var(--cream)" }}>
      {/* Floating bg decorations */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image src="/assets/Layer_7.png" alt="" width={180} height={180}
          className="absolute top-12 right-16 sticker float opacity-80" style={{ animationDelay: "0s" }} />
        <Image src="/assets/20.png" alt="" width={120} height={120}
          className="absolute top-32 left-8 sticker drift opacity-70" style={{ animationDelay: "1.2s" }} />
        <Image src="/assets/10.png" alt="" width={90} height={90}
          className="absolute bottom-40 left-20 sticker float opacity-60" style={{ animationDelay: "2.1s" }} />
        <Image src="/assets/Layer_8.png" alt="" width={100} height={100}
          className="absolute bottom-20 right-32 sticker wiggle opacity-75" style={{ animationDelay: "0.8s" }} />
        <Image src="/assets/10.png" alt="" width={60} height={60}
          className="absolute top-1/2 right-8 sticker drift opacity-50" style={{ animationDelay: "3s" }} />
        <Image src="/assets/Layer_9.png" alt="" width={80} height={80}
          className="absolute top-20 left-1/3 sticker float opacity-50" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32 relative z-10">
        {/* Text */}
        <div>
          <p className="font-mono text-xs tracking-widest text-[#7A9E6F] uppercase mb-4">Visual Communication Designer</p>
          <h1 className="font-display text-6xl lg:text-8xl text-[#1C1C1A] leading-tight mb-6">
            Design that<br />
            <span className="italic text-[#4A7C59]">delights</span><br />
            & endures.
          </h1>
          <p className="text-[#3D3D38] text-lg leading-relaxed max-w-md mb-8" style={{ fontWeight: 300 }}>
            Hi, I&apos;m Riko — a designer drawn to playful forms, tactile texture,
            and stories told through shape and color. I believe good design should make you
            feel something before you understand it.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: "var(--green-deep)" }}
            >
              See My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full text-sm font-medium border transition-all hover:bg-[#4A7C59] hover:text-white hover:border-[#4A7C59]"
              style={{ borderColor: "var(--green-deep)", color: "var(--green-deep)" }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Hero image cluster */}
        <div className="relative h-96 lg:h-[520px] hidden lg:block">
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
        className="absolute bottom-0 left-0 right-0 py-3 overflow-hidden"
        style={{ background: "var(--green-deep)", color: "var(--cream)" }}
      >
        <div className="flex whitespace-nowrap marquee-track">
          {Array(6).fill(["Brand Identity", "✦", "Packaging Design", "✦", "Illustration", "✦", "Editorial", "✦", "Character Design", "✦", "Surface Design", "✦"]).flat().map((t, i) => (
            <span key={i} className="font-mono text-xs tracking-widest mx-4 uppercase">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "#F0EDE5" }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image side */}
        <div className="relative">
          <div
            className="w-72 h-72 lg:w-96 lg:h-96 mx-auto rounded-full relative overflow-visible"
            style={{ background: "var(--green-soft)" }}
          >
            <Image
              src="/assets/Layer_15.png"
              alt="Lumie resting"
              width={320}
              height={260}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 sticker float z-10"
              style={{ animationDelay: "0.5s" }}
            />
            <Image
              src="/assets/Layer_7.png"
              alt="Clover"
              width={100}
              height={100}
              className="absolute -top-6 -right-6 sticker drift z-20"
              style={{ animationDelay: "1s" }}
            />
            <Image
              src="/assets/20.png"
              alt="Stars"
              width={90}
              height={90}
              className="absolute -bottom-4 -left-6 sticker float z-20"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>

        {/* Text side */}
        <div className="reveal">
          <p className="font-mono text-xs tracking-widest text-[#7A9E6F] uppercase mb-3">About Me</p>
          <h2 className="font-display text-5xl text-[#1C1C1A] mb-6 leading-tight">
            Curious designer,<br />
            <span className="italic text-[#4A7C59]">collector of textures.</span>
          </h2>
          <p className="text-[#3D3D38] leading-relaxed mb-4" style={{ fontWeight: 300 }}>
            I&apos;m a visual communication design student based in Bandung, Indonesia.
            My practice lives at the intersection of brand identity, editorial design,
            and character work — with a recurring obsession with tactile surfaces and
            things that feel good to hold.
          </p>
          <p className="text-[#3D3D38] leading-relaxed mb-6" style={{ fontWeight: 300 }}>
            I believe design is problem-solving dressed up as feeling. I approach every
            brief by asking: what should this feel like before the viewer reads a single word?
            That emotional first impression is the hardest and most important thing to get right.
          </p>

          <div className="bg-white rounded-2xl p-6 mb-6" style={{ boxShadow: "4px 4px 0 #C8DFBA" }}>
            <p className="font-display text-lg text-[#4A7C59] italic leading-snug">
              &ldquo;Design should make you feel something before you understand it.&rdquo;
            </p>
            <p className="font-mono text-xs text-[#7A9E6F] mt-2">— My design philosophy</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Focus", val: "Brand & Editorial" },
              { label: "Tools", val: "Figma, Illustrator, Procreate" },
              { label: "Based in", val: "Bandung, Indonesia" },
              { label: "Seeking", val: "Creative internships & collabs" },
            ].map(({ label, val }) => (
              <div key={label}>
                <p className="font-mono text-xs text-[#7A9E6F] uppercase tracking-wide">{label}</p>
                <p className="text-sm text-[#1C1C1A] font-medium mt-0.5">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) {
  return (
    <article
      className="rounded-2xl overflow-hidden cursor-pointer card-hover reveal"
      style={{ background: project.color, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
      onClick={onClick}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.hero}
          alt={project.title}
          fill
          className="object-contain p-8 transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="font-mono text-xs text-[#7A9E6F] uppercase tracking-wider mb-1">{project.category} · {project.year}</p>
            <h3 className="font-display text-xl text-[#1C1C1A]">{project.title}</h3>
          </div>
          <span className="text-[#4A7C59] text-xl mt-1">→</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </article>
  );
}

function PortfolioSection({ onOpenProject }: { onOpenProject: (p: typeof projects[0]) => void }) {
  return (
    <section id="portfolio" className="py-28" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <p className="font-mono text-xs tracking-widest text-[#7A9E6F] uppercase mb-3">Selected Work</p>
            <h2 className="font-display text-5xl text-[#1C1C1A]">Portfolio</h2>
          </div>
          <Image src="/assets/Layer_8.png" alt="" width={70} height={70} className="sticker wiggle opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <ProjectCard project={p} onClick={() => onOpenProject(p)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const sections = [
    { label: "Problem", val: project.problem },
    { label: "Goal", val: project.goal },
    { label: "Research & Insight", val: project.insight },
    { label: "Process", val: project.process },
    { label: "Design Decision", val: project.decision },
    { label: "Result", val: project.result },
    { label: "Reflection", val: project.reflection },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(28,28,26,0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{ background: "var(--cream)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero */}
        <div className="relative aspect-[16/7] rounded-t-3xl overflow-hidden" style={{ background: project.color }}>
          <Image src={project.thumbs[activeImg]} alt={project.title} fill className="object-contain p-10" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold"
            style={{ background: "rgba(28,28,26,0.5)" }}
          >
            ✕
          </button>
        </div>

        {/* Thumb strip */}
        <div className="flex gap-3 p-6 border-b border-[#E0DDD6]">
          {project.thumbs.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? "border-[#4A7C59]" : "border-transparent opacity-60 hover:opacity-80"}`}
              style={{ background: project.color }}
            >
              <Image src={src} alt="" width={64} height={64} className="object-contain p-1" />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="font-mono text-xs text-[#7A9E6F] uppercase tracking-widest mb-2">{project.category} · {project.year}</p>
          <h2 className="font-display text-4xl text-[#1C1C1A] mb-6">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>

          <div className="grid grid-cols-1 gap-6">
            {sections.map(({ label, val }) => (
              <div key={label} className="flex gap-6 py-5 border-b border-[#E0DDD6] last:border-0">
                <div className="w-36 flex-shrink-0">
                  <p className="font-mono text-xs text-[#7A9E6F] uppercase tracking-wide leading-relaxed">{label}</p>
                </div>
                <p className="text-[#3D3D38] leading-relaxed text-sm flex-1">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "#2D4A38", color: "var(--cream)" }}>
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image src="/assets/Layer_13.png" alt="" width={140} height={140}
          className="absolute top-12 right-16 sticker float opacity-40" />
        <Image src="/assets/Layer_7.png" alt="" width={100} height={100}
          className="absolute bottom-16 left-12 sticker drift opacity-30" />
        <Image src="/assets/20.png" alt="" width={80} height={80}
          className="absolute top-1/2 left-1/4 sticker wiggle opacity-20" />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10 reveal">
        <Image src="/assets/Layer_8.png" alt="" width={80} height={80}
          className="mx-auto mb-6 sticker wiggle" />
        <p className="font-mono text-xs tracking-widest text-[#C8DFBA] uppercase mb-4">Let&apos;s Talk</p>
        <h2 className="font-display text-5xl lg:text-6xl mb-6 leading-tight" style={{ color: "var(--cream)" }}>
          Got a project<br />
          <span className="italic text-[#C8DFBA]">in mind?</span>
        </h2>
        <p className="text-[#C8DFBA] leading-relaxed mb-10" style={{ fontWeight: 300 }}>
          I&apos;m currently open to internships, collaborations, and freelance projects.
          Whether you have a full brief or just an idea — I&apos;d love to hear from you.
        </p>

        {sent ? (
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.08)" }}>
            <p className="font-display text-3xl text-[#C8DFBA] italic mb-2">Message sent!</p>
            <p className="text-sm text-[#C8DFBA] opacity-70">I&apos;ll get back to you within a few days ✦</p>
          </div>
        ) : (
          <div className="rounded-2xl p-8 space-y-4" style={{ background: "rgba(255,255,255,0.06)" }}>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none placeholder:text-[#7A9E6F]"
              style={{ background: "rgba(255,255,255,0.08)", color: "var(--cream)", border: "1px solid rgba(200,223,186,0.2)" }}
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none placeholder:text-[#7A9E6F]"
              style={{ background: "rgba(255,255,255,0.08)", color: "var(--cream)", border: "1px solid rgba(200,223,186,0.2)" }}
            />
            <textarea
              rows={4}
              placeholder="Tell me about your project…"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none placeholder:text-[#7A9E6F] resize-none"
              style={{ background: "rgba(255,255,255,0.08)", color: "var(--cream)", border: "1px solid rgba(200,223,186,0.2)" }}
            />
            <button
              onClick={() => setSent(true)}
              className="w-full py-4 rounded-xl font-medium text-sm transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: "var(--green-soft)", color: "var(--green-deep)" }}
            >
              Send Message →
            </button>
          </div>
        )}

        <div className="flex justify-center gap-8 mt-12 text-sm">
          {[
            { label: "Email", val: "riko@design.id" },
            { label: "Instagram", val: "@rikodesigns" },
            { label: "LinkedIn", val: "linkedin.com/in/riko" },
          ].map(({ label, val }) => (
            <div key={label} className="text-center">
              <p className="font-mono text-xs text-[#7A9E6F] uppercase tracking-wide mb-1">{label}</p>
              <p className="text-[#C8DFBA] text-xs">{val}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 text-center" style={{ background: "#1C1C1A", color: "#7A9E6F" }}>
      <p className="font-mono text-xs tracking-widest">
        © 2025 Riko — Portfolio Design / Visual Communication
      </p>
    </footer>
  );
}

/* ── MAIN PAGE ────────────────────────────────────────── */
export default function Home() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  useReveal();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav onNav={scrollTo} />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection onOpenProject={setActiveProject} />
        <ContactSection />
      </main>
      <Footer />
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}
