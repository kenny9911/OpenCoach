import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const principles = [
    { titleKey: "p1title", descKey: "p1desc" },
    { titleKey: "p2title", descKey: "p2desc" },
    { titleKey: "p3title", descKey: "p3desc" },
    { titleKey: "p4title", descKey: "p4desc" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">
              {t("label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
              {t("heading1")}
              <br />
              <span className="text-slate-400">{t("heading2")}</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {t("desc1")}
            </p>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              {t("desc2")}
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100">
              <blockquote className="text-lg font-medium text-slate-800">
                &ldquo;{t("quote")}&rdquo;
              </blockquote>
              <p className="mt-2 text-sm text-slate-500">{t("quoteZh")}</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold text-slate-400 tracking-wide uppercase mb-2">
              {t("principlesLabel")}
            </p>
            {principles.map((p, i) => (
              <div
                key={p.titleKey}
                className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all"
              >
                <div className="text-2xl font-bold text-indigo-200 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {t(p.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {t(p.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
