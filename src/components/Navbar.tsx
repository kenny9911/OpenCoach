"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");

  const navLinks = [
    { label: t("services"), href: "#services" },
    { label: t("methodology"), href: "#methodology" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">OC</span>
            </div>
            <span className="text-lg font-semibold text-slate-900 tracking-tight">
              OpenCoach
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-indigo-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href="#contact"
              className="text-sm font-medium px-5 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              {t("getStarted")}
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-slate-600 hover:text-indigo-600 font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="py-2">
            <LanguageSwitcher />
          </div>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium px-5 py-2.5 rounded-lg bg-slate-900 text-white text-center"
          >
            {t("getStarted")}
          </a>
        </div>
      )}
    </nav>
  );
}
