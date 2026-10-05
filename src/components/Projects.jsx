const projects = [
  { title:'Student Portfolio', type:'Web Development', description:'A responsive portfolio interface built with reusable React components and pure CSS.', tech:['React','CSS','Vite'] },
  { title:'Task Tracker', type:'Productivity App', description:'A simple task management concept focused on clear interactions and organized state.', tech:['JavaScript','HTML','CSS'] },
  { title:'Network Lab', type:'IT / Networking', description:'A learning project documenting network configuration, connectivity testing, and technical notes.', tech:['Cisco','Networking','Documentation'] }
];
function Projects() { return <section id="projects" className="section"><div className="section-heading"><div><p className="eyebrow">03 — PROJECTS</p><h2>Selected work.</h2></div><p>Projects can grow as my skills grow.</p></div><div className="projects-grid">{projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-number">0{i+1}</div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div></article>)}</div></section>; }
export default Projects;
