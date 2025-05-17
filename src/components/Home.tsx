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
        <h1 className="text-6xl font-bold font-sans">Hi, this is Tammy.</h1>
        <div className="pt-18 space-x-2">
          <span className="text-3xl pt-8">Currently</span>
          <MoveRight className="inline" />
          <span className="text-2xl">Junior Software Developer Bootcamp</span>
          <p className="pt-4">Promising Junior Software Developer, cultivated practical experience in game development over years.</p>
          <p>My design perspective allows for imaginative <b>problem-solving</b> and a considered approach to user-centric design.</p>
          <p>I am keen to contribute meaningfully to product development while continuing my learning journey alongside experienced team members.</p>
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
