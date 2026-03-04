"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Professionals",
    description:
      "Dedicated specialists who integrate seamlessly into the high-precision accounting workflows of modern CPA firms.",
  },
  {
    icon: Clock,
    title: "Punctual Delivery",
    description:
      "Our refined operational framework ensures that every deliverable is met with strict adherence to your stipulated timelines.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential",
    description:
      "We employ industry-leading encryption and strict confidentiality protocols to safeguard your firm's sensitive data.",
  },
  {
    icon: HeartHandshake,
    title: "Strategic Partnership",
    description:
      "We move beyond service delivery to become a tailored extension of your firm, focused on your long-term success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,106,45,0.03),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Refined Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: false }}
            className="block text-[10px] font-bold text-[#c46a2d] uppercase mb-4"
          >
            The Advantage
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-serif text-[#0B1F3B] leading-tight"
          >
            Why Choose Cleriky Global
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 mx-auto h-[1px] bg-[#c46a2d]"
          />
        </div>

        {/* Feature Cards with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-3xl border border-slate-100 bg-white transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(11,31,59,0.08)] hover:border-[#c46a2d]/30"
              >
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-50 mb-8 group-hover:bg-[#0B1F3B] transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-[#0B1F3B]/20">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#0B1F3B] group-hover:text-[#c46a2d] transition-colors duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-[#0B1F3B] mb-4 group-hover:text-[#c46a2d] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-500 text-[13px] leading-relaxed font-light">
                    {feature.description}
                  </p>

                  {/* Corner Accent */}
                  <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-[#c46a2d] transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Branding Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-[#c46a2d] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
