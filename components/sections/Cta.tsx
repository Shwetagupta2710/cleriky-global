"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 bg-[#0B1F3B] overflow-hidden">
      {/* soft gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      {/* subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.35em] text-[11px] text-[#c46a2d] font-semibold"
        >
          Partner With Cleriky Global
        </motion.p>

        {/* main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-3xl md:text-5xl font-serif text-white leading-tight"
        >
          Scale Your CPA Firm
          <span className="block font-light text-white/90">
            Without Increasing Operational Burden
          </span>
        </motion.h2>

        {/* divider */}
        <div className="mx-auto mt-8 h-[2px] w-20 bg-[#c46a2d]" />

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Partner with Cleriky Global to expand capacity, improve turnaround
          time, and streamline accounting operations while maintaining the
          highest standards of accuracy and compliance.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12"
        ></motion.div>
        <Link href="/contact" className="group relative inline-block">
          <button className="relative px-12 py-5 bg-white border border-slate-200 rounded-sm uppercase text-[10px] font-bold tracking-[0.3em] text-[#0B1F3B] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-2xl">
            {/* The Text Layer */}
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Book a Consultation
            </span>

            {/* The Color Fill */}
            <span className="absolute inset-0 bg-[#c46a2d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></span>

            {/* Subtle Shine Effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
