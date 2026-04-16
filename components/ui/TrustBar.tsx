"use client";

import { motion } from "framer-motion";

const services = [
  "Audit & Assurance",
  "•",
  "Corporate Taxation",
  "•",
  "GST & Indirect Tax",
  "•",
  "Startup Advisory",
  "•",
  "Financial Consulting",
  "•",
  "Risk Management",
  "•",
  "Valuation Services",
  "•",
  "International Taxation",
  "•",
];

export function TrustBar() {
  return (
    <div className="w-full overflow-hidden bg-brand-navy py-4 border-y border-brand-blue/30 relative">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...services, ...services].map((service, index) => (
            <span
              key={index}
              className={`inline-block px-4 text-sm md:text-base font-medium tracking-wide ${
                service === "•" ? "text-brand-blue" : "text-gray-300"
              }`}
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
