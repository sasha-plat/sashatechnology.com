import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SashaTech — B1 Scout Biomimetic Micro-Drone",
  description:
    "The B1 Scout is a 70g biomimetic micro-drone with thermal imaging, extended hover time, and silent PZT bimorph propulsion. Designed and manufactured in the EU.",
  keywords: ["drone", "micro-drone", "biomimetic", "thermal imaging", "B1 Scout", "SashaTech"],
  openGraph: {
    title: "SashaTech — B1 Scout Biomimetic Micro-Drone",
    description: "70g | Extended hover | Thermal imaging | EU-designed",
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
