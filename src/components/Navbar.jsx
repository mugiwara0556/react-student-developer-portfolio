function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home">DS<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
export default Navbar;
