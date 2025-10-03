"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Layers, Users, Star } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#1a4d2e]" />,
    title: "A Zambian Company with International Reach",
    desc:
      "We combine strong local roots with the capacity to deliver at global standards."
  },
  {
    icon: <Globe2 className="w-8 h-8 text-[#1a4d2e]" />,
    title: "Global Networks & Partnerships",
    desc:
      "Backed by ZamSafari Holdings Group USA and a worldwide network of partners."
  },
  {
    icon: <Layers className="w-8 h-8 text-[#1a4d2e]" />,
    title: "Multi-Sector Expertise",
    desc:
      "From real estate to consulting, education, and entertainment, we bring diverse expertise."
  },
  {
    icon: <Users className="w-8 h-8 text-[#1a4d2e]" />,
    title: "Proven Leadership",
    desc:
      "Our team combines international and local experience to ensure successful outcomes."
  },
  {
    icon: <Star className="w-8 h-8 text-[#1a4d2e]" />,
    title: "Commitment to Legacy",
    desc: "We deliver projects designed to make a lasting positive impact."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white">
      {/* Wave Divider (top, full width) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,128L48,117.3C96,107,192,85,288,74.7C384,64,480,64,576,80C672,96,768,128,864,138.7C960,149,1056,139,1152,133.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="#1a4d2e"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a4d2e]"
        >
          Why Choose <span className="text-[#e6b800]">Euzam Projects Ltd?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4 space-x-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-[#1a4d2e]">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
