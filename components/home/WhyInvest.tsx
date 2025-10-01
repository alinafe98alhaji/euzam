import {
  GlobeAltIcon,
  MapIcon,
  BuildingOffice2Icon
} from "@heroicons/react/24/outline";
import ReasonCard from "./ReasonCard";

const reasons = [
  {
    icon: <GlobeAltIcon className="w-12 h-12" />,
    title: "Fastest Growing Economy",
    description:
      "Zambia is leading Southern Africa with consistent economic growth."
  },
  {
    icon: <MapIcon className="w-12 h-12" />,
    title: "Strategic Location",
    description: "Perfect hub for trade, tourism, and regional connectivity."
  },
  {
    icon: <BuildingOffice2Icon className="w-12 h-12" />,
    title: "Untapped Opportunities",
    description:
      "High potential in real estate, hospitality, and development sectors."
  }
];

export default function WhyInvest() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Invest in Zambia
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map(reason =>
            <ReasonCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          )}
        </div>
      </div>
    </section>
  );
}
