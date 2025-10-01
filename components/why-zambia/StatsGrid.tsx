import StatCard from "./StatCard";
import {
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  MapIcon
} from "@heroicons/react/24/outline";

const stats = [
  {
    icon: <ChartBarIcon className="w-12 h-12" />,
    value: "6.5%",
    label: "GDP Growth (Projected)"
  },
  {
    icon: <GlobeAltIcon className="w-12 h-12" />,
    value: "30% ↑",
    label: "Tourism Arrivals (Past Decade)"
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12" />,
    value: "Stable",
    label: "Political Stability & Reform"
  },
  {
    icon: <MapIcon className="w-12 h-12" />,
    value: "SADC Hub",
    label: "Strategic Location for Trade"
  }
];

export default function StatsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
      {stats.map(stat =>
        <StatCard
          key={stat.label}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      )}
    </div>
  );
}
