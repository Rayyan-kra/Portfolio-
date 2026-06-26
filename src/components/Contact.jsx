function Contact() {
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
          <div>
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

            <p className="text-zinc-400 leading-8 mb-10">
              I'm always interested in new opportunities, collaborations,
              internships, freelance work, and exciting projects.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-red-500 font-semibold mb-2">Email</h3>

                <a
                  href="mailto:rayyanchaman777@gmail.com"
                  className="text-zinc-300 hover:text-red-500 transition"
                >
                  rayyanchaman777@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div>
                <h3 className="text-red-500 font-semibold mb-2">GitHub</h3>

                <a
                  href="https://github.com/Rayyan-Kra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-red-500 transition"
                >
                  github.com/Rayyan-Kra
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <h3 className="text-red-500 font-semibold mb-2">LinkedIn</h3>

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

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <form
              action="https://formspree.io/f/xojodpke"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block mb-2 text-zinc-400">Name</label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
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

              <div>
                <label className="block mb-2 text-zinc-400">Email</label>

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

              <div>
                <label className="block mb-2 text-zinc-400">Message</label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  placeholder="Your Message..."
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
                  bg-red-500
                  hover:bg-red-600
                  px-8
                  py-3
                  rounded-lg
                  transition
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
