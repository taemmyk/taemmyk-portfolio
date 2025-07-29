import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function HeroContent() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { x: "-100vw", opacity: 0 },
      {
        x: "0vw",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-full flex items-center justify-center"
    >
      <h2 className="text-4xl font-bold">🚀 Welcome to the Main Section</h2>
    </div>
  );
}

export default HeroContent;
