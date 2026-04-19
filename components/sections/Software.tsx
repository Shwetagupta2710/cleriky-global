"use client";

import Image from "next/image";

const logos = [
  "/logos/stripe-4.svg",
  "/logos/shopify.svg",
  "/logos/xero.svg",
  "/logos/quickbook.svg",
  "/logos/zoho.svg",
  "/logos/avalara.svg",
  "/logos/a2x.svg",
  "/logos/syft.png",
  "/logos/rippling.svg",
  "/logos/amazon.png",
  "/logos/asana.png",
  "/logos/clickup.png",
  "/logos/gusto.png",
  "/logos/paypal.png",
];

export default function Software() {
  return (
    <section className="relative overflow-hidden pt-20 pb-18 md:pt-24 md:pb-24 bg-white">
      {/* smooth fade from hero */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#f6f8fb] to-transparent pointer-events-none"></div>

      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(196,106,45,0.04),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-16">
          <p className="uppercase tracking-[0.28em] text-sm text-[#c46a2d] font-medium">
            Platforms & Integrations
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-serif text-[#0B1F3B]">
            Software We Work With
          </h2>

          <div className="mt-4 mx-auto h-[3px] w-24 rounded-full bg-gradient-to-r from-[#c46a2d] to-[#e88a4c]"></div>
        </div>

        {/* Logos */}
        <div className="relative overflow-hidden">
          {/* left fade */}
          <div className="absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* right fade */}
          <div className="absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="marquee flex items-center gap-12 md:gap-20 py-6">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="group relative h-10 w-[110px] md:h-12 md:w-[140px] flex-shrink-0 opacity-95 transition-all duration-300 ease-out hover:scale-105 hover:drop-shadow-[0_6px_10px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={logo}
                  alt="software logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
