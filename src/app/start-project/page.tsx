"use client";

import { useState, useEffect, useRef } from "react";
import { Application } from '@splinetool/runtime';
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/H1O1SpueSyQZPzH8/scene.splinecode');
    }
  }, []);

  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const totalSteps = 4;

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    const id = generateRequestId();
    setRequestId(id);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...form, requestId: id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Failed to submit. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#6c5ce7]/10 border border-[#6c5ce7]/20 mb-4 max-w-md mx-auto">
              <svg className="w-4 h-4 text-[#6c5ce7] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-[#aaa]">
                A confirmation email with your request ID has been sent to <span className="text-[#ccc] font-medium">{form.email}</span>
              </p>
            </div>
            <p className="text-[#555] text-xs">
              Didn&apos;t receive it? Check your spam folder or contact us at contact@edbros.com
            </p>
          </div>
        </AnimatedSection>
      </section>
    );
  }

  return (
    <>
      {/* Full Screen Spline Background */}
      <canvas id="canvas3d" ref={canvasRef} className="fixed inset-0 w-full h-full z-0 block"></canvas>

      {/* Fallback Block to hide embedded Spline logo */}
      <div className="fixed bottom-2 right-4 w-[160px] h-[55px] bg-[#050505] z-[5] pointer-events-none rounded-lg flex items-center justify-center">
        <span 
          style={{ fontFamily: "'Instrument Serif', serif" }} 
          className="text-white/70 italic text-[28px] tracking-wide select-none pb-1"
        >
          edbros
        </span>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col pointer-events-none">
        {/* Hero */}
        <section className="relative pt-32 pb-8 overflow-hidden pointer-events-auto">
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
      <section className="pb-32 pointer-events-auto">
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

              {/* Error Banner */}
              {submitError && (
                <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm text-red-300 font-medium">Submission failed</p>
                    <p className="text-xs text-red-400/70 mt-1">{submitError}</p>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setSubmitError("")}
                    className="text-red-400/50 hover:text-red-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
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
                    disabled={isSubmitting}
                    className={`inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white text-sm font-semibold transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:opacity-90 hover:scale-105'}`}
                  >
                    <Sparkles className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    {isSubmitting ? 'Submitting...' : 'Submit Project'}
                  </button>
                )}
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
      </div>
    </>
  );
}
