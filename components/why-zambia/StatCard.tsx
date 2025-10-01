interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-green-700 mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-1">
        {value}
      </h3>
      <p className="text-gray-700">
        {label}
      </p>
    </div>
  );
}
