import StyledTag from "./common/StyledTag";

function Cobra() {
  return (
    <>
      <div
        style={{ minHeight: `calc(100vh - 64px - 64px)` }}
        className="flex flex-col justify-around"
      >
        <div className="items-center">
          <h1 className="font-atma text-6xl font-bold">
            E-Commerce Game Store Project
          </h1>
          <div className="pt-18 space-x-2 max-w-3xl">
            <p className="pb-4">
              This was our final project for a full-time bootcamp — a team of
              five curious (and slightly chaotic) learning-to-be developers, all
              new to MERN stack, building a full-stack e-commerce platform for
              digital games. No formal roles but I naturally took the lead:
              coordinating tasks, pushing progress, and keeping the repo
              organised (yes, I was that person approving pull requests and
              wrestling with merge conflicts at midnight). It was chaotic. It
              was challenging. And it was the most fun I’ve had building
              something from scratch.
            </p>
            <p>
              With previous experience as a UX/UI intern, I designed the user
              interface myself, focusing on a smooth, game-inspired experience.
              While we didn’t have a formal “design system” I tried to guide the
              visual direction and gave feedback throughout. Leading wasn’t
              perfect — there were definitely moments where I dropped the ball
              on code consistency or rushed a review — but I learned a lot about
              balancing vision with teamwork.
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <StyledTag hasBgAnimation={false}>MongoDB</StyledTag>
          <StyledTag hasBgAnimation={false}>Express</StyledTag>
          <StyledTag hasBgAnimation={false}>React</StyledTag>
          <StyledTag hasBgAnimation={false}>Node</StyledTag>
          <StyledTag hasBgAnimation={false}>MUI</StyledTag>
        </div>
      </div>
      <div className="flex flex-col gap-y-10">
        <div className="flex">
          <div className="w-[30%]">
            <p className="font-atma text-3xl">What I Did</p>
          </div>
          <div className="w-[70%]">
            <p className="text-justify">
              On the technical side, I had my hands in everything. I helped spin
              up the initial project structure, set up our MongoDB database, and
              wrote product and order management backend routes using Express
              and Node.js. Also built the admin tools to help control what users
              see. I handled much of the logic for CRUD operations and
              structured the data flow between the client and database.
            </p>
            <p className="pt-2 text-justify">
              On the frontend, I introduced Material UI for components — which
              honestly felt like a full-time job after using Tailwind for so
              long. Styling felt like going back in time to pure CSS land but it
              was a good exercise in adaptability. Beyond the code, I also took
              care of a lot of project scaffolding, component logic, and UI
              fixes when needed. And while I didn’t officially lead, I owned the
              GitHub repo, resolved most merge conflicts, and tried to keep
              everyone on the same page (even if I wasn’t perfect at it).
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[30%]">
            <p className="font-atma text-3xl">What I Learned</p>
          </div>
          <div className="w-[70%]">
            <p className="text-justify">
              Group work is… exhausting. It’s definitely harder than working
              solo but for a project this size, collaboration was key. I had to
              learn to delegate, trust others, and find the line between helping
              and hovering. One teammate implemented the full forgot-password
              flow using Google OAuth2.0 and cloud services — tech I hadn’t
              touched before but was super excited to see in action. It reminded
              me how cool it is to learn from your peers.
            </p>
            <p className="pt-2 text-justify">
              Personally I picked up a ton of new skills — from database design
              to prompt engineering (yes! AI saved us more than once). I also
              got better at reading documentation, troubleshooting weird errors,
              and figuring things out on my own. It was a crash course in
              real-world dev work and while there were moments of total
              confusion. I’m proud of how much I grew.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[30%]">
            <p className="font-atma text-3xl">Future Implementation</p>
          </div>
          <div className="w-[70%]">
            <p className="text-justify">
              There’s a lot we still want to build! Payment processing is
              currently mocked, but Stripe integration is high on the list. We
              also want to replace our borrowed game images (shoutout to the our
              love-hate platform, Steam) with a proper image upload system —
              probably using Cloudinary or a similar media manager. This would
              give admin users more control and make the platform feel more
              polished.
            </p>
            <p className="pt-2 text-justify">
              On the frontend, we want to enhance the user experience further by
              improving responsiveness for mobile devices and adding subtle
              animations for a smoother feel. I’m also excited to refactor parts
              of the codebase to make it cleaner and more modular as we continue
              to scale the app.
            </p>
            <p className="pt-2 text-justify">
              We also plan to expand the personalisation system, to enhance the
              user experience further by adding subtle animations for a smoother
              feel. I’m also excited to refactor parts of the codebase to make
              it cleaner and more modular. It’s exciting to think about how much
              better this could get with a few more sprints (and fewer merge
              conflicts).
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[30%]">
            <p className="font-atma text-3xl">Conclusion</p>
          </div>
          <div className="w-[70%]">
            <p className="text-justify">
              This project pushed me on every front — technically, mentally, and
              even emotionally. Between handling group dynamics, managing my
              time, and fielding daily feature requests from mentors (shoutout
              to the senior devs who wanted everything yesterday). I had to
              practice prioritisation and self-care. Work-life balance was a
              never-ending-lesson in itself.
            </p>
            <p className="pt-2 text-justify">
              Still this experience gave me a huge confidence boost. I learned
              how to own my role, lead without a title, and navigate the messy
              but magical world of collaborative software development. We’re not
              done yet but I’m proud of how far we’ve come — and even more
              excited about where it’s going.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cobra;
