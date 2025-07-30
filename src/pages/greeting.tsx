function Greeting() {
  return (
    <>
      <div className="w-full h-full">
        <p className="font-tenor text-[clamp(0.8rem,4vw,2rem)] mx-4 mr-48 md:mr-64 p-4 bg-popover text-popover-foreground">
          Curious developer who loves building, learning, and occasionally
          breaking thing <span className="italic">(on purpose, I promise)</span>
          .
        </p>

        <div className="md:hidden absolute top-50 right-0 z-50 flex flex-col items-start bg-blue-500/20 backdrop-blur-2xl rounded-2xl shadow-[0_0_80px_rgba(30,64,175,0.4),0_0_140px_rgba(30,64,175,0.3)] w-1/2 px-4 py-2 mr-8">
          <div className="flex items-center space-x-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-lime-500"></span>
            <span className="text-foreground font-nunito tracking-wide font-normal">
              Available
            </span>
          </div>
          <div>
            <p className="text-left font-thin text-sm">
              For working together,
              <br />
              I’m looking for new roles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Greeting;
