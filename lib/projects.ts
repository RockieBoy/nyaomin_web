export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  tags: string[];
  hero: string;
  thumbs: string[];
  problem: string;
  goal: string;
  insight: string;
  process: string;
  decision: string;
  result: string;
  reflection: string;
  color: string;
};

export const projects: Project[] = [
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
];
