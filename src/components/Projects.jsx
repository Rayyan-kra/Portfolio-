import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import aiInterview from "../assets/projects/ai-interview.png";
import aiVideo from "../assets/projects/ai-video.png";
import ecommerce from "../assets/projects/ecommerce.png";
const projects = [
  {
    title: "AI Interview Platform",
    description:
      "AI-powered interview preparation platform with authentication, mock interviews, and instant feedback.",
    tech: "React • Node.js • Express • MongoDB • AI",
    live: "https://interview-ai-five-nu.vercel.app/",
    image: aiInterview,
  },
  {
    title: "AI-short video generator",
    description:
      "Modern AI-powered video generator with smooth animations, responsive design, and premium UI.",
    tech: "React • Tailwind CSS • Framer Motion",
    live: "#",
    image: aiVideo,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping platform with cart, authentication, admin dashboard, and payments.",
    tech: "MERN Stack",
    live: "#",
    image: ecommerce,
  },
];

function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("projects");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const total = projects.length;

      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (section.offsetHeight - window.innerHeight)),
      );

      const index = Math.min(total - 1, Math.floor(progress * total));

      setActive(index);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const project = projects[active];

  return (
    <section id="projects" className="relative h-[300vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Progress Bar */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 h-40 w-[3px] bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="bg-red-500 w-full transition-all duration-500"
                style={{
                  height: `${((active + 1) / projects.length) * 100}%`,
                }}
              />
            </div>
            {/* Left Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-red-500 uppercase tracking-[0.3em] mb-4">
                  Project {active + 1}
                </p>

                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                  {project.title}
                </h2>

                <p className="text-zinc-300 text-xl leading-9 mb-8">
                  {project.description}
                </p>

                <p className="text-red-500 font-medium text-lg mb-10">
                  {project.tech}
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl font-semibold transition"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Preview */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`preview-${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="h-[450px] rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fit"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
