"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/utils/types";

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:border-sky-500"
    >
      <div className="overflow-hidden">
        <Image
          src={`/images${project.images[0]}`}
          alt={project.title}
          width={600}
          height={400}
          className="h-48 w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="flex min-h-[200px] flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>

        <p className="text-sm text-gray-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded bg-slate-800 px-2 py-1 text-xs">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-6 pt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-sky-400"
            >
              <Github size={16} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-sky-400"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
