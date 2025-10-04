import ProjectCard from "./ProjectCard2";

interface Project {
  title: string;
  image: string;
  description?: string;
  link: string;
}

interface ProjectCategoryProps {
  title: string;
  projects: Project[];
}

export default function ProjectCategory({
  title,
  projects
}: ProjectCategoryProps) {
  return (
    <section className="px-6 mt-40 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        {title}
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map(project =>
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        )}
      </div>
    </section>
  );
}
