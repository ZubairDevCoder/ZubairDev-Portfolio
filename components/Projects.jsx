"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MH3 = motion.h3;

export default function Projects() {
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Ramazon SaaS",
        link: "https://ramazon-saas-product.vercel.app/",
        bgColor: "#0d4d3d",
        image: "/img1.JPG", // public/img1.JPG
      },
      {
        title: "Full Stack Blog Platform",
        link: "https://full-stack-blogs-projects.vercel.app/",
        bgColor: "#3884d3",
        image: "/img2.JPG", // public/img2.JPG
      },
    ],
    [],
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = thresholds.findIndex((t) => v <= t);
      setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
    });

    return () => unsubscribe();
  }, [scrollYProgress, thresholds]);

  const activeProject = projects[activeIndex];

  return (
    <section
      ref={sceneRef}
      className="relative text-white md:py-10 py-5 "
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 h-100  md:h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold md:mb-10 mb-5 ">My Projects</h2>

        <div className="relative w-full flex-1 flex items-center justify-center mb-10 ">
          {projects.map((project, idx) => (
            <Link
              key={project.title}
              href={project.link}
              target="_blank"
              className={`absolute transition-all duration-500 cursor-pointer ${
                activeIndex === idx ? "opacity-100 z-20" : "opacity-0"
              }`}
              style={{ width: "85%", maxWidth: "1100px" }}
            >
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <MH3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-4xl font-bold mb-6 pointer-events-none"
                  >
                    {project.title}
                  </MH3>
                )}
              </AnimatePresence>

              {/* Project Image */}
              <div className="relative w-full md:h-[60vh]  h-40 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="md:object-cover object-contain  "
                  priority={idx === 0}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Optional bottom button (duplicate but okay for CTA) */}
        <div className="absolute bottom-0 ">
          <Link
            href={activeProject.link}
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            View Project
          </Link>
        </div>
      </div>
    </section>
  );
}
