import {
  ShieldCheckIcon,
  LightBulbIcon,
  StarIcon,
  WalletIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import ValueCard from "./ValueCard";

const values = [
  { title: "Integrity", icon: <ShieldCheckIcon className="w-12 h-12" /> },
  { title: "Innovation", icon: <LightBulbIcon className="w-12 h-12" /> },
  { title: "Excellence", icon: <StarIcon className="w-12 h-12" /> },
  { title: "Sustainability", icon: <WalletIcon className="w-12 h-12" /> },
  { title: "Impact", icon: <SparklesIcon className="w-12 h-12" /> }
];

export default function Values() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-5 max-w-6xl mx-auto">
        {values.map(value =>
          <ValueCard key={value.title} title={value.title} icon={value.icon} />
        )}
      </div>
    </section>
  );
}
