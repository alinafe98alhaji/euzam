"use client";

import { motion } from "framer-motion";
import {
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  MapIcon
} from "@heroicons/react/24/outline";

const stats = [
  {
    icon: <ChartBarIcon className="w-10 h-10 text-white" />,
    value: "6.5%",
    label: "GDP Growth (Projected)",
    numberColor: "text-green-700",
    bg: "bg-gradient-to-br from-green-400 to-green-600"
  },
  {
    icon: <GlobeAltIcon className="w-10 h-10 text-white" />,
    value: "30% ↑",
    label: "Tourism Arrivals (Past Decade)",
    numberColor: "text-yellow-500",
    bg: "bg-gradient-to-br from-yellow-400 to-yellow-500"
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 text-white" />,
    value: "Stable",
    label: "Political Stability & Reform",
    numberColor: "text-green-700",
    bg: "bg-gradient-to-br from-green-400 to-green-600"
  },
  {
    icon: <MapIcon className="w-10 h-10 text-white" />,
    value: "SADC Hub",
    label: "Strategic Location for Trade",
    numberColor: "text-yellow-500",
    bg: "bg-gradient-to-br from-yellow-400 to-yellow-500"
  }
];

function Blob({
  className,
  duration,
  delay
}: {
  className: string;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      animate={{ y: ["0%", "15%", "0%"] }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay
      }}
    />
  );
}

export default function WhyZambia() {
  return (
    <section className="relative bg-green-50 overflow-visible pt-20 pb-32">
      {/* Floating Blobs */}
      <Blob
        className="w-36 h-36 bg-green-300 top-10 left-10 opacity-30"
        duration={6}
        delay={0}
      />
      <Blob
        className="w-28 h-28 bg-yellow-400 top-20 right-20 opacity-40"
        duration={5}
        delay={1}
      />
      <Blob
        className="w-20 h-20 bg-green-200 top-64 left-1/3 opacity-30"
        duration={7}
        delay={0.5}
      />
      <Blob
        className="w-32 h-32 bg-yellow-300 top-80 right-1/4 opacity-25"
        duration={6}
        delay={0.3}
      />
      <Blob
        className="w-24 h-24 bg-green-400 top-96 left-1/2 opacity-30"
        duration={8}
        delay={0.7}
      />

      {/* Hero Header */}
      <div className="max-w-5xl mx-auto text-center px-6 mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4"
        >
          Why <span className="text-green-700">Zambia</span>, Why{" "}
          <span className="text-yellow-500">Now</span>?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-700 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Zambia is a land of opportunities — strategically located, politically
          stable, and rich in natural and human resources. Explore why investing
          or working here makes sense.
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-1 bg-green-700 mx-auto mt-4 rounded-full"
        />
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transform transition hover:-translate-y-3 h-full">
              <div
                className={`p-5 rounded-full mb-6 flex items-center justify-center ${stat.bg}`}
              >
                {stat.icon}
              </div>
              <h3
                className={`text-4xl font-extrabold mb-2 ${stat.numberColor}`}
              >
                {stat.value}
              </h3>
              <p className="text-gray-600 text-lg">
                {stat.label}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center relative z-10">
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#contact"
          className="inline-block bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-green-800 transition"
        >
          Learn More About Investing
        </motion.a>
      </div>
    </section>
  );
}
