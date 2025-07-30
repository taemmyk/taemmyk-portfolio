import { useRef, useLayoutEffect, useEffect, useState } from "react";
import StopMotion from "@/components/bsod";
import Greeting from "@/pages/greeting";
import Projects from "@/pages/projects";
import About from "@/pages/about";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [isMdScreen, setIsMdScreen] = useState(false);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Horizontal Scroll Setup
  useLayoutEffect(() => {
    if (!isMdScreen || !containerRef.current || !outerRef.current) return;

    const container = containerRef.current;
    const outer = outerRef.current;

    const totalScroll = container.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, outer);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [isMdScreen]);

  // Vertical scroll for small screens
  if (!isMdScreen) {
    return (
      <div className="flex flex-col overflow-x-hidden">
        <section>
          <Greeting />
        </section>
        <section className="min-h-screen">
          <Projects />
        </section>
        <section className="pb-16">
          <About />
        </section>
      </div>
    );
  }

  // Horizontal scroll for desktop
  return (
    <div
      ref={outerRef}
      className="hide-scrollbar"
      style={{
        height: "100vh",
        overflowX: "hidden",
        overflowY: "hidden",
        position: "relative",
        maxWidth: "1920px",
      }}
    >
      <div
        ref={containerRef}
        className="flex h-screen"
        style={{
          width: "max-content",
          position: "absolute",
          maxWidth: "1920px",
          top: 0,
          left: 0,
        }}
      >
        <section className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
          <Greeting />
        </section>
        <section className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
          <Projects />
        </section>
        <section className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
          <About />
        </section>
      </div>

      <div
        className="pointer-events-none absolute top-0 left-0 w-[100vw] h-[100vh] z-50"
        style={{ touchAction: "none" }}
      >
        <StopMotion />
      </div>
    </div>
  );
}

export default App;
