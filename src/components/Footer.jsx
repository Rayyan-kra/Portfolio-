function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              <span className="text-red-500">R</span>ayyan
            </h2>

            <p className="text-zinc-500 mt-2">
              Software Developer & AI Enthusiast
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-zinc-400">
            <a href="#" className="hover:text-red-500 transition">
              Home
            </a>

            <a href="#about" className="hover:text-red-500 transition">
              About
            </a>

            <a href="#skills" className="hover:text-red-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-red-500 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-zinc-800 mt-8 pt-6 text-center">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} Rayyan Chaman. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
