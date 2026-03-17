import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import AINativePage from "@/components/AINativePage";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "AI Native Revolution — From Vibe Coding to One Person Company | OpenCoach",
    zh: "AI 原生变革 — 从 Vibe Coding 到一人公司 | OpenCoach",
    ja: "AI ネイティブ革命 — Vibe Coding から一人会社へ | OpenCoach",
    ko: "AI 네이티브 혁명 — Vibe Coding에서 1인 기업으로 | OpenCoach",
    fr: "Révolution AI Native — Du Vibe Coding à l'Entreprise Solo | OpenCoach",
    de: "AI-Native Revolution — Vom Vibe Coding zum Ein-Personen-Unternehmen | OpenCoach",
    es: "Revolución AI Nativa — Del Vibe Coding a la Empresa Unipersonal | OpenCoach",
  };

  const descriptions: Record<string, string> = {
    en: "How AI changes everything: 92% of US developers use AI coding daily, Cursor generates $1.2B ARR with 60 people. Learn about AI-native organizations, Vibe Coding, Claude Code, and the One Person Company paradigm.",
    zh: "AI 如何变革一切：92% 美国开发者日常使用 AI 编程，Cursor 用 60 人创造 $12亿 年收入。了解 AI 原生组织、Vibe Coding、Claude Code 和一人公司范式。",
    ja: "AIがすべてを変える：米国開発者の92%がAIコーディングを日常使用。AIネイティブ組織、Vibe Coding、Claude Code、一人会社パラダイムについて。",
    ko: "AI가 모든 것을 바꾸는 방법: 미국 개발자의 92%가 AI 코딩을 일상적으로 사용. AI 네이티브 조직, Vibe Coding, Claude Code, 1인 기업 패러다임.",
    fr: "Comment l'IA change tout : 92% des développeurs américains utilisent le codage IA quotidiennement. Organisations AI-native, Vibe Coding, Claude Code et l'entreprise solo.",
    de: "Wie KI alles verändert: 92% der US-Entwickler nutzen täglich AI-Coding. AI-native Organisationen, Vibe Coding, Claude Code und das Ein-Personen-Unternehmen.",
    es: "Cómo la IA cambia todo: el 92% de los desarrolladores de EE.UU. usan codificación IA diariamente. Organizaciones AI-nativas, Vibe Coding, Claude Code y la empresa unipersonal.",
  };

  const url = locale === "en" ? "/ai-native" : `/${locale}/ai-native`;

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      "AI native",
      "Vibe Coding",
      "Claude Code",
      "one person company",
      "agentic AI",
      "AI coding",
      "OpenClaw",
      "ontology",
      "AI transformation",
      "systems builder",
    ],
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === "en" ? "/ai-native" : `/${l}/ai-native`,
        ])
      ),
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `https://opencoach.ai${url}`,
      siteName: "OpenCoach",
      type: "article",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    },
  };
}

export default function AINative() {
  return (
    <main>
      <Navbar />
      <AINativePage />
    </main>
  );
}
