import StatsGrid from "@/components/why-zambia/StatsGrid";
import Footer from "@/components/layout/Footer";

export default function WhyZambiaPage() {
  return (
    <main className="space-y-24 px-6 md:px-20">
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Why Zambia, Why Now
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          Zambia offers unparalleled opportunities for investment with its
          fast-growing economy, strategic location in Southern Africa, and
          thriving tourism sector.
        </p>
      </section>

      <StatsGrid />

      {/* Optional infographic section can go here */}

      <Footer />
    </main>
  );
}
