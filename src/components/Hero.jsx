import profile from "../assets/knight.png";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="text-red-500 uppercase tracking-[4px] mb-4 font-medium">
              Welcome To My World
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-red-500">Rayyan</span>
            </h1>

            <div className="text-3xl md:text-5xl font-bold mt-4 h-[70px]">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Software Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-red-500"
              />
            </div>

            <p className="text-gray-400 mt-6 text-lg leading-8 max-w-xl">
              Passionate MERN Stack Developer focused on building scalable web
              applications, AI-powered solutions, and modern digital
              experiences. Skilled in React.js, Node.js, Express.js, MongoDB,
              JavaScript, and REST APIs.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="px-8 py-4 bg-red-500 rounded-xl font-semibold hover:bg-red-600 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:border-red-500 hover:text-red-500 transition duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-red-500">10+</h3>
                <p className="text-gray-400">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-500">MERN</h3>
                <p className="text-gray-400">Stack</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-500">AI</h3>
                <p className="text-gray-400">Projects</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            {/* Red Glow */}
            <div className="absolute w-[600px] h-[600px] bg-red-500/20 blur-[150px] rounded-full" />

            {/* Floating Image */}
            <img
              src={heroImage}
              alt="Developer"
              className="
      relative
      z-10
      w-[700px]
      max-w-full
      animate-float
      select-none
      pointer-events-none
    "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
