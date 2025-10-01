// components/services/ServiceCard.tsx
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-green-700 mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
}
