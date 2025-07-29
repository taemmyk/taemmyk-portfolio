import { Separator } from "@radix-ui/react-separator";

function Greeting() {
  return (
    <div>
      <div className="md:w-[75vw] md:h-[100vh] bg-teal-950">
        <div className="flex min-h-28 mb-8">
          <Separator
            orientation="vertical"
            className="w-px md:w-0.5 bg-secondary mr-2 md:mr-4"
          />
          <h2 className="font-tenor text-4xl">Hi</h2>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
