import { useState } from "react";

function Contact() {
  const [service, setService] = useState("");

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0a0a0a] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20">
          <h1 className="text-7xl md:text-9xl font-black text-zinc-800 leading-none">
            CONTACT
          </h1>

          <p className="text-red-500 uppercase tracking-[0.3em] mt-4">
            Let's Work Together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
         {/* Left Side */}
<div>
  <h2 className="text-4xl font-bold mb-6">
    Let's Build Something Amazing
  </h2>

  <p className="text-zinc-400 leading-8 mb-10">
    Looking for a website, web application, or mobile app? Fill out
    the form and tell me about your project. I'll get back to you as
    soon as possible.
  </p>

  {/* Services */}
  <div className="space-y-4 mb-10">
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-red-500 transition">
      <h3 className="text-red-500 font-semibold text-lg mb-2">
        Web Development
      </h3>
      <p className="text-zinc-400 text-sm">
        Modern responsive websites, dashboards, portfolios and MERN stack applications.
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-red-500 transition">
      <h3 className="text-red-500 font-semibold text-lg mb-2">
        App Development
      </h3>
      <p className="text-zinc-400 text-sm">
        Fast, scalable and user-friendly mobile applications for Android and cross-platform.
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-red-500 transition">
      <h3 className="text-red-500 font-semibold text-lg mb-2">
        AI Integration
      </h3>
      <p className="text-zinc-400 text-sm">
        AI chatbots, automation tools and intelligent features integrated into your products.
      </p>
    </div>
  </div>

  {/* Contact Links */}
  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

    <div className="space-y-5">
      <div>
        <p className="text-red-500 text-sm mb-1">Email</p>
        <a
          href="mailto:rayyanchaman777@gmail.com"
          className="text-zinc-300 hover:text-red-500 transition"
        >
          rayyanchaman777@gmail.com
        </a>
      </div>

      <div>
        <p className="text-red-500 text-sm mb-1">GitHub</p>
        <a
          href="https://github.com/Rayyan-Kra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-red-500 transition"
        >
          github.com/Rayyan-Kra
        </a>
      </div>

      <div>
        <p className="text-red-500 text-sm mb-1">LinkedIn</p>
        <a
          href="https://www.linkedin.com/in/rayyan77/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-red-500 transition"
        >
          linkedin.com/in/rayyan77
        </a>
      </div>
    </div>
  </div>
</div>

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <form
              action="https://formspree.io/f/xojodpke"
              method="POST"
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block mb-2 text-zinc-400">Full Name</label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="
                    w-full
                    bg-zinc-950
                    border
                    border-zinc-700
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-red-500
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-zinc-400">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="
                    w-full
                    bg-zinc-950
                    border
                    border-zinc-700
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-red-500
                  "
                />
              </div>

              {/* Service */}
              <div>
                <label className="block mb-2 text-zinc-400">
                  Service Needed
                </label>

                <select
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="
                    w-full
                    bg-zinc-950
                    border
                    border-zinc-700
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-red-500
                  "
                >
                  <option value="">Select Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                </select>
              </div>

              {/* Budget */}
              {service && (
                <div>
                  <label className="block mb-2 text-zinc-400">Budget</label>

                  <input
                    type="text"
                    name="budget"
                    required
                    placeholder=""
                    className="
        w-full
        bg-zinc-950
        border
        border-zinc-700
        rounded-lg
        px-4
        py-3
        outline-none
        focus:border-red-500
      "
                  />
                </div>
              )}

              {/* Project Idea */}
              <div>
                <label className="block mb-2 text-zinc-400">
                  Explain Your Idea
                </label>

                <textarea
                  rows="6"
                  name="idea"
                  required
                  placeholder="Describe your project, required features, goals, timeline, design preferences, etc."
                  className="
                    w-full
                    bg-zinc-950
                    border
                    border-zinc-700
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-red-500
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  bg-red-500
                  hover:bg-red-600
                  py-4
                  rounded-lg
                  font-semibold
                  transition
                "
              >
                Send Project Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
