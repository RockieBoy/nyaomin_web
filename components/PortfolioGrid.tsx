"use client";
import { useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { useReveal } from "@/hooks/useReveal";

export function PortfolioGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  useReveal();

  return (
    <section className="py-40 bg-grid-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14 reveal">
          <div>
            <span className="scallop-note inline-block font-mono text-xs tracking-widest text-[#5E6B33] uppercase mb-3">Selected Work</span>
            <h1 className="font-display text-5xl text-[#3E2A1C]">Portfolio</h1>
          </div>
          <Image src="/assets/Layer_8.png" alt="" width={70} height={70} className="sticker wiggle opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 0.1}s` }}>
              <ProjectCard project={p} onClick={() => setActiveProject(p)} />
            </div>
          ))}
          {projects[2] && (
            <div className="md:col-span-2 flex justify-center">
              <div className="w-full md:max-w-[calc(50%-1rem)]" style={{ animationDelay: "0.2s" }}>
                <ProjectCard project={projects[2]} onClick={() => setActiveProject(projects[2])} />
              </div>
            </div>
          )}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
