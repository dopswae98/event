"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "GALLERY", href: "/gallery" },
  { label: "PACKAGES", href: "/packages" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full py-7">
      <div className="container-page flex items-center justify-between">
        <Link href="/" className="block">
          <div className="font-script text-6xl leading-none gold">Kay</div>
          <p className="text-[10px] tracking-[0.4em] text-white">
            THE PERSONALIZER
          </p>
        </Link>

        <nav className="hidden gap-9 text-sm font-semibold md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-2 transition ${
                  active
                    ? "border-b border-[#c9973f] text-[#c9973f]"
                    : "border-b border-transparent text-white hover:text-[#c9973f]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:6090000000"
            className="gold flex items-center gap-2 text-sm font-bold"
          >
            <FaPhoneAlt size={14} /> (609) 000-0000
          </a>

          <Link href="/contact" className="btn-outline px-5 py-3 text-xs font-semibold">
            BOOK A CONSULTATION
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center border border-[#c9973f] bg-[#c9973f] text-black md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="container-page mt-5 md:hidden">
          <div className="border border-[#c9973f]/40 bg-[#090b0b]/95 p-4 shadow-2xl backdrop-blur">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 text-sm font-semibold tracking-[0.18em] transition ${
                      active
                        ? "bg-[#c9973f] text-black"
                        : "text-white hover:bg-white/5 hover:text-[#c9973f]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <a
                href="tel:6090000000"
                className="mt-3 flex items-center gap-2 border-t border-white/10 px-4 pt-4 text-sm font-bold text-[#c9973f]"
              >
                <FaPhoneAlt size={14} /> (609) 000-0000
              </a>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-outline mt-3 px-5 py-3 text-center text-xs font-semibold"
              >
                BOOK A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}