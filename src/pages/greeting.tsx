function Greeting() {
  return (
    <>
      <div className="w-full h-full flex items-center ">
        <p className="font-tenor text-[clamp(0.8rem,4vw,2rem)] mx-4 mr-64 p-4 bg-popover text-popover-foreground">
          Curious developer who loves building, learning, and occasionally
          breaking thing <br />
          <span className="italic">(on purpose, I promise)</span>.
        </p>
      </div>
    </>
  );
}

export default Greeting;
