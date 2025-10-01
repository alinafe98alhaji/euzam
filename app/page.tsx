import WhyInvest from "@/components/home/WhyInvest";
//import Testimonials from "@/components/home/Testimonials";

import Hero from "@/components/home/Hero";
import AboutSnippet from "@/components/home/AboutSnippet";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSnippet />
      <FeaturedProjects />
      <WhyInvest />
      <Testimonials />
      <Footer />
    </main>
  );
}
