"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Why Zambia", href: "/whyzambia" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 backdrop-blur-lg shadow-lg"
        : "bg-white/60 backdrop-blur-lg"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 md:w-16 md:h-16 relative"
          >
            <img
              src="/euzam-logo.jpg"
              alt="Euzam Logo"
              className="object-contain rounded-full w-full h-full"
            />
          </motion.div>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-bold text-green-700"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center relative">
          {navLinks.map(link =>
            <motion.div
              key={link.name}
              className="relative"
              whileHover={{ y: -2 }}
            >
              <Link
                href={link.href}
                className={`font-medium text-lg transition-colors ${pathname ===
                link.href
                  ? "text-green-700"
                  : "text-gray-700 hover:text-green-700"}`}
              >
                {link.name}
                <motion.span
                  layoutId="underline"
                  className={`absolute left-0 bottom-0 h-1 rounded-full bg-green-700`}
                  style={{
                    width: pathname === link.href || undefined ? "100%" : 0
                  }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen
              ? <XMarkIcon className="w-7 h-7 text-gray-700" />
              : <Bars3Icon className="w-7 h-7 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen &&
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-0 right-0 w-3/4 h-screen bg-white/90 backdrop-blur-lg shadow-xl z-50"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-col space-y-6 px-6 py-10"
            >
              {navLinks.map((link, index) =>
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${pathname ===
                    link.href
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </nav>
  );
}
