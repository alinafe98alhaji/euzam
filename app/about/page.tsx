import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Leadership from "@/components/about/Leadership";
import Footer from "@/components/layout/Footer";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="space-y-24">
      <OurStory />
      <MissionVision />
      <Values />
      <WhyChooseUs />
      <Leadership />
      <Footer />
    </main>
  );
}
