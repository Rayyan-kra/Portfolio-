import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiOpenai,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express", icon: <SiExpress size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
    { name: "Postman", icon: <SiPostman size={40} /> },
    { name: "AI", icon: <SiOpenai size={40} /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0a0a0a] text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-7xl md:text-9xl font-black text-zinc-800">
            SKILLS
          </h1>

          <p className="text-red-500 uppercase tracking-[0.3em] mt-4">
            Technologies I Use
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                w-32
                h-32
                rounded-3xl
                bg-zinc-900/80
                border
                border-zinc-800
                backdrop-blur-md
                flex
                flex-col
                items-center
                justify-center
                gap-3
                hover:border-red-500
                hover:-translate-y-3
                hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <div className="group-hover:scale-110 transition duration-300 text-red-500">
                {skill.icon}
              </div>

              <span className="text-sm font-medium text-zinc-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <p className="text-zinc-500 leading-8">
            I specialize in MERN stack development, creating modern web
            applications with responsive UI, scalable backend architecture,
            database design, and AI-powered solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
