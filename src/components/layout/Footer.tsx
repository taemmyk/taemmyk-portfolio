import { MoveRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes}:${seconds} ${ampm.toUpperCase()}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-secondary shadow h-24 lg:h-16 py-4 flex flex-col items-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-3 w-1/3 pl-2">
            <span className="whitespace-nowrap">Based in Bangkok</span>
            <MoveRight className="md:h-5 md:w-5 text-foreground" />
            <span className="whitespace-nowrap">{formatTime(currentTime)}</span>
          </div>
          <div className="hidden lg:block container mx-auto w-1/3 text-center mt-2">
            © {new Date().getFullYear()} TK. | All Rights Reserved.
          </div>
          <div className="w-1/3 flex justify-end">
            <Button
              onClick={scrollToTop}
              variant="ghost"
              className="p-2 rounded-md group cursor-pointer"
            >
              <ArrowUp className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
            </Button>
          </div>
        </div>
        <div className="lg:hidden container mx-auto text-center mt-2">
            © {new Date().getFullYear()} TK. | All Rights Reserved.
          </div>
      </footer>
    </>
  );
}

export default Footer;
