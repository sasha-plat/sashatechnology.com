"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQAccordion({ items, title }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="glass-card cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-sm md:text-base pr-4">{item.question}</h4>
              <svg
                className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openIndex === i && (
              <p className="text-muted text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
