"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  ShoppingCart,
  ReceiptText,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    index: "01",
    title: "Accounting &\nBookkeeping",
    shortTitle: "Accounting",
    tagline: "The financial backbone of your firm.",
    desc: "From general ledger management to month-end closes, we deliver audit-ready financials with precision and speed. Every reconciliation, every entry — handled with institutional-grade rigor.",
    bullets: [
      "General Ledger Management",
      "Bank Reconciliations",
      "Financial Statement Preparation",
      "Audit-Ready Reporting",
    ],
    icon: Calculator,
    link: "/services/accounting-bookkeeping",
    accent: "#0B1F3B",
    bg: "from-[#0B1F3B] to-[#162f56]",
    number: "01",
  },
  {
    index: "02",
    title: "E-Commerce\nAccounting",
    shortTitle: "E-Commerce",
    tagline: "Multi-channel. Zero blind spots.",
    desc: "Shopify, Amazon, Stripe — we reconcile every platform automatically. No more spreadsheet nightmares. Real-time clarity across every storefront, marketplace, and payment processor.",
    bullets: [
      "Shopify & Amazon Sync",
      "Stripe Reconciliation",
      "Inventory Accounting",
      "Multi-Currency Support",
    ],
    icon: ShoppingCart,
    link: "/services/ecommerce-accounting",
    accent: "#c46a2d",
    bg: "from-[#c46a2d] to-[#a8551f]",
    number: "02",
  },
  {
    index: "03",
    title: "Sales Tax &\nVAT Compliance",
    shortTitle: "Tax & VAT",
    tagline: "Cross-border. Fully compliant.",
    desc: "Navigate the complexity of US, UK, and EU tax obligations with confidence. We handle registrations, periodic filings, and nexus analysis — so you never face a surprise liability.",
    bullets: [
      "VAT Registration & Filing",
      "US Sales Tax Nexus Analysis",
      "Cross-Border Compliance",
      "Penalty Resolution",
    ],
    icon: ReceiptText,
    link: "/services/sales-tax-vat",
    accent: "#2d6e4f",
    bg: "from-[#1e4d38] to-[#2d6e4f]",
    number: "03",
  },
  {
    index: "04",
    title: "Fractional\nCFO Services",
    shortTitle: "CFO",
    tagline: "Strategic finance, on demand.",
    desc: "Executive-level financial leadership without the full-time overhead. Forecasting models, KPI dashboards, investor decks — we bring the strategic vision your firm needs to scale.",
    bullets: [
      "Financial Forecasting",
      "KPI & Dashboard Reporting",
      "Investor Relations Support",
      "Cash Flow Strategy",
    ],
    icon: BarChart3,
    link: "/services/fractional-cfo",
    accent: "#7c3aed",
    bg: "from-[#3b1d72] to-[#5b2d9e]",
    number: "04",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-[#f4f6f9] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[#c46a2d] font-semibold mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0B1F3B] leading-tight">
              Accounting Solutions
              <br />
              <span className="italic text-[#c46a2d]">Designed to Scale</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs md:text-right">
            Four core disciplines. One dedicated team. Built specifically for
            CPA firms and their clients.
          </p>
        </div>
        {/* Rule */}
        <div className="mt-10 h-px bg-gradient-to-r from-[#c46a2d]/40 via-slate-200 to-transparent" />
      </div>

      {/* Accordion Panel — Desktop */}
      <div className="max-w-7xl mx-auto px-6 hidden md:flex gap-3 h-[500px]">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isActive = active === i;

          return (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              animate={{ flex: isActive ? 5 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl cursor-pointer overflow-hidden bg-gradient-to-br ${service.bg} flex flex-col justify-between`}
              style={{ minWidth: 72 }}
            >
              {/* Decorative large number */}
              <motion.span
                animate={{ opacity: isActive ? 0.06 : 0.12 }}
                className="absolute right-4 bottom-4 text-white font-serif select-none pointer-events-none"
                style={{ fontSize: "clamp(80px, 14vw, 160px)", lineHeight: 1 }}
              >
                {service.number}
              </motion.span>

              {/* Collapsed: vertical label */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-2"
                  >
                    <div className="text-white/60 rotate-0">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <p
                      className="text-white/80 text-[12px] font-semibold tracking-[0.18em] uppercase"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                      }}
                    >
                      {service.shortTitle}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="relative z-10 flex flex-col justify-between h-full p-10"
                  >
                    {/* Top */}
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white">
                          <Icon size={22} strokeWidth={1.5} />
                        </div>
                        <span className="text-white/50 text-xs font-mono tracking-widest">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="text-white font-serif text-3xl leading-tight mb-3 whitespace-pre-line">
                        {service.title}
                      </h3>
                      <p className="text-white/60 text-xs uppercase tracking-[0.22em] mb-6 font-medium">
                        {service.tagline}
                      </p>
                      <p className="text-white/75 text-sm leading-relaxed max-w-sm">
                        {service.desc}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div>
                      <ul className="flex flex-col gap-2 mb-8">
                        {service.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex items-center gap-2 text-white/65 text-xs"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-xs font-semibold px-5 py-3 rounded-full transition-all duration-300 group/link"
                      >
                        Explore Service
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: Stacked accordion */}
      <div className="max-w-7xl mx-auto px-6 md:hidden flex flex-col gap-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isActive = active === i;

          return (
            <div
              key={i}
              onClick={() => setActive(isActive ? -1 : i)}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${service.bg} cursor-pointer`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center text-white">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-white font-serif text-lg">
                    {service.shortTitle}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: isActive ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white/60 text-xl"
                >
                  +
                </motion.span>
              </div>

              {/* Expanded */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-7">
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed mb-5">
                        {service.desc}
                      </p>
                      <ul className="flex flex-col gap-2 mb-6">
                        {service.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex items-center gap-2 text-white/60 text-xs"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold px-5 py-2.5 rounded-full"
                      >
                        Explore Service <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
