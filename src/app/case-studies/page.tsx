import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Edbros",
  description:
    "Real results for real brands. Explore how Edbros helped clients achieve viral growth.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[300px] rounded-full bg-[#fd79a8]/8 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              label="Case Studies"
              title="Real results, proven impact"
              description="Deep dives into how we helped brands transform their digital presence and achieve measurable growth."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={study.id}>
              <div className="rounded-3xl border border-white/5 bg-[#111] overflow-hidden transition-all duration-500 hover:border-white/10">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/80 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent lg:hidden" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6c5ce7] mb-3">
                      {study.service}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-sm text-[#888] mb-1">
                      Client: <span className="text-[#ccc]">{study.client}</span>
                    </p>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#aaa] mb-2">The Challenge</h4>
                        <p className="text-[#777] text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#aaa] mb-2">Our Solution</h4>
                        <p className="text-[#777] text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {study.results.map((result) => (
                        <div
                          key={result.metric}
                          className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5"
                        >
                          <div className="text-xl font-bold text-white">{result.value}</div>
                          <div className="text-xs text-[#666] mt-1">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* CTA */}
          <AnimatedSection>
            <div className="text-center pt-8">
              <p className="text-[#888] text-lg mb-6">
                Want results like these for your brand?
              </p>
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#050505] font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
