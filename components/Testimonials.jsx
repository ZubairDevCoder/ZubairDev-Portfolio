"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Motion aliases
const MH2 = motion.h2;
const MDiv = motion.div;

// Testimonials data
const testimonials = [
  {
    name: "Ali Khan",
    role: "Software Engineer at HCL Technologies",
    review:
      "Gaurav is a visionary developer. His attention to detail and creativity blew us away. Our project was a massive success because of him.",
    image: "/men1.png", // public folder
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Designer at PixelWorks",
    review:
      "Working with Gaurav was an absolute pleasure. He brings design and code together like magic. Highly recommend him!",
    image: "/women1.png",
  },
  {
    name: "Omar Rizvi",
    role: "Tech Manager at CodeEmpire",
    review:
      "From concept to execution, Gaurav handled everything flawlessly. His work ethic and innovation are unmatched.",
    image: "/men2.png",
  },
  {
    name: "Ayesha Malik",
    role: "CTO at Innovate Labs",
    review:
      "Gaurav transformed our outdated platform into something modern and powerful. His skills are world-class.",
    image: "/women2.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-20 mt-50">
      <MH2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16"
      >
        What People Say
      </MH2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((testi, idx) => (
          <MDiv
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1"
          >
            <div className="w-20 h-20 relative mb-4">
              <Image
                src={testi.image}
                alt={testi.name}
                fill
                className="rounded-full border-2 border-white/40 object-cover"
                priority={idx === 0}
              />
            </div>

            <p className="text-gray-200 italic mb-4">"{testi.review}"</p>
            <h3 className="text-lg font-semibold">{testi.name}</h3>
            <p className="text-sm text-gray-400">{testi.role}</p>
          </MDiv>
        ))}
      </div>
    </section>
  );
}
