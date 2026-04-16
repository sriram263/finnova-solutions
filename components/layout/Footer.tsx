import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Link as LinkIcon } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white p-1 rounded">
                <Image
                  src="/assets/logo.png"
                  alt="Finnova Solutions Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Finnova
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering businesses nationwide with elite financial, tax, and advisory solutions designed for exceptional growth and compliance.
            </p>

          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/knowledge-hub" className="text-gray-400 hover:text-white transition-colors text-sm">Knowledge Hub</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#audit" className="text-gray-400 hover:text-white transition-colors text-sm">Audit & Assurance</Link></li>
              <li><Link href="/services#tax" className="text-gray-400 hover:text-white transition-colors text-sm">Direct & Indirect Tax (GST)</Link></li>
              <li><Link href="/services#startup" className="text-gray-400 hover:text-white transition-colors text-sm">Startup Advisory</Link></li>
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors text-sm">Financial Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Financial District,<br />Business Park, New Delhi, 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-gray-400 text-sm">contact@finnovasolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Finnova Solutions. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
