type ValueCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function ValueCard({
  title,
  description,
  icon
}: ValueCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
      <div className="mb-4">
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
