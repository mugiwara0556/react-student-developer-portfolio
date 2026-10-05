import { useState } from "react";

const projects = [
  {
    title: "Student Portfolio",
    type: "Web Development",
    description:
      "A responsive portfolio interface built with reusable React components and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Task Tracker",
    type: "Productivity App",
    description:
      "A simple task management concept focused on clear interactions and organized state.",
    tech: ["JavaScript", "HTML", "Tailwind CSS"],
  },
  {
    title: "Network Lab",
    type: "IT / Networking",
    description:
      "A learning project documenting network configuration, connectivity testing, and technical notes.",
    tech: ["Cisco", "Networking", "Documentation"],
  },
];

const filters = ["All", "Web Development", "Productivity App", "IT / Networking"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24"
    >
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-gray-400">
            03 — PROJECTS
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Selected work.
          </h2>
        </div>

        <p className="text-gray-500">
          Projects can grow as my skills grow.
        </p>
      </div>

      {/* Project Filters */}
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              activeFilter === filter
                ? "border-emerald-300 bg-emerald-300 text-black"
                : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid gap-6 md:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <article
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-500">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                {project.type}
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mb-6 leading-7 text-gray-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-400"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm font-medium text-emerald-300">
              Click to view details →
            </p>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {selectedProject.type}
                </p>

                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-white/10 px-3 py-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close project details"
              >
                ✕
              </button>
            </div>

            <p className="mb-6 leading-7 text-gray-400">
              {selectedProject.description}
            </p>

            <div>
              <p className="mb-3 text-sm font-semibold text-white">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-8 w-full rounded-lg bg-emerald-300 px-5 py-3 font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;