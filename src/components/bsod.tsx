import { useEffect, useRef, useState } from "react";
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

const walkFrames = [walk1, walk2, walk3, walk4];
const playFrames = [play1, play2, play3];
const sneakFrames = [sneak1, sneak2, sneak3, sneak4, sneak5, sneak6];

gsap.registerPlugin(ScrollTrigger);

function StopMotion() {
  const catRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

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
        backgroundColor: "transparent",
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
              return;
            }

            if (progress < 0.01) {
              catRef.current.style.opacity = "0";
            } else {
              catRef.current.style.opacity = "1";
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
            start: 0.05,
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
          if (!messageRef.current) return;

          gsap.to(messageRef.current, {
            opacity: progress,
            duration: 0.1,
          });
        },
      });

      // bsod
      ScrollTrigger.create({
        trigger: document.body,
        start: scrollEnd * 0.8,
        end: scrollEnd,
        scrub: true,
        onUpdate: (self) => {
          if (!messageRef.current) return;

          const progress = self.progress; // 0 to 1
          const scaleValue = 1 - progress; // scale from 1 to 0

          gsap.to(messageRef.current, {
            scale: scaleValue,
            duration: 0.1,
            transformOrigin: "center center",
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

  return (
    <div
      ref={containerRef}
      style={{
        height: "50vh",
        position: "relative",
      }}
    >
      <img
        ref={catRef}
        src={walkFrames[0]}
        alt="walking cat"
        style={{
          position: "fixed",
          bottom: 0,
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
          top: 100,
          left: 0,
          width: "100%",
          textAlign: "center",
          pointerEvents: "none",
          userSelect: "none",
          opacity: 0,
        }}
        className="font-nunito flex flex-col items-start"
      >
        <div className="flex flex-col items-start md:ml-48 lg:ml-64 bg-blue-500/20 backdrop-blur-2xl px-6 md:px-12 lg:px-16 pb-6 rounded-2xl shadow-[0_0_80px_rgba(30,64,175,0.4),0_0_140px_rgba(30,64,175,0.3)] max-w-md w-full mx-auto">
          <p className="md:text-5xl text-3xl py-6">:)</p>

          <p className="text-base md:text-md text-left leading-relaxed">
            You ran into a software developer,
            <br />
            designer, HCI Enthusiast and
            <br />
            DIY Technologist.
          </p>

          <div className="mt-12 flex space-x-6">
            <div className="font-tenor w-28 h-28 aspect-square bg-secondary-foreground text-secondary text-2xl md:text-4xl tracking-widest text-center font-extrabold flex flex-col items-center justify-center relative">
              tk
              <div className="flex items-center space-x-2 text-xs bg-blue-950 px-1 py-1 rounded-2xl">
                <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                <span className="text-foreground font-nunito tracking-wide font-normal">
                  Available
                </span>
              </div>
            </div>
            <div>
              <p className="text-left font-thin text-sm pb-4">
                For working together, <br />
                I’m looking for new roles.
              </p>
              <p className="text-left font-thin text-sm">
                If you’re calling, please note:
              </p>
              <p className="text-left font-thin text-sm">
                Location: Bangkok, Thailand, {bangkokTime} ICT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StopMotion;
