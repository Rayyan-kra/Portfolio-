import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import interviewImg from "../assets/projects/interview-ai.png";
import shortImg from "../assets/projects/ai-short.png";
import comingImg from "../assets/projects/coming-soon.png";

function Projects() {
  const projects = [
    {
      title: "Interview AI",
      image: interviewImg,
      description:
        "AI-powered interview preparation platform with resume analysis, authentication, interview generation, and performance reports.",
      tech: "React • Node.js • MongoDB • AI",

      live: "https://interview-ai-five-nu.vercel.app/",
      github: "https://github.com/Rayyan-Kra",
    },

    {
      title: "AI Short Video Generator",
      image: shortImg,
      description:
        "Generate short-form videos automatically using AI-powered content generation.",

      tech: "React • Node.js • AI APIs",

      live: "",
      github: "https://github.com/Rayyan-Kra",
    },

    {
      title: "Next Project",
      image: comingImg,

      description:
        "Currently building my next full-stack application. Stay tuned for updates.",

      tech: "Coming Soon",

      live: "",
      github: "",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((current + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0a0a0a] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-7xl md:text-9xl font-black text-zinc-800">
          PROJECTS
        </h1>

        <p className="text-red-500 uppercase tracking-[0.3em] mt-4 mb-12">
          Featured Work
        </p>

        {/* Slider Card */}
        <div className="relative">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-red-500 transition duration-300">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="h-[300px] md:h-[500px] overflow-hidden">
                <img
                  src={projects[current].image}
                  alt={projects[current].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col justify-center">
                <span className="text-red-500 uppercase tracking-widest mb-4">
                  Project {current + 1}
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {projects[current].title}
                </h2>

                <p className="text-zinc-400 leading-8 mb-6">
                  {projects[current].description}
                </p>

                <p className="text-red-500 font-medium mb-8">
                  {projects[current].tech}
                </p>

                <div className="flex gap-4 flex-wrap">
                  {projects[current].live ? (
                    <a
                      href={projects[current].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        bg-red-500
                        px-6
                        py-3
                        rounded-lg
                        hover:bg-red-600
                        transition
                      "
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="
                        bg-zinc-700
                        px-6
                        py-3
                        rounded-lg
                        cursor-not-allowed
                      "
                    >
                      Coming Soon
                    </button>
                  )}

                  {projects[current].github && (
                    <a
                      href={projects[current].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        border
                        border-zinc-700
                        px-6
                        py-3
                        rounded-lg
                        hover:border-red-500
                        transition
                      "
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevProject}
              className="
                w-14
                h-14
                rounded-full
                border
                border-zinc-700
                flex
                items-center
                justify-center
                hover:border-red-500
                transition
              "
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextProject}
              className="
                w-14
                h-14
                rounded-full
                border
                border-zinc-700
                flex
                items-center
                justify-center
                hover:border-red-500
                transition
              "
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
