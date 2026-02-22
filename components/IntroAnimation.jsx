import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ResumeIntro({ onFinish }) {
  const overlayRef = useRef(null);
  const wordRef = useRef(null);
  const ballsRef = useRef([]);
  const [index, setIndex] = useState(0);
  const [positions, setPositions] = useState([]);

  const words = [
    "Zubair Dev Coder",
    "Frontend Developer",
    "Full-stack Developer",
    "Chatbot Developer",
  ];

  const colors = ["#ff4c4c", "#4cffc0", "#4c6cff", "#ffb84c", "#c24cff"];

  // Generate random positions only on client
  useEffect(() => {
    const pos = Array.from({ length: 12 }).map(() => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    }));
    setPositions(pos);
  }, []);

  useEffect(() => {
    if (positions.length === 0) return; // wait for client positions

    let timer;
    if (index < words.length) {
      gsap.fromTo(
        wordRef.current,
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      );

      ballsRef.current.forEach((ball, i) => {
        gsap.fromTo(
          ball,
          { scale: 0.5 },
          {
            scale: 1.2,
            duration: 0.4,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
        );
      });

      timer = setTimeout(() => setIndex((i) => i + 1), 2000);
    } else {
      gsap.to(overlayRef.current, {
        y: "-100vh",
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => onFinish && onFinish(),
      });
    }

    return () => clearTimeout(timer);
  }, [index, positions, onFinish]);

  if (positions.length === 0) return null; // prevent SSR mismatch

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <h1
        ref={wordRef}
        className="absolute text-4xl md:text-6xl lg:text-7xl font-bold text-white z-20 text-center"
      >
        {words[index]}
      </h1>

      {/* Balls */}
      {positions.map((pos, i) => (
        <div
          key={i}
          ref={(el) => (ballsRef.current[i] = el)}
          className="absolute w-6 h-6 rounded-full"
          style={{
            backgroundColor: colors[i % colors.length],
            top: pos.top,
            left: pos.left,
          }}
        />
      ))}
    </div>
  );
}
