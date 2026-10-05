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

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24"
    >
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
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

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <article
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
            key={project.title}
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;