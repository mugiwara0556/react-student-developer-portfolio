function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">BSIT STUDENT • ASPIRING DEVELOPER</p>
        <h1>Building useful digital experiences <span>one project at a time.</span></h1>
        <p className="hero-text">I’m a student developer focused on web technologies, clean interfaces, and practical software projects.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#projects">View Projects</a><a className="btn btn-secondary" href="#contact">Get in Touch</a></div>
      </div>
      <div className="hero-card"><div className="code-window"><div className="window-bar"><i></i><i></i><i></i></div><pre>{`const developer = {\n  focus: "Web Development",\n  tools: ["React", "JavaScript", "CSS"],\n  mindset: "Always learning"\n};`}</pre></div></div>
    </section>
  );
}
export default Hero;
