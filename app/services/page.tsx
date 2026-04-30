"use client";

import { motion } from "framer-motion";
import { FileText, ClipboardCheck, TrendingUp, Search, Monitor, ArrowRight, CheckCircle2, Calculator, Landmark, Briefcase, Layers, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "income-tax-services",
    title: "Income Tax Services",
    icon: Landmark,
    description: "Strategic tax planning, Return filing, and Expert representation for individuals and corporate entities.",
    features: [
      "Income Tax Return Filing (Individuals, Firms, Companies)",
      "Tax Planning & Advisory",
      "Handling Scrutiny, Notices & Appeals",
      "Capital Gains & Investment Advisory",
      "Presumptive Taxation Advisory (44AD/44ADA)"
    ],
    color: "bg-rose-50 dark:bg-rose-900/20",
    iconColor: "text-rose-600 dark:text-rose-400"
  },
  {
    id: "gst-services",
    title: "GST Services",
    icon: Calculator,
    description: "Comprehensive GST solutions including registrations, regular filings, audits, and handling litigations.",
    features: [
      "GST Registration & Amendments",
      "Monthly/Quarterly Return Filing (GSTR-1, 3B, 9, 9C)",
      "GST Audits & Assessments",
      "Handling Notices & Litigation (Replies, Appeals)",
      "ITC Reconciliation & Advisory"
    ],
    color: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400"
  },

  {
    id: "statutory-tax-audit",
    title: "Audit & Assurance",
    icon: FileText,
    description: "Expertise in Private Limited companies and Non-corporate entities, ensuring meticulous statutory compliance.",
    features: ["Statutory Audit", "Tax Audit (44AB)", "Bank Branch Audit / Concurrent Audit", "Internal Audit", "Stock & Revenue Audits"],
    color: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    id: "business-setup-compliance",
    title: "Business Setup & Compliance",
    icon: Briefcase,
    description: "Seamless registration and incorporation services with end-to-end MCA and ROC compliance support.",
    features: [
      "Proprietorship, Partnership & LLP Registration",
      "Company Incorporation (including Section 8 Companies)",
      "MCA Compliance (AOC-4, MGT-7, etc.)",
      "ROC Filings & Annual Compliance"
    ],
    color: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    id: "systems-mis",
    title: "Systems & MIS",
    icon: Monitor,
    description: "Proficient exposure in Tally, Netsuite (Oracle ERP), and delivering high-impact MIS preparation for management.",
    features: ["Accounting & Bookkeeping", "End-to-end Accounting Solutions", "Financial Statement Preparation", "MIS Reports & Cash Flow Analysis", "Virtual CFO Services"],
    color: "bg-violet-50 dark:bg-violet-900/20",
    iconColor: "text-violet-600 dark:text-violet-400"
  },
  {
    id: "specialized-audits",
    title: "Specialized Audits",
    icon: Search,
    description: "Dedicated Stock Audit, Fixed Asset Verification, and comprehensive Internal Audit for educational institutions.",
    features: ["Stock Audits", "Fixed Asset Verification", "Internal Audits", "Educational Institutions Focus"],
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  },

  {
    id: "taxation",
    title: "Taxation",
    icon: TrendingUp,
    description: "End-to-end filing of Income Tax, GST, and TDS returns including complex BOA reconciliation.",
    features: ["Income Tax Filing", "GST Compliance", "TDS Returns", "BOA Reconciliation"],
    color: "bg-cyan-50 dark:bg-cyan-900/20",
    iconColor: "text-cyan-600 dark:text-cyan-400"
  },
  {
    id: "compliance-reporting",
    title: "Compliance & Reporting",
    icon: ClipboardCheck,
    description: "Specialized in CARO, Accounting Standards, and exhaustive FCRA Compliance for Non-Governmental Organizations.",
    features: ["CARO Reporting", "Accounting Standards Advisory", "FCRA Compliance for NGOs", "Regulatory Disclosures"],
    color: "bg-indigo-50 dark:bg-indigo-900/20",
    iconColor: "text-indigo-600 dark:text-indigo-400"
  },
  {
    id: "ngo-fcra-compliance",
    title: "NGOs & FCRA Compliance Services",
    icon: Globe,
    description: "End-to-end advisory and registration for trusts, NGOs, including 12AB/80G and FCRA compliance.",
    features: [
      "Trust Registration (Trust Deed drafting & registration)",
      "12AB/80G Registration",
      "Filing of donation statements (Form 10BD & 10BE)",
      "NGO audit, Utilization Certificates (UC), and grant certifications",
      "Registration under Foreign Contribution (Regulation) Act, 2010",
      "Filing of Annual Return(FC-4) and FCRA Advisory"
    ],
    color: "bg-pink-50 dark:bg-pink-900/20",
    iconColor: "text-pink-600 dark:text-pink-400"
  },
  {
    id: "other-services",
    title: "Other Services",
    icon: Layers,
    description: "Comprehensive assistance for various registrations, digital signatures, and specialized project reports.",
    features: [
      "PAN, TAN, and Other Registrations",
      "Project Reports & Loan Assistance",
      "Digital Signature (DSC) Assistance",
      "Certification & Attestation Services"
    ],
    color: "bg-teal-50 dark:bg-teal-900/20",
    iconColor: "text-teal-600 dark:text-teal-400"
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
