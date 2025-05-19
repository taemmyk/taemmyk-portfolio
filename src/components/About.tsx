import { useEffect } from "react";
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
import StyledTag from "./common/StyledTag";
import { MorphingText } from "@/components/magicui/morphing-text";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div
        style={{ minHeight: `calc(100vh - 64px - 64px)` }}
        className="bg-gradient-to-r from-background to-chart-2 flex flex-col justify-center p-4"
      >
        <h1 className="font-atma text-6xl font-bold">
          Hello again, this is{" "}
          <span className="block sm:inline">
            <MorphingText texts={["Tammy*", "Thanutchaporn*"]} />
          </span>
        </h1>

        <p className="pt-4 text-sm italic">
          * My real name is <b>Thanutchaporn Kham-Iam</b>, but Tammy’s been my
          go-to for so long, even I do a double-take when someone calls me by
          the full one.
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
      <div className="flex flex-col gap-y-10 lg:gap-x-10 lg:flex-row pt-16 p-4">
        <div className="w-full lg:w-2/5 flex flex-col gap-y-4">
          <h4 className="font-atma text-xl">Career Targets</h4>
          <div className="flex flex-wrap gap-2">
            <StyledTag>Full-Stack Developer</StyledTag>
            <StyledTag>Backend Developer</StyledTag>
          </div>
          <h4 className="font-atma text-xl pt-4">Domains of Interest</h4>
          <div className="flex flex-wrap gap-2">
            <StyledTag>EdTech</StyledTag>
            <StyledTag>Game</StyledTag>
            <StyledTag>Entertainment</StyledTag>
            <StyledTag>Security</StyledTag>
            <StyledTag>Retail</StyledTag>
            <StyledTag>Non-Profit Organisation</StyledTag>
          </div>
          <h4 className="font-atma text-xl pt-4">Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            <StyledTag>JavaScript</StyledTag>
            <StyledTag>Python</StyledTag>
            <StyledTag>C#</StyledTag>
            <StyledTag>React</StyledTag>
          </div>
          <h4 className="font-atma text-xl pt-4">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            <StyledTag>SQL</StyledTag>
            <StyledTag>MongoDB</StyledTag>
            <StyledTag>Docker</StyledTag>
          </div>
          <h4 className="font-atma text-xl pt-4">Languages</h4>
          <div className="flex flex-wrap gap-2">
            <StyledTag>Thai (Native)</StyledTag>
            <StyledTag>English (Intermediate) </StyledTag>
          </div>
          <h4 className="font-atma text-xl pt-4">Certifications</h4>
          <div className="flex-col space-y-2">
            <StyledTag
              url={"https://codeinplace.stanford.edu/cip3/certificate/dgpazp"}
              showArrow={true}
              className="cursor-pointer"
              allowTextWrap={true}
            >
              Stanford University: Code in Place
            </StyledTag>
            <StyledTag
              url={
                "https://www.credly.com/badges/e972a0f3-80ea-4e7d-9038-c5731cda5f53"
              }
              showArrow={true}
              className="cursor-pointer"
              allowTextWrap={true}
            >
              Unity Certified Associate: Game Developer (Expired)
            </StyledTag>
            <StyledTag
              url={
                "https://www.credly.com/badges/5d6a068a-9b3f-4528-b5ec-a00413686d06"
              }
              showArrow={true}
              className="cursor-pointer"
              allowTextWrap={true}
            >
              Unity Certified Associate: Programmer (Expired)
            </StyledTag>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <Card className="border-secondary">
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
                  12th ACM SIGGRAPH Conference and Exhibition Student Volunteer
                </li>
                <li>
                  14th International Conference on Tangible, Embedded, and
                  Embodied Interaction Student Volunteer
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
