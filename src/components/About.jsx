function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl gap-10 border-t border-white/10 px-6 py-24 md:grid-cols-2"
    >
      <div>
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-gray-400">
          01 — ABOUT
        </p>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
          Curious, practical, and always learning.
        </h2>
      </div>

      <div className="space-y-6 text-lg leading-8 text-gray-400">
        <p>
          I enjoy turning ideas into working websites and applications. My
          current focus is strengthening my foundation in HTML, CSS, JavaScript,
          and React while learning how good software is planned, built, and
          improved.
        </p>

        <p>
          This portfolio demonstrates my ability to structure a React
          application into reusable components and create a responsive
          interface using modern CSS utilities.
        </p>
      </div>
    </section>
  );
}

export default About;