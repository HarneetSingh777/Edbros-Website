"use client";

import { useState } from "react";
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import PortfolioCard from "@/components/PortfolioCard";
import SectionHeading from "@/components/SectionHeading";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { portfolioItems } from "@/lib/data";

const categories = [
  "All",
  ...Array.from(new Set(portfolioItems.map((item) => item.category))),
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden min-h-[40vh] flex items-center">
        <DottedSurface className="absolute inset-0 w-full h-full opacity-40 z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[300px] rounded-full bg-[#00cec9]/8 blur-[120px] pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              label="Portfolio"
              title="Our creative showcase"
              description="Explore the projects that define our creative approach and the results we deliver."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? "bg-white text-[#050505]"
                      : "bg-white/5 text-[#888] hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.08}>
                <PortfolioCard
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  description={item.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
