import { motion, useScroll, useSpring } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Independent Projects",
      duration: "2024 - Present",
      points: [
        "Built multiple full-stack applications using React, Node.js, Express, MongoDB and PostgreSQL.",
        "Developed scalable backend APIs and integrated authentication systems.",
        "Created responsive user interfaces using Tailwind CSS and React.",
        "Applied software engineering principles to real-world SaaS products.",
      ],
    },

    {
      title: "AI Interview Preparation Platform",
      company: "Personal Project",
      duration: "2026",
      points: [
        "Developed an AI-powered interview preparation platform using React, Node.js and MongoDB.",
        "Integrated Gemini AI for question generation and instant feedback.",
        "Implemented authentication, interview history and analytics dashboards.",
        "Built performance evaluation and improvement suggestion features.",
      ],
    },

    {
      title: "AI SaaS UGC Ads Generator",
      company: "Personal Project",
      duration: "2025 - Present",
      points: [
        "Built a full-stack AI SaaS platform for generating UGC-style ad content.",
        "Integrated Gemini API, Clerk authentication and Sentry monitoring.",
        "Designed scalable REST APIs using Express.js and PostgreSQL.",
        "Implemented complete content generation workflows and dashboard features.",
      ],
    },
  ];

  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="bg-black text-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-500 uppercase tracking-[0.3em] text-center">
          My Journey
        </p>

        <h2 className="text-5xl md:text-7xl font-bold text-center mt-4 mb-20">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2">
            <motion.div
              style={{ scaleY }}
              className="
                origin-top
                absolute
                top-0
                left-0
                w-full
                h-full
                bg-red-500
              "
            />
          </div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`
                relative flex items-center mb-28
                ${index % 2 === 0 ? "justify-start" : "justify-end"}
              `}
            >
              {/* Dot */}
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-6
                  h-6
                  rounded-full
                  bg-red-500
                  border-4
                  border-black
                  z-20
                "
              />

              {/* Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="
                  w-full
                  md:w-[45%]
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  p-6
                  hover:border-red-500
                  transition
                "
              >
                <span className="text-red-500 text-sm">{exp.duration}</span>

                <h3 className="text-2xl font-bold mt-2">{exp.title}</h3>

                <p className="text-zinc-400 mb-4">{exp.company}</p>

                <ul className="space-y-2 text-zinc-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
