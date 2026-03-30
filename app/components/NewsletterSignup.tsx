"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  compact?: boolean;
}

export default function NewsletterSignup({ compact }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
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
          Subscribe
        </button>
      </div>
    </form>
  );
}
