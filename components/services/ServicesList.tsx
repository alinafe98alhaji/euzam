"use client";

import {
  HomeIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Real Estate & Infrastructure",
    description: "Smart cities, malls, condos & luxury residential projects.",
    icon: <HomeIcon className="w-12 h-12 text-indigo-600" />,
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
    icon: <GlobeAltIcon className="w-12 h-12 text-indigo-600" />,
    details: [
      "ZamSafari Dome (Africa’s first mega indoor amusement & waterpark).",
      "Festival of Stars – Zambia’s biggest music and cultural festival.",
      "Tourism-linked real estate, hotels, and lifestyle hubs."
    ]
  },
  {
    title: "Corporate Consulting & Marketing",
    description: "Strategic consulting, branding & communications.",
    icon: <BriefcaseIcon className="w-12 h-12 text-indigo-600" />,
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
    icon: <UsersIcon className="w-12 h-12 text-indigo-600" />,
    details: [
      "Structured vendor ecosystems under Euzam projects.",
      "SME incubation tied to Tale Green City & ZamSafari Mall.",
      "Skills and empowerment programs aligned with national development goals."
    ]
  }
];

export default function ServicesList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative">
      {/* Services Section */}
      <div className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/3 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
        </div>

        {/* Title */}
        <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Transforming Zambia through innovation, real estate, tourism, and
            consulting.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto mb-20 relative z-10">
          {services.map((service, index) =>
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-full bg-indigo-50"
                >
                  {service.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          {services.map((service, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border rounded-2xl shadow-md overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  {service.icon}
                  <span className="font-semibold text-xl text-gray-900">
                    {service.title}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500 text-2xl leading-none"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index &&
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-6 pb-6 space-y-2 text-gray-700"
                  >
                    {service.details.map((point, i) =>
                      <p key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-indigo-500">•</span>
                        {point}
                      </p>
                    )}
                  </motion.div>}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      {/* WAVE DIVIDER */}
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
