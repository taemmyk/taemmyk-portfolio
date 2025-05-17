import { Outlet, Link, useLocation } from "react-router-dom";
import { Github, FileUser, Linkedin, MoveRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

function Layout() {
  const location = useLocation();
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
    <div className="font-sans font-semibold">
      <header className="bg-secondary shadow h-16 fixed top-0 w-full z-10">
        <nav className="container mx-auto py-4 px-6 flex justify-between">
          <ul className="flex items-center space-x-6 list-none p-0">
            <li className="mr-8">
              <Link
                to="/"
                className="text-xl font-black text-foreground hover:text-shadow-lg"
              >
                TK
              </Link>
            </li>
            <li>
              <Button asChild variant="ghost">
                <Link to="/#work-section">
                  <span>Work</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost">
                <Link
                  to="/about"
                  className={`flex items-center w-full ${
                    location.pathname === "/about"
                      ? "text-foreground"
                      : "text-foreground"
                  } hover:text-accent`}
                >
                  {location.pathname === "/about" && (
                    <MoveRight className="mr-2 h-4 w-4" />
                  )}
                  <span>About</span>
                </Link>
              </Button>
            </li>
          </ul>
          <ul className="flex items-center space-x-6 list-none p-0">
            <li>
              <Button
                asChild
                variant="ghost"
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <Link
                  to="https://github.com/taemmyk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 text-foreground" />
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="ghost"
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <Link
                  to="/" //TODO: cv url
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileUser className="h-5 w-5 text-foreground" />
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="ghost"
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <Link
                  to="https://www.linkedin.com/in/t-khamiam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-foreground" />
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <main
        className="container mx-auto py-8 px-6 mt-16"
        style={{ minHeight: `calc(100vh - 64px - 64px)` }}
      >
        <Outlet />
      </main>
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
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <ArrowUp className="h-5 w-5 text-foreground" />
          </Button>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
