import Image from "next/image";

interface LeaderCardProps {
  name: string;
  role: string;
  bio?: string;
  image?: string; // placeholder or later actual photo
}

export default function LeaderCard({
  name,
  role,
  bio,
  image
}: LeaderCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
      <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden bg-gray-200">
        <Image
          src={image || "/images/placeholder-profile.png"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold">
        {name}
      </h3>
      <p className="text-green-700 font-medium">
        {role}
      </p>
      {bio &&
        <p className="text-gray-600 mt-2">
          {bio}
        </p>}
    </div>
  );
}
