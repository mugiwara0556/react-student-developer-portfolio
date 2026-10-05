function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2"
    >
      <div>
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-gray-400">
          BSIT STUDENT • ASPIRING DEVELOPER
        </p>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Building useful digital experiences{" "}
          <span className="text-gray-400">one project at a time.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I’m a student developer focused on web technologies, clean
          interfaces, and practical software projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className="rounded-lg bg-emerald-300 px-6 py-3 font-semibold text-black transition-transform hover:-translate-y-0.5"
            href="#projects"
          >
            View Projects
          </a>

          <a
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <i className="h-3 w-3 rounded-full bg-red-400" />
            <i className="h-3 w-3 rounded-full bg-yellow-400" />
            <i className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <pre className="overflow-x-auto p-6 text-sm leading-7 text-gray-300">
            {`const developer = {
  focus: "Web Development",
  tools: ["React", "JavaScript", "CSS"],
  mindset: "Always learning"
};`}
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;