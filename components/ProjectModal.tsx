"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
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
      style={{ background: "rgba(46,35,22,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm border-2"
        style={{ background: "var(--cream)", borderColor: "var(--brown-deep)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero */}
        <div className="relative aspect-[16/7] overflow-hidden border-b-2" style={{ background: project.color, borderColor: "var(--brown-deep)" }}>
          <Image src={project.thumbs[activeImg]} alt={project.title} fill className="object-contain p-10" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
            style={{ background: "var(--brown-deep)", color: "var(--cream)" }}
          >
            ✕
          </button>
        </div>

        {/* Thumb strip */}
        <div className="flex gap-3 p-6 border-b-2" style={{ borderColor: "rgba(74,58,42,0.18)" }}>
          {project.thumbs.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${activeImg === i ? "border-[#6E3024]" : "border-transparent opacity-60 hover:opacity-80"}`}
              style={{ background: project.color }}
            >
              <Image src={src} alt="" width={64} height={64} className="object-contain p-1" />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="font-mono text-xs text-[#5E6B33] uppercase tracking-widest mb-2">{project.category} · {project.year}</p>
          <h2 className="font-display text-4xl text-[#3E2A1C] mb-6">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>

          <div className="grid grid-cols-1 gap-6">
            {sections.map(({ label, val }) => (
              <div key={label} className="flex gap-6 py-5 border-b last:border-0" style={{ borderColor: "rgba(74,58,42,0.18)" }}>
                <div className="w-36 flex-shrink-0">
                  <p className="font-mono text-xs text-[#5E6B33] uppercase tracking-wide leading-relaxed">{label}</p>
                </div>
                <p className="text-[#4A3B2A] leading-relaxed text-sm flex-1">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
