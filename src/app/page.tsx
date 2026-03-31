import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import InteractiveParallaxBackground from "@/components/InteractiveParallaxBackground";
import {
  services,
  portfolioItems,
  testimonials,
  stats,
} from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="logoisum-hero">
        {/* Video Background */}
        <video
          className="logoisum-hero__video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Hero Content */}
        <div className="logoisum-hero__content">
          <h1 className="logoisum-hero__headline">
            <span className="logoisum-hero__line1">Agency that makes your</span>
            <span className="logoisum-hero__line2">videos &amp; reels viral</span>
          </h1>
          <p className="logoisum-hero__subtext">
            Short-form video editing for Influencers, Creators and Brands
          </p>
          <Link href="/portfolio" className="logoisum-hero__cta">
            <span className="logoisum-hero__cta-play">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 2.5L11.5 7L3.5 11.5V2.5Z" fill="#222" stroke="#222" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            </span>
            <span>See Our Workreel</span>
          </Link>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#020202]">
        <InteractiveParallaxBackground />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              label="Services"
              title="Everything your brand needs"
              description="From ideation to execution — we offer a full suite of creative services designed to accelerate your growth."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color}
                  href="/services"
                  index={index}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PORTFOLIO ═══════════════ */}
      <section className="py-24 lg:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Portfolio"
              title="Selected work"
              description="A curated collection of projects that showcase our creative capabilities."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.slice(0, 3).map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <PortfolioCard
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  description={item.description}
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#888] hover:text-white transition-colors duration-300"
              >
                View All Projects
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#666]">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-24 lg:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Testimonials"
              title="Loved by clients"
              description="Don&apos;t just take our word for it — hear what our clients have to say."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  quote={testimonial.quote}
                  image={testimonial.image}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
