
import { Skill } from "../models/Skill.js";

const skills = [
  new Skill({
    id: "skill-1",
    name: "HTML5",
    category: "Web Development",
    level: "Intermediate",
  }),
  new Skill({
    id: "skill-2",
    name: "CSS3",
    category: "Web Development",
    level: "Intermediate",
  }),
  new Skill({
    id: "skill-3",
    name: "JavaScript",
    category: "Programming",
    level: "Beginner",
  }),
  new Skill({
    id: "skill-4",
    name: "React.js",
    category: "Frontend Development",
    level: "Beginner",
  }),
  new Skill({
    id: "skill-5",
    name: "Git & GitHub",
    category: "Development Tools",
    level: "Beginner",
  }),
  new Skill({
    id: "skill-6",
    name: "Responsive Design",
    category: "Web Development",
    level: "Intermediate",
  }),
  new Skill({
    id: "skill-7",
    name: "VS Code",
    category: "Development Tools",
    level: "Intermediate",
  }),
  new Skill({
    id: "skill-8",
    name: "Problem Solving",
    category: "General",
    level: "Developing",
  }),
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
            key={skill.id}
          >
            <span className="mb-4 block text-sm font-medium text-gray-500">
              {String(i + 1).padStart(2, "0")}
            </span>

            <strong className="block text-lg font-semibold text-white">
              {skill.name}
            </strong>

            <p className="mt-2 text-sm text-gray-400">
              {skill.category}
            </p>

            <p className="mt-2 text-xs text-gray-500">
              Level: {skill.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
