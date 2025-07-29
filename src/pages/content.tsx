import { useRef, useEffect, useState } from "react";
import Greeting from "./greeting";
import Projects from "./projects";
import About from "./about";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Content() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMdScreen || !containerRef.current) return;

    const totalSections = 3;
    const maxScroll = window.innerWidth * (totalSections - 1);

    gsap.to(containerRef.current, {
      x: () => -maxScroll,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${maxScroll}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMdScreen]);

  if (!isMdScreen) {
    // Mobile
    return (
      <div className="flex flex-col">
        <section >
          <Greeting />
        </section>
        <section >
          <Projects />
        </section>
        <section>
          <About />
        </section>
      </div>
    );
  }

  // Desktop
  return (
    <div className="hide-scrollbar" style={{ height: "310vh", overflowX: "hidden", position: "relative" }}>
      <div
        ref={containerRef}
        style={{
          display: "flex",
          width: "250vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <section className="w-[75vw] h-screen flex justify-center items-center">
          <Greeting />
        </section>
        <section className="w-[95vw] h-screen flex justify-center items-center">
          <Projects />
        </section>
        <section className="w-[80vw] h-screen flex justify-center items-center">
          <About />
        </section>
      </div>
    </div>
  );
}

export default Content;
