"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const title = useRef();
  const subtitle = useRef();
  const buttons = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(title.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(subtitle.current, { y: 50, opacity: 0, duration: 1 }, "-=0.5")
      .from(
        buttons.current,
        { scale: 0.8, opacity: 0, duration: 0.8 },
        "-=0.5",
      );
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      <div>
        <h1
          ref={title}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Building Scalable SaaS & High-Performance Web Applications
        </h1>

        <p ref={subtitle} className="mt-6 text-lg text-gray-300">
          SaaS-Focused Full Stack Developer & Automation Engineer
        </p>

        <div ref={buttons} className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-indigo-600 rounded-full hover:scale-105 transition">
            View Projects
          </button>
          <button className="px-6 py-3 border border-indigo-600 rounded-full hover:bg-indigo-600 transition">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
