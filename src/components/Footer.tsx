import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">OC</span>
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">
                OpenCoach
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">{t("desc")}</p>
            <p className="text-sm mt-2 text-slate-500">{t("tagline")}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t("navigate")}
            </h4>
            <ul className="space-y-2.5">
              {(["services", "methodology", "about", "contact"] as const).map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {nav(item)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t("contactTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>info@opencoach.ai</li>
              <li>Hong Kong</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} OpenCoach Technologies Limited.{" "}
            {t("rights")}
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              {t("privacy")}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
