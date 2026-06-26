import knight from "../assets/knight.png";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0a0a0a] text-white py-24 overflow-hidden"
    >
      {/* Background Knight */}
      <img
        src={knight}
        alt="Knight"
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          h-[750px]
          opacity-20
          pointer-events-none
          select-none
          z-0
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20">
          <h1 className="text-7xl md:text-9xl font-black text-zinc-800 leading-none">
            ABOUT
          </h1>

          <p className="text-red-500 uppercase tracking-[0.3em] mt-4">
            Who I Am
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Card */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6">Creative Developer</h2>

            <p className="text-zinc-400 leading-8">
              I'm a Software Developer passionate about building modern web
              applications, AI-powered solutions, and scalable backend systems.
              I enjoy transforming ideas into real products using React,
              Node.js, Express, MongoDB, and AI APIs.
            </p>

            <p className="text-zinc-400 leading-8 mt-6">
              My focus is creating clean user experiences, solving challenging
              problems, and continuously improving my development skills through
              projects and data structures & algorithms.
            </p>
          </div>

          {/* Right Side Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-red-500 text-4xl font-bold">10+</h3>
                <p className="text-zinc-400 mt-2">Projects Built</p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-red-500 text-4xl font-bold">React</h3>
                <p className="text-zinc-400 mt-2">Frontend Development</p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-red-500 text-4xl font-bold">Node</h3>
                <p className="text-zinc-400 mt-2">Backend Development</p>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-red-500 text-4xl font-bold">AI</h3>
                <p className="text-zinc-400 mt-2">AI Applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
