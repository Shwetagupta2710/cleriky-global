"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Zap,
  Globe,
  BarChart3,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Feature {
  title: string;
  tagline: string;
  desc: string;
  detail: string;
  bullets: string[];
  icon: React.ReactNode;
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

interface WhyItem {
  title: string;
  desc: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const features: Feature[] = [
  {
    title: "Dedicated Team",
    tagline: "Your Extended Workforce",
    desc: "Integrated professionals aligned with your internal workflow.",
    detail:
      "We don't assign you a generic resource pool. You get named professionals onboarded to your tools, your chart of accounts, and your reporting cadence — people who show up every day knowing your business.",
    bullets: [
      "Domain specialists, not generalists",
      "Onboarded to your tools & chart of accounts",
      "Works in your timezone & communication style",
    ],
    icon: <Users size={22} strokeWidth={1.8} />,
  },
  {
    title: "Quality Control",
    tagline: "Zero-Error Architecture",
    desc: "Structured multi-tier review ensuring audit-ready output.",
    detail:
      "Every deliverable passes through a three-stage review: preparer, reviewer, approver. Automated reconciliation checks catch variance before sign-off. Senior oversight on every submission means your clients never see an error.",
    bullets: [
      "Preparer → Reviewer → Approver workflow",
      "Automated reconciliation checks",
      "Senior sign-off on every submission",
    ],
    icon: <Award size={22} strokeWidth={1.8} />,
  },
  {
    title: "Seamless Sync",
    tagline: "Real-Time Transparency",
    desc: "Full operational visibility across all engagements.",
    detail:
      "Shared dashboards, daily status updates, and dedicated communication channels mean you always know where things stand. We work in your preferred formats and reporting language — no translation required.",
    bullets: [
      "Shared dashboards & project portals",
      "Daily status updates & clear SLAs",
      "Reporting in your preferred formats",
    ],
    icon: <Zap size={22} strokeWidth={1.8} />,
  },
  {
    title: "Scalable Growth",
    tagline: "Built for Tomorrow",
    desc: "Modular packages that expand with your firm effortlessly.",
    detail:
      "Whether you need to scale up for tax season or expand into new service lines, our modular structure accommodates growth without friction. Add payroll, FP&A, or VAT compliance as your client base evolves.",
    bullets: [
      "Add payroll, tax, FP&A at any stage",
      "Elastic capacity for peak periods",
      "Fixed costs, variable output",
    ],
    icon: <BarChart3 size={22} strokeWidth={1.8} />,
  },
  {
    title: "Global Reach",
    tagline: "Cross-Border Expertise",
    desc: "Compliant services across 10+ countries.",
    detail:
      "UK GAAP, US GAAP, IFRS, UAE VAT, Indian GST — our teams carry the jurisdictional fluency your cross-border clients expect. We track regulatory changes proactively so your compliance never lags.",
    bullets: [
      "GAAP, IFRS, VAT & transfer pricing",
      "UK, UAE, US & Indian subcontinent",
      "Jurisdiction-specific compliance tracking",
    ],
    icon: <Globe size={22} strokeWidth={1.8} />,
  },
  {
    title: "Risk & Compliance",
    tagline: "Always Audit-Ready",
    desc: "Proactive monitoring and regulatory update tracking.",
    detail:
      "We surface issues before they become liabilities. Regulatory alerts, variance flags, and risk notices are sent without being asked — because protecting your firm's reputation is built into our process.",
    bullets: [
      "Regulatory change alerts",
      "Full documentation & audit trails",
      "Risk flags before they become liabilities",
    ],
    icon: <Shield size={22} strokeWidth={1.8} />,
  },
];

const stats: StatItem[] = [
  {
    value: 100,
    suffix: "%",
    label: "Accuracy",
    sublabel: "Multi-tier QC process",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support",
    sublabel: "Across all time zones",
  },
  {
    value: 50,
    suffix: "%",
    label: "Efficiency Gain",
    sublabel: "Average client outcome",
  },
  {
    value: 10,
    suffix: "+",
    label: "Countries",
    sublabel: "Global compliance coverage",
  },
];

const why: WhyItem[] = [
  {
    title: "No lock-in contracts",
    desc: "Month-to-month engagements. We earn your renewal every single cycle.",
  },
  {
    title: "Named contacts always",
    desc: "You know who works on your account — no anonymous resource pools.",
  },
  {
    title: "Audit-ready output",
    desc: "Every deliverable leaves us ready for external scrutiny, every time.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We audit your workflows, tools, and pain points in a focused onboarding call.",
  },
  {
    step: "02",
    title: "Alignment",
    desc: "Your dedicated team is assembled and trained on your systems and standards.",
  },
  {
    step: "03",
    title: "Integration",
    desc: "Soft launch with parallel runs ensures zero disruption to live operations.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "SLA-backed output with monthly reviews and growth-stage scaling built in.",
  },
];

// ─── Scroll-safe counter — native IntersectionObserver, no ref conflict ───────
function Counter({
  value,
  suffix,
  label,
  sublabel,
  delay = 0,
}: StatItem & { delay?: number }) {
  const [count, setCount] = useState(0);
  const [fired, setFired] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          setFired(true);
          obs.disconnect();

          setTimeout(() => {
            let start = 0;
            const inc = value / (1300 / 16);
            const id = setInterval(() => {
              start += inc;
              if (start >= value) {
                setCount(value);
                clearInterval(id);
              } else setCount(Math.floor(start));
            }, 16);
          }, delay);
        }
      },
      { threshold: 0.3 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [fired, value, delay]);

  return (
    <div ref={wrapperRef}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay / 1000 }}
        className="group text-center p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#c46a2d]/40 hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-end justify-center gap-1 mb-2">
          <span className="text-5xl font-serif font-semibold text-[#0B1F3B]">
            {count}
          </span>
          <span className="text-3xl font-serif font-light text-[#c46a2d] mb-1">
            {suffix}
          </span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c46a2d] mb-1">
          {label}
        </p>
        <p className="text-xs text-slate-400">{sublabel}</p>
      </motion.div>
    </div>
  );
}

// ─── Floating hero badge ──────────────────────────────────────────────────────
function FloatingBadge({
  icon,
  text,
  sub,
  className = "",
  delay = 0,
}: {
  icon: React.ReactNode;
  text: string;
  sub: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      className={`absolute flex items-center gap-3 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 z-10 ${className}`}
    >
      <div className="w-9 h-9 rounded-xl bg-[#0B1F3B] flex items-center justify-center text-[#c46a2d] flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-[#0B1F3B] leading-none whitespace-nowrap">
          {text}
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5 whitespace-nowrap">
          {sub}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Section eyebrow label ────────────────────────────────────────────────────
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
export default function DiscoverDifference() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-white text-[#0B1F3B] overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f6f8fb] pt-32 pb-28 md:pt-36 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(234,241,251,0.6),transparent_55%)] pointer-events-none" />

        {/* subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-2 md:gap-24 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-[#c46a2d] font-medium">
              Cleriky Global — Why We&apos;re Different
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.05] tracking-[-0.01em] text-[#0B1F3B]">
              Discover the Difference
            </h1>
            <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-light font-serif leading-[1.05] text-[#0B1F3B]/80">
              That Drives Growth
            </h2>

            <div className="mt-6 h-[2px] w-20 bg-[#c46a2d]" />

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              We build financial systems that eliminate inefficiencies and
              enable CPA firms to scale with clarity, confidence, and
              cross-border expertise.
            </p>

            {/* mini-stats row */}
            <div className="mt-10 flex gap-8">
              {[
                { n: "200+", l: "Firms served" },
                { n: "10+", l: "Countries" },
                { n: "98%", l: "Retention" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-serif font-semibold text-[#0B1F3B]">
                    {s.n}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mt-0.5">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="px-8 py-3 rounded-full bg-[#0B1F3B] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#c46a2d] hover:-translate-y-[2px] hover:shadow-lg">
                Book a Call
              </button>
              <button className="px-8 py-3 rounded-full border border-[#0B1F3B] text-[#0B1F3B] bg-white hover:bg-[#eaf1fb] hover:border-[#c46a2d] transition-all duration-300 ease-out hover:-translate-y-[2px]">
                Explore Services
              </button>
            </div>
          </motion.div>

          {/* RIGHT — blob + floating badges */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-[380px] h-[380px] bg-[#eaf1fb] blur-3xl rounded-full -z-10" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative w-[90%] max-w-[460px] aspect-[4/5]"
            >
              <div
                className="absolute inset-0 overflow-hidden shadow-[0_50px_120px_rgba(11,31,59,0.18)]"
                style={{ borderRadius: "60% 40% 58% 42% / 42% 60% 40% 58%" }}
              >
                <Image
                  src="/hero.jpg"
                  alt="Finance professionals at Cleriky Global"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[#0B1F3B]/[0.06]" />
              </div>
            </motion.div>

            <FloatingBadge
              icon={<Star size={15} />}
              text="100% Accuracy"
              sub="Multi-tier QC process"
              className="-left-6 top-[10%]"
              delay={0.75}
            />
            <FloatingBadge
              icon={<TrendingUp size={15} />}
              text="50% Efficiency Gain"
              sub="Average client outcome"
              className="-right-6 bottom-[18%]"
              delay={1.0}
            />
            <FloatingBadge
              icon={<Clock size={15} />}
              text="24/7 Support"
              sub="Across all time zones"
              className="-left-2 bottom-[3%]"
              delay={1.2}
            />
          </motion.div>
        </div>
      </section>

      {/* ══ MISSION STRIP ════════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif font-light max-w-2xl leading-snug text-[#0B1F3B]"
          >
            &ldquo;Outsourcing finance isn&apos;t a cost decision.{" "}
            <span className="text-[#c46a2d] italic">
              It&apos;s a strategic one.
            </span>
            &rdquo;
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#c46a2d] font-medium mb-2">
              Our Promise
            </p>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Cleriky Global serves accounting firms and finance leaders who
              demand precision, discretion, and scale — without compromise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ FEATURES ══════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#f6f8fb]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Label>Our Pillars</Label>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight text-[#0B1F3B]">
              What makes us{" "}
              <span className="font-light italic text-[#0B1F3B]/60">
                fundamentally different
              </span>
            </h2>
            <div className="mt-4 h-[2px] w-16 bg-[#c46a2d]" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Left tabs */}
            <div className="lg:col-span-2 space-y-2">
              {features.map((f, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={() => setActiveFeature(idx)}
                  className={`relative flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === idx
                      ? "bg-[#0B1F3B] shadow-lg"
                      : "bg-white border border-slate-200 hover:border-[#c46a2d]/40 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 transition-colors duration-300 ${activeFeature === idx ? "text-[#c46a2d]" : "text-slate-400"}`}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p
                      className={`text-sm font-semibold ${activeFeature === idx ? "text-white" : "text-[#0B1F3B]"}`}
                    >
                      {f.title}
                    </p>
                    <p
                      className={`text-xs mt-0.5 ${activeFeature === idx ? "text-white/55" : "text-slate-400"}`}
                    >
                      {f.tagline}
                    </p>
                  </div>
                  {activeFeature === idx && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <ArrowRight size={15} className="text-[#c46a2d]" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right detail */}
            <div className="lg:col-span-3 lg:pl-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm"
                >
                  <div className="text-[#c46a2d] mb-5">
                    {features[activeFeature].icon}
                  </div>
                  <Label>{features[activeFeature].tagline}</Label>
                  <h3 className="text-3xl font-serif text-[#0B1F3B] mb-3">
                    {features[activeFeature].title}
                  </h3>
                  <div className="h-[2px] w-12 bg-[#c46a2d] mb-6" />
                  <p className="text-slate-500 leading-relaxed mb-3 text-base">
                    {features[activeFeature].desc}
                  </p>
                  <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                    {features[activeFeature].detail}
                  </p>
                  <ul className="space-y-3">
                    {features[activeFeature].bullets.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY CLERIKY STRIP ════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {why.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-7 h-[2px] bg-[#c46a2d] mb-5" />
              <p className="text-lg font-serif text-[#0B1F3B] mb-2">
                {w.title}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#f6f8fb]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <Label>By the Numbers</Label>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0B1F3B]">
              Performance that{" "}
              <span className="font-light italic">speaks clearly</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <Counter key={i} {...s} delay={i * 130} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Label>How We Work</Label>
            <h2 className="text-3xl md:text-5xl font-serif text-[#0B1F3B]">
              A proven path{" "}
              <span className="font-light italic">to partnership</span>
            </h2>
            <div className="mt-4 h-[2px] w-16 bg-[#c46a2d]" />
          </motion.div>

          {/* connected timeline */}
          <div className="relative grid md:grid-cols-4 gap-0">
            {/* connector line */}
            <div className="hidden md:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#c46a2d]/25 to-transparent" />

            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative px-6 pb-8 pt-0"
              >
                {/* dot */}
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center mb-8 group-hover:border-[#c46a2d] transition-colors duration-300">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-[#c46a2d] transition-colors duration-300">
                    {p.step}
                  </span>
                </div>
                <h4 className="text-xl font-serif text-[#0B1F3B] mb-3">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {p.desc}
                </p>
                {/* hover underline */}
                <div className="mt-4 h-[2px] w-0 group-hover:w-10 bg-[#c46a2d] transition-all duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL ══════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#f6f8fb]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#0B1F3B] to-[#1a3560] rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            {/* accent orb */}
            <div
              className="absolute -top-12 -right-12 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle,rgba(196,106,45,0.18) 0%,transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            {/* dot grid overlay */}
            <div
              className="absolute inset-0 rounded-3xl opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="text-6xl font-serif text-[#c46a2d]/25 leading-none mb-4 select-none">
              &ldquo;
            </div>
            <blockquote className="text-xl md:text-2xl font-serif font-light leading-relaxed text-white/90 relative z-10 mb-10">
              Cleriky Global restructured our entire accounts function in 90
              days. Their team felt like our own — professional, responsive, and
              genuinely invested in our growth.
            </blockquote>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-11 h-11 rounded-full bg-[#c46a2d]/20 border border-[#c46a2d]/30 flex items-center justify-center text-[#c46a2d] text-xs font-semibold">
                AP
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Name of CEO</p>
                <p className="text-xs text-white/45">CFO, Client Firm</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
