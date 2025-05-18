import React from "react";
import { MoveRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  className,
  showArrow = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 group w-fit px-4 py-2 rounded-md border border-background flex items-center gap-x-2 whitespace-nowrap ${className}`}
    >
      <div className="absolute inset-0 bg-muted z-0 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
      {showArrow && <MoveRight className="relative z-5" />}{" "}
      <span className="relative z-5 font-semibold">{children}</span>
    </button>
  );
};

function About() {
  const openCredential = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div
        style={{ minHeight: `calc(100vh - 64px - 64px)` }}
        className="flex flex-col justify-center"
      >
        <h1 className="font-atma text-6xl font-bold">
          Hello again, Tammy<span  className="text-2xl align-super">*</span> is here.
        </h1>
        <p className="pt-4 text-sm italic">
          * My real name is <b>Thanutchaporn Kham-Iam</b>, but Tammy’s
          been my go-to for so long, even I do a double-take when someone calls
          me by the full one.
        </p>
        <p className="pt-4 text-xl">
          A curious technologist with a love for{" "}
          <b>
            building, learning, and occasionally breaking things{" "}
            <i>(on purpose, I promise)</i>
          </b>
          .
        </p>
        <div className="pt-18 space-x-2 max-w-3xl">
          <p className="pb-4">
            I got my start in design, but I’ve always been fascinated by how
            things work under the hood. That curiosity led me to explore
            <i> creative coding</i>, and eventually dive headfirst into software
            development. For the past couple of years, I’ve been self-teaching
            game development — what began as a hobby has turned into a long-term
            passion project I’m building with my cousin.
          </p>
          <p>
            Thailand is home. I grew up here, studied Interactive and Visual
            Design in Australia, and I still get excited every time I solve a
            tricky coding problem or automate something that makes life a little
            easier.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 lg:gap-x-10 lg:flex-row">
        <div className="w-full lg:w-[40%] flex flex-col gap-y-4">
          <h4 className="font-atma text-xl">Career Targets</h4>
          <div className="flex">
            <StyledButton>Full-Stack Developer</StyledButton>
            <StyledButton>Backend Developer</StyledButton>
          </div>
          <h4 className="font-atma text-xl pt-4">Domains of Interest</h4>
          <div className="flex flex-wrap gap-2">
            <StyledButton>EdTech</StyledButton>
            <StyledButton>Game</StyledButton>
            <StyledButton>Entertainment</StyledButton>
            <StyledButton>Security</StyledButton>
            <StyledButton>Retail</StyledButton>
            <StyledButton>Non-Profit Organisation</StyledButton>
          </div>
          <h4 className="font-atma text-xl pt-4">Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            <StyledButton>JavaScript</StyledButton>
            <StyledButton>Python</StyledButton>
            <StyledButton>C#</StyledButton>
            <StyledButton>React</StyledButton>
          </div>
          <h4 className="font-atma text-xl pt-4">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            <StyledButton>SQL</StyledButton>
            <StyledButton>MongoDB</StyledButton>
            <StyledButton>Docker</StyledButton>
          </div>
          <h4 className="font-atma text-xl pt-4">Languages</h4>
          <div className="flex flex-wrap gap-2">
            <StyledButton>Thai (Native)</StyledButton>
            <StyledButton>English (Advanced) </StyledButton>
          </div>
          <h4 className="font-atma text-xl pt-4">Certifications</h4>
          <div className="">
            <StyledButton
              onClick={() =>
                openCredential(
                  "https://codeinplace.stanford.edu/cip3/certificate/dgpazp"
                )
              }
              showArrow={true}
              className="cursor-pointer"
            >
              Stanford University: Code in Place
            </StyledButton>
            <StyledButton
              onClick={() =>
                openCredential(
                  "https://www.credly.com/badges/e972a0f3-80ea-4e7d-9038-c5731cda5f53"
                )
              }
              showArrow={true}
              className="cursor-pointer"
            >
              Unity Certified Associate: Game Developer (Expired)
            </StyledButton>
            <StyledButton
              onClick={() =>
                openCredential(
                  "https://www.credly.com/badges/5d6a068a-9b3f-4528-b5ec-a00413686d06"
                )
              }
              showArrow={true}
              className="cursor-pointer"
            >
              Unity Certified Associate: Programmer (Expired)
            </StyledButton>
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                Bachelor of Creative Industries (Interactive and Visual Design)
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Queensland University of Technology, Brisbane, Australia — Class
                of 2019
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <h5 className="font-bold">Relevant Units of Study</h5>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Programming for Visual Designers</li>
                <li>Visual Interactions</li>
                <li>Interface Design</li>
                <li>Tangible Media</li>
              </ul>
              <p className="mt-4 font-bold">Activities and Societies</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  12th ACM SIGGRAPH Conference and Exhibition student volunteer
                </li>
                <li>
                  14th International Conference on Tangible, Embedded, and
                  Embodied Interaction student volunteer
                </li>
                <li>QUT Languages Student Representative</li>
                <li>QUT Thai Student Club Representative</li>
              </ul>
            </CardContent>
          </Card>
          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2", "item-3"]}
            className="pt-6"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-atma font-semibold text-xl">
                Why tech?
              </AccordionTrigger>
              <AccordionContent className="text-md">
                I grew up in a family of civil engineers, so problem-solving is
                in my DNA. But I wanted to carve out a path that blended
                creativity with logic. That led me to design, and then to code.
                The more I learned, the more I realised — tech isn’t just tools
                and syntax. It’s a canvas. It’s where I can build things that
                matter, both for others and for myself.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-atma font-semibold text-xl">
                What do you do for fun?
              </AccordionTrigger>
              <AccordionContent className="text-md">
                Game development is my playground. I treat it like a living,
                evolving project — especially when I get to collaborate with my
                cousin on new ideas. I also enjoy messing around with smart
                devices. One of my favourite side projects was building a
                personalized smart home system during my stay-at-home years. It
                was practical, fun, and deeply rewarding to see it actually
                improve day-to-day life.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-atma font-semibold text-xl">
                What are you learning right now?
              </AccordionTrigger>
              <AccordionContent className="text-md">
                A lot! I’m a big believer in lifelong learning (and collecting
                certificates admittedly). Right now I’m diving into:
                <ul className="pl-4 pt-2">
                  <li>
                    <a
                      href="https://www.edx.org/cs50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex space-x-4">
                        <MoveRight />
                        <p>CS50 from Harvard (via edX)</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex space-x-4">
                        <MoveRight />
                        <p>Codecademy’s Full-Stack Engineer path</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default About;
