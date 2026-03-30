import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SashaTech — B1 Scout Biomimetic Micro-Drone",
  description:
    "The B1 Scout is a 36.1g biomimetic micro-drone with 640x480 thermal imaging, 45-minute hover time, and silent PZT bimorph propulsion. Designed and manufactured in the EU.",
  keywords: ["drone", "micro-drone", "biomimetic", "thermal imaging", "B1 Scout", "SashaTech"],
  openGraph: {
    title: "SashaTech — B1 Scout Biomimetic Micro-Drone",
    description: "36.1g | 45min hover | 640x480 thermal | EU-designed",
    type: "website",
    siteName: "SashaTech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
