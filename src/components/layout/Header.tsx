import { Link, useLocation } from "react-router-dom";
import { Github, FileUser, Linkedin, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Layout() {
  const location = useLocation();

  return (
    <>
      <header className="bg-secondary shadow h-16 fixed top-0 w-full z-10">
        <nav className="container mx-auto py-4 px-6 flex justify-between">
          <ul className="flex items-center space-x-6 list-none p-0">
            <li className="mr-8">
              <Link
                to="/"
                className="font-atma text-xl font-black text-foreground hover:text-muted-foreground hover:text-shadow-lg"
              >
                TK
              </Link>
            </li>
            <li>
              <Button
                asChild
                variant="ghost"
                className="hover:text-primary-foreground"
              >
                <Link to="/#work">
                  <span>Work</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="ghost"
                className="hover:text-primary-foreground"
              >
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
            <li className="hidden md:block">
              <p className="text-muted-foreground font-bold">Open for Work!</p>
            </li>
            <li>
              <Button asChild variant="ghost" className="p-2 rounded-md group">
                <Link
                  to="https://github.com/taemmyk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </Link>
              </Button>
            </li>
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-2 rounded-md group"
                    >
                      <Link
                        to="https://drive.google.com/file/d/1g5TS1E_kBE_sRmUgTwdZ4LhWA1uyigd5/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileUser className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-md">My Resume</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li>
              <Button asChild variant="ghost" className="p-2 rounded-md group">
                <Link
                  to="https://www.linkedin.com/in/t-khamiam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Layout;
