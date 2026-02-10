import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-12 md:p-16 text-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t("heading")}
            </h2>
            <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
              {t("sub")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl bg-white text-indigo-700 font-medium text-sm hover:bg-indigo-50 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {t("cta1")}
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                {t("cta2")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
