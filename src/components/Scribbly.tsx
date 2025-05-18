import { useEffect } from "react";
import StyledTag from "./common/StyledTag";
import scribblyGifImage from "../assets/scribbly-welcome.gif";

function Scribbly() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div
        style={{
          minHeight: `calc(100vh - 64px - 64px)`,
        }}
        className="flex flex-col lg:flex-row relative overflow-visible"
      >
        <div
          className="w-full lg:w-[62.5%] bg-gradient-to-r from-background to-rose-200
               flex flex-col justify-around z-5 p-4"
          style={{
            minHeight: `calc(100vh - 128px)`,
          }}
        >
          <div>
            <h1 className="font-atma text-6xl font-bold">
              Scribbly Note-Taking Project
            </h1>
            <div className="pt-18 space-x-2 max-w-3xl">
              <p className="pb-4">
                Scribbly started as a “let’s see if I can do this” kind of idea
                and quickly became the sandbox where I taught myself how backend
                systems really work. It’s a minimal note-taking app built with
                the MERN stack — but not before I took a little detour. I
                originally started out using SQL with Turso, just to see what
                relational databases felt like, before switching to MongoDB with
                Mongoose once I realised it better suited the flexibility of
                this project.
              </p>
              <p>
                The goal? Build a clean, functional app with features I actually
                use: tagging, editing, and organising notes — plus full user
                authentication. It’s now a fully working system with secure
                login/signup and personalised note spaces per user. Scribbly
                isn’t flashy but it works reliably, and I’m still surprised how
                much I learned just from building something so "simple."
              </p>
            </div>
          </div>
          <div className="flex-col space-y-2">
            <StyledTag showArrow={true} url="/">
              Let's scribble!
            </StyledTag>
            <div className="flex space-x-2">
              <StyledTag hasBgAnimation={false}>WIP</StyledTag>
              <StyledTag hasBgAnimation={false}>MongoDB</StyledTag>
              <StyledTag hasBgAnimation={false}>Express</StyledTag>
              <StyledTag hasBgAnimation={false}>React</StyledTag>
              <StyledTag hasBgAnimation={false}>Node</StyledTag>
              <StyledTag hasBgAnimation={false}>shadcnUI</StyledTag>
            </div>
          </div>
        </div>

        <img
          src={scribblyGifImage}
          alt="Scribbly Welcome"
          className="hidden lg:block absolute right-0 top-0 h-full object-cover z-0 pointer-events-none"
          style={{
            maxWidth: "50%",
            transform: "translateX(24%)",
          }}
        />
      </div>

      <div className="flex flex-col gap-y-10 mt-16">
        <div className="flex">
          <div className="w-1/3">
            <p className="font-atma text-3xl">What I Did</p>
          </div>
          <div className="w-2/3">
            <p className="text-justify">
              This was a full-stack solo project, so I wore all the hats — from
              spinning up the server to tweaking UI elements. On the backend, I
              designed the entire system around users and their notes, adding
              support for tagging, timestamping and user-based access control.
              Authentication is handled with token-based auth and routes are
              protected accordingly. I also transitioned from SQL to MongoDB
              halfway through which meant rethinking schemas and relationships —
              an excellent brain workout.
            </p>
            <p className="pt-2 text-justify">
              On the frontend, I explored using shadcn/ui after hearing about it
              from my TA (and yes, it’s as nice as they said). While the design
              is still fairly minimal, I wanted to balance aesthetics with
              simplicity, so I leaned into clean components and smooth
              interactions. I handled all the UI logic myself including
              conditional rendering based on user auth, error states, and
              dynamic filtering by tags.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <p className="font-atma text-3xl">What I Learned</p>
          </div>
          <div className="w-2/3">
            <p className="text-justify">
              Building Scribbly taught me how to truly own a project from top to
              bottom. I learned how different databases affect the way you
              structure data, how to handle user sessions securely, and how to
              gradually build features that connect together smoothly.
              Transitioning from SQL to MongoDB also forced me to better
              understand the tradeoffs between structured vs. flexible data
              models.
            </p>
            <p className="pt-2 text-justify">
              I also started caring more about developer experience — both mine
              and potential future contributors’. I learned to refactor
              thoughtfully, commit regularly, and structure code in a way that’s
              maintainable. Scribbly taught me how to think like a full-stack
              dev, not just a frontend tinkerer or backend dabbler — and that
              mindset shift was huge.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <p className="font-atma text-3xl">Future Implementation</p>
          </div>
          <div className="w-2/3">
            <p className="text-justify">
              Now that the core is solid. I’m excited to build on it. I want to
              implement Markdown support for richer note formatting. I also plan
              to add filtering and search by tags, archive functionality, and
              note pinning to help users prioritise their content.
            </p>
            <p className="pt-2 text-justify">
              Currently, Scribbly has a rose theme — and I mean very pink. I
              picked it because, honestly, I figured I might never get the
              chance to make a bubblegum-pink product again. Which... was
              probably correct. It's cute, but kind of eye-searing after a
              while, so dim mode or full-on dark mode is definitely next in the
              pipeline. A more flexible theme system would go a long way toward
              making it feel a bit more grown-up (and gentler on the eyes at 2
              a.m.).
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <p className="font-atma text-3xl">Conclusion</p>
          </div>
          <div className="w-2/3">
            <p className="text-justify">
              Scribbly is my little backend success story — the app where I
              learned to troubleshoot problems I didn’t even know existed when I
              started. From switching databases mid-build to figuring out
              authentication flows and experimenting with new UI libraries, I
              really threw myself in the deep end and came out stronger.
            </p>
            <p className="pt-2 text-justify">
              Along the way, I learned more than just code — I practiced
              patience, focus, and how to keep going when things break (because
              they always break). This project reminded me that progress doesn’t
              have to be perfect to be meaningful. Scribbly might not be flashy,
              but it’s proof that I can build something from scratch — and keep
              making it better.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scribbly;
