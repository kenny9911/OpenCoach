"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function AINativePage() {
  const t = useTranslations("aiNative");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ai-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".ai-fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ai-native-page">
      {/* Grid Background */}
      <div className="ai-grid-bg" />

      {/* Hero */}
      <header className="min-h-screen flex items-center justify-center relative px-6 md:px-10 pt-28 pb-20">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,229,160,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1000px] text-center relative z-10">
          <div className="inline-block px-5 py-1.5 rounded-full border border-[#2a2a3a] bg-[#16161f] text-xs text-[#00e5a0] font-mono tracking-[2px] uppercase mb-8 animate-[fadeInUp_0.8s_both]">
            {t("heroBadge")}
          </div>
          <h1 className="text-[clamp(40px,7vw,80px)] font-black leading-[1.1] tracking-tight mb-6 animate-[fadeInUp_0.8s_0.2s_both]">
            {t("heroTitle1")}
            <br />
            <span className="bg-gradient-to-br from-[#00e5a0] to-[#00c8ff] bg-clip-text text-transparent">
              {t("heroTitle2")}
            </span>
          </h1>
          <p className="text-[clamp(16px,2.2vw,22px)] text-[#8888a0] max-w-[700px] mx-auto mb-12 animate-[fadeInUp_0.8s_0.4s_both]">
            {t("heroSubtitle")}
          </p>
          <div className="flex gap-10 justify-center flex-wrap animate-[fadeInUp_0.8s_0.6s_both]">
            {(["stat1", "stat2", "stat3", "stat4"] as const).map((key) => (
              <div key={key} className="text-center">
                <div className="font-mono text-[28px] font-bold text-[#00e5a0]">
                  {t(`${key}Value`)}
                </div>
                <div className="text-xs text-[#8888a0] uppercase tracking-[1px] mt-1">
                  {t(`${key}Label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="ai-divider" />

      {/* Three-Level Talent */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">{t("levelsTag")}</div>
          <h2 className="ai-section-title">{t("levelsTitle")}</h2>
          <p className="ai-section-desc">{t("levelsDesc")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 ai-fade-in">
          <div className="ai-level-card border-t-[3px] border-t-[#ff6b6b]">
            <div className="font-mono text-[11px] tracking-[2px] uppercase mb-4 text-[#ff6b6b]">
              {t("level1Tier")}
            </div>
            <h3 className="text-[22px] font-bold mb-3">{t("level1Title")}</h3>
            <p className="text-sm text-[#8888a0] leading-relaxed">{t("level1Desc")}</p>
            <p className="mt-3 text-[#ff6b6b] font-semibold text-sm">{t("level1Warning")}</p>
            <span className="inline-block mt-4 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-[1px] bg-[rgba(255,107,107,0.15)] text-[#ff6b6b]">
              {t("level1Tag")}
            </span>
          </div>
          <div className="ai-level-card border-t-[3px] border-t-[#ffd93d]">
            <div className="font-mono text-[11px] tracking-[2px] uppercase mb-4 text-[#ffd93d]">
              {t("level2Tier")}
            </div>
            <h3 className="text-[22px] font-bold mb-3">{t("level2Title")}</h3>
            <p className="text-sm text-[#8888a0] leading-relaxed">{t("level2Desc")}</p>
            <span className="inline-block mt-4 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-[1px] bg-[rgba(255,217,61,0.15)] text-[#ffd93d]">
              {t("level2Tag")}
            </span>
          </div>
          <div className="ai-level-card border-t-[3px] border-t-[#00e5a0]">
            <div className="font-mono text-[11px] tracking-[2px] uppercase mb-4 text-[#00e5a0]">
              {t("level3Tier")}
            </div>
            <h3 className="text-[22px] font-bold mb-3">{t("level3Title")}</h3>
            <p className="text-sm text-[#8888a0] leading-relaxed">{t("level3Desc")}</p>
            <p className="mt-3 text-[#00e5a0] font-semibold text-sm">{t("level3Note")}</p>
            <span className="inline-block mt-4 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-[1px] bg-[rgba(0,229,160,0.15)] text-[#00e5a0]">
              {t("level3Tag")}
            </span>
          </div>
        </div>
      </section>

      <div className="ai-divider" />

      {/* Data Stats */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">{t("dataTag")}</div>
          <h2 className="ai-section-title">{t("dataTitle")}</h2>
          <p className="ai-section-desc">{t("dataDesc")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12 ai-fade-in">
          {(["data1", "data2", "data3", "data4"] as const).map((key) => (
            <div key={key} className="ai-data-card">
              <div className="font-mono text-[32px] font-bold text-[#00e5a0] leading-tight">
                {t(`${key}Value`)}
              </div>
              <div className="text-[13px] text-[#8888a0] mt-2">{t(`${key}Unit`)}</div>
            </div>
          ))}
        </div>

        {/* Company Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 ai-fade-in">
          {(["case1", "case2", "case3", "case4", "case5", "case6", "case7", "case8"] as const).map((key) => (
            <div key={key} className="ai-showcase-card">
              <div className="text-lg font-bold mb-1.5">{t(`${key}Name`)}</div>
              <div className="font-mono text-[13px] text-[#00e5a0] mb-2.5">{t(`${key}Stats`)}</div>
              <div className="text-[13px] text-[#8888a0] leading-relaxed">{t(`${key}Desc`)}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="ai-divider" />

      {/* Quote */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-quote-block ai-fade-in">
          <blockquote className="text-[clamp(20px,3vw,28px)] font-medium leading-relaxed max-w-[800px] mx-auto mb-5">
            {t("quote1Text")}
          </blockquote>
          <div className="text-sm text-[#00e5a0]">{t("quote1Attr")}</div>
        </div>
      </section>

      {/* What is AI Native */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">{t("nativeTag")}</div>
          <h2 className="ai-section-title">{t("nativeTitle")}</h2>
          <p className="ai-section-desc">{t("nativeDesc")}</p>
        </div>

        <div className="ai-diagram ai-fade-in">
          <h3 className="text-xl font-bold mb-6">{t("nativeDiagramTitle")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 bg-[rgba(0,229,160,0.06)] rounded-xl border border-[rgba(0,229,160,0.15)]">
              <div className="font-bold text-base mb-2 text-[#00e5a0]">{t("nativeDim1Title")}</div>
              <div className="text-sm text-[#8888a0]">{t("nativeDim1Desc")}</div>
            </div>
            <div className="p-5 bg-[rgba(0,200,255,0.06)] rounded-xl border border-[rgba(0,200,255,0.15)]">
              <div className="font-bold text-base mb-2 text-[#00c8ff]">{t("nativeDim2Title")}</div>
              <div className="text-sm text-[#8888a0]">{t("nativeDim2Desc")}</div>
            </div>
            <div className="p-5 bg-[rgba(255,217,61,0.06)] rounded-xl border border-[rgba(255,217,61,0.15)]">
              <div className="font-bold text-base mb-2 text-[#ffd93d]">{t("nativeDim3Title")}</div>
              <div className="text-sm text-[#8888a0]">{t("nativeDim3Desc")}</div>
            </div>
            <div className="p-5 bg-[rgba(255,107,107,0.06)] rounded-xl border border-[rgba(255,107,107,0.15)]">
              <div className="font-bold text-base mb-2 text-[#ff6b6b]">{t("nativeDim4Title")}</div>
              <div className="text-sm text-[#8888a0]">{t("nativeDim4Desc")}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ai-divider" />

      {/* One Person Company */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">One Person Company</div>
          <h2 className="ai-section-title">{t("opcTitle")}</h2>
          <p className="ai-section-desc">{t("opcDesc")}</p>
        </div>

        <div className="ai-diagram ai-fade-in">
          <h3 className="text-lg font-bold mb-5">{t("opcDiagramTitle")}</h3>
          <div className="text-center my-6">
            <div className="inline-block px-8 py-4 bg-[rgba(0,229,160,0.15)] border-2 border-[#00e5a0] rounded-[14px] font-bold text-lg text-[#00e5a0]">
              {t("opcYou")}
            </div>
          </div>
          <div className="text-center text-[#8888a0] text-2xl my-2">&darr;</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 bg-[rgba(0,200,255,0.08)] rounded-[10px] border border-[rgba(0,200,255,0.2)]">
              <div className="text-xs font-mono text-[#00c8ff]">{t("opcRole1")}</div>
              <div className="text-[11px] text-[#8888a0] mt-1">{t("opcRole1Desc")}</div>
            </div>
            <div className="p-3.5 bg-[rgba(0,229,160,0.08)] rounded-[10px] border border-[rgba(0,229,160,0.2)]">
              <div className="text-xs font-mono text-[#00e5a0]">{t("opcRole2")}</div>
              <div className="text-[11px] text-[#8888a0] mt-1">{t("opcRole2Desc")}</div>
            </div>
            <div className="p-3.5 bg-[rgba(255,217,61,0.08)] rounded-[10px] border border-[rgba(255,217,61,0.2)]">
              <div className="text-xs font-mono text-[#ffd93d]">{t("opcRole3")}</div>
              <div className="text-[11px] text-[#8888a0] mt-1">{t("opcRole3Desc")}</div>
            </div>
            <div className="p-3.5 bg-[rgba(255,107,107,0.08)] rounded-[10px] border border-[rgba(255,107,107,0.2)]">
              <div className="text-xs font-mono text-[#ff6b6b]">{t("opcRole4")}</div>
              <div className="text-[11px] text-[#8888a0] mt-1">{t("opcRole4Desc")}</div>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-[#8888a0]">{t("opcFootnote")}</p>
        </div>
      </section>

      <div className="ai-divider" />

      {/* Vibe Coding */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">Vibe Coding</div>
          <h2 className="ai-section-title">{t("vibeTitle")}</h2>
          <p className="ai-section-desc">{t("vibeDesc")}</p>
        </div>

        <div className="ai-diagram ai-fade-in">
          <h3 className="text-lg font-bold mb-4">{t("vibeWhat")}</h3>
          <p className="text-[15px] text-[#8888a0] mb-6">{t("vibeWhatDesc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-[#0a0a0f] rounded-xl border border-[#2a2a3a]">
              <div className="font-bold mb-2">{t("vibeStep1Title")}</div>
              <div className="font-mono text-xs text-[#00e5a0] bg-[rgba(0,229,160,0.06)] p-2.5 rounded-lg mt-2">
                {t("vibeStep1Example")}
              </div>
            </div>
            <div className="p-5 bg-[#0a0a0f] rounded-xl border border-[#2a2a3a]">
              <div className="font-bold mb-2">{t("vibeStep2Title")}</div>
              <div className="text-[13px] text-[#8888a0]">{t("vibeStep2Desc")}</div>
            </div>
            <div className="p-5 bg-[#0a0a0f] rounded-xl border border-[#2a2a3a]">
              <div className="font-bold mb-2">{t("vibeStep3Title")}</div>
              <div className="text-[13px] text-[#8888a0]">{t("vibeStep3Desc")}</div>
            </div>
          </div>
        </div>

        <div className="ai-quote-block ai-fade-in mt-10">
          <blockquote className="text-[clamp(20px,3vw,28px)] font-medium leading-relaxed max-w-[800px] mx-auto mb-5">
            {t("vibeQuote")}
          </blockquote>
          <div className="text-sm text-[#00e5a0]">{t("vibeQuoteAttr")}</div>
        </div>
      </section>

      <div className="ai-divider" />

      {/* Claude Code */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">Claude Code</div>
          <h2 className="ai-section-title">{t("ccTitle")}</h2>
          <p className="ai-section-desc">{t("ccDesc")}</p>
        </div>

        <div className="ai-diagram ai-fade-in">
          <h3 className="text-xl font-bold mb-6">{t("ccPowerTitle")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(["cc1", "cc2", "cc3", "cc4", "cc5", "cc6"] as const).map((key) => (
              <div key={key} className="p-5 bg-[#0a0a0f] rounded-xl border border-[#2a2a3a]">
                <div className="font-bold mb-2 text-[#00e5a0]">{t(`${key}Title`)}</div>
                <div className="text-[13px] text-[#8888a0] leading-relaxed">{t(`${key}Desc`)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 ai-fade-in">
          {(["ccStat1", "ccStat2", "ccStat3", "ccStat4"] as const).map((key) => (
            <div key={key} className="ai-data-card">
              <div className="font-mono text-[32px] font-bold text-[#00e5a0] leading-tight">
                {t(`${key}Value`)}
              </div>
              <div className="text-[13px] text-[#8888a0] mt-2">{t(`${key}Unit`)}</div>
            </div>
          ))}
        </div>

        {/* How to be a conductor */}
        <div className="ai-diagram ai-fade-in mt-10">
          <h3 className="text-xl font-bold mb-2">{t("conductorTitle")}</h3>
          <p className="text-sm text-[#8888a0] mb-7">{t("conductorDesc")}</p>

          <div className="flex flex-col gap-6">
            {(["cond1", "cond2", "cond3", "cond4", "cond5"] as const).map((key) => (
              <div key={key} className="ai-practice-item">
                <div className="text-2xl">{t(`${key}Icon`)}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t(`${key}Title`)}</h3>
                  <p className="text-[15px] text-[#8888a0] leading-relaxed">{t(`${key}Desc`)}</p>
                  <div className="ai-example-block whitespace-pre-line">{t(`${key}Example`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-quote-block ai-fade-in mt-10">
          <blockquote className="text-[clamp(20px,3vw,28px)] font-medium leading-relaxed max-w-[800px] mx-auto mb-5">
            {t("ccQuote")}
          </blockquote>
          <div className="text-sm text-[#00e5a0]">{t("ccQuoteAttr")}</div>
        </div>

        {/* Evolution path */}
        <div className="ai-diagram ai-fade-in mt-8">
          <h3 className="text-lg font-bold mb-5">{t("evoTitle")}</h3>
          <div className="flex items-center justify-center flex-wrap gap-4">
            {(["evo1", "evo2", "evo3", "evo4"] as const).map((key, i) => (
              <div key={key} className="flex items-center gap-4">
                <div className={`px-6 py-3.5 rounded-xl text-sm font-semibold text-center min-w-[140px] border ${
                  i === 0 ? "bg-[rgba(0,200,255,0.12)] border-[rgba(0,200,255,0.3)] text-[#00c8ff]" :
                  i === 1 ? "bg-[rgba(0,229,160,0.12)] border-[rgba(0,229,160,0.3)] text-[#00e5a0]" :
                  i === 2 ? "bg-[rgba(255,217,61,0.12)] border-[rgba(255,217,61,0.3)] text-[#ffd93d]" :
                  "bg-[rgba(255,107,107,0.12)] border-[rgba(255,107,107,0.3)] text-[#ff6b6b]"
                }`}>
                  {t(`${key}Name`)}
                  <br />
                  <span className="text-[11px]">{t(`${key}Sub`)}</span>
                </div>
                {i < 3 && <span className="text-2xl text-[#8888a0]">&rarr;</span>}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#8888a0] mt-5">{t("evoFootnote")}</p>
        </div>
      </section>

      <div className="ai-divider" />

      {/* OpenClaw */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">OpenClaw</div>
          <h2 className="ai-section-title">{t("ocTitle")}</h2>
          <p className="ai-section-desc">{t("ocDesc")}</p>
        </div>

        <div className="ai-diagram ai-fade-in">
          <h3 className="text-lg font-bold mb-5">{t("ocWhatTitle")}</h3>
          <p className="text-[15px] text-[#8888a0] mb-6">{t("ocWhatDesc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(["oc1", "oc2", "oc3"] as const).map((key) => (
              <div key={key} className="p-5 bg-[#0a0a0f] rounded-xl border border-[#2a2a3a]">
                <div className="font-bold mb-2 text-[#00e5a0]">{t(`${key}Title`)}</div>
                <div className="text-[13px] text-[#8888a0]">{t(`${key}Desc`)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-diagram ai-fade-in mt-6">
          <h3 className="text-lg font-bold mb-5">{t("ocWhyTitle")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(["ocWhy1", "ocWhy2", "ocWhy3", "ocWhy4"] as const).map((key, i) => (
              <div key={key} className={`p-5 rounded-xl border ${
                i === 0 ? "bg-[rgba(0,229,160,0.06)] border-[rgba(0,229,160,0.15)]" :
                i === 1 ? "bg-[rgba(0,200,255,0.06)] border-[rgba(0,200,255,0.15)]" :
                i === 2 ? "bg-[rgba(255,217,61,0.06)] border-[rgba(255,217,61,0.15)]" :
                "bg-[rgba(255,107,107,0.06)] border-[rgba(255,107,107,0.15)]"
              }`}>
                <div className={`font-bold text-[15px] mb-2.5 ${
                  i === 0 ? "text-[#00e5a0]" : i === 1 ? "text-[#00c8ff]" : i === 2 ? "text-[#ffd93d]" : "text-[#ff6b6b]"
                }`}>{t(`${key}Title`)}</div>
                <div className="text-sm text-[#8888a0] leading-relaxed">{t(`${key}Desc`)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* OpenClaw + Claude Code */}
        <div className="ai-diagram ai-fade-in mt-6">
          <h3 className="text-lg font-bold mb-5">{t("ocComboTitle")}</h3>
          <div className="flex items-center justify-center flex-wrap gap-4">
            <div className="px-6 py-3.5 rounded-xl text-sm font-semibold text-center min-w-[180px] bg-[rgba(0,229,160,0.12)] border border-[rgba(0,229,160,0.3)] text-[#00e5a0]">
              Claude Code<br /><span className="text-[11px]">{t("ocComboCC")}</span>
            </div>
            <span className="text-2xl text-[#8888a0]">+</span>
            <div className="px-6 py-3.5 rounded-xl text-sm font-semibold text-center min-w-[180px] bg-[rgba(255,217,61,0.12)] border border-[rgba(255,217,61,0.3)] text-[#ffd93d]">
              OpenClaw<br /><span className="text-[11px]">{t("ocComboOC")}</span>
            </div>
            <span className="text-2xl text-[#8888a0]">=</span>
            <div className="px-6 py-3.5 rounded-xl text-sm font-semibold text-center min-w-[180px] bg-[rgba(255,107,107,0.12)] border border-[rgba(255,107,107,0.3)] text-[#ff6b6b]">
              {t("ocComboResult")}<br /><span className="text-[11px]">{t("ocComboResultSub")}</span>
            </div>
          </div>
          <p className="text-center text-sm text-[#8888a0] mt-5">{t("ocComboNote")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 ai-fade-in">
          {(["ocStat1", "ocStat2", "ocStat3", "ocStat4"] as const).map((key) => (
            <div key={key} className="ai-data-card">
              <div className="font-mono text-[32px] font-bold text-[#00e5a0] leading-tight">
                {t(`${key}Value`)}
              </div>
              <div className="text-[13px] text-[#8888a0] mt-2">{t(`${key}Unit`)}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="ai-divider" />

      {/* Five Actions */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">{t("actionsTag")}</div>
          <h2 className="ai-section-title">{t("actionsTitle")}</h2>
          <p className="ai-section-desc">{t("actionsDesc")}</p>
        </div>

        <div className="flex flex-col gap-6 mt-10">
          {(["action1", "action2", "action3", "action4", "action5"] as const).map((key, i) => (
            <div key={key} className="ai-practice-item ai-fade-in">
              <div className="font-mono text-4xl font-bold text-[#00e5a0] leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t(`${key}Title`)}</h3>
                <p className="text-[15px] text-[#8888a0] leading-relaxed">{t(`${key}Desc`)}</p>
                <div className="ai-example-block whitespace-pre-line">{t(`${key}Example`)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="ai-divider" />

      {/* Ontology */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">{t("ontoTag")}</div>
          <h2 className="ai-section-title">{t("ontoTitle")}</h2>
          <p className="ai-section-desc">{t("ontoDesc")}</p>
        </div>

        <div className="ai-diagram ai-fade-in">
          <h3 className="text-lg font-bold mb-6">{t("ontoCoreTitle")}</h3>
          <div className="flex items-center justify-center flex-wrap gap-4">
            <div className="px-6 py-3.5 rounded-xl text-sm font-semibold text-center min-w-[140px] bg-[rgba(0,200,255,0.12)] border border-[rgba(0,200,255,0.3)] text-[#00c8ff]">
              {t("ontoNode1")}<br /><span className="text-[11px]">{t("ontoNode1Sub")}</span>
            </div>
            <span className="text-2xl text-[#8888a0]">&rarr;</span>
            <div className="px-6 py-3.5 rounded-xl text-sm font-semibold text-center min-w-[140px] bg-[rgba(0,229,160,0.12)] border border-[rgba(0,229,160,0.3)] text-[#00e5a0]">
              {t("ontoNode2")}<br /><span className="text-[11px]">{t("ontoNode2Sub")}</span>
            </div>
            <span className="text-2xl text-[#8888a0]">&rarr;</span>
            <div className="px-6 py-3.5 rounded-xl text-sm font-semibold text-center min-w-[140px] bg-[rgba(255,217,61,0.12)] border border-[rgba(255,217,61,0.3)] text-[#ffd93d]">
              {t("ontoNode3")}<br /><span className="text-[11px]">{t("ontoNode3Sub")}</span>
            </div>
            <span className="text-2xl text-[#8888a0]">&rarr;</span>
            <div className="px-6 py-3.5 rounded-xl text-sm font-semibold text-center min-w-[140px] bg-[rgba(255,107,107,0.12)] border border-[rgba(255,107,107,0.3)] text-[#ff6b6b]">
              {t("ontoNode4")}<br /><span className="text-[11px]">{t("ontoNode4Sub")}</span>
            </div>
          </div>
          <p className="text-center text-sm text-[#8888a0] mt-4">{t("ontoNote")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 ai-fade-in">
          <div className="bg-[#16161f] border border-[#2a2a3a] rounded-[14px] p-7">
            <h4 className="text-[17px] mb-3 text-[#00e5a0]">{t("ontoWhyTitle")}</h4>
            <p className="text-sm text-[#8888a0] leading-relaxed">{t("ontoWhyDesc")}</p>
          </div>
          <div className="bg-[#16161f] border border-[#2a2a3a] rounded-[14px] p-7">
            <h4 className="text-[17px] mb-3 text-[#00c8ff]">{t("ontoPalantirTitle")}</h4>
            <p className="text-sm text-[#8888a0] leading-relaxed">{t("ontoPalantirDesc")}</p>
          </div>
        </div>
      </section>

      <div className="ai-divider" />

      {/* Roadmap */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">{t("roadmapTag")}</div>
          <h2 className="ai-section-title">{t("roadmapTitle")}</h2>
          <p className="ai-section-desc">{t("roadmapDesc")}</p>
        </div>

        <div className="ai-timeline ai-fade-in">
          {(["rm1", "rm2", "rm3", "rm4", "rm5"] as const).map((key) => (
            <div key={key} className="ai-timeline-item">
              <div className="font-mono text-xs text-[#00e5a0] uppercase tracking-[1px] mb-1.5">
                {t(`${key}Week`)}
              </div>
              <h4 className="text-[17px] font-bold mb-1">{t(`${key}Title`)}</h4>
              <p className="text-sm text-[#8888a0]">{t(`${key}Desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="ai-divider" />

      {/* Role Guide */}
      <section className="py-24 px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="ai-fade-in">
          <div className="ai-section-tag">{t("rolesTag")}</div>
          <h2 className="ai-section-title">{t("rolesTitle")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 ai-fade-in">
          {(["roleLeader", "roleEngineer", "roleBusiness", "roleProduct"] as const).map((key) => (
            <div key={key} className="bg-[#16161f] border border-[#2a2a3a] rounded-[14px] p-7">
              <h4 className="text-base mb-3">{t(`${key}Title`)}</h4>
              <div className="text-sm text-[#8888a0] leading-[2] whitespace-pre-line">
                {t(`${key}List`)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="ai-divider" />

      {/* CTA */}
      <section className="text-center py-28 px-6 md:px-10">
        <div className="ai-fade-in">
          <h2 className="text-[clamp(32px,5vw,56px)] font-black leading-[1.15] mb-5">
            {t("ctaTitle1")}
            <br />
            <span className="bg-gradient-to-br from-[#00e5a0] to-[#00c8ff] bg-clip-text text-transparent">
              {t("ctaTitle2")}
            </span>
          </h2>
          <p className="text-lg text-[#8888a0] max-w-[600px] mx-auto mb-10">
            {t("ctaDesc")}
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-block px-12 py-4 bg-[#00e5a0] text-[#0a0a0f] text-[15px] font-bold rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,229,160,0.3)] transition-all"
          >
            {t("ctaButton")}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-[13px] text-[#8888a0] border-t border-[#2a2a3a]">
        <p>{t("footerText")}</p>
        <p className="mt-2 text-[11px]">{t("footerSources")}</p>
      </footer>
    </div>
  );
}
