"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Building, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    serviceRequired: "",
    serviceDescription: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const sheetdbUrl = process.env.NEXT_PUBLIC_SHEETDB_URL;

      if (!sheetdbUrl) {
        throw new Error("SheetDB URL is not configured");
      }

      const response = await fetch(sheetdbUrl, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: [
            {
              "Name": formData.name,
              "Email": formData.email,
              "Company": formData.companyName || "None",
              "Company ": formData.companyName || "None",
              "Company Name": formData.companyName || "None",
              "Service": formData.serviceRequired,
              "Service ": formData.serviceRequired,
              "Service Required": formData.serviceRequired,
              "Message": formData.serviceDescription,
              "Phone": formData.phone || "None",
              "Phone ": formData.phone || "None",
              "Contact Number": formData.phone || "None"
            }
            // Update for Vercel sync - 30 April 2026
          ]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Submission failed with status:", response.status, errorText);
        throw new Error("Failed to submit form");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", companyName: "", serviceRequired: "", serviceDescription: "" });
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("There was an error submitting your request. Please try again or contact us directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-12 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white mb-6">
              Let's Engineer Your <span className="text-brand-blue">Growth</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
              Whether you need strategic tax consulting, a thorough audit, or complete startup advisory, our partners are ready to assist.
            </p>
          </div>

          <div className="space-y-8 pl-4 border-l-2 border-brand-blue/30 h-full">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Headquarters</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  No.22, Sannadhi Street,<br></br>
                  Varadharaja Perumal Temple,<br></br>
                  Little Kanchipuram, TN-631 501.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Direct Line</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">+91 94449 09359</p>
                <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Email Contact</h3>
                <p className="text-brand-blue font-medium hover:underline cursor-pointer">ca.rajagopalan.kr@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-[#001224] p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-800 relative overflow-hidden"
        >
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-brand-blue flex flex-col items-center justify-center z-20 text-white p-8 text-center"
              >
                <CheckCircle className="w-20 h-20 mb-6 text-white" />
                <h2 className="text-3xl font-bold mb-4">Request Received</h2>
                <p className="text-lg text-blue-100">
                  Thank you, Finnova will reach out shortly to schedule your consultation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6 flex items-center gap-2">
              <Building className="w-6 h-6 text-brand-blue" />
              Request a Consultation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy dark:text-gray-300">Full Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#000813] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy dark:text-gray-300">Work Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#000813] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy dark:text-gray-300">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#000813] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white"
                  placeholder="Acme Corp"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy dark:text-gray-300">Contact Number <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-[#000813] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-navy dark:text-gray-300">Service Required</label>
              <select
                name="serviceRequired"
                required
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-[#000813] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white appearance-none"
              >
                <option value="" disabled>Select a service...</option>
                <option value="audit">Audit & Assurance</option>
                <option value="income-tax">Income Tax Services</option>
                <option value="gst">GST Services</option>
                <option value="business-setup">Business Setup & Compliance</option>
                <option value="compliance-reporting">Compliance & Reporting</option>
                <option value="ngo-fcra">NGOs & FCRA Compliance Services</option>
                <option value="systems-mis">Systems & MIS</option>
                <option value="specialized-audits">Specialized Audits</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-navy dark:text-gray-300">Service Description</label>
              <textarea
                required
                name="serviceDescription"
                value={formData.serviceDescription}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-[#000813] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all dark:text-white resize-none"
                placeholder="Briefly describe your requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-blue hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  Submit Request <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
