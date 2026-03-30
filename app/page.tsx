import { redirect } from "next/navigation";

// Root page redirects to the default locale.
// The middleware handles Accept-Language detection for direct visits.
export default function RootPage() {
  redirect("/it");
}
