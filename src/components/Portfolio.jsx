import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Projects list
const projects = [
  {
    title: "Project One",
    description: "A short description of the first project. Built with React and Tailwind.",
    tags: ["React", "Tailwind", "API"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "Second project summary. Focus on UX and performance.",
    tags: ["Design", "Performance"],
    link: "#",
  },
  {
    title: "Open Source Library",
    description: "A reusable npm library used inside many products.",
    tags: ["Node", "Testing"],
    link: "#",
  },
];

const ease = [0.6, -0.05, 0.01, 0.99];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* NAV */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className="max-w-6xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-lg shadow-lg">
            M
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-medium">Manoj Kumar</div>
            <div className="text-xs text-gray-300">Frontend Engineer</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:text-indigo-400 transition">
            Projects
          </a>
          <a href="#about" className="text-sm hover:text-indigo-400 transition">
            About
          </a>
          <a href="#contact" className="text-sm hover:text-indigo-400 transition">
            Contact
          </a>
          <div className="hidden sm:flex items-center gap-3 ml-4">
            <a href="#" aria-label="GitHub" className="p-2 rounded hover:bg-white/5">
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded hover:bg-white/5">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">Manoj</span>
            <br />Designing delightful interfaces & fast frontends.
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl">
            I build interactive and accessible web apps using modern tools — React, TypeScript,
            and Tailwind. I care about performance, delightful micro-interactions, and clean
            code.
          </p>

          <div className="mt-8 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-block rounded-lg bg-indigo-500 px-5 py-3 font-semibold shadow hover:shadow-lg"
            >
              View projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-block rounded-lg border border-white/10 px-5 py-3 font-medium"
            >
              Get in touch
            </motion.a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-gray-300">
            <FaEnvelope />
            <span className="text-sm">manojkumarainala152@gmail.com</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease }}
          className="flex-1"
        >
          <div className="relative mx-auto w-80 h-80">
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-600 to-pink-500 shadow-2xl transform-gpu"
            />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease }}
              className="absolute inset-4 bg-gray-900 rounded-xl p-6 shadow-xl border border-white/6"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="text-sm text-gray-300">Featured</div>
                  <h3 className="mt-3 text-xl font-semibold">Interactive dashboard</h3>
                  <p className="mt-2 text-sm text-gray-400">A data visualization dashboard with real-time updates.</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs text-gray-400">React • D3 • Socket</div>
                  <a href="#projects" className="text-sm font-medium hover:text-indigo-400">See project →</a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-2xl font-bold"
        >
          Selected projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease }}
              className="rounded-xl bg-white/3 p-6 backdrop-blur border border-white/6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                </div>
                <div className="text-xs text-gray-400 flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded bg-white/5">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a href={p.link} className="text-sm font-medium hover:text-indigo-400">Explore →</a>
                <motion.button whileHover={{ scale: 1.03 }} className="text-xs px-3 py-1 rounded bg-white/5">
                  Live
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">About me</h2>
            <p className="mt-4 text-gray-300 max-w-2xl">
              I'm a frontend developer who loves turning ideas into user-friendly products. I enjoy
              micro-interactions, good performance budgets, and readable code. I’m available for
              freelance and full-time roles.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-300">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Tailwind CSS</li>
              <li>Accessibility & UX</li>
            </ul>
          </div>

          <div className="rounded-xl p-6 bg-white/3 border border-white/6">
            <div className="text-sm text-gray-300">Contact</div>
            <div className="mt-4 text-sm">Manoj Kumar</div>
            <div className="text-sm text-gray-300">Location: India</div>
            <div className="mt-4">
              <a href="#contact" className="text-sm font-medium hover:text-indigo-400">Send a message →</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl bg-white/3 p-8 border border-white/6"
        >
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="mt-2 text-gray-300">I’m open to new opportunities — message me and I’ll get back soon.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 rounded bg-white/5 border border-white/6" placeholder="Your name" />
            <input className="p-3 rounded bg-white/5 border border-white/6" placeholder="Email" />
            <textarea className="md:col-span-2 p-3 rounded bg-white/5 border border-white/6" placeholder="Message" rows={5} />
            <div className="md:col-span-2 flex justify-end">
              <button className="px-6 py-3 rounded bg-indigo-500 font-semibold">Send</button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 sm:px-8 py-8 text-gray-400 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Manoj Kumar</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </footer>
    </div>
  );
}
