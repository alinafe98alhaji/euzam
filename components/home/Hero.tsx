"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-green-700 to-teal-500 text-white min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-10 left-1/4 w-72 h-72 bg-green-900 rounded-full opacity-20 -z-10"
        animate={{ y: ["0%", "15%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute top-64 right-1/3 w-64 h-64 bg-yellow-900 rounded-full opacity-20 -z-10"
        animate={{ y: ["0%", "-10%", "0%"] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full opacity-15 -z-10"
        animate={{ y: ["0%", "10%", "0%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 0.5
        }}
      />

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-4"
      >
        Building{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-200 to-green-50">
          Africa’s Next Landmark Cities
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-2xl mb-8 max-w-3xl"
      >
        From luxury estates to smart city developments, Euzam is shaping
        Zambia’s future. Will you be part of History?
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <motion.div
          whileHover={{ y: -3, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="/projects"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow-lg hover:shadow-2xl transition"
          >
            Explore Our Projects
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ y: -3, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="/investors"
            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded shadow-lg hover:bg-white hover:text-green-700 hover:shadow-2xl transition"
          >
            Partner With Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
