"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { generateRequestId } from "@/lib/utils";
import { services } from "@/lib/data";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  Sparkles,
} from "lucide-react";

const budgetOptions = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

const timelineOptions = [
  "ASAP (Rush)",
  "1 - 2 Weeks",
  "2 - 4 Weeks",
  "1 - 2 Months",
  "Flexible",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  website: string;
  agreement: boolean;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  description: "",
  budget: "",
  timeline: "",
  instagram: "",
  youtube: "",
  tiktok: "",
  website: "",
  agreement: false,
};

export default function StartProjectPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");

  const totalSteps = 4;

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = generateRequestId();
    setRequestId(id);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white text-sm placeholder-[#444] focus:outline-none focus:border-[#6c5ce7]/50 focus:ring-1 focus:ring-[#6c5ce7]/30 transition-all duration-300";

  const labelClass = "block text-sm font-medium text-[#aaa] mb-2";

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <AnimatedSection>
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              Project Submitted!
            </h2>
            <p className="text-[#888] text-lg mb-8 leading-relaxed">
              Thank you for choosing Edbros. We&apos;ve received your project details and will
              be in touch within 24 hours.
            </p>
            <div className="inline-block px-8 py-4 rounded-2xl bg-[#111] border border-white/10 mb-8">
              <p className="text-xs text-[#666] uppercase tracking-wider mb-1">
                Your Request ID
              </p>
              <p className="text-2xl font-bold text-white font-mono">{requestId}</p>
            </div>
            <p className="text-[#666] text-sm">
              Save this ID for your records. You&apos;ll also receive a confirmation email.
            </p>
          </div>
        </AnimatedSection>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[400px] h-[300px] rounded-full bg-[#6c5ce7]/8 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <SectionHeading
              label="Start a Project"
              title="Let's build something great"
              description="Fill out the form below and we'll get back to you within 24 hours with a custom proposal."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            {/* Progress */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div key={i} className="flex items-center flex-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                        i + 1 <= step
                          ? "bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] text-white"
                          : "bg-[#1a1a1a] text-[#555] border border-white/10"
                      }`}
                    >
                      {i + 1 < step ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        i + 1
                      )}
                    </div>
                    {i < totalSteps - 1 && (
                      <div
                        className={`flex-1 h-[2px] mx-2 transition-colors duration-500 ${
                          i + 1 < step ? "bg-[#6c5ce7]" : "bg-[#1a1a1a]"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-[#555]">
                <span>Details</span>
                <span>Project</span>
                <span>Socials</span>
                <span>Review</span>
              </div>
            </div>

            {/* Form Card */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/5 bg-[#111] p-8 lg:p-10"
            >
              {/* Step 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Your Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Company / Brand</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        placeholder="Acme Inc."
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Project Details
                  </h3>
                  <div>
                    <label className={labelClass}>Service Needed *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Project Description *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.description}
                      onChange={(e) => update("description", e.target.value)}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Budget Range *</label>
                      <select
                        required
                        value={form.budget}
                        onChange={(e) => update("budget", e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select budget
                        </option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Timeline</label>
                      <select
                        value={form.timeline}
                        onChange={(e) => update("timeline", e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select timeline
                        </option>
                        {timelineOptions.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* File Upload UI (visual only) */}
                  <div>
                    <label className={labelClass}>Attachments (optional)</label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-[#6c5ce7]/30 transition-colors duration-300 cursor-pointer">
                      <Upload className="w-8 h-8 text-[#555] mx-auto mb-3" />
                      <p className="text-sm text-[#888] mb-1">
                        Drag & drop files here or click to browse
                      </p>
                      <p className="text-xs text-[#555]">
                        PDF, PNG, JPG, MP4 up to 50MB
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Social Links */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Social Links
                  </h3>
                  <p className="text-[#888] text-sm mb-4">
                    Share your social profiles so we can better understand your
                    current presence.
                  </p>
                  <div>
                    <label className={labelClass}>Instagram</label>
                    <input
                      type="url"
                      value={form.instagram}
                      onChange={(e) => update("instagram", e.target.value)}
                      placeholder="https://instagram.com/yourbrand"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>YouTube</label>
                    <input
                      type="url"
                      value={form.youtube}
                      onChange={(e) => update("youtube", e.target.value)}
                      placeholder="https://youtube.com/@yourchannel"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>TikTok</label>
                    <input
                      type="url"
                      value={form.tiktok}
                      onChange={(e) => update("tiktok", e.target.value)}
                      placeholder="https://tiktok.com/@yourbrand"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Website</label>
                    <input
                      type="url"
                      value={form.website}
                      onChange={(e) => update("website", e.target.value)}
                      placeholder="https://yourbrand.com"
                      className={inputClass}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Review & Submit
                  </h3>

                  <div className="space-y-4">
                    {[
                      { label: "Name", value: form.name },
                      { label: "Email", value: form.email },
                      { label: "Phone", value: form.phone || "—" },
                      { label: "Company", value: form.company || "—" },
                      { label: "Service", value: form.service },
                      { label: "Budget", value: form.budget },
                      { label: "Timeline", value: form.timeline || "—" },
                      { label: "Description", value: form.description },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col sm:flex-row sm:items-start gap-2 p-4 rounded-xl bg-[#0a0a0a] border border-white/5"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#555] sm:w-28 flex-shrink-0">
                          {item.label}
                        </span>
                        <span className="text-sm text-[#ccc] break-all">
                          {item.value || "—"}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Agreement */}
                  <label className="flex items-start gap-3 cursor-pointer mt-6">
                    <input
                      type="checkbox"
                      required
                      checked={form.agreement}
                      onChange={(e) => update("agreement", e.target.checked)}
                      className="mt-1 w-4 h-4 rounded accent-[#6c5ce7]"
                    />
                    <span className="text-sm text-[#888]">
                      I agree to Edbros&apos; terms of service and privacy policy, and
                      consent to being contacted about this project.
                    </span>
                  </label>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/5">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-[#aaa] text-sm font-medium hover:bg-white/5 transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#050505] text-sm font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4" />
                    Submit Project
                  </button>
                )}
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
