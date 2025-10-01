import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  subtitle,
  image,
  link
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
