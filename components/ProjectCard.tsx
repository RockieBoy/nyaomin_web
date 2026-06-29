import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <article
      className="rounded-sm overflow-hidden cursor-pointer card-hover reveal border-2"
      style={{ background: project.color, boxShadow: "3px 4px 0 rgba(74,58,42,0.18)", borderColor: "var(--brown-deep)" }}
      onClick={onClick}
    >
      <div className="aspect-[4/3] relative overflow-hidden border-b-2" style={{ borderColor: "var(--brown-deep)" }}>
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
            <p className="font-mono text-xs text-[#5E6B33] uppercase tracking-wider mb-1">{project.category} · {project.year}</p>
            <h3 className="font-display text-xl text-[#3E2A1C]">{project.title}</h3>
          </div>
          <span className="text-[#6E3024] text-xl mt-1">→</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </article>
  );
}
