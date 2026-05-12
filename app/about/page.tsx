"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const leadership = [
  {
    name: "Rajagopalan KR",
    roleTitle: "Founder & Chairman",
    qualification: "ACA | ACMA | B.Com(A&F)",
    initials: "KRR",
    description: "Dual-qualified finance professional with expertise in Audit, Taxation, Compliance, and Financial Advisory services. Experienced in handling statutory audits, GST and Income Tax matters, ROC compliances, and business advisory assignments across multiple sectors. Focused on delivering practical financial solutions with a strong commitment to professional ethics, regulatory compliance, and long-term business growth. Passionate about building reliable and value-driven financial service practices.",
    highlights: ["Chartered Accountant", "Cost Accountant", "Audit & Assurance", "Business Advisory"]
  },
  {
    name: "Balasubramanian G",
    roleTitle: "Leadership",
    qualification: "Chief Executive Officer (CEO)",
    initials: "BG",
    description: "Experienced in business operations, strategic planning, and organizational management with a focus on sustainable business growth. Skilled in managing client relationships, operational execution, and business development initiatives across dynamic environments. Brings a practical and solution-oriented approach towards leadership, operational efficiency, and long-term value creation. Focused on building scalable and professionally managed business systems.",
    highlights: ["Business Strategy", "Operations Management", "Client Relations", "Growth Planning"]
  },
  {
    name: "Anusha Parthasarathy",
    roleTitle: "Leadership",
    qualification: "Dip IFRS | Chief Financial Officer (CFO)",
    initials: "AP",
    description: "Finance professional with expertise in financial reporting, taxation, compliance management, and advisory services. Specialized in IFRS-based reporting, foreign accounts management, international financial compliance, and regulatory support for domestic and international businesses. Experienced in handling audit support, financial analysis, reconciliations, and compliance reporting with a detail-oriented and process-driven approach. Focused on maintaining financial accuracy, transparency, and strong governance practices.",
    highlights: ["Financial Reporting", "IFRS Compliance", "Foreign Accounts", "Tax & Compliance"]
  },
  {
    name: "Sriram S",
    roleTitle: "Leadership",
    qualification: "Chief Technology Officer (CTO)",
    initials: "SR",
    description: "Technology professional focused on digital transformation, process automation, and system development to support modern business operations. Experienced in implementing technology-driven solutions, managing digital infrastructure, and improving operational efficiency through scalable systems. Works closely with management teams to align technology initiatives with business objectives and client requirements. Passionate about building secure, efficient, and future-ready technology solutions.",
    highlights: ["Technology Solutions", "Process Automation", "System Development", "Digital Transformation"]
  }
];

const icons = [GraduationCap, Award, BookOpen, Briefcase];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <div className="bg-brand-navy text-white pt-24 pb-20 -mt-24 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight"
          >
            About <span className="text-brand-blue">Finnova</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            A legacy of trust, excellence, and unyielding financial strategy.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Section */}
        <section className="py-4">
          <div className="text-center mb-16">
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">Our Leadership</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-brand-navy dark:text-white">
              Meet the Team
            </h3>
          </div>

          <div className="flex flex-col gap-20 md:gap-32">
            {leadership.map((leader, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`w-full md:w-1/3 flex justify-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-blue/20 bg-gradient-to-br from-brand-navy to-brand-blue overflow-hidden shadow-2xl flex items-center justify-center shrink-0">
                    <span className="text-7xl md:text-8xl font-serif text-white/80">{leader.initials}</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`w-full md:w-2/3 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
                >
                  <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">{leader.roleTitle}</h2>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-brand-navy dark:text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-semibold mb-6">
                    {leader.qualification}
                  </p>

                  <div className="bg-gray-50 dark:bg-[#001224] border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-2xl shadow-sm mb-8 border-l-4 border-l-brand-blue relative">
                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed italic font-serif">
                      "{leader.description}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {leader.highlights.map((highlight, hIndex) => {
                      const Icon = icons[hIndex % icons.length];
                      return (
                        <div key={hIndex} className="flex items-center gap-4">
                          <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 dark:bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-transform hover:scale-110">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{highlight}</span>
                        </div>
                      );
                    })}
                  </div>

                </motion.div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
