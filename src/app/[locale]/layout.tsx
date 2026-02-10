import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
    en: "OpenCoach | Agentic AI & Ontology for Enterprise Transformation",
    zh: "OpenCoach | 企业级 Agentic AI 与本体论架构咨询",
    ja: "OpenCoach | エンタープライズ向け Agentic AI & オントロジー",
    ko: "OpenCoach | 엔터프라이즈 Agentic AI & 온톨로지 컨설팅",
    fr: "OpenCoach | IA Agentique & Ontologie pour la Transformation d'Entreprise",
    de: "OpenCoach | Agentic AI & Ontologie für Enterprise-Transformation",
    es: "OpenCoach | IA Agéntica y Ontología para la Transformación Empresarial",
  };

  const descriptions: Record<string, string> = {
    en: "OpenCoach Technologies Limited — Agentic AI architects deploying production-ready multi-agent systems with ontology-first design. From AI strategy to enterprise-scale agentic platforms.",
    zh: "OpenCoach Technologies Limited — Agentic AI 架构师，部署基于本体论优先设计的生产级多智能体系统。从 AI 战略到企业级 Agentic AI 平台。",
    ja: "OpenCoach Technologies Limited — オントロジーファースト設計による本番環境対応マルチエージェントシステムを展開する Agentic AI アーキテクト。",
    ko: "OpenCoach Technologies Limited — 온톨로지 퍼스트 설계 기반 프로덕션급 멀티 에이전트 시스템을 배포하는 Agentic AI 아키텍트.",
    fr: "OpenCoach Technologies Limited — Architectes d'IA agentique déployant des systèmes multi-agents de qualité production avec un design ontologie-first.",
    de: "OpenCoach Technologies Limited — Agentic-AI-Architekten für produktionsreife Multi-Agent-Systeme mit Ontologie-First-Design.",
    es: "OpenCoach Technologies Limited — Arquitectos de IA agéntica desplegando sistemas multi-agente de grado producción con diseño ontología-first.",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      "agentic AI",
      "ontology",
      "multi-agent orchestration",
      "enterprise AI transformation",
      "knowledge graph",
      "GraphRAG",
      "AI consulting",
      "AI strategy",
      "LangGraph",
      "AI agents",
      "OpenCoach",
    ],
    metadataBase: new URL("https://opencoach.ai"),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, l === "en" ? "/" : `/${l}`])
      ),
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `https://opencoach.ai${locale === "en" ? "" : `/${locale}`}`,
      siteName: "OpenCoach",
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OpenCoach Technologies Limited",
              url: "https://opencoach.ai",
              description:
                "Agentic AI architects deploying production-ready multi-agent systems with ontology-first design for enterprise transformation.",
              address: {
                "@type": "PostalAddress",
                addressLocality:
                  "Hong Kong, Beijing, Seattle, Shanghai, Singapore, Taipei, New York",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@opencoach.ai",
                contactType: "sales",
              },
              serviceType: [
                "Agentic AI Platform Deployment",
                "Ontology & Knowledge Graph Architecture",
                "AI Agent Training & Enablement",
                "Agentic Process Automation",
                "AI Governance & Agent Safety",
                "AI Strategy & Operating Model",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
