"use client";

import { useState } from "react";
import { FORM_ENDPOINT } from "./formEndpoint";

interface NewsletterSignupProps {
  compact?: boolean;
}

export default function NewsletterSignup({ compact }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError(false);
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <p className="text-gold text-sm">
        &#10003; You&apos;re on the list. We&apos;ll keep you posted.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "max-w-md mx-auto"}>
      <div className={`flex ${compact ? "flex-col gap-2" : "gap-2"}`}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`flex-1 bg-navy border border-white/10 rounded-lg px-4 text-sm
                     focus:outline-none focus:border-gold/50 transition-colors
                     ${compact ? "py-2.5" : "py-3"}`}
        />
        <button
          type="submit"
          className={`bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm
                     ${compact ? "py-2.5 px-4" : "py-3 px-6"}`}
        >
          {loading ? "..." : "Subscribe"}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-2">Something went wrong. Please try again.</p>}
      <p className="text-xs text-muted/60 mt-2">
        By subscribing you agree to our{" "}
        <a href="/privacy" className="underline hover:text-muted">Privacy Policy</a>.
        We only send product updates. Unsubscribe anytime.
      </p>
    </form>
  );
}
