interface ValueCardProps {
  title: string;
  icon: React.ReactNode;
}

export default function ValueCard({ title, icon }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-green-700 mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
    </div>
  );
}
