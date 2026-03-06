"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  FileText,
  UserPlus,
  Activity,
  BarChart3,
  CalendarCheck,
  LifeBuoy,
  RefreshCcw,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const workflowSteps: Step[] = [
  {
    number: "01",
    title: "Initial Consultation",
    icon: <Search size={18} />,
    desc: "Free consultation to understand your firm's accounting requirements.",
  },
  {
    number: "02",
    title: "Proposal & Engagement",
    icon: <FileText size={18} />,
    desc: "A tailored proposal is shared and an engagement letter formalizes the partnership.",
  },
  {
    number: "03",
    title: "Onboarding",
    icon: <UserPlus size={18} />,
    desc: "Secure document collection and system setup for seamless collaboration.",
  },
  {
    number: "04",
    title: "Ongoing Services",
    icon: <Activity size={18} />,
    desc: "Maintaining accurate financial records and delivering accounting support.",
  },
  {
    number: "05",
    title: "Review & Consultation",
    icon: <BarChart3 size={18} />,
    desc: "Regular reviews to analyze financial data and plan ahead.",
  },
  {
    number: "06",
    title: "Year End Services",
    icon: <CalendarCheck size={18} />,
    desc: "Preparation of financial statements and tax-ready documentation.",
  },
  {
    number: "07",
    title: "Continuous Support",
    icon: <LifeBuoy size={18} />,
    desc: "Ongoing assistance for queries, adjustments, and operational support.",
  },
  {
    number: "08",
    title: "Feedback & Improvement",
    icon: <RefreshCcw size={18} />,
    desc: "Continuous feedback helps refine processes and improve efficiency.",
  },
];

function WorkflowStep({ step, index }: { step: Step; index: number }) {
  const fromTop = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: fromTop ? -40 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.12 }}
      className="group p-7 rounded-xl bg-white border border-slate-200 hover:border-[#c46a2d]/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-[#c46a2d] group-hover:bg-[#c46a2d] group-hover:text-white transition">
          {step.icon}
        </div>

        <span className="text-[10px] font-semibold tracking-[0.25em] text-slate-300 group-hover:text-[#c46a2d] transition">
          STEP {step.number}
        </span>
      </div>

      <h4 className="text-lg font-semibold text-[#0B1F3B] mb-3 group-hover:text-[#c46a2d] transition">
        {step.title}
      </h4>

      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
    </motion.div>
  );
}

export default function Workflow() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-20 relative">
          <p className="uppercase tracking-[0.28em] text-sm text-[#c46a2d] font-medium">
            Our Process
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-serif text-[#0B1F3B]">
            Our Business Workflow
          </h2>

          <div className="mt-4 mx-auto h-[3px] w-24 rounded-full bg-gradient-to-r from-[#c46a2d] to-[#e88a4c]" />

          {/* progress bar */}
          <motion.div
            style={{ scaleX }}
            className="absolute bottom-[-20px] left-0 h-[2px] bg-[#c46a2d] w-full origin-left"
          />
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {workflowSteps.map((step, i) => (
            <WorkflowStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
