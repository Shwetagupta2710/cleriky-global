"use client";

import { motion } from "framer-motion";
import CTA from "@/components/sections/Cta";

interface ServiceLayoutProps {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export default function ServiceLayout({
  title,
  tagline,
  description,
  bullets,
}: ServiceLayoutProps) {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-white to-[#f6f8fb]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#c46a2d] font-semibold">
            Our Services
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl md:text-5xl font-serif text-[#0B1F3B]"
          >
            {title}
          </motion.h1>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#c46a2d]" />

          <p className="mt-8 text-slate-600 text-lg max-w-2xl mx-auto">
            {tagline}
          </p>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif text-[#0B1F3B] mb-6">
              What We Deliver
            </h2>

            <p className="text-slate-600 leading-relaxed">{description}</p>
          </div>

          <ul className="space-y-4 text-slate-600">
            {bullets.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#0B1F3B] mb-12">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-[#c46a2d] font-bold text-xl">01</span>
              <p className="mt-2 text-slate-600">Requirement Analysis</p>
            </div>

            <div>
              <span className="text-[#c46a2d] font-bold text-xl">02</span>
              <p className="mt-2 text-slate-600">System Integration</p>
            </div>

            <div>
              <span className="text-[#c46a2d] font-bold text-xl">03</span>
              <p className="mt-2 text-slate-600">Financial Processing</p>
            </div>

            <div>
              <span className="text-[#c46a2d] font-bold text-xl">04</span>
              <p className="mt-2 text-slate-600">Reporting & Insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
