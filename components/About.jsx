"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Motion aliases
const MH2 = motion.h2;
const MDiv = motion.div;

export default function About() {
  // Quick stats to map
  const stats = [
    { label: "Experience", value: "2+ Years" },
    { label: "Specialty", value: "Full Stack" },
    { label: "Focus", value: "Scalable & Optimized Apps" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
      aria-label="About Muhammad Zubair"
    >
      {/* Neon background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px] animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 w-[220px] h-[220px] rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1CD8D2] opacity-10 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white select-none relative text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          About ZubairDevCoder
          {/* Animated underline */}
          <motion.span
            className="absolute left-1/2 -bottom-2 h-2 rounded-full bg-gradient-to-r from-[#0D58CC] via-cyan-300 to-emerald-400"
            initial={{ width: 0, x: "-50%" }}
            whileHover={{ width: "8rem" }} // 32 tailwind units
            transition={{ duration: 0.4, ease: "easeOut" }}
          ></motion.span>
        </motion.h1>
        {/* Profile header */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-[260px] h-100   rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1CD8D2]/20 to-[#302b63]/20 border border-[#1CD8D2]/25"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            aria-hidden="true"
          >
            <Image
              src="/fullstackdeveloper.png"
              alt="Muhammad Zubair"
              fill
              className="object-contain hover:scale-105 rounded-2xl"
              priority
            />
          </motion.div>

          {/* Name + Role + Bio + CTAs */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <MH2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
              Muhammad Zubair
            </MH2>
            <p className="mt-4 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer | SaaS & Web Applications
            </p>

            {/* Professional Summary */}
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I am a results-driven Full Stack Developer with expertise in
              building production-ready, scalable web applications. Proficient
              in Next.js, React, Firebase, and Tailwind CSS, I specialize in
              architecting robust admin dashboards, secure authentication
              systems, and high-performance SaaS platforms. Passionate about
              delivering clean, maintainable code and exceptional user
              experiences.
            </p>

            {/* Quick stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto md:mx-0">
              {stats.map((item, i) => (
                <MDiv
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold text-white">
                    {item.value}
                  </div>
                </MDiv>
              ))}
            </div>

            {/* Call-to-actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* About Body */}
        <motion.div
          className="grid md:grid-cols-1 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Full Stack Developer specializing in Next.js, React, and SaaS
            architecture. Experienced in building secure, high-performance admin
            dashboards and web platforms.
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Passionate about delivering real-world, deployable solutions with
            clean, maintainable code, optimized performance, and exceptional
            user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
