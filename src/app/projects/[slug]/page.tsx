import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import Navbar from "@/components/Navbar";
import { Github, ExternalLink } from "lucide-react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pb-16">
        {/* HERO */}

        <section className="relative py-16">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-80px] left-[150px] h-[350px] w-[350px] rounded-full bg-sky-500/20 blur-[120px]" />
            <div className="absolute right-[150px] bottom-[-80px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[120px]" />
          </div>

          <h1 className="text-4xl leading-tight font-bold md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-800 px-3 py-1 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2 text-sm text-gray-300 transition hover:border-sky-400 hover:text-white"
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
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2 text-sm text-gray-300 transition hover:border-sky-400 hover:text-white"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </section>

        {/* GALLERY */}

        <section className="mb-16">
          <ProjectGallery images={project.images} />
        </section>

        {/* MAIN CONTENT */}

        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-gray-300">
              {project.longDescription}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
