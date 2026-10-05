function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0e0e0e]/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <a
          className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
          href="#home"
        >
          DS<span className="text-gray-500">.</span>
        </a>

        <div className="flex items-center gap-6">
          <a
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            href="#about"
          >
            About
          </a>

          <a
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            href="#skills"
          >
            Skills
          </a>

          <a
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            href="#projects"
          >
            Projects
          </a>

          <a
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar