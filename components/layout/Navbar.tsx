"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Why Zambia", href: "/whyzambia" },
    { name: "News", href: "/blog" },
    { name: "Investors", href: "/investors" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          Euzam
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link =>
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              {link.name}
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen
              ? <XMarkIcon className="w-6 h-6 text-gray-700" />
              : <Bars3Icon className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen &&
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map(link =>
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                {link.name}
              </Link>
            )}
          </div>
        </div>}
    </nav>
  );
}
