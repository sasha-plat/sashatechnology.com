import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Display font — Geist not yet on next/font/google; use Space Grotesk as compatible
// tactical-grotesque alternative until Geist is wired via @vercel/font.
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sashatechnology.com"),
  title: {
    default: "SashaTech — Autonomous Drones & AR Glasses for Mission-Critical Operations",
    template: "%s · SashaTech",
  },
  description:
    "Deep-tech European company building autonomous long-endurance UAVs (SashaDrone M2 family), nano-drones (B1/B2) and binocular AR glasses (SashaGlasses) for civil, public-safety and defense operators.",
  keywords: [
    "SashaTech", "SashaDrone M2", "M2-M flagship",
    "autonomous drone", "long endurance UAV", "fixed-wing UAV",
    "battery-electric drone", "AR glasses drone control",
    "SashaGlasses", "biomimetic drone", "HIVE swarm",
    "DAL-A drone", "tactical AR", "EU defense tech",
  ],
  openGraph: {
    title: "SashaTech — Autonomous Drones & AR Glasses",
    description:
      "M2-M flagship long-endurance UAV controlled via SashaGlasses. Bounded autonomy, IHL-compliant, DAL-A target.",
    type: "website",
    siteName: "SashaTech",
    locale: "it_IT",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SashaTech — Autonomous Drones & AR Glasses",
    description: "Endurance per missioni che contano. M2-M flagship + SashaGlasses cockpit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${jetbrainsMono.variable} ${display.variable} dark`}
    >
      <body className="bg-bg-primary text-text-primary antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
