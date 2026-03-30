import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "../i18n/locales";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import "../globals.css";

export const metadata: Metadata = {
  title: "SashaTech — AI Assistant Ecosystem for Professionals",
  description:
    "Smart drones, AR glasses, and an AI platform that work together to help professionals see, communicate, and stay safe in the field. Designed and manufactured in Europe.",
  keywords: ["SashaTech", "AI assistant", "drone", "AR glasses", "professional tools", "made in Europe"],
  openGraph: {
    title: "SashaTech — Your AI Assistant That Sees, Listens, and Protects",
    description: "Drones + AR Glasses + AI Platform — one ecosystem for professionals",
    type: "website",
    siteName: "SashaTech",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  if (!(locales as readonly string[]).includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-navy text-white min-h-screen flex flex-col">
        <Navbar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <CookieBanner locale={locale} />
      </body>
    </html>
  );
}
