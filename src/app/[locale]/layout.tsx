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

  const ogImage = {
    url: "https://opencoach.ai/opengraph-image",
    width: 1200,
    height: 630,
    alt: "OpenCoach — Agentic AI & Ontology for Enterprise Transformation",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    authors: [{ name: "Kenny Chien" }, { name: "OpenCoach Technologies Limited" }],
    keywords: [
      "agentic AI",
      "ontology",
      "ontology-first architecture",
      "multi-agent orchestration",
      "enterprise AI transformation",
      "knowledge graph",
      "GraphRAG",
      "AI consulting",
      "AI strategy",
      "LangGraph",
      "AI agents",
      "AI native",
      "Vibe Coding",
      "Claude Code",
      "OpenCoach",
    ],
    metadataBase: new URL("https://opencoach.ai"),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, l === "en" ? "/" : `/${l}`])
        ),
        "x-default": "/",
      },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `https://opencoach.ai${locale === "en" ? "" : `/${locale}`}`,
      siteName: "OpenCoach",
      type: "website",
      locale: locale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      images: [ogImage.url],
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://opencoach.ai/#organization",
                name: "OpenCoach Technologies Limited",
                url: "https://opencoach.ai",
                logo: "https://opencoach.ai/opengraph-image",
                description:
                  "Agentic AI architects deploying production-ready multi-agent systems with ontology-first design for enterprise transformation.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Hong Kong",
                },
                areaServed: [
                  "Hong Kong", "China", "United States", "Singapore", "Taiwan", "Japan", "South Korea",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "info@opencoach.ai",
                  contactType: "sales",
                  availableLanguage: ["English", "Chinese", "Japanese", "Korean", "French", "German", "Spanish"],
                },
                sameAs: [],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://opencoach.ai/#website",
                name: "OpenCoach",
                url: "https://opencoach.ai",
                publisher: { "@id": "https://opencoach.ai/#organization" },
                inLanguage: ["en", "zh", "ja", "ko", "fr", "de", "es"],
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://opencoach.ai/#service",
                name: "OpenCoach Technologies Limited",
                provider: { "@id": "https://opencoach.ai/#organization" },
                serviceType: "AI Consulting",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Agentic AI Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Agentic AI Platform Deployment",
                        description: "Deploy enterprise-grade multi-agent systems using LangGraph, CrewAI, AutoGen, and hyperscaler platforms.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Ontology & Knowledge Graph Architecture",
                        description: "Build ontology-first architectures with GraphRAG pipelines achieving up to 99% search precision.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "AI Agent Training & Enablement",
                        description: "Upskill teams from AI consumers to AI builders with programs establishing AI Centers of Excellence.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Agentic Process Automation",
                        description: "Redesign core workflows with autonomous agents that reason, decide, and act.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "AI Governance & Agent Safety",
                        description: "Implement production-grade guardrails with human-in-the-loop checkpoints and MCP/A2A compliance.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "AI Strategy & Operating Model",
                        description: "Architect your Agentic Organization blueprint aligned to McKinsey's five-pillar framework.",
                      },
                    },
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://opencoach.ai",
                  },
                ],
              },
            ]),
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
