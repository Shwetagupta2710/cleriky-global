"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Professionals",
    description:
      "Dedicated and specialized professionals who understand the accounting needs of modern CPA firms.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Efficient workflows ensure your projects and deliverables are completed within the stipulated timelines.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential",
    description:
      "Your data and financial information are handled with strict confidentiality and industry-level security.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused",
    description:
      "We listen, understand your needs, and deliver tailored accounting solutions for your firm.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-white">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(196,106,45,0.04),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0B1F3B]">
            Why Choose Cleriky Global
          </h2>

          <div className="mt-5 mx-auto h-[2.5px] w-30 rounded-full bg-gradient-to-r from-[#c46a2d] to-[#e88a4c]"></div>
        </div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={card}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#c46a2d] hover:shadow-[0_20px_40px_rgba(11,31,59,0.12)] transition-all duration-400"
              >
                {/* icon */}
                <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-[#f4f7fb] mb-6 group-hover:bg-[#fff2e9] transition">
                  <Icon
                    size={26}
                    className="text-[#0B1F3B] group-hover:text-[#c46a2d] transition"
                  />
                </div>

                {/* title */}
                <h3 className="text-lg font-semibold text-[#0B1F3B] mb-3">
                  {feature.title}
                </h3>

                {/* description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* bottom accent */}
                <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-[#c46a2d] to-[#e88a4c] group-hover:w-20 transition-all duration-400"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
