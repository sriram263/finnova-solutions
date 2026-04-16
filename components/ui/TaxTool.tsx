"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Building2, Calculator, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TaxTool() {
  const [activeTab, setActiveTab] = useState<"gst" | "income">("income");

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#000c19]/50 backdrop-blur-xl shadow-2xl">
      <div className="flex border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => setActiveTab("income")}
          className={cn(
            "flex-1 py-4 text-center font-semibold transition-colors flex items-center justify-center gap-2",
            activeTab === "income" 
              ? "text-brand-blue border-b-2 border-brand-blue bg-blue-50/50 dark:bg-brand-blue/10" 
              : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          )}
        >
          <Building2 className="w-5 h-5" />
          Corporate Income Tax
        </button>
        <button
          onClick={() => setActiveTab("gst")}
          className={cn(
            "flex-1 py-4 text-center font-semibold transition-colors flex items-center justify-center gap-2",
            activeTab === "gst" 
              ? "text-brand-blue border-b-2 border-brand-blue bg-blue-50/50 dark:bg-brand-blue/10" 
              : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          )}
        >
          <FileText className="w-5 h-5" />
          GST & Indirect Tax
        </button>
      </div>

      <div className="p-8 md:p-12 min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "income" ? (
            <motion.div
              key="income"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Smart Tax Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our proprietary framework analyzes your corporate structure to identify deduction opportunities, R&D credits, and restructuring benefits. 
                Average client savings range from 15% to 30% in effective tax rate.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Standard Rate</div>
                  <div className="text-3xl font-bold text-gray-400 line-through">25%</div>
                </div>
                <div className="bg-brand-blue/10 p-4 rounded-xl border border-brand-blue/20">
                  <div className="text-sm text-brand-blue dark:text-blue-400 mb-1">Optimized Effective Rate</div>
                  <div className="text-3xl font-bold text-brand-blue">~18%</div>
                </div>
              </div>

              <button className="flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all mt-6 group">
                <Calculator className="w-5 h-5" />
                <span>Calculate Potential Savings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="gst"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-brand-navy dark:text-white">Seamless GST Compliance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Navigate the complex terrain of Indian GST with our automated reconciliation tools and expert dispute resolution team.
                Ensure 100% ITC matching and zero compliance defaults.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  { label: "ITC Reconciliation match rate", value: "99.9%" },
                  { label: "Average assessment closure time", value: "45 Days" },
                  { label: "Compliance defaults", value: "Zero" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</span>
                    <span className="text-brand-blue font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all mt-6 group">
                <FileText className="w-5 h-5" />
                <span>Get a Free GST Health Check</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
