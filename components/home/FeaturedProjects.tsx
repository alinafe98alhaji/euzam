import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "Tale Green City",
    subtitle: "Zambia’s first luxury smart city",
    image: "/images/tale-green-city.jpg",
    link: "/projects/tale-green-city"
  },
  {
    title: "ZamSafari Festival of Stars",
    subtitle: "Africa’s biggest all-Zambian entertainment event",
    image: "/images/festival-of-stars.jpg",
    link: "/projects/festival-of-stars"
  },
  {
    title: "Waterpark & Dome Arena",
    subtitle: "Family, tourism, and business under one roof",
    image: "/images/waterpark-dome.jpg",
    link: "/projects/waterpark-dome"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map(project =>
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              link={project.link}
            />
          )}
        </div>
      </div>
    </section>
  );
}
