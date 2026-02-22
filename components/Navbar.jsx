"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import ZubairDevLogo from "./logo";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const navRef = useRef();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // GSAP entrance animation
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Detect active section on scroll
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50  text-white ">
      <div className="max-w-7xl mx-auto pr-6 md:px-6 py-1.5  flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-wide">
          <ZubairDevLogo className="md:w-[180px] w-[150px] h-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center relative">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300
    transform perspective-1000 cursor-pointer
    ${
      active === item.id
        ? "text-white bg-indigo-600/20"
        : "text-gray-300 hover:text-white hover:bg-white/10"
    }`}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {item.label}
                </span>

                {/* 3D Lift Effect */}
                <span className="absolute inset-0 rounded-xl bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

                {/* Thick Animated Underline */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-[4px] w-0 bg-indigo-500 rounded-full transition-all duration-300
      ${active === item.id ? "w-3/4" : "group-hover:w-3/4"}`}
                ></span>
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 bg-indigo-600 rounded-full hover:scale-105 hover:bg-indigo-500 transition text-white font-semibold cursor-pointer"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="p-2">
                <Menu className="w-6 h-6 text-black dark:text-white" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-64 bg-gray-800 text-white p-6"
            >
              <ul className="flex flex-col gap-6 mt-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300
    transform perspective-1000 cursor-pointer
    ${
      active === item.id
        ? "text-white bg-indigo-600/20"
        : "text-gray-300 hover:text-white hover:bg-white/10"
    }`}
                    >
                      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                        {item.label}
                      </span>

                      {/* 3D Lift Effect */}
                      <span className="absolute inset-0 rounded-xl bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

                      {/* Thick Animated Underline */}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-[4px] w-0 bg-indigo-500 rounded-full transition-all duration-300
      ${active === item.id ? "w-3/4" : "group-hover:w-3/4"}`}
                      ></span>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-5 py-2 bg-indigo-600 rounded-full hover:scale-105 hover:bg-indigo-500 transition text-white font-semibold cursor-pointer"
                  >
                    Hire Me
                  </button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
