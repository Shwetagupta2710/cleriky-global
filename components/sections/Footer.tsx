"use client";

// FILE: components/sections/Footer.tsx

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  {
    label: "Accounting & Bookkeeping",
    href: "/services#accounting-bookkeeping",
  },
  { label: "E-Commerce Accounting", href: "/services#ecommerce-accounting" },
  { label: "Sales Tax & VAT Compliance", href: "/services#sales-tax-vat" },
  { label: "Fractional CFO Services", href: "/services#fractional-cfo" },
];

const company = [
  { label: "About Us", href: "/#about" },
  { label: "Discover the Difference", href: "/discover-the-difference" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg,#050d1a 0%,#0B1F3B 60%,#0f2440 100%)",
      }}
    >
      {/* Ambient orb */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(196,106,45,0.1) 0%,transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#ffffff 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ─── SINGLE CONTAINER ─────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-16 pb-10">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-light text-white tracking-wide mb-1"
              style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
            >
              Cleriky <span className="text-[#c46a2d] italic">Global</span>
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-5">
              Offshore Accounting Support
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-7">
              Specialist offshore accounting for CPA firms and finance leaders
              who demand precision, compliance, and scale — without compromise.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:vinita@cleriky.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#c46a2d] group-hover:bg-[#c46a2d]/15 transition-colors duration-300 flex-shrink-0 mt-0.5">
                  <Mail size={13} />
                </div>
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors duration-300 leading-relaxed break-all">
                  vinita@cleriky.com
                </span>
              </a>
              <a
                href="tel:+10000000000"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#c46a2d] group-hover:bg-[#c46a2d]/15 transition-colors duration-300 flex-shrink-0">
                  <Phone size={13} />
                </div>
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors duration-300">
                  +1 (XXX) XXX-XXXX
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#c46a2d] flex-shrink-0">
                  <MapPin size={13} />
                </div>
                <span className="text-sm text-slate-400">Ahmedabad, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-base font-semibold text-white mb-5 tracking-wide"
              style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-[1.5px] bg-[#c46a2d] transition-all duration-300 flex-shrink-0 overflow-hidden" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-base font-semibold text-white mb-5 tracking-wide"
              style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
            >
              Company
            </h4>
            <ul className="space-y-3.5">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-[1.5px] bg-[#c46a2d] transition-all duration-300 flex-shrink-0 overflow-hidden" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/[0.07] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Cleriky Global. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-slate-600 hover:text-[#c46a2d] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
            <a
              href="mailto:vinita@cleriky.com"
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#c46a2d] transition-colors duration-300"
            >
              <Mail size={11} />
              vinita@cleriky.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
