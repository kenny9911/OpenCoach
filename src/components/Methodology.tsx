import { useTranslations } from "next-intl";

export default function Methodology() {
  const t = useTranslations("methodology");

  const steps = [
    { number: "01", titleKey: "step1title", descKey: "step1desc" },
    { number: "02", titleKey: "step2title", descKey: "step2desc" },
    { number: "03", titleKey: "step3title", descKey: "step3desc" },
    { number: "04", titleKey: "step4title", descKey: "step4desc" },
  ];

  const comparisons = [
    { fromKey: "from1", toKey: "to1" },
    { fromKey: "from2", toKey: "to2" },
    { fromKey: "from3", toKey: "to3" },
  ];

  return (
    <section id="methodology" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">
            {t("label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-slate-500">{t("sub")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-indigo-200 to-transparent z-0" />
              )}
              <div className="relative">
                <div className="text-5xl font-bold text-indigo-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-10 md:p-14">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 grid-bg" />
          </div>
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                {t("boxHeading1")}
                <br />
                <span className="text-indigo-300">{t("boxHeading2")}</span>
              </h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                {t("boxDesc")}
              </p>
            </div>
            <div className="space-y-4">
              {comparisons.map((item) => (
                <div
                  key={item.fromKey}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">
                      {t(item.fromKey)}
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-indigo-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <div className="flex-1 text-right">
                    <div className="text-sm font-medium text-white">
                      {t(item.toKey)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
