"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <div className="bg-brand-navy text-white pt-24 pb-32 -mt-24 mb-16 relative overflow-hidden">
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
        {/* Meet the Founder Section */}
        <section className="py-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-blue/20 bg-gradient-to-br from-brand-navy to-brand-blue overflow-hidden shadow-2xl flex items-center justify-center">
                <span className="text-7xl md:text-8xl font-serif text-white/80">RK</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">Meet the Founder</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-brand-navy dark:text-white mb-2">
                Rajagopalan KR
              </h3>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-semibold mb-6">
                ACA, ACMA, B.Com(A&F)
              </p>

              <div className="bg-gray-50 dark:bg-[#001224] border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-2xl shadow-sm mb-8 border-l-4 border-l-brand-blue relative">
                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed italic font-serif">
                  "An aspiring professional and dual-qualified member (Chartered Accountant & Cost Accountant) dedicated to Auditing & Assurance with a track record of delivering high-quality financial solutions."
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-transform hover:scale-110">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Chartered Accountant</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-transform hover:scale-110">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Cost Accountant</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-transform hover:scale-110">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Auditing Expert</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-transform hover:scale-110">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Financial Solutions</span>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
