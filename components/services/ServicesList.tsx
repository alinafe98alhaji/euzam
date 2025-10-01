import ServiceCard from "./ServicesCard";
import {
  ChartBarIcon,
  HomeIcon,
  GlobeAltIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Investment Advisory",
    description: "Helping investors access Zambia’s fastest-growing sectors.",
    icon: <ChartBarIcon className="w-12 h-12" />
  },
  {
    title: "Real Estate Development",
    description: "From land acquisition to turnkey smart cities.",
    icon: <HomeIcon className="w-12 h-12" />
  },
  {
    title: "Hospitality & Tourism Projects",
    description: "Designing destinations that attract global visitors.",
    icon: <GlobeAltIcon className="w-12 h-12" />
  },
  {
    title: "Consulting & Partnerships",
    description:
      "Advisory support for governments, corporations, and institutions.",
    icon: <BriefcaseIcon className="w-12 h-12" />
  }
];

export default function ServicesList() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
        {services.map(service =>
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        )}
      </div>
    </section>
  );
}
