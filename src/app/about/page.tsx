import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { teamMembers, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Edbros",
  description:
    "Learn about Edbros, our mission, our team, and why we're passionate about helping brands grow.",
};

const values = [
  {
    title: "Creativity First",
    description: "We push creative boundaries on every project, never settling for 'good enough'.",
    emoji: "🎨",
  },
  {
    title: "Results Driven",
    description: "Every piece of content we create is designed to achieve measurable outcomes.",
    emoji: "📈",
  },
  {
    title: "Client Partnership",
    description: "We treat every client as a partner, aligning our goals with your success.",
    emoji: "🤝",
  },
  {
    title: "Always Evolving",
    description: "We stay ahead of trends, platforms, and algorithms to keep your brand relevant.",
    emoji: "🚀",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-[#6c5ce7]/8 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              label="About Us"
              title="The team behind the magic"
              description="We're a collective of creatives, strategists, and storytellers obsessed with helping brands stand out in a crowded digital landscape."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl border border-white/5 bg-[#111] p-10 lg:p-14">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Our Story</h3>
              <div className="space-y-4 text-[#999] text-base leading-relaxed">
                <p>
                  Edbros was born from a simple observation: brands were struggling to keep up with the speed of social media. Great products were going unnoticed because they lacked compelling content and a consistent creative strategy.
                </p>
                <p>
                  We set out to change that. What started as a small video editing studio has grown into a full-service creative agency serving brands, creators, and businesses across the globe. Today, we&apos;ve delivered 150+ projects and generated over 10 million views for our clients.
                </p>
                <p>
                  Our approach is simple: combine artistic creativity with data-driven strategy. Every post, every edit, every design is crafted with intention — to stop the scroll, spark engagement, and drive real growth.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-8 rounded-2xl border border-white/5 bg-[#111]"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#666]">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24 bg-[#080808] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Our Values"
              title="What drives us"
              description="The principles that guide everything we do."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-white/5 bg-[#111] p-8 hover:border-white/10 transition-all duration-500 h-full">
                  <div className="text-4xl mb-6">{value.emoji}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Team"
              title="Meet the crew"
              description="A small but mighty team of specialists."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="group rounded-2xl border border-white/5 bg-[#111] overflow-hidden hover:border-white/10 transition-all duration-500">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 -mt-8 relative z-10">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-[#6c5ce7] text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-[#666] text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
