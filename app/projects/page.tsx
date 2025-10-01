// import ProjectsIntro from "@/components/projects/ProjectsIntro";
import ProjectCategory from "@/components/projects/ProjectCategory";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  return (
    <main className="space-y-24">
      {/* <ProjectsIntro /> */}
      <ProjectCategory
        title="Real Estate & Smart Cities"
        projects={[
          {
            title: "Tale Green City",
            image: "/images/tale-green-city.png",
            description: "Zambia’s first luxury smart city.",
            link: "/projects/tale-green-city"
          }
        ]}
      />
      <ProjectCategory
        title="Tourism & Hospitality"
        projects={[
          {
            title: "ZamSafari Resorts",
            image: "/images/zamsafari-resorts.png",
            link: "/projects/zamsafari-resorts"
          },
          {
            title: "Safari Lodges",
            image: "/images/safari-lodges.png",
            link: "/projects/safari-lodges"
          }
        ]}
      />
      <ProjectCategory
        title="Entertainment & Culture"
        projects={[
          {
            title: "Festival of Stars",
            image: "/images/festival-of-stars.png",
            link: "/projects/festival-of-stars"
          },
          {
            title: "Dome Arena",
            image: "/images/dome-arena.png",
            link: "/projects/dome-arena"
          }
        ]}
      />
      <ProjectCategory
        title="Commercial & Mixed Use"
        projects={[
          {
            title: "Service Plots",
            image: "/images/service-plots.png",
            link: "/projects/service-plots"
          },
          {
            title: "Retail Spaces",
            image: "/images/retail-spaces.png",
            link: "/projects/retail-spaces"
          }
        ]}
      />
      <Footer />
    </main>
  );
}
