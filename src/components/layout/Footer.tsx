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
      <footer className="bg-secondary shadow h-16 py-4 flex flex-col items-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-3">
            <span className="whitespace-nowrap">Based in Bangkok</span>
            <MoveRight className="h-5 w-5 text-foreground" />
            <span className="whitespace-nowrap">{formatTime(currentTime)}</span>
          </div>
          <div className="container mx-auto text-center mt-2">
            © {new Date().getFullYear()} TK.
          </div>
          <Button
            onClick={scrollToTop}
            variant="ghost"
            className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <ArrowUp className="h-5 w-5 text-foreground" />
          </Button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
