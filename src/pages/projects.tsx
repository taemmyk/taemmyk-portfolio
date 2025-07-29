import ProjectItem from "@/components/project-item";
import { Separator } from "@radix-ui/react-separator";
import Articles from "@/components/articles-carousel";

const projectList = [
  {
    title: "LivePoll",
    description: "E-commerce",
    tags: ["next.js", "WebSocket"],
    repo: "https://github.com/example/frontend",
    deployment: "https://cobra-shop.example.com",
  },
  {
    title: "Shopping list",
    description: "E-commerce",
    tags: ["ASP .NET", "C#", "MVC", "Python", "Selenium"],
    repo: "https://github.com/example/backend",
    repoDef: "python scraper",
    fullstack: "https://github.com/example/frontend",
    fullstackDef: "MVC",
  },
  {
    title: "DMS",
    description: "E-commerce",
    tags: ["MERN", "Admin", "REST"],
    frontend: "https://github.com/example/frontend",
    backend: "https://github.com/example/backend",
  },
  {
    title: "C#",
    description: "E-commerce",
    tags: ["MERN", "Admin", "REST"],
    repo: "https://github.com/example/frontend",
    repoDef: "console program",
  },
  {
    title: "Scribbly",
    description: "E-commerce",
    tags: ["MERN", "Admin", "REST"],
    frontend: "https://github.com/example/frontend",
    backend: "https://github.com/example/backend",
    deployment: "https://cobra-shop.example.com",
  },
  {
    title: "Cobra",
    description: "E-commerce",
    tags: ["MERN", "Admin", "REST"],
    frontend: "https://github.com/example/frontend",
    backend: "https://github.com/example/backend",
    deployment: "https://cobra-shop.example.com",
  },
];

function Projects() {
  return (
    <>
      <div className="flex min-h-28 mb-8">
        <Separator
          orientation="vertical"
          className="w-px md:w-0.5 bg-secondary mr-2 md:mr-4"
        />
        <h2 className="font-tenor text-4xl">Work & Play</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-28">
        <div className="w-10/12 md:w-1/3 order-2 md:order-1 self-auto md:self-end mt-12">
          <Articles />
        </div>
        <div className="md:w-2/3 md:order-2">
          {projectList.map((project, index) => (
            <ProjectItem key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
