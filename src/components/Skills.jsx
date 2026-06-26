function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20">
          <h1 className="text-7xl md:text-9xl font-black text-zinc-800 leading-none">
            SKILLS
          </h1>

          <p className="text-red-500 uppercase tracking-[0.3em] mt-4">
            Technologies I Use
          </p>
        </div>

        {/* Tree */}
        <div className="flex flex-col items-center">
          {/* Main Box */}
          <div className="border border-red-500 rounded-xl px-10 py-4 bg-zinc-900">
            <h2 className="font-bold text-xl tracking-wider">MY SKILLS</h2>
          </div>

          {/* Vertical Line */}
          <div className="w-[2px] h-16 bg-zinc-700"></div>

          {/* Horizontal Line */}
          <div className="w-full max-w-5xl h-[2px] bg-zinc-700"></div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-6xl mt-4">
            {/* Frontend */}
            <div className="flex flex-col items-center">
              <div className="w-[2px] h-12 bg-zinc-700"></div>

              <div className="border border-red-500 rounded-lg px-6 py-3 mb-6 bg-zinc-900">
                Frontend
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {["React", "JavaScript", "HTML", "CSS", "Tailwind"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="border border-zinc-700 rounded-md px-3 py-2 text-sm hover:border-red-500 transition"
                    >
                      {skill}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Backend */}
            <div className="flex flex-col items-center">
              <div className="w-[2px] h-12 bg-zinc-700"></div>

              <div className="border border-red-500 rounded-lg px-6 py-3 mb-6 bg-zinc-900">
                Backend
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {["Node.js", "Express", "REST API", "Authentication"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="border border-zinc-700 rounded-md px-3 py-2 text-sm hover:border-red-500 transition"
                    >
                      {skill}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Database */}
            <div className="flex flex-col items-center">
              <div className="w-[2px] h-12 bg-zinc-700"></div>

              <div className="border border-red-500 rounded-lg px-6 py-3 mb-6 bg-zinc-900">
                Database
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {["MongoDB", "Mongoose", "CRUD", "Data Modeling"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="border border-zinc-700 rounded-md px-3 py-2 text-sm hover:border-red-500 transition"
                    >
                      {skill}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Tools & AI */}
            <div className="flex flex-col items-center">
              <div className="w-[2px] h-12 bg-zinc-700"></div>

              <div className="border border-red-500 rounded-lg px-6 py-3 mb-6 bg-zinc-900">
                Tools & AI
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {["Git", "GitHub", "Postman", "AI Integration"].map((skill) => (
                  <div
                    key={skill}
                    className="border border-zinc-700 rounded-md px-3 py-2 text-sm hover:border-red-500 transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-20 max-w-3xl text-center">
            <p className="text-zinc-500 leading-8">
              I specialize in full-stack web development, backend architecture,
              database design, and AI-powered applications. I continuously learn
              modern technologies and apply them to real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
