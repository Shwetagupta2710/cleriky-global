import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3B] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-serif tracking-wide">Cleriky Global</h3>
          <p className="text-slate-400 mt-4 text-sm leading-relaxed">
            Offshore accounting support designed specifically for CPA firms
            looking to scale efficiently and serve clients globally.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>
              <Link href="/services/accounting-bookkeeping">
                Accounting & Bookkeeping
              </Link>
            </li>
            <li>
              <Link href="/services/ecommerce-accounting">
                E-Commerce Accounting
              </Link>
            </li>
            <li>
              <Link href="/services/sales-tax-vat">Sales Tax & VAT</Link>
            </li>
            <li>
              <Link href="/services/fractional-cfo">Fractional CFO</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="#">Resources</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-slate-400 text-sm">
            Work with Cleriky Global to streamline your accounting operations.
          </p>

          <Link href="/contact">
            <button className="mt-5 px-6 py-3 bg-[#c46a2d] text-white text-sm rounded-md hover:bg-[#d9773b] transition">
              Book a Call
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Cleriky Global. All rights reserved.
      </div>
    </footer>
  );
}
