import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Github, Mail, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section id="header" className="relative pt-24 pb-32">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-100px] left-[200px] h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[120px]" />

            <div className="absolute right-[200px] bottom-[-100px] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]" />
          </div>

          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h1 className="text-6xl font-bold">Jait Limaye</h1>

              <p className="mt-6 text-xl text-gray-400">
                Full-stack developer building modern web and mobile apps using
                React, React Native and scalable backend systems.
              </p>

              <div className="mt-10 flex gap-6">
                <a
                  href="#projects"
                  className="rounded-lg bg-sky-500 px-6 py-3 font-medium text-black transition hover:bg-sky-400"
                >
                  View Work
                </a>

                <a
                  href="#contact"
                  className="rounded-lg border border-gray-700 px-6 py-3 transition hover:border-gray-500"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/me.jpg"
                alt="Jait Limaye"
                width={320}
                height={320}
                className="rounded-2xl border border-slate-800 object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="pb-32">
          <h2 className="mb-10 text-3xl font-bold">Projects</h2>

          {/* Featured */}

          <div className="mb-20 grid gap-10 lg:grid-cols-2">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={`${project.slug}_${i}`} project={project} />
            ))}
          </div>

          {/* Other */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(2).map((project, i) => (
              <ProjectCard key={`${project.slug}_${i}`} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="pb-32">
          <h2 className="mb-10 text-3xl font-bold">Contact</h2>

          <div className="flex gap-6">
            <a
              href="https://github.com/jaitlimaye"
              className="flex items-center gap-2 rounded-lg border border-slate-800 px-5 py-3 transition hover:border-sky-400"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href="mailto:jaitlimaye@gmail.com"
              className="flex items-center gap-2 rounded-lg border border-slate-800 px-5 py-3 transition hover:border-sky-400"
            >
              <Mail size={20} />
              Email
            </a>

            <a
              href="https://linkedin.com/in/jaitlimaye"
              className="flex items-center gap-2 rounded-lg border border-slate-800 px-5 py-3 transition hover:border-sky-400"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
