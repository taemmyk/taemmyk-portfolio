import { Separator } from "@radix-ui/react-separator";

function Greeting() {
  return (
    <>
      <div className="flex min-h-28">
        <Separator
          orientation="vertical"
          className="w-px md:w-0.5 bg-secondary mr-2 md:mr-4"
        />
        <h2 className="font-tenor text-4xl">Hi</h2>
      </div>
    </>
  );
}

export default Greeting;
