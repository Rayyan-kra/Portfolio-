import knight from "../assets/knight.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Side */}
          <div>
            <p className="text-gray-400 tracking-widest mb-4">
              WELCOME TO MY WORLD
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Hi, I'm <span>Rayyan</span>
            </h1>

            <h2 className="text-4xl font-bold mt-3  text-red-500">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Software Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="text-gray-400 mt-6 max-w-lg leading-8">
              Passionate Software Developer focused on building scalable web
              applications, AI-powered solutions, and modern user experiences
              using React, Node.js, Express, and MongoDB.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="bg-red-500 px-6 py-3 rounded-md hover:bg-red-600 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-gray-600 px-6 py-3 rounded-md hover:border-red-500 hover:text-red-500 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img src={knight} alt="Knight" className="w-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
