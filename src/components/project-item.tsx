import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { ArrowUpRight } from "lucide-react";

type ProjectItemProps = {
  index?: number;
  title: string;
  description: string;
  tags: string[];
  frontend?: string;
  backend?: string;
  deployment?: string;
  repo?: string;
  repoDef?: string;
  fullstack?: string;
  fullstackDef?: string;
};

function ProjectItem({
  index,
  title,
  description,
  tags,
  repo,
  repoDef,
  frontend,
  fullstack,
  fullstackDef,
  backend,
  deployment,
}: ProjectItemProps) {
  const handleLink = (url: string) => {
    try {
      const validUrl = new URL(url);
      window.open(validUrl.href, "_blank");
    } catch {
      console.error("Invalid URL:", url);
    }
  };

  return (
    <div className="py-4">
      <div className="flex justify-between px-2 md:px-4">
        <h3 className="font-tenor text-2xl text-accent-foreground">
          <span className="hidden md:inline-block mr-10">
            {index !== undefined ? String(index + 1).padStart(2, "0") : ""}
          </span>
          {title}
        </h3>
        <div className="flex items-center h-full">
          {repo && (
            <Button
              variant="ghost"
              className="font-tenor text-xs md:text-sm hover:bg-transparent"
              onClick={() => handleLink(repo)}
            >
              {repoDef ? repoDef : "repository"}
              <ArrowUpRight />
            </Button>
          )}
          {fullstack && (
            <Button
              variant="ghost"
              className="font-tenor text-xs md:text-sm hover:bg-transparent"
              onClick={() => handleLink(fullstack)}
            >
              {fullstackDef ? fullstackDef : "repository"}
              <ArrowUpRight />
            </Button>
          )}
          {frontend && (
            <Button
              variant="ghost"
              className="font-tenor text-xs md:text-sm hover:bg-transparent"
              onClick={() => handleLink(frontend)}
            >
              frontend
              <ArrowUpRight />
            </Button>
          )}
          {backend && (
            <Button
              variant="ghost"
              className="font-tenor text-xs md:text-sm hover:bg-transparent"
              onClick={() => handleLink(backend)}
            >
              backend <ArrowUpRight />
            </Button>
          )}
          {deployment && (
            <Button
              variant="ghost"
              className="font-tenor text-xs md:text-sm hover:bg-transparent"
              onClick={() => handleLink(deployment)}
            >
              deployment <ArrowUpRight />
            </Button>
          )}
        </div>
      </div>
      <Separator className="bg-secondary h-px my-2 md:ml-18" />
      <div className="flex px-2 md:ml-18 md:px-4 h-full md:space-x-2 items-center">
        <span className="font-nunito text-sm md:text-md text-muted-foreground">
          {description}
        </span>
        {tags.length > 0 && (
          <>
            <Separator
              orientation="vertical"
              className="w-px md:w-0.5 h-6 bg-secondary mx-2 md:ml-0"
            />
            <div className="flex gap-2 items-center">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="font-tenor text-xs md:text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
