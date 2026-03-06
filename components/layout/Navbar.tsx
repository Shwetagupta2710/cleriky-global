"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ left: 0, top: 0 });
  const navbarRef = useRef<HTMLDivElement>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Recalculate dropdown position whenever it opens or on scroll/resize
  useEffect(() => {
    const updatePos = () => {
      if (servicesBtnRef.current && navbarRef.current) {
        const btnRect = servicesBtnRef.current.getBoundingClientRect();
        const navRect = navbarRef.current.getBoundingClientRect();
        setDropdownPos({
          // Center dropdown under the "Services" button
          left: btnRect.left + btnRect.width / 2,
          // Place it just below the navbar pill, with a small gap
          top: navRect.bottom + 1.5,
        });
      }
    };

    if (servicesOpen) {
      updatePos();
      window.addEventListener("scroll", updatePos);
      window.addEventListener("resize", updatePos);
    }
    return () => {
      window.removeEventListener("scroll", updatePos);
      window.removeEventListener("resize", updatePos);
    };
  }, [servicesOpen]);

  const services = [
    {
      title: "Accounting & Bookkeeping",
      href: "/services/accounting-bookkeeping",
    },
    { title: "E-Commerce Accounting", href: "/services/ecommerce-accounting" },
    { title: "Sales Tax & VAT Compliance", href: "/services/sales-tax-vat" },
    { title: "Fractional CFO Services", href: "/services/fractional-info" },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 w-full z-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={navbarRef}
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
              <NavItem href="/">Home</NavItem>
              <NavItem href="/#about">About Us</NavItem>

              {/* Services trigger — no dropdown logic here, just the button */}
              <div className="relative flex items-center h-12">
                <button
                  ref={servicesBtnRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="flex items-center gap-1 text-[#0B1F3B]/80 hover:text-[#0B1F3B] transition-colors duration-300 outline-none"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <NavItem href="#">Resources</NavItem>
              <NavItem href="#">Contact Us</NavItem>
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-6">
              <Link href="#">
                <button className="hidden md:flex px-7 py-3 rounded-full bg-[#0B1F3B] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#c46a2d] hover:-translate-y-[2px] hover:shadow-lg">
                  Book a Call
                </button>
              </Link>

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
                <div className="flex flex-col gap-3">
                  <p className="text-sm uppercase tracking-widest text-slate-400">
                    Services
                  </p>
                  {services.map((s, i) => (
                    <MobileItem key={i} href={s.href}>
                      {s.title}
                    </MobileItem>
                  ))}
                </div>
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

      {/* 
        FIXED: Dropdown is rendered in a portal-like fixed div at the root level,
        completely outside the navbar. This means:
        - It won't be clipped by overflow:hidden
        - It starts exactly below the navbar pill
        - It overlaps the page content beneath the navbar
      */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            // Fixed position at the computed coordinates
            style={{
              position: "fixed",
              top: dropdownPos.top,
              left: dropdownPos.left - 140,
              transform: "translateX(-50%)",
              zIndex: 9999,
            }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xl w-[280px] py-3 overflow-hidden">
              {services.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="block px-6 py-3 text-[14px] font-semibold text-[#0B1F3B]/80 hover:bg-slate-50 hover:text-[#c46a2d] transition-all duration-200"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
