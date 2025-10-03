"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  HomeIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import { JSX } from "react/jsx-runtime";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
};

const services: Service[] = [
  {
    title: "Real Estate & Infrastructure",
    description: "Smart cities, malls, condos & luxury residential projects.",
    icon: <HomeIcon className="w-8 h-8" />,
    details: [
      "Smart residential projects (Tale Green City).",
      "Serviced plots, condominiums, and villas.",
      "Mall, office, and retail developments.",
      "Project branding and sales activation."
    ]
  },
  {
    title: "Tourism & Entertainment",
    description: "Mega parks, festivals, hotels & lifestyle hubs.",
    icon: <GlobeAltIcon className="w-8 h-8" />,
    details: [
      "ZamSafari Dome (Africa’s first mega indoor amusement & waterpark).",
      "Festival of Stars – Zambia’s biggest music and cultural festival.",
      "Tourism-linked real estate, hotels, and lifestyle hubs."
    ]
  },
  {
    title: "Corporate Consulting & Marketing",
    description: "Strategic consulting, branding & communications.",
    icon: <BriefcaseIcon className="w-8 h-8" />,
    details: [
      "Strategic consulting for businesses and corporates.",
      "Branding, corporate communications, and sponsorship platforms.",
      "Event management and brand positioning solutions.",
      "Zampreneurs Masterclasses – leadership, negotiation, entrepreneurship.",
      "Executive education and diaspora-focused programs."
    ]
  },
  {
    title: "Vendor & SME Empowerment",
    description: "SME incubation & empowerment programs.",
    icon: <UsersIcon className="w-8 h-8" />,
    details: [
      "Structured vendor ecosystems under Euzam projects.",
      "SME incubation tied to Tale Green City & ZamSafari Mall.",
      "Skills and empowerment programs aligned with national development goals."
    ]
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.22 } }
};

export default function ServicesList(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative">
      {/* Services Section */}
      <div className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-14 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Transforming Zambia through innovation, real estate, tourism, and
            consulting.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto mb-12 relative z-10">
          {services.map((service, index) =>
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative rounded-2xl p-6 bg-white/60 backdrop-blur-md border border-white/20 shadow-md hover:shadow-2xl transform transition-all duration-300 group"
              style={{ WebkitBackdropFilter: "blur(8px)" }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-pink-400 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                {service.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>

              <button
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-500"
              >
                {openIndex === index ? "Hide details" : "View details"}
                <span
                  className={`transition-transform duration-300 ${openIndex ===
                  index
                    ? "rotate-180"
                    : ""}`}
                >
                  ▾
                </span>
              </button>
            </motion.div>
          )}
        </div>

        {/* Accordion (details) */}
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          {services.map((service, index) =>
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-indigo-50 text-indigo-600">
                    {service.icon}
                  </div>
                  <span className="font-semibold text-lg text-gray-900">
                    {service.title}
                  </span>
                </div>

                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-gray-500 text-2xl"
                >
                  ▾
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index &&
                  <motion.div
                    key="panel"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="px-6 pb-6 pt-0 text-gray-700"
                  >
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: {
                          transition: {
                            staggerChildren: 0.02,
                            staggerDirection: -1
                          }
                        },
                        visible: {
                          transition: { staggerChildren: 0.05 }
                        }
                      }}
                      className="space-y-2"
                    >
                      {service.details.map((d, i) =>
                        <motion.li
                          key={i}
                          variants={listItemVariants}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="mt-1 text-indigo-500">●</span>
                          <span>
                            {d}
                          </span>
                        </motion.li>
                      )}
                    </motion.ul>
                  </motion.div>}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative">
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L80,213.3C160,203,320,181,480,170.7C640,160,800,160,960,170.7C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
