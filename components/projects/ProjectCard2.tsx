import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  description?: string;
  link: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  link
}: ProjectCardProps) {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        <div className="relative w-full h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            {title}
          </h3>
          {description &&
            <p className="text-gray-700">
              {description}
            </p>}
        </div>
      </div>
    </Link>
  );
}
