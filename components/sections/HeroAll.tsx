"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-28 md:pt-44 md:pb-40">
      {/* Dynamic Background Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(196,106,45,0.06),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.2 },
            },
          }}
          className="max-w-2xl"
        >
          {/* Label */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="inline-flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-[#c46a2d]" />
            <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#c46a2d] font-bold">
              Premium Offshore Support
            </p>
          </motion.div>

          {/* Headlines */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mt-8 space-y-2"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-[#0B1F3B]">
              Grow Your CPA Firm
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic font-light text-[#0B1F3B]/70">
              We Manage the Backend
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="mt-10 text-lg text-slate-500 leading-relaxed font-light max-w-lg"
          >
            Partner with Cleriky Global to expand capacity and reduce
            operational workload—delivering high-precision results without
            compromise.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <button className="group relative px-10 py-4 bg-[#0B1F3B] overflow-hidden rounded-sm transition-all duration-500 shadow-xl shadow-[#0B1F3B]/10">
              <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-white transition-colors">
                Book a Strategy Call
              </span>
              <div className="absolute inset-0 bg-[#c46a2d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>

            <button className="px-10 py-4 border border-slate-200 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1F3B] hover:bg-slate-50 hover:border-[#0B1F3B] transition-all duration-300 rounded-sm">
              Explore Services
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Background Backlight */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-10 bg-[#eaf1fb] blur-[100px] rounded-full -z-10"
          />

          <div className="relative w-full max-w-[480px] group">
            {/* Corner Decorative Accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#c46a2d]/30 group-hover:border-[#c46a2d] transition-colors duration-700" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#c46a2d]/30 group-hover:border-[#c46a2d] transition-colors duration-700" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5] overflow-hidden shadow-[0_40px_100px_-20px_rgba(11,31,59,0.12)] bg-slate-50"
              style={{
                borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60% ",
              }}
            >
              <Image
                src="/hero.jpg"
                alt="Professional CPA Support"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-[#0B1F3B]/5 mix-blend-multiply" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
