"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const articles = [
  {
    id: 1,
    title: "GST Changes for 2026: Navigating the New Input Tax Credit Paradigm",
    category: "Taxation",
    author: "Tax Advisory Team",
    date: "April 12, 2026",
    excerpt: "With the recent overhaul in the GST council's approach to ITC claiming, businesses must restructure their procurement loops. We analyze the critical impacts on working capital and vendor compliance ratings.",
    readTime: "8 min read",
    highlight: true,
  },
  {
    id: 2,
    title: "Startup Compliance 101: From Seed to Series A",
    category: "Startups",
    author: "Finnova Startup Desk",
    date: "April 05, 2026",
    excerpt: "Early-stage founders often defer compliance until due diligence. Discover the top 5 regulatory pitfalls that derail funding rounds, including FEMA violations and mismanaged cap tables.",
    readTime: "6 min read",
    highlight: false,
  },
  {
    id: 3,
    title: "National Tax Strategies: Corporate Restructuring for M&As",
    category: "Corporate Advisory",
    author: "Senior Partners",
    date: "March 28, 2026",
    excerpt: "When executing mergers and acquisitions, the tax structure often dictates the deal value. This post explores advanced demerger strategies under section 2(19AA) of the Income Tax Act.",
    readTime: "12 min read",
    highlight: false,
  }
];

export default function KnowledgeHubPage() {
  return (
    <div className="pt-12 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white mb-4">
          Knowledge <span className="text-brand-blue">Hub</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Insights, analysis, and strategic perspectives from Finnova's industry experts to keep you ahead of the regulatory curve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.article 
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 group",
              article.highlight 
                ? "md:col-span-3 border-brand-blue/30 bg-blue-50/30 dark:bg-brand-blue/10 flex-col md:flex-row md:items-center p-8 md:p-12" 
                : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#001224] hover:shadow-xl hover:border-brand-blue/50 p-6 md:p-8"
            )}
          >
            <div className={cn("flex-1", article.highlight ? "md:pr-12" : "")}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-brand-navy text-white text-xs font-bold rounded-full uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {article.date}
                </span>
              </div>
              
              <h2 className={cn(
                "font-bold text-brand-navy dark:text-white mb-4 group-hover:text-brand-blue transition-colors",
                article.highlight ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
              )}>
                {article.title}
              </h2>
              
              <p className={cn(
                "text-gray-600 dark:text-gray-400 mb-6",
                article.highlight ? "text-lg max-w-3xl" : "text-base line-clamp-3"
              )}>
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <User className="w-4 h-4 text-brand-blue" />
                  {article.author}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {article.readTime}
                </span>
              </div>
            </div>
            
            {article.highlight && (
              <div className="hidden md:flex flex-col items-center justify-center pl-12 border-l border-brand-blue/20">
                 <Link 
                  href={`/knowledge-hub/${article.id}`} 
                  className="flex items-center justify-center w-20 h-20 bg-brand-blue text-white rounded-full group-hover:scale-110 transition-transform shadow-lg shadow-brand-blue/30"
                >
                  <ArrowRight className="w-8 h-8" />
                </Link>
              </div>
            )}
            {!article.highlight && (
              <Link 
                href={`/knowledge-hub/${article.id}`}
                className="mt-6 inline-flex items-center gap-2 text-brand-blue font-bold group-hover:gap-3 transition-all"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
