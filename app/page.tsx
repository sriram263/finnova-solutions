"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Users, Clock, Lightbulb, CalendarCheck, Scale, Headphones, Handshake } from "lucide-react";
import Link from "next/link";
import { TrustBar } from "@/components/ui/TrustBar";

const advantages = [
  {
    icon: Users,
    title: "Elite Partner Access",
    desc: "Direct involvement of top-tier partners in critical advisory and complex transactions."
  },
  {
    icon: Clock,
    title: "Proactive Strategy",
    desc: "We anticipate regulatory changes before they happen, keeping your business steps ahead."
  },
  {
    icon: Lightbulb,
    title: "Practical & Solution-Oriented Approach",
    desc: "We go beyond compliance to provide workable, business-friendly solutions aligned with current laws and regulations."
  },
  {
    icon: CalendarCheck,
    title: "Timely & Reliable Execution",
    desc: "Strong focus on deadlines, with proactive reminders and structured processes to ensure timely filings and compliance."
  },
  {
    icon: Scale,
    title: "Ethical & Professional Standards",
    desc: "Services are delivered in line with the guidelines of the Institute of Chartered Accountants of India, maintaining integrity, confidentiality, and independence."
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    desc: "From registrations and routine compliance to audits and representation, we provide a single point of contact for all professional needs."
  },
  {
    icon: Handshake,
    title: "Commitment Focused",
    desc: "We focus on building long-term relationships with our clients based on trust, integrity, and professionalism. We aim to make compliance simple and stress-free, so you can focus on running your business."
  },
  {
    icon: ShieldCheck,
    title: "Bulletproof Compliance",
    desc: "100% adherence to evolving ICAI and statutory frameworks, mitigating all legal risks."
  },
  {
    icon: TrendingUp,
    title: "Growth-Centric",
    desc: "We align financial structures to optimize funding opportunities and operational scaling."
  }
];

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
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-navy dark:text-white mb-4 uppercase"
            >
              Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">
                Financial Strategy
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl md:text-4xl font-serif italic text-brand-blue mb-8 leading-tight drop-shadow-sm"
            >
              &quot;We value your values&quot;
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light"
            >
              Empowering top-tier organizations and innovative startups with precise tax engineering, auditing, and strategic compliance.
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

      {/* Introduction Section */}
      <section className="py-24 md:py-32 bg-white dark:bg-[#000c19] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 lg:p-16 rounded-3xl bg-white dark:bg-[#001224] border border-gray-100 dark:border-gray-800 shadow-2xl shadow-blue-900/5 dark:shadow-none relative"
          >
            {/* Decorative accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent"></div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy dark:text-white mb-10 text-center tracking-tight">
              Partnering in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">Financial Success</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed font-light text-justify md:text-center">
              <p>
                We, <span className="font-semibold text-brand-navy dark:text-white">Finnova Solutions</span>, provide end-to-end services in taxation, audit, and compliance for businesses and individuals. Our approach is built on a strong foundation of technical expertise combined with practical insight. We work closely with our clients to understand their specific needs and provide tailored support at every stage — from setting up a business and managing routine compliance to handling audits, assessments, and advisory matters.
              </p>
              <div className="flex justify-center my-2">
                <div className="w-16 h-px bg-gray-200 dark:bg-gray-800"></div>
              </div>
              <p>
                Our objective is to deliver clarity, reliability, and confidence in all financial and compliance-related areas. Whether you are a startup building your foundation, a growing enterprise managing multiple compliances, or an individual seeking efficient tax planning and filing, we offer structured and dependable support with a strong emphasis on timeliness and accuracy.
              </p>
              <div className="flex justify-center my-2">
                <div className="w-16 h-px bg-gray-200 dark:bg-gray-800"></div>
              </div>
              <p>
                We believe in building long-term professional relationships based on trust, transparency, and consistent service quality. Every engagement is handled with attention to detail, clear communication, and a commitment to delivering value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 dark:bg-[#000813]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">Our Edge, Your Benefit</h2>
              <p className="text-gray-800 dark:text-gray-400 text-xl font-medium">
                Your values inspire our excellence.
                That’s what sets us apart.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline group">
              Learn about our firm <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative overflow-hidden w-full py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-gray-50 dark:from-[#000813] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-gray-50 dark:from-[#000813] to-transparent z-10 pointer-events-none"></div>

            <div className="flex">
              <motion.div
                className="flex gap-6 pr-6 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
              >
                {[...advantages, ...advantages].map((feature, i) => (
                  <div
                    key={i}
                    className="w-[300px] md:w-[380px] shrink-0 p-8 rounded-2xl bg-white dark:bg-[#001224] border border-gray-100 dark:border-gray-800 group hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 relative flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3 whitespace-normal">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm whitespace-normal flex-1">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
