import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    logo: "/images/partner1.png",
    quote: "Euzam Consulting transformed our investment strategy in Zambia."
  },
  {
    logo: "/images/partner2.png"
  },
  {
    logo: "/images/partner3.png",
    quote: "Professional, innovative, and results-driven."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Leading Investors, Clients, and Partners
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) =>
            <TestimonialCard key={index} logo={t.logo} quote={t.quote} />
          )}
        </div>
      </div>
    </section>
  );
}
