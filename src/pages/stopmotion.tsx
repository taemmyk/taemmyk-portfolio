import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import walk1 from "@/assets/walk/walk-1.png";
import walk2 from "@/assets/walk/walk-2.png";
import walk3 from "@/assets/walk/walk-3.png";
import walk4 from "@/assets/walk/walk-4.png";

import play1 from "@/assets/play/play-1.png";
import play2 from "@/assets/play/play-2.png";
import play3 from "@/assets/play/play-3.png";

import sneak1 from "@/assets/sneak/sneak-1.png";
import sneak2 from "@/assets/sneak/sneak-2.png";
import sneak3 from "@/assets/sneak/sneak-3.png";
import sneak4 from "@/assets/sneak/sneak-4.png";
import sneak5 from "@/assets/sneak/sneak-5.png";
import sneak6 from "@/assets/sneak/sneak-6.png";

import keyboard from "@/assets/objects/keyboard.png";
import paw from "@/assets/objects/paw.png";

const walkFrames = [walk1, walk2, walk3, walk4];
const playFrames = [play1, play2, play3];
const sneakFrames = [sneak1, sneak2, sneak3, sneak4, sneak5, sneak6];

gsap.registerPlugin(ScrollTrigger);

function StopMotion() {
  const navigate = useNavigate();
  const [slideOut, setSlideOut] = useState(false);

  const handleNextSection = () => {
    if (slideOut) return;
    setSlideOut(true);
    setTimeout(() => {
      navigate("/me");
    }, 600); // ต้องตรงกับ transition duration
  };

  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    const scrollEnd = 1000;

    const scrollProgressTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 0,
      end: scrollEnd,
      scrub: true,
      onUpdate: (self) => {
        const percent = Math.round(self.progress * 100);
        setScrollPercent(percent);
      },
    });

    return () => {
      scrollProgressTrigger.kill();
    };
  }, []);

  const catRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const keyboardRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (catRef.current) {
      gsap.set(catRef.current, {
        x: 0,
        opacity: 0,
        immediateRender: true,
        overwrite: "auto",
      });
    }

    if (containerRef.current) {
      gsap.set(containerRef.current, {
        backgroundColor: "#050911",
      });
    }

    if (messageRef.current) {
      gsap.set(messageRef.current, {
        opacity: 0,
      });
    }

    requestAnimationFrame(() => {
      const scrollEnd = 1000;

      if (catRef.current) {
        gsap.set(catRef.current, { x: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 0,
          end: scrollEnd,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (!catRef.current) return;

            if (progress < 0.01) {
              catRef.current.style.opacity = "0";
            } else {
              catRef.current.style.opacity = "1";
            }

            if (progress < 0.01) {
              return;
            }

            if (progress < 0.5) {
              const walkLoops = 8;
              const index =
                Math.floor(progress * walkFrames.length * walkLoops) %
                walkFrames.length;
              catRef.current.setAttribute("src", walkFrames[index]);
            } else if (progress < 0.6) {
              const playLoops = 6;
              const localProgress = (progress - 0.5) / 0.1;
              const index =
                Math.floor(localProgress * playFrames.length * playLoops) %
                playFrames.length;
              catRef.current.setAttribute("src", playFrames[index]);
            } else if (progress < 0.8) {
              const walkLoops = 8;
              const localProgress = (progress - 0.6) / 0.2;
              const index =
                Math.floor(localProgress * walkFrames.length * walkLoops) %
                walkFrames.length;
              catRef.current.setAttribute("src", walkFrames[index]);
            } else if (progress < 0.9) {
              const localProgress = (progress - 0.8) / 0.1;
              const sneakLoopFrames = [sneak2, sneak3];
              const loopIndex =
                Math.floor(localProgress * 8) % sneakLoopFrames.length;
              catRef.current.setAttribute("src", sneakLoopFrames[loopIndex]);
            } else if (progress <= 1) {
              const localProgress = (progress - 0.9) / 0.1;
              const index = Math.min(Math.floor(localProgress * 4), 3);
              catRef.current.setAttribute("src", sneakFrames[3 + index]);
            }
          },
        },
      });

      const walkTimeline1 = gsap.fromTo(
        catRef.current,
        { x: -128 },
        {
          x: window.innerWidth / 2,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: 0,
            end: scrollEnd * 0.5,
            scrub: true,
          },
        }
      );

      const walkTimeline2 = gsap.fromTo(
        catRef.current,
        { x: window.innerWidth / 2 },
        {
          x: window.innerWidth - 256,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: scrollEnd * 0.6,
            end: scrollEnd * 0.8,
            scrub: true,
          },
        }
      );

      const sneakTimeline = gsap.fromTo(
        catRef.current,
        { x: window.innerWidth - 256 },
        {
          x: window.innerWidth,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: scrollEnd * 0.95,
            end: scrollEnd,
            scrub: true,
          },
        }
      );

      // bg, bsod
      ScrollTrigger.create({
        trigger: document.body,
        start: scrollEnd * 0.55,
        end: scrollEnd * 0.6,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (!containerRef.current || !messageRef.current || !floorRef.current)
            return;

          const bgColor = gsap.utils.interpolate(
            "#050911",
            "#003092",
            progress
          );
          gsap.to(containerRef.current, {
            backgroundColor: bgColor,
            duration: 0.05,
          });

          const floorColor = gsap.utils.interpolate(
            "#9EA8BC",
            "#050911",
            progress
          );
          gsap.to(floorRef.current, {
            backgroundColor: floorColor,
            duration: 0.05,
          });

          gsap.to(messageRef.current, {
            opacity: progress,
            duration: 0.1,
          });
        },
      });

      // keyboard
      ScrollTrigger.create({
        trigger: document.body,
        start: scrollEnd * 0.1,
        end: scrollEnd * 0.35,
        scrub: true,
        onUpdate: (self) => {
          if (!keyboardRef.current) return;

          const progress = self.progress;
          const y = Math.sin(progress * Math.PI) * -200;

          gsap.set(keyboardRef.current, {
            y,
          });
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tl.kill();
        walkTimeline1.kill();
        walkTimeline2.kill();
        sneakTimeline.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });
  }, []);

  const [bangkokTime, setBangkokTime] = useState("");

  useEffect(() => {
    const updateBangkokTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Bangkok",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formattedTime = now.toLocaleTimeString("en-US", options);
      setBangkokTime(formattedTime);
    };

    updateBangkokTime();
    const intervalId = setInterval(updateBangkokTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    if (!skipped && scrollPercent >= 95) {
      setSkipped(true);
      handleNextSection();
    }
  }, [scrollPercent, skipped]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "200vh",
        background: "#050911",
        position: "relative",
        opacity: slideOut ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
        pointerEvents: slideOut ? "none" : "auto",
      }}
    >
      <div
        ref={floorRef}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 105,
          backgroundColor: "#9EA8BC",
          zIndex: 1,
        }}
      />

      <img
        ref={keyboardRef}
        src={keyboard}
        alt="extra image"
        style={{
          position: "fixed",
          bottom: 40,
          left: "48.25%",
          width: 256,
          transform: "translateY(130px)",
          transition: "transform 0.3s ease",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />
      <img
        ref={catRef}
        src={walkFrames[0]}
        alt="walking cat"
        style={{
          position: "fixed",
          bottom: 40,
          left: 0,
          width: 256,
          opacity: 0,
          transition: "width 0.3s ease",
        }}
      />
      <div
        ref={messageRef}
        style={{
          position: "fixed",
          top: 20,
          left: 0,
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          pointerEvents: "none",
          userSelect: "none",
          opacity: 0,
        }}
        className="font-nunito flex flex-col items-start mx-48"
      >
        <p className="text-9xl pt-32 pb-16">:)</p>
        <p className="text-4xl text-left">
          You ran into a software developer, designer,
          <br />
          HCI Enthusiast and DIY Technologist.
        </p>
        <div className="mt-16 text-2xl flex space-x-8">
          <div className="font-tenor w-32 h-32 aspect-square bg-secondary-foreground text-secondary text-5xl tracking-widest text-center font-extrabold flex items-center justify-center">
            tk
          </div>
          <div>
            <p className="pb-8 text-left font-thin">
              For making things work, contact me{" "}
              <Button
                variant="link"
                className="text-accent font-nunito py-0 px-1 text-2xl"
              >
                here
              </Button>
              .
            </p>
            <p className="text-left font-thin">
              If you’re calling, please note:
            </p>
            <p className="text-left font-thin">
              Location: Bangkok, Thailand, {bangkokTime} ICT
            </p>
          </div>
        </div>
      </div>
      <Button
        variant="secondary"
        className="fixed bottom-6 right-6 z-50 text-accent font-nunito text-lg py-8 bg-transparent shadow-none"
        onClick={handleNextSection}
      >
        skip
        <img src={paw} className="w-24 h-24" />
      </Button>
    </div>
  );
}

export default StopMotion;
