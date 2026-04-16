"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Users, Clock } from "lucide-react";
import Link from "next/link";
import { TrustBar } from "@/components/ui/TrustBar";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TaxTool } from "@/components/ui/TaxTool";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-white dark:bg-[#000c19]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-brand-navy/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-blue-50/50 dark:bg-brand-blue/10 text-brand-blue font-medium text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              Setting the Standard in National Accountancy
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-navy dark:text-white mb-6 uppercase"
            >
              Excellence in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">
                Financial Strategy
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light"
            >
              Empowering top-tier organizations and innovative startups with precise tax engineering, forensic auditing, and strategic compliance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-blue rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300"
              >
                Explore Our Solutions
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-navy dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full hover:border-brand-navy dark:hover:border-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Our Impact Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#000813]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">Measurable National Impact</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We don't just balance books; we engineer growth. Our track record speaks for itself.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: 500, suffix: "+", label: "Enterprise Clients" },
              { value: 2, suffix: "B+", prefix: "$", label: "Assets Audited" },
              { value: 99, suffix: "%", label: "Compliance Success" },
              { value: 50, suffix: "+", label: "Industry Awards" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white dark:bg-[#001224] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-2 flex justify-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-[#000c19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">The Finnova Advantage</h2>
              <p className="text-gray-600 dark:text-gray-400">
                In a highly competitive landscape, technical proficiency is the baseline. Our firm offers strategic foresight that transforms tax into a competitive advantage.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline group">
              Learn about our firm <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Bulletproof Compliance",
                desc: "100% adherence to evolving ICAI and statutory frameworks, mitigating all legal risks."
              },
              {
                icon: TrendingUp,
                title: "Growth-Centric",
                desc: "We align financial structures to optimize funding opportunities and operational scaling."
              },
              {
                icon: Users,
                title: "Elite Partner Access",
                desc: "Direct involvement of top-tier partners in critical advisory and complex transactions."
              },
              {
                icon: Clock,
                title: "Proactive Strategy",
                desc: "We anticipate regulatory changes before they happen, keeping your business steps ahead."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-[#001224] border border-gray-100 dark:border-gray-800 group hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tool Preview */}
      <section className="py-24 bg-gradient-to-br from-[#001F3F] to-[#000813] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience Our Technical Prowess</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Interact with our demonstrative intelligence tools to see how we analyze and optimize complex tax structures.
            </p>
          </div>
          
          <TaxTool />
        </div>
      </section>
    </div>
  );
}
