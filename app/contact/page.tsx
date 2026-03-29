"use client";

// FILE: app/contact/page.tsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Send,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import Footer from "@/components/sections/Footer";

// ─── EmailJS IDs — fill these in after EmailJS setup ─────────────────────────
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

interface FormState {
  from_name: string;
  from_email: string;
  firm_name: string;
  service: string;
  message: string;
}

const INITIAL: FormState = {
  from_name: "",
  from_email: "",
  firm_name: "",
  service: "",
  message: "",
};

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

function InfoCard({
  icon,
  title,
  lines,
  href,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
  delay?: number;
}) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay ?? 0 }}
      className="group flex gap-5 p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#c46a2d]/40 hover:shadow-md transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-[#0B1F3B]/5 flex items-center justify-center text-[#0B1F3B] flex-shrink-0 group-hover:bg-[#c46a2d]/10 group-hover:text-[#c46a2d] transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-2">
          {title}
        </p>
        {lines.map((l, i) => (
          <p
            key={i}
            className="text-sm text-[#0B1F3B] font-medium leading-relaxed"
          >
            {l}
          </p>
        ))}
      </div>
    </motion.div>
  );
  if (href)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  return inner;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    import("@emailjs/browser").then((ejs) => ejs.init(EMAILJS_PUBLIC_KEY));
  }, []);

  const serviceOptions = [
    "Accounting & Bookkeeping",
    "E-Commerce Accounting",
    "Sales Tax & VAT Compliance",
    "Fractional CFO Services",
    "Other / Not sure yet",
  ];

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setError(null);
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const ejs = await import("@emailjs/browser");
      await ejs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          firm_name: form.firm_name || "Not provided",
          service: form.service || "Not specified",
          message: form.message,
          to_email: "vinita@cleriky.com",
          reply_to: form.from_email,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong. Please email us directly at vinita@cleriky.com",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#0B1F3B] overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f6f8fb] pt-36 pb-24">
        {/* dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(234,241,251,0.7),transparent_55%)] pointer-events-none" />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -18, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(196,106,45,0.07) 0%,transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ x: -32, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-[#c46a2d] font-medium mb-6">
              Cleriky Global — Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.05] tracking-[-0.01em] text-[#0B1F3B]">
              Let&apos;s Start a
            </h1>
            <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-light font-serif leading-[1.05] text-[#0B1F3B]/75">
              Conversation
            </h2>
            <div className="mt-6 h-[2px] w-20 bg-[#c46a2d]" />
            <p className="mt-8 text-lg text-slate-500 leading-relaxed max-w-md">
              Whether you&apos;re ready to outsource your back office or just
              exploring options — we&apos;re happy to talk. No pressure, no
              jargon.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Response within 24 hours",
                "No lock-in — explore your options freely",
                "Serving firms across 10+ countries",
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-slate-500"
                >
                  <CheckCircle2
                    size={15}
                    className="text-[#c46a2d] flex-shrink-0"
                  />
                  {t}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — info cards (3 cards only) */}
          <motion.div
            initial={{ x: 32, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="space-y-4"
          >
            <InfoCard
              icon={<MapPin size={20} strokeWidth={1.8} />}
              title="Our Location"
              lines={["Cleriky Global", "Ahmedabad, India"]}
              href="https://maps.google.com/?q=Ahmedabad,India"
              delay={0.3}
            />
            <InfoCard
              icon={<Mail size={20} strokeWidth={1.8} />}
              title="Email Us"
              lines={["vinita@cleriky.com"]}
              href="mailto:vinita@cleriky.com"
              delay={0.4}
            />
            <InfoCard
              icon={<Phone size={20} strokeWidth={1.8} />}
              title="Call Us"
              lines={["+1 (XXX) XXX-XXXX"]}
              href="tel:+10000000000"
              delay={0.5}
            />
          </motion.div>
        </div>
      </section>

      {/* ══ FORM + SIDE PANEL ═════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#f6f8fb]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm"
            >
              <Label>Send a Message</Label>
              <h2 className="text-3xl font-serif text-[#0B1F3B] mb-2">
                Tell us about your firm
              </h2>
              <div className="h-[2px] w-12 bg-[#c46a2d] mb-8" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          required
                          name="from_name"
                          value={form.from_name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f6f8fb] text-[#0B1F3B] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#c46a2d] focus:ring-1 focus:ring-[#c46a2d]/30 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          name="from_email"
                          value={form.from_email}
                          onChange={handleChange}
                          placeholder="jane@yourfirm.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f6f8fb] text-[#0B1F3B] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#c46a2d] focus:ring-1 focus:ring-[#c46a2d]/30 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-2">
                          Firm / Company Name
                        </label>
                        <input
                          name="firm_name"
                          value={form.firm_name}
                          onChange={handleChange}
                          placeholder="Smith & Partners CPA"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f6f8fb] text-[#0B1F3B] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#c46a2d] focus:ring-1 focus:ring-[#c46a2d]/30 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-2">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f6f8fb] text-[#0B1F3B] text-sm focus:outline-none focus:border-[#c46a2d] focus:ring-1 focus:ring-[#c46a2d]/30 transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="">Select a service…</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your firm, current challenges, and what you're looking for…"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f6f8fb] text-[#0B1F3B] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#c46a2d] focus:ring-1 focus:ring-[#c46a2d]/30 transition-all duration-200 resize-none"
                      />
                    </div>

                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                      >
                        {error}
                      </motion.p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0B1F3B] text-white text-sm font-semibold hover:bg-[#c46a2d] hover:-translate-y-[2px] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "linear",
                            }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={14} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      We typically respond within 24 hours on business days.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="w-16 h-16 rounded-full bg-[#c46a2d]/10 border border-[#c46a2d]/30 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 size={28} className="text-[#c46a2d]" />
                    </motion.div>
                    <h3 className="text-2xl font-serif text-[#0B1F3B] mb-3">
                      Message Received
                    </h3>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                      Thank you,{" "}
                      <span className="font-semibold text-[#0B1F3B]">
                        {form.from_name.split(" ")[0]}
                      </span>
                      . We&apos;ll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm(INITIAL);
                      }}
                      className="mt-8 px-6 py-2.5 rounded-full border border-slate-200 text-sm text-[#0B1F3B] hover:border-[#c46a2d] hover:text-[#c46a2d] transition-all duration-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right panel — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#c46a2d] font-medium mb-5">
                What Happens Next
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: <MessageSquare size={15} />,
                    title: "We review your message",
                    desc: "Within 24 hours a senior team member reads your enquiry.",
                  },
                  {
                    icon: <Phone size={15} />,
                    title: "Discovery call",
                    desc: "A 30-minute call to understand your firm and requirements.",
                  },
                  {
                    icon: <Briefcase size={15} />,
                    title: "Custom proposal",
                    desc: "We send a tailored proposal with clear scope and pricing.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#0B1F3B]/5 flex items-center justify-center text-[#c46a2d] flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0B1F3B]">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0B1F3B] rounded-2xl p-6 relative overflow-hidden"
            >
              <div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle,rgba(196,106,45,0.25) 0%,transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <div className="relative z-10 flex items-center gap-3 mb-3">
                <Mail size={16} className="text-[#c46a2d]" />
                <p className="text-xs uppercase tracking-[0.2em] text-[#c46a2d] font-medium">
                  Prefer to Email Directly?
                </p>
              </div>
              <p className="relative z-10 text-white text-sm font-serif leading-relaxed mb-4">
                Reach us anytime at{" "}
                <a
                  href="mailto:vinita@cleriky.com"
                  className="text-[#c46a2d] underline underline-offset-2 hover:text-white transition-colors duration-200"
                >
                  vinita@cleriky.com
                </a>{" "}
                and we&apos;ll get back to you within one business day.
              </p>
              <a
                href="mailto:vinita@cleriky.com"
                className="relative z-10 inline-flex items-center gap-2 text-xs font-semibold text-white border border-white/20 rounded-full px-4 py-2 hover:bg-white/10 transition-all duration-200"
              >
                Send an Email <ArrowRight size={12} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <Label>Common Questions</Label>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0B1F3B]">
              Before you reach out
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "How quickly can you onboard?",
                a: "Most firms are fully onboarded within 2–3 weeks. We run a parallel period to ensure zero disruption to live operations.",
              },
              {
                q: "Do you work with small firms?",
                a: "Absolutely. We work with sole practitioners all the way to multi-partner advisory groups. Packages are modular and scale accordingly.",
              },
              {
                q: "What time zones do you cover?",
                a: "We cover US (EST/PST), UK, and UAE hours. Most clients receive same-day responses regardless of timezone.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl border border-slate-200 bg-[#f6f8fb] hover:border-[#c46a2d]/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-7 h-[2px] bg-[#c46a2d] mb-4" />
                <h4 className="text-base font-serif text-[#0B1F3B] mb-3">
                  {faq.q}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
