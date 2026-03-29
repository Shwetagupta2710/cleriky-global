"use client";

// FILE: app/services/page.tsx
// Route: /services
// All four services on one page with anchor navigation

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  ShoppingCart,
  ReceiptText,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/sections/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Service {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
  image: string; // put your image paths here
  imageAlt: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const services: Service[] = [
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    tagline:
      "Reliable offshore accounting support for CPA firms seeking scalable, audit-ready financial management.",
    desc: "Our accounting and bookkeeping services help CPA firms streamline financial operations while maintaining accurate, audit-ready records. Every transaction is recorded, reconciled, and reported with complete transparency — so your team spends less time on execution and more time on client relationships.",
    bullets: [
      "General Ledger Management",
      "Accounts Payable & Receivable",
      "Bank Reconciliations",
      "Month-End & Year-End Closing",
      "Financial Statement Preparation",
    ],
    icon: <Calculator size={22} strokeWidth={1.8} />,
    image: "/service2.jpg", // replace with your actual image
    imageAlt: "Accounting and bookkeeping professionals",
  },
  {
    id: "ecommerce-accounting",
    title: "E-Commerce Accounting",
    tagline:
      "Specialized accounting support for Shopify, Amazon, Stripe, and modern online businesses.",
    desc: "We provide complete financial clarity for e-commerce businesses by integrating platforms, reconciling transactions, and generating real-time insights across multiple marketplaces. Whether you sell on one platform or ten, we keep your books clean and your numbers current.",
    bullets: [
      "Shopify & Amazon Integration",
      "Stripe & Payment Gateway Reconciliation",
      "Inventory Accounting",
      "Cost of Goods Sold (COGS) Analysis",
      "Multi-Currency Reporting",
    ],
    icon: <ShoppingCart size={22} strokeWidth={1.8} />,
    image: "/service1.jpg", // replace with your actual image
    imageAlt: "E-commerce accounting services",
  },
  {
    id: "sales-tax-vat",
    title: "Sales Tax & VAT Compliance",
    tagline:
      "Cross-border compliance solutions for US, UK, and EU tax regulations.",
    desc: "Navigating tax regulations across jurisdictions is complex. We handle VAT registration, sales tax nexus analysis, filing, and audit support — so your clients stay compliant without your team absorbing the complexity.",
    bullets: [
      "VAT Registration & Filing",
      "Sales Tax Nexus Analysis",
      "Cross-Border Compliance",
      "Audit Assistance",
      "Tax Authority Communication",
    ],
    icon: <ReceiptText size={22} strokeWidth={1.8} />,
    image: "/service5.png", // replace with your actual image
    imageAlt: "Tax and VAT compliance services",
  },
  {
    id: "fractional-cfo",
    title: "Fractional CFO Services",
    tagline:
      "Strategic financial leadership without the cost of a full-time CFO.",
    desc: "Our fractional CFO services give your clients access to senior financial thinking — forecasting, cash flow management, KPI reporting, and investor-ready financials — without the overhead of a permanent hire. Scalable strategic support exactly when it's needed.",
    bullets: [
      "Financial Forecasting & Budgeting",
      "Cash Flow Management",
      "KPI Dashboard Reporting",
      "Investor Reporting",
      "Growth Strategy Support",
    ],
    icon: <BarChart3 size={22} strokeWidth={1.8} />,
    image: "/service4.webp", // replace with your actual image
    imageAlt: "Fractional CFO and financial strategy",
  },
];

// ─── Label component ──────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-7 h-[2px] bg-[#c46a2d]" />
      <span className="text-xs uppercase tracking-[0.3em] text-[#c46a2d] font-medium">
        {children}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B1F3B] overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f6f8fb] pt-36 pb-24">
        {/* dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(234,241,251,0.7),transparent_55%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-[#c46a2d] font-medium mb-6">
              Cleriky Global — What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.05] tracking-[-0.01em] text-[#0B1F3B]">
              Accounting Solutions
            </h1>
            <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-light font-serif leading-[1.05] text-[#0B1F3B]/70">
              Designed to Scale
            </h2>
            <div className="mx-auto mt-6 h-[2px] w-20 bg-[#c46a2d]" />
            <p className="mt-8 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Four specialist service lines — built for CPA firms and finance
              leaders who need precision, compliance, and capacity without
              compromise.
            </p>
          </motion.div>

          {/* Anchor nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-medium text-[#0B1F3B] hover:border-[#c46a2d] hover:text-[#c46a2d] hover:shadow-sm transition-all duration-300"
              >
                <span className="text-slate-400 group-hover:text-[#c46a2d] transition-colors duration-300">
                  {s.icon}
                </span>
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS — alternating layout ── */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-28 px-6 scroll-mt-28 ${isEven ? "bg-white" : "bg-[#f6f8fb]"}`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid md:grid-cols-2 gap-16 md:gap-24 items-center ${
                  isEven ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Content side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  <Label>Our Services</Label>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1F3B]/5 flex items-center justify-center text-[#0B1F3B]">
                      {service.icon}
                    </div>
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                      0{i + 1}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif text-[#0B1F3B] leading-tight mb-3">
                    {service.title}
                  </h2>
                  <div className="h-[2px] w-12 bg-[#c46a2d] mb-6" />

                  <p className="text-[#c46a2d] text-sm font-medium mb-4 leading-relaxed">
                    {service.tagline}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-10">
                    {service.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bi * 0.07 }}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[#c46a2d] flex-shrink-0"
                        />
                        {b}
                      </motion.li>
                    ))}
                  </ul>

                  <button className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#0B1F3B] text-white text-sm font-semibold hover:bg-[#c46a2d] hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300">
                    Book a Call
                    <ArrowRight size={14} />
                  </button>
                </motion.div>

                {/* Image side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                  className="relative flex justify-center"
                >
                  {/* glow */}
                  <div className="absolute w-[320px] h-[320px] bg-[#eaf1fb] blur-3xl rounded-full -z-10" />

                  {/* image blob */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="relative w-[90%] max-w-[440px] aspect-[4/3]"
                  >
                    <div
                      className="absolute inset-0 overflow-hidden shadow-[0_40px_100px_rgba(11,31,59,0.15)]"
                      style={{
                        borderRadius:
                          i % 2 === 0
                            ? "60% 40% 55% 45% / 45% 55% 45% 55%"
                            : "45% 55% 40% 60% / 55% 45% 55% 45%",
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[#0B1F3B]/[0.05]" />
                    </div>
                  </motion.div>

                  {/* service number badge */}
                  <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 flex items-center gap-2 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 z-10">
                    <div className="w-8 h-8 rounded-lg bg-[#0B1F3B] flex items-center justify-center text-[#c46a2d]">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#0B1F3B] leading-none">
                        {service.title}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Cleriky Global
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </div>
  );
}
