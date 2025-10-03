"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[160px] opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Story
          </span>
        </motion.h2>

        {/* Story section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              A Vision for Zambia’s Future 🚀
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded with a bold and ambitious vision,{" "}
              <span className="font-semibold text-white">
                Euzam Consulting
              </span>{" "}
              is spearheading landmark developments redefining Zambia’s urban
              and tourism landscape. From luxury residential communities to mega
              festivals and smart cities — we blend innovation, local expertise,
              and international standards to inspire, connect, and transform
              lifestyles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/our-story.jpg"
              alt="Our Story"
              width={500}
              height={400}
              className="rounded-3xl shadow-2xl border border-white/10 object-cover"
            />
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* About us cards */}
        <div className="mt-24 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">
                Euzam Projects Ltd
              </span>{" "}
              is a Zambian-registered company and proud member of ZamSafari
              Holdings Group USA. We specialize in{" "}
              <span className="text-indigo-300">
                Real Estate Development, Tourism, Entertainment, Corprate
                Consulting & Branding, and SME & Vendor Empowerment
              </span>{" "}
              — Our focus is to design, manage, and deliver innovative projects
              that build lasting value for our clients, partners, and
              communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
            <p className="text-gray-300 leading-relaxed">
              With a blend of{" "}
              <span className="text-pink-300">local insight</span> and{" "}
              <span className="text-indigo-300">global expertise</span>, our
              team delivers tailor-made solutions that exceed expectations. We
              are committed to{" "}
              <span className="font-semibold text-white">
                excellence, integrity, and innovation
              </span>{" "}
              in every project we touch.
            </p>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-200">
            🌍 Something legendary{" "}
            <span className="text-white">begins in Zambia</span> — will you be
            part of it?
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow-lg hover:scale-105 transition">
            Let’s Collaborate
          </button>
        </motion.div>
      </div>
    </section>
  );
}
