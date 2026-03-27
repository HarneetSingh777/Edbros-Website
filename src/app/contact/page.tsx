"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[300px] rounded-full bg-[#00cec9]/8 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              label="Contact"
              title="Let's talk"
              description="Have a question or want to work together? We'd love to hear from you."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="space-y-8">
                  <div className="rounded-2xl border border-white/5 bg-[#111] p-8">
                    <h3 className="text-lg font-bold text-white mb-6">Get in Touch</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#6c5ce7]/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-[#6c5ce7]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#888] mb-1">Email</p>
                          <p className="text-white text-sm">hello@edbros.agency</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#00cec9]/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-[#00cec9]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#888] mb-1">Phone</p>
                          <p className="text-white text-sm">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#fd79a8]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#fd79a8]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#888] mb-1">Location</p>
                          <p className="text-white text-sm">Remote-first, Worldwide</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-[#111] p-8">
                    <h3 className="text-lg font-bold text-white mb-3">Office Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#888]">Mon - Fri</span>
                        <span className="text-white">9:00 AM — 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888]">Saturday</span>
                        <span className="text-white">10:00 AM — 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888]">Sunday</span>
                        <span className="text-[#666]">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-white/5 bg-[#111] p-8 lg:p-10">
                  {submitted ? (
                    <div className="text-center py-16">
                      <CheckCircle2 className="w-16 h-16 text-[#00cec9] mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                      <p className="text-[#888] text-base">
                        Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#aaa] mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#6c5ce7]/50 focus:ring-1 focus:ring-[#6c5ce7]/30 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#aaa] mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#6c5ce7]/50 focus:ring-1 focus:ring-[#6c5ce7]/30 transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#aaa] mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="How can we help?"
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#6c5ce7]/50 focus:ring-1 focus:ring-[#6c5ce7]/30 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#aaa] mb-2">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us about your project..."
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#6c5ce7]/50 focus:ring-1 focus:ring-[#6c5ce7]/30 transition-all duration-300 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#050505] font-semibold text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105"
                      >
                        Send Message
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
