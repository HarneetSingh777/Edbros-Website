import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  image,
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
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-[#666] text-xs">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
