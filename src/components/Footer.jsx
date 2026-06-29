import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Red Glow */}
      <div className="absolute bottom-0 left-20 w-96 h-96bg-[#0a0a0a] blur-[140px] rounded-full"></div>
      <div className="absolute top-0 right-20 w-96 h-96bg-[#0a0a0a] blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Name */}
        <div className="flex flex-row justify-center items-center gap-4">
          <h1 className="text-center text-5xl md:text-7xl font-bold text-white">
            <span className="text-red-500">R</span>ayyan
          </h1>
          <h1 className="text-center text-5xl md:text-7xl font-bold text-white">
            <span className="text-red-500">A</span>nsari
          </h1>
        </div>

        {/* Underline */}
        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-4 rounded-full"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-red-500 transition"
          >
            <FaXTwitter size={30} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-red-500 transition"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-red-500 transition"
          >
            <FaGithub size={30} />
          </a>
        </div>

        {/* Quote */}
        <p className="text-center text-zinc-400 italic mt-8">
          "Turning ideas into reality through code."
        </p>

        {/* Copyright */}
        <p className="text-center text-zinc-500 mt-6 text-sm">
          © {new Date().getFullYear()} Rayyan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
