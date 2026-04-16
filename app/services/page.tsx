"use client";

import { motion } from "framer-motion";
import { FileText, Building2, Briefcase, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "audit",
    title: "Audit & Assurance",
    icon: FileText,
    description: "Statutory audits, internal audits, and forensic investigations ensuring absolute compliance and unearthing operational inefficiencies.",
    features: ["Statutory & Tax Audits", "Forensic Accounting", "Risk Management & Internal Control", "IFRS Implementation"],
    color: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    id: "tax",
    title: "Corporate Taxation",
    icon: Building2,
    description: "Strategic tax planning that minimizes liabilities while adhering strictly to domestic and international tax laws.",
    features: ["Corporate Tax Planning", "International Taxation & Transfer Pricing", "Tax Assessments & Appeals", "Expatriate Taxation"],
    color: "bg-indigo-50 dark:bg-indigo-900/20",
    iconColor: "text-indigo-600 dark:text-indigo-400"
  },
  {
    id: "gst",
    title: "GST & Indirect Tax",
    icon: TrendingUp,
    description: "Comprehensive end-to-end GST compliance, automated reconciliation, and highly effective dispute resolution.",
    features: ["GST Registration & Filing", "ITC Reconciliation", "Customs & Foreign Trade Policy", "Litigation Support"],
    color: "bg-cyan-50 dark:bg-cyan-900/20",
    iconColor: "text-cyan-600 dark:text-cyan-400"
  },
  {
    id: "startup",
    title: "Startup Advisory",
    icon: Briefcase,
    description: "We act as your virtual CFO, structuring equity, managing cap tables, and ensuring VC-level compliance.",
    features: ["Virtual CFO Services", "Fundraising Support & Due Diligence", "Valuation Services", "ESOP Structuring"],
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="bg-brand-navy text-white pt-24 pb-32 -mt-24 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight"
          >
            Elite Financial <span className="text-brand-blue">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Delivering precision, compliance, and strategic foresight across every facet of corporate finance and taxation.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-[#001224] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300"
            >
              <div className={cn("w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-transform group-hover:-translate-y-2", service.color)}>
                <service.icon className={cn("w-8 h-8", service.iconColor)} />
              </div>
              
              <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-4">
                {service.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 min-h-[48px]">
                {service.description}
              </p>
              
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
                Core Offerings
              </h3>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all group/link"
              >
                Discuss this service <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
