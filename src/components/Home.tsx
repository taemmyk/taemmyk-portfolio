import { MoveRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Home() {
  return (
    <>
      <div
        style={{ minHeight: `calc(100vh - 64px - 64px)` }}
        className="flex flex-col justify-center"
      >
        <h1 className="text-6xl font-bold font-sans">Hello, this is Tammy.</h1>
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
            I’m excited to keep growing, deliver cool things, and learn from folks
            who are just as nerdy about tech as I am.
          </p>
        </div>
      </div>
      <div id="work-section" className="mt-8">
        <h2 className="text-4xl font-bold font-sans">Work</h2>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Home;
