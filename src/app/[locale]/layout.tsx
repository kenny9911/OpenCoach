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
    en: "OpenCoach | AI Enterprise Transformation Consulting",
    zh: "OpenCoach | AI 企业转型咨询",
    ja: "OpenCoach | AIエンタープライズ変革コンサルティング",
    ko: "OpenCoach | AI 엔터프라이즈 혁신 컨설팅",
    fr: "OpenCoach | Conseil en Transformation IA d'Entreprise",
    de: "OpenCoach | KI-Unternehmenstransformationsberatung",
    es: "OpenCoach | Consultoría de Transformación IA Empresarial",
  };

  const descriptions: Record<string, string> = {
    en: "OpenCoach Technologies Limited — AI Consulting Professionals. We don't just do AI projects. We help enterprises become AI-native organizations.",
    zh: "OpenCoach Technologies Limited — AI 咨询专家。我们不只是做 AI 项目，我们帮助企业成为 AI 原生组织。",
    ja: "OpenCoach Technologies Limited — AIコンサルティングプロフェッショナル。AIプロジェクトだけでなく、企業のAIネイティブ化を支援します。",
    ko: "OpenCoach Technologies Limited — AI 컨설팅 전문가. AI 프로젝트만 하는 것이 아니라, 기업이 AI 네이티브 조직이 되도록 돕습니다.",
    fr: "OpenCoach Technologies Limited — Professionnels du Conseil en IA. Nous aidons les entreprises à devenir des organisations IA natives.",
    de: "OpenCoach Technologies Limited — KI-Beratungsexperten. Wir helfen Unternehmen, KI-native Organisationen zu werden.",
    es: "OpenCoach Technologies Limited — Profesionales de Consultoría en IA. Ayudamos a las empresas a convertirse en organizaciones IA nativas.",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      "AI consulting",
      "enterprise AI",
      "AI transformation",
      "AI strategy",
      "AI-native enterprise",
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
                "AI Consulting Professionals — helping enterprises become AI-native organizations.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hong Kong",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@opencoach.ai",
                contactType: "sales",
              },
              serviceType: [
                "AI Strategy Consulting",
                "Enterprise AI Architecture",
                "AI Transformation",
                "AI Governance",
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
