import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center md:text-left space-y-6">
        <p className="text-lg md:text-xl text-gray-700">
          Euzam Consulting is at the forefront of Zambia’s transformation. As
          part of the ZamSafari Holdings Group USA, we specialize in real
          estate, hospitality, smart cities, and consulting — delivering
          projects that redefine lifestyles and opportunities.
        </p>
        <Link
          href="/about"
          className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
