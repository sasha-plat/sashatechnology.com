"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language and redirect
    const lang = navigator.language?.split("-")[0] || "it";
    const supported = ["it", "en", "fr", "de", "es", "pt", "nl", "pl", "cs", "ro", "hu", "bg", "el", "da", "sv", "fi", "sk", "hr", "sl"];
    const locale = supported.includes(lang) ? lang : "it";
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
