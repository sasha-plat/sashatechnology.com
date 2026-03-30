"use client";

import { useState } from "react";

const variants = [
  { slug: "guard", name: "B1 Guard", price: "2,500", tagline: "86h Silent Guardian" },
  { slug: "inspect", name: "B1 Inspect", price: "2,000", tagline: "See What Eyes Can't" },
  { slug: "rescue", name: "B1 Rescue", price: "2,000", tagline: "Find. Mark. Save." },
  { slug: "agri", name: "B1 Agri", price: "1,500", tagline: "Precision from Above" },
  { slug: "cine", name: "B1 Cine", price: "2,000", tagline: "Silent Eye in the Sky" },
];

interface PreOrderFormProps {
  defaultVariant?: string;
}

export default function PreOrderForm({ defaultVariant }: PreOrderFormProps) {
  const [selected, setSelected] = useState(defaultVariant || "guard");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    quantity: "1",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card text-center py-12">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-2xl font-bold mb-2">Pre-Order Received</h3>
        <p className="text-muted">
          Thank you for your interest in the B1 Scout. We will contact you at{" "}
          <span className="text-gold">{formData.email}</span> with next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Variant Selector */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Select Your Variant</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {variants.map((v) => (
            <button
              key={v.slug}
              onClick={() => setSelected(v.slug)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selected === v.slug
                  ? "border-gold bg-gold/10"
                  : "border-white/10 hover:border-white/20 bg-navy-light"
              }`}
            >
              <p className="font-semibold text-sm">{v.name}</p>
              <p className="text-xs text-muted mt-1">{v.tagline}</p>
              <p className="text-gold font-mono text-sm mt-2">&euro;{v.price}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="glass-card space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-muted mb-1.5">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm
                         focus:outline-none focus:border-gold/50 transition-colors"
              placeholder="John Doe"
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
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1.5">Country</label>
            <input
              type="text"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm
                         focus:outline-none focus:border-gold/50 transition-colors"
              placeholder="Italy"
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1.5">Quantity</label>
            <input
              type="number"
              min="1"
              max="100"
              required
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm
                         focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
        </div>

        <div className="bg-navy/50 rounded-lg p-4 border border-gold/10">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Refundable Deposit</p>
              <p className="text-xs text-muted mt-1">
                &euro;250 per unit &middot; Fully refundable until shipping
              </p>
            </div>
            <p className="text-xl font-bold text-gold">
              &euro;{250 * parseInt(formData.quantity || "1")}
            </p>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full justify-center">
          Reserve Now &mdash; &euro;{250 * parseInt(formData.quantity || "1")} Deposit
        </button>

        <p className="text-xs text-muted text-center">
          Shipping starts Q3 2027. Your deposit is fully refundable at any time before shipment.
          No payment is processed on this demo site.
        </p>
      </form>
    </div>
  );
}
