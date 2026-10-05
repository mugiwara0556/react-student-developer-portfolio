const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Git & GitHub",
  "Responsive Design",
  "VS Code",
  "Problem Solving",
];

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl border-t border-white/10 px-6 py-24"
    >
      <div className="mb-10">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-gray-400">
          02 — SKILLS
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Tools I’m building with.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <div
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            key={skill}
          >
            <span className="mb-4 block text-sm font-medium text-gray-500">
              {String(i + 1).padStart(2, "0")}
            </span>

            <strong className="text-lg font-semibold text-white">
              {skill}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;