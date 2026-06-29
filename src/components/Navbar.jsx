import { FaDownload } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          <span className="text-red-500">R</span>ayyan
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 text-white">
          <li>
            <a href="#" className="hover:text-red-500 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-red-500 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-red-500 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-red-500 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-red-500 transition duration-300"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-red-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Let's Talk */}
          <a
            href="#contact"
            className="
              border
              border-zinc-700
              px-6
              py-2
              rounded-md
              text-white
              hover:border-red-500
              hover:text-red-500
              transition
              duration-300
            "
          >
            Let's Talk
          </a>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="
              bg-red-500
              px-6
              py-2
              rounded-md
              text-white
              hover:bg-red-600
              transition
              duration-300
            "
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
