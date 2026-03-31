import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import InteractiveParallaxBackground from "@/components/InteractiveParallaxBackground";

export const metadata: Metadata = {
  title: "Services — Edbros",
  description:
    "Explore Edbros' full suite of creative services: social media management, video editing, graphic design, and content strategy.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#020202] overflow-hidden">
      <InteractiveParallaxBackground />
      {/* Hero */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#6c5ce7]/20 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <SectionHeading
              label="What We Do"
              title="Services built for growth"
              description="We combine creativity with strategy to deliver results that matter. Each service is tailored to your unique brand goals."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection key={service.id}>
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-12 items-center`}
                  >
                    {/* Visual */}
                    <div className="flex-1 w-full">
                      <div
                        className="relative rounded-3xl p-12 lg:p-16 border border-white/5 overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}08, ${service.color}03)`,
                        }}
                      >
                        <div
                          className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-30"
                          style={{ background: service.color }}
                        />
                        <div className="relative z-10">
                          <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                            style={{
                              background: `${service.color}20`,
                              color: service.color,
                            }}
                          >
                            <Icon className="w-10 h-10" />
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-[#888] text-base leading-relaxed">
                            {service.longDescription}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1 w-full">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-[#666] mb-6">
                        What&apos;s included
                      </h4>
                      <div className="space-y-4">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-[#111] hover:bg-[#161616] transition-colors duration-300"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{
                                background: `${service.color}15`,
                                color: service.color,
                              }}
                            >
                              <Check className="w-4 h-4" />
                            </div>
                            <span className="text-[#ccc] text-sm font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* CTA */}
          <AnimatedSection>
            <div className="text-center mt-24">
              <p className="text-[#888] text-lg mb-6">
                Ready to get started with our services?
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
    </main>
  );
}
