"use client";

// FILE: components/sections/Services.tsx
// Home-page services section — cards now link to /services#anchor

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calculator,
  ShoppingCart,
  ReceiptText,
  BarChart3,
  LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  bullets: string[];
  icon: LucideIcon;
  anchor: string; // anchor on /services page
};

const services: Service[] = [
  {
    title: "Accounting & Bookkeeping",
    desc: "Empowering finances with seamless cloud-based accounting solutions.",
    bullets: [
      "Cloud Accounting",
      "Automated Reporting",
      "Real-time Insights",
      "Scalable Systems",
    ],
    icon: Calculator,
    anchor: "accounting-bookkeeping",
  },
  {
    title: "Fractional CFO Services",
    desc: "Strategic financial leadership for growing companies.",
    bullets: [
      "Financial Planning",
      "Cashflow Forecasting",
      "Investor Reporting",
      "Growth Strategy",
    ],
    icon: BarChart3,
    anchor: "fractional-cfo",
  },
  {
    title: "E-Commerce Accounting",
    desc: "Specialized accounting for ecommerce businesses across platforms.",
    bullets: [
      "Shopify & Amazon",
      "Inventory Tracking",
      "Multi-Currency Accounting",
      "Payment Gateway Reconciliation",
    ],
    icon: ShoppingCart,
    anchor: "ecommerce-accounting",
  },
  {
    title: "Sales Tax & VAT Compliance",
    desc: "Simplifying EU VAT compliance for global business operations.",
    bullets: [
      "VAT Registration",
      "OSS Filing",
      "Cross-Border Compliance",
      "Tax Reporting",
    ],
    icon: ReceiptText,
    anchor: "sales-tax-vat",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#f4f6f9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-[#c46a2d] font-semibold mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0B1F3B] leading-tight">
            Accounting Solutions
            <br />
            <span className="italic text-[#c46a2d]">Designed to Scale</span>
          </h2>

          {/* View all link */}
          <div className="mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0B1F3B]/60 hover:text-[#c46a2d] transition-colors duration-300"
            >
              View all services
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group perspective"
              >
                <div className="relative h-[340px] w-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
                  {/* FRONT */}
                  <div className="absolute inset-0 rounded-2xl bg-white shadow-xl p-8 backface-hidden flex flex-col justify-between border border-slate-200">
                    <div>
                      <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-[#0B1F3B]/5 group-hover:bg-[#c46a2d]/10 transition">
                        <Icon
                          size={28}
                          strokeWidth={1.5}
                          className="text-[#0B1F3B] group-hover:text-[#c46a2d] transition"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-[#0B1F3B] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <span className="text-xs text-slate-400">
                      Hover to explore →
                    </span>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rounded-2xl bg-[#0B1F3B] text-[#c46a2d] shadow-xl p-8 rotate-y-180 backface-hidden flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        {service.title}
                      </h3>
                      <ul className="space-y-2 text-sm text-white/80">
                        {service.bullets.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#c46a2d] rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* ← This is the key change: links to /services#anchor */}
                    <Link
                      href={`/services#${service.anchor}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#c46a2d] hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
