"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            paddingTop: scrolled ? "0.6rem" : "0.9rem",
            paddingBottom: scrolled ? "0.6rem" : "0.9rem",
          }}
          transition={{ duration: 0.25 }}
          className={`flex items-center justify-between px-10 rounded-full backdrop-blur-xl border transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 border-slate-200 shadow-md"
              : "bg-white/70 border-slate-100 shadow-sm"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="leading-tight">
            <span className="block text-[20px] font-serif tracking-[0.08em] text-[#0B1F3B]">
              Cleriky
            </span>
            <span className="block text-[11px] tracking-[0.35em] uppercase text-[#0B1F3B]/60">
              Global
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-[15px] font-medium">
            <NavItem href="#">About Us</NavItem>
            <NavItem href="#">Services</NavItem>
            <NavItem href="#">Resources</NavItem>
            <NavItem href="#">Contact Us</NavItem>
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-6">
            {/* Book a Call */}
            <Link href="#">
              <button className="hidden md:flex px-7 py-3 rounded-full bg-[#0B1F3B] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#c46a2d] hover:-translate-y-[2px] hover:shadow-lg">
                Book a Call
              </button>
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-[#0B1F3B]"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="mt-4 rounded-3xl bg-white shadow-xl border border-slate-200 p-8 flex flex-col gap-6 md:hidden"
            >
              <MobileItem href="#">About Us</MobileItem>
              <MobileItem href="#">Services</MobileItem>
              <MobileItem href="#">Resources</MobileItem>
              <MobileItem href="#">Contact Us</MobileItem>

              <Link
                href="#"
                className="mt-4 px-6 py-3 rounded-full bg-[#0B1F3B] text-white text-center font-medium hover:bg-[#c46a2d] transition"
              >
                Book a Call
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative group text-[#0B1F3B]/80 hover:text-[#0B1F3B] transition-colors duration-300"
    >
      {children}

      <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#c46a2d] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function MobileItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-lg font-medium text-[#0B1F3B] hover:text-[#c46a2d] transition"
    >
      {children}
    </Link>
  );
}
