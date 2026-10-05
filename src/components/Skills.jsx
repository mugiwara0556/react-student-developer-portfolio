const skills = ['HTML5','CSS3','JavaScript','React.js','Git & GitHub','Responsive Design','VS Code','Problem Solving'];
function Skills() { return <section id="skills" className="section"><div className="section-heading"><div><p className="eyebrow">02 — SKILLS</p><h2>Tools I’m building with.</h2></div></div><div className="skills-grid">{skills.map((skill, i) => <div className="skill-card" key={skill}><span>0{i+1}</span><strong>{skill}</strong></div>)}</div></section>; }
export default Skills;
