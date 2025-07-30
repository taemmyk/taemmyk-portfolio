import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { ArrowUpRight } from "lucide-react";
import { openExternalLink } from "@/lib/utils-link";

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
  return (
    <div className="py-4">
      <div className="flex flex-col md:flex-row justify-between md:px-4">
        <h3 className="font-tenor text-2xl text-accent-foreground">
          <span className="hidden md:inline-block mr-10">
            {index !== undefined ? String(index + 1).padStart(2, "0") : ""}
          </span>
          <span className="ml-2 md:ml-0">{title}</span>
        </h3>
        <div className="flex items-center h-full">
          {repo && (
            <Button
              variant="ghost"
              className="font-tenor text-xs text-accent md:text-sm hover:bg-transparent"
              onClick={() => openExternalLink(repo)}
            >
              {repoDef ? repoDef : "repository"}
              <ArrowUpRight />
            </Button>
          )}
          {fullstack && (
            <Button
              variant="ghost"
              className="font-tenor text-xs text-accent md:text-sm hover:bg-transparent"
              onClick={() => openExternalLink(fullstack)}
            >
              {fullstackDef ? fullstackDef : "repository"}
              <ArrowUpRight />
            </Button>
          )}
          {frontend && (
            <Button
              variant="ghost"
              className="font-tenor text-xs text-accent md:text-sm hover:bg-transparent"
              onClick={() => openExternalLink(frontend)}
            >
              frontend
              <ArrowUpRight />
            </Button>
          )}
          {backend && (
            <Button
              variant="ghost"
              className="font-tenor text-xs text-accent md:text-sm hover:bg-transparent"
              onClick={() => openExternalLink(backend)}
            >
              backend <ArrowUpRight />
            </Button>
          )}
          {deployment && (
            <Button
              variant="ghost"
              className="font-tenor text-xs text-accent md:text-sm hover:bg-transparent"
              onClick={() => openExternalLink(deployment)}
            >
              deployment <ArrowUpRight />
            </Button>
          )}
        </div>
      </div>
      <Separator className="bg-secondary h-px my-2 md:ml-18" />
      <div className="flex flex-col md:flex-row px-2 md:ml-18 md:px-4 h-full md:space-x-2 items-start md:items-center">
        <span className="font-nunito text-sm md:text-md text-muted-foreground">
          {description}
        </span>
        {tags.length > 0 && (
          <>
            <Separator
              orientation="vertical"
              className="hidden md:block w-px md:w-0.5 h-6 bg-secondary mx-2 md:ml-0"
            />
            <div className="flex gap-2 items-center">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="font-tenor text-xs md:text-sm text-muted-foreground"
                >
                  {tag}
                  {index < tags.length - 1 && ","}
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
