"use client";

import { useState } from "react";
import HeroSection from "../../components/HeroSection";

const subjects = [
  "General Inquiry",
  "Product Question",
  "Pre-Order Support",
  "Partnership",
  "Media / Press",
  "Careers",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        title="Get in Touch"
        description="Have a question about the B1 Scout? Want to discuss a partnership? We'd love to hear from you."
      />

      <div className="section-container pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass-card text-center py-12">
                <div className="text-4xl mb-4">&#10003;</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                <p className="text-muted">
                  Thank you for reaching out. We typically respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm
                                 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm
                                 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted mb-1.5">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm
                               focus:outline-none focus:border-gold/50 transition-colors"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-muted mb-1.5">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm
                               focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card">
              <h3 className="font-semibold mb-4">General Inquiries</h3>
              <a href="mailto:info@sashatechnology.com" className="text-gold hover:text-gold-light transition-colors text-sm">
                info@sashatechnology.com
              </a>
              <p className="text-muted text-xs mt-2">
                Product questions, partnerships, media inquiries.
                We respond within 24 hours.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="font-semibold mb-4">Defense &amp; Government</h3>
              <a href="mailto:defense@sashatechnology.com" className="text-gold hover:text-gold-light transition-colors text-sm">
                defense@sashatechnology.com
              </a>
              <p className="text-muted text-xs mt-2">
                Defense, law enforcement, and government inquiries.
                NDA required. Secure communication available upon request.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="font-semibold mb-4">Location</h3>
              <p className="text-sm text-muted">
                SashaTech S.r.l.s.
                <br />
                Bari (BA), Italy
                <br />
                European Union
              </p>
              {/* Map placeholder */}
              <div className="mt-4 aspect-[4/3] bg-navy rounded-xl border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted/40 text-xs">Map Placeholder</p>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="font-semibold mb-4">Social</h3>
              <div className="space-y-2">
                {["LinkedIn", "X / Twitter", "YouTube", "GitHub"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="block text-sm text-muted hover:text-gold transition-colors"
                  >
                    {platform} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
