"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-white to-[#f4f6f9] overflow-hidden scroll-mt-32"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_60%,rgba(196,106,45,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* glow */}
          <div className="absolute w-[380px] h-[380px] bg-[#eaf1fb] blur-3xl rounded-full -z-10" />

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative w-[90%] max-w-[460px] aspect-[4/5]"
          >
            <div
              className="absolute inset-0 overflow-hidden shadow-[0_50px_120px_rgba(11,31,59,0.2)]"
              style={{
                borderRadius: "60% 40% 58% 42% / 42% 60% 40% 58%",
              }}
            >
              <Image
                src="/abouts.jpg"
                alt="Team discussing financial strategy"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#0B1F3B]/8" />
            </div>
          </motion.div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* eyebrow */}
          <p className="uppercase tracking-[0.3em] text-sm text-[#c46a2d] font-medium">
            About Cleriky Global
          </p>

          {/* heading */}
          <h2 className="mt-6 text-3xl md:text-4xl font-serif text-[#0B1F3B] leading-tight">
            A Trusted Offshore Accounting
            <br />
            Partner for CPA Firms
          </h2>

          {/* accent line */}
          <div className="mt-6 h-[2px] w-20 bg-[#c46a2d]" />

          {/* text */}
          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            Cleriky Global provides reliable offshore accounting, bookkeeping,
            and taxation support tailored specifically for CPA firms seeking
            scalable and efficient back-office solutions.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Our partnership-driven approach helps firms expand capacity, improve
            turnaround times, and reduce operational costs without compromising
            quality or compliance.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            With a team of CPAs, CAs, MBAs, and certified bookkeepers proficient
            in leading accounting platforms, we support firms serving clients
            across the US, UK, and EU markets.
          </p>

          {/* credibility */}
          <p className="mt-6 text-sm font-medium text-[#0B1F3B]">
            Supporting CPA firms across the US, UK, and EU markets.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-[#0B1F3B] text-white font-medium transition-all duration-300 hover:bg-[#c46a2d] hover:-translate-y-[2px] hover:shadow-lg"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/services"
              className="px-8 py-3 rounded-full border border-[#0B1F3B] text-[#0B1F3B] hover:bg-[#eaf1fb] hover:border-[#c46a2d] transition-all duration-300 hover:-translate-y-[2px]"
            >
              View Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
