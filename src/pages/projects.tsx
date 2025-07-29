import ProjectItem from "@/components/project-item";

function projects() {
  return (
    <>
      <div>
        <h2 className="font-tenor text-4xl">Projects</h2>
      </div>
      <ProjectItem
        title="Cobra"
        description="E-commerce"
        tags={["MERN", "Admin", "REST"]}
        frontend="https://github.com/example/frontend"
        backend="https://github.com/example/backend"
        deployment="https://cobra-shop.example.com"
      />
    </>
  );
}

export default projects;
