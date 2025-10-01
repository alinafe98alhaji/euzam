interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ReasonCard({
  icon,
  title,
  description
}: ReasonCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="text-green-700 mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
