import Image from "next/image";

interface TestimonialCardProps {
  logo: string;
  quote?: string;
}

export default function TestimonialCard({ logo, quote }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="w-32 h-32 relative mb-4">
        <Image src={logo} alt="Partner logo" fill className="object-contain" />
      </div>
      {quote &&
        <p className="text-center text-gray-600">
          {quote}
        </p>}
    </div>
  );
}
