"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  LightBulbIcon,
  StarIcon,
  UserGroupIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import ValueCard from "./ValueCard";

const values = [
  {
    title: "Innovation",
    description: "We think ahead and deliver bold, creative solutions.",
    icon: <LightBulbIcon className="w-12 h-12 text-indigo-500" />
  },
  {
    title: "Excellence",
    description: "We maintain world-class standards in every engagement.",
    icon: <StarIcon className="w-12 h-12 text-pink-500" />
  },
  {
    title: "Integrity",
    description: "We believe in transparency and ethical practice.",
    icon: <ShieldCheckIcon className="w-12 h-12 text-green-500" />
  },
  {
    title: "Partnership",
    description: "We grow with our clients and stakeholders.",
    icon: <UserGroupIcon className="w-12 h-12 text-blue-500" />
  },
  {
    title: "Impact",
    description: "We measure success by the value we create for communities.",
    icon: <SparklesIcon className="w-12 h-12 text-yellow-500" />
  }
];

export default function Values() {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 blur-3xl opacity-60" />

      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Core Values
          </span>
        </motion.h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          The principles that guide everything we do — driving innovation,
          collaboration, and impact for a brighter future.
        </p>
      </div>

      {/* Values grid */}
      <div className="relative grid gap-8 md:grid-cols-5 max-w-6xl mx-auto">
        {values.map((value, i) =>
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-indigo-500/40 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {value.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {value.description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
