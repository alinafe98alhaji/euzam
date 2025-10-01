import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-500 text-white min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Building Africa’s Next Landmark Cities
      </h1>
      <p className="text-lg md:text-2xl mb-8">
        From luxury estates to smart city developments, Euzam is shaping
        Zambia’s future.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/projects"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Explore Our Projects
        </Link>
        <Link
          href="/investors"
          className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-green-700 transition"
        >
          Partner With Us
        </Link>
      </div>
    </section>
  );
}
