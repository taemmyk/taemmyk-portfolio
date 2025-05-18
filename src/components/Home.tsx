import { MoveRight } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div
        style={{ minHeight: `calc(100vh - 64px - 64px)` }}
        className="flex flex-col justify-center"
      >
        <h1 className="font-atma text-6xl font-bold">
          Hello, this is Tammy<span className="text-2xl align-super">*</span>.
        </h1>
        <div className="pt-18 space-x-2">
          <span className="text-3xl pt-8">Currently</span>
          <MoveRight className="inline" />
          <span className="text-2xl">Junior Software Developer Bootcamp</span>
          <p className="pt-4">
            I’ve spent the past few years leveling up through hands-on game dev
            and passion projects
          </p>
          <p>
            — learning by building and breaking{" "}
            <i>(and occasionally debugging after midnight)</i>.
          </p>
          <p>My background in design means I think in both pixels and logic.</p>
          <p>
            I love solving problems with a user-first mindset and a drip of
            imagination.
          </p>
          <p>
            I’m excited to keep growing, deliver cool things, and learn from
            folks who are just as nerdy about tech as I am.
          </p>
        </div>
      </div>
      <div id="work" className="mt-8">
        <h2 className="text-4xl font-bold font-atma">Work</h2>
      </div>
    </>
  );
}

export default Home;
