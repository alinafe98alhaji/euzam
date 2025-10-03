"use client";

import Footer from "@/components/layout/Footer";
import { MapPin, Clock, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-100 to-yellow-80 py-20 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-700  to-yellow-600 drop-shadow-lg">
          Our Location
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto backdrop-blur-sm bg-white/30 rounded-2xl p-4 shadow">
          Visit us at{" "}
          <span className="font-semibold text-green-800">
            Euzam Consulting Zambia
          </span>{" "}
          for expert advice in luxury tourism, real estate, and agribusiness
          management.
        </p>
      </div>

      {/* Google Map */}
      <div className="relative w-full h-96 mb-20 rounded-3xl overflow-hidden shadow-2xl border border-green-100 hover:scale-[1.01] transition-transform">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7809005124145!2d28.313855312085995!3d-15.388347813028934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b38a99c70fb%3A0xa1325e0eeed0ff87!2sSunShare%20Tower!5e0!3m2!1sen!2szm!4v1759490583026!5m2!1sen!2szm"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Details */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Address */}
        <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-2xl transition min-h-[220px]">
          <MapPin className="h-10 w-10 text-green-600 mb-4" />
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            Address
          </h3>
          <p className="text-gray-700 leading-relaxed">
            9th Floor Sunshare Tower <br />
            Plot 15585, Olympia <br />
            1 Katima Mulilo Rd, Lusaka 10101
          </p>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-2xl transition min-h-[220px]">
          <Clock className="h-10 w-10 text-yellow-500 mb-4" />
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Hours</h3>
          <p className="text-gray-700 leading-relaxed">
            Mon - Fri: 9am - 5pm <br />
            Sat - Sun: Closed
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-2xl transition min-h-[220px]">
          <Phone className="h-10 w-10 text-green-600 mb-4" />
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            Contact
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Phone: +260 123 456 789 <br />
            Email: info@euzam.com
          </p>
        </div>
      </div>
      <div className="mt-10" />
      <Footer />
      <div />
    </section>
  );
}
