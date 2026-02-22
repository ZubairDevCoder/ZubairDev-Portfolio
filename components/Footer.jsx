"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook } from "react-icons/fa6";

// Navigation links
const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

// Social links
const socials = [
  {
    Icon: FaGithub,
    href: "https://github.com/ZubairDevCoder",
    label: "GitHub",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/zubair-dev-coder-11a02a3aa",
    label: "LinkedIn",
  },
  {
    Icon: FaYoutube,
    href: "https://youtube.com/@zubairdevcoder?si=ky9hmVYBqVyadDkj",
    label: "YouTube",
  },
  {
    Icon: FaFacebook,
    href: "https://web.facebook.com/profile.php?id=61568318417512",
    label: "Facebook",
  },
];

// Glow animation
const glowVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

// Mini Project Card
function ProjectCard({ title, tech, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-900 p-3 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm mt-1">{tech}</p>
    </motion.a>
  );
}

export default function Footer() {
  const [active, setActive] = useState("");

  // Scroll spy
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { threshold: 0.6 },
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 lg:gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Column 1: Profile */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Muhammad Zubair</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            📞 +92 318 7909476 <br />
            ✉️ zubairfreelancer9@gmail.com <br />
            📍 Punjab, Pakistan
          </p>
          <div className="flex gap-4 text-xl md:text-2xl mt-2">
            {socials.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-400 hover:text-white transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          <p className="text-gray-300 text-sm md:text-base mt-4 leading-relaxed">
            I am a Full Stack Developer specializing in Next.js, React, and SaaS
            architecture. I build scalable web apps, admin dashboards, and
            automation systems with clean UI and maintainable code.
          </p>
          <p className="mt-4">
            <a
              href="#contact"
              className="inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm md:text-base transition"
            >
              Hire Me
            </a>
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-2 list-none">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-1 py-1 font-medium transition-transform duration-300 perspective-1000 cursor-pointer ${
                    active === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 group-hover:scale-110">
                    {item.label}
                  </span>
                  <span className="absolute inset-0 rounded-xl bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-2 bg-indigo-500 rounded-full transition-all duration-300 ${
                      active === item.id ? "w-3/4" : "group-hover:w-3/4"
                    }`}
                  ></span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: More About Me */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">More About Me</h3>
          <p className="text-gray-300 text-sm">
            I am a Full Stack Developer specializing in Next.js, React, and SaaS
            architecture. Passionate about building scalable applications, clean
            UI, and delivering real-world deployable solutions.
          </p>
        </div>

        {/* Column 4: Skills & Projects */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Skills & Projects</h3>
          <p className="text-gray-300 text-sm">
            Frontend: HTML, CSS, Tailwind, JS, React.js, Next.js <br />
            Backend: Firebase, REST APIs, Auth Systems <br />
            Tools: Git, GitHub, Vercel, VS Code
          </p>

          {/* Mini SaaS Project Card */}
          <ProjectCard
            title="Ramazon SaaS Product"
            tech="React, Next.js, Tailwind, Firebase"
            link="https://your-saas-demo-link.com"
          />

          <ProjectCard
            title="Full Stack Blog Platform"
            tech="Next.js, Tailwind, Firebase"
            link="https://your-blog-demo-link.com"
          />
        </div>
      </motion.div>

      <p className="text-gray-400 text-center text-xs mt-10">
        © {new Date().getFullYear()} Muhammad Zubair. All rights reserved.
      </p>
    </footer>
  );
}
