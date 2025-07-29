import ProjectItem from "@/components/project-item";
import { Separator } from "@radix-ui/react-separator";
import Articles from "@/components/articles-carousel";
import { projectList } from "@/data/projects";

function Projects() {
  return (
    <>
      <div className="flex min-h-28 mb-8 ml-4 md:ml-0">
        <Separator
          orientation="vertical"
          className="w-px md:w-0.5 bg-secondary mr-2 md:mr-4"
        />
        <h2 className="font-tenor text-4xl mt-18">
          Work & <br />
          Play
        </h2>
      </div>
      <div className="md:h-10/12 flex flex-col md:flex-row md:space-x-32 mx-12">
        <div className="md:w-1/3 order-2 md:order-1 self-auto md:self-end my-12 md:m-16">
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
