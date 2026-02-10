"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect, useCallback } from "react";

export default function Hero() {
  const t = useTranslations("hero");
  const headingRef = useRef<HTMLHeadingElement>(null);

  const fitText = useCallback(() => {
    const el = headingRef.current;
    if (!el) return;

    const containerWidth = el.clientWidth;
    if (containerWidth === 0) return;

    const lines = el.querySelectorAll<HTMLElement>("[data-heading-line]");
    if (lines.length === 0) return;

    // Measure at a known reference size
    const refSize = 100;
    el.style.fontSize = `${refSize}px`;

    let maxWidth = 0;
    lines.forEach((line) => {
      maxWidth = Math.max(maxWidth, line.scrollWidth);
    });

    // Calculate font size that fits the widest line within the container
    const ideal = (containerWidth / maxWidth) * refSize * 0.97;
    el.style.fontSize = `${Math.min(ideal, 76)}px`;
  }, []);

  useEffect(() => {
    fitText();
    const observer = new ResizeObserver(fitText);
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, [fitText]);

  const stats = [
    { value: t("stat1value"), label: t("stat1label") },
    { value: t("stat2value"), label: t("stat2label") },
    { value: t("stat3value"), label: t("stat3label") },
    { value: t("stat4value"), label: t("stat4label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-50 to-violet-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-medium text-indigo-700 tracking-wide uppercase">
              {t("badge")}
            </span>
          </div>

          <h1
            ref={headingRef}
            className="animate-fade-in-up-delay-1 font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            <span data-heading-line className="block whitespace-nowrap">
              {t("heading1")} {t("heading2")}
            </span>
            <span
              data-heading-line
              className="block whitespace-nowrap bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x"
            >
              {t("heading3")} {t("heading4")}
            </span>
          </h1>

          <p className="animate-fade-in-up-delay-2 mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t("sub")}
          </p>

          <p className="animate-fade-in-up-delay-2 mt-4 text-base md:text-lg text-slate-400 font-light">
            {t("tagline")}
          </p>

          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5"
            >
              {t("cta1")}
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-all hover:-translate-y-0.5"
            >
              {t("cta2")}
            </a>
          </div>

          <div className="animate-fade-in-up-delay-3 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
