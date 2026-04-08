import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/5 bg-[#111] p-8 transition-all duration-500 hover:border-white/10 hover:bg-[#141414]">
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-[#6c5ce7]/30 mb-6" />

      {/* Quote Text */}
      <p className="text-[#ccc] text-base leading-relaxed mb-8 italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-[#666] text-xs">
            {role}{company ? ` at ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
