"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f6f8fb] pt-32 pb-28 md:pt-36 md:pb-32">
      {/* radial depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(234,241,251,0.6),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-2 md:gap-24 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#c46a2d] font-medium">
            Offshore Accounting Support
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.05] tracking-[-0.01em] text-[#0B1F3B]">
            Grow Your CPA Firm
          </h1>

          <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-light font-serif leading-[1.05] text-[#0B1F3B]/90">
            We Handle the Backend
          </h2>

          <div className="mt-6 h-[2px] w-20 bg-[#c46a2d]" />

          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            Partner with Cleriky Global to expand capacity, reduce operational
            workload, and deliver faster results without compromising accuracy
            or compliance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Primary CTA */}
            <button className="px-8 py-3 rounded-full bg-[#0B1F3B] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#c46a2d] hover:-translate-y-[2px] hover:shadow-lg">
              Book a Call
            </button>

            {/* Secondary CTA */}
            <Link
              href="/services"
              className="px-8 py-3 rounded-full border border-[#0B1F3B] text-[#0B1F3B] bg-white hover:bg-[#eaf1fb] hover:border-[#c46a2d] transition-all duration-300 ease-out hover:-translate-y-[2px] inline-block text-center"
            >
              {" "}
              Explore Services{" "}
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          className="relative flex justify-center"
        >
          {/* glow */}
          <div className="absolute w-[380px] h-[380px] bg-[#eaf1fb] blur-3xl rounded-full -z-10" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            className="relative w-[90%] max-w-[460px] aspect-[4/5]"
          >
            <div
              className="absolute inset-0 overflow-hidden shadow-[0_50px_120px_rgba(11,31,59,0.2)]"
              style={{
                borderRadius: "60% 40% 58% 42% / 42% 60% 40% 58%",
              }}
            >
              <Image
                src="/hero.jpg"
                alt="Accounting professional reviewing financial documents"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-[#0B1F3B]/8" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
