import React, { useState, useEffect, useRef } from "react";
import HeroStopmotion from "@/components/hero-stopmotion";
import HeroContent from "@/pages/hero-content";

function Hero() {
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [hasSkipped, setHasSkipped] = useState(false);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreen = () => setIsLgScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSkip = () => {
    setHasSkipped(true);
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-screen">
        {isLgScreen && !hasSkipped ? (
          <HeroStopmotion onSkip={handleSkip} />
        ) : (
          <div className="flex items-center justify-center h-full text-center p-8">
            <h1 className="text-xl font-semibold">sm-md</h1>
          </div>
        )}
      </div>

      {/* ✨ Section ถัดไป */}
      <div
        ref={nextSectionRef}
        className="h-screen w-screen bg-white flex items-center justify-center transition-transform duration-1000 translate-x-0"
        id="hero-section"
      >
        <HeroContent />
      </div>
    </>
  );
}

export default Hero;
