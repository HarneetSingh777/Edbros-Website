import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  color,
  href,
  index,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-2xl border border-white/5 bg-[#111] p-8 transition-all duration-500 hover:border-white/10 hover:bg-[#161616] hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px at 50% 0%, ${color}08, transparent)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
          style={{ background: `${color}15`, color }}
        >
          <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#888] text-sm leading-relaxed mb-6">{description}</p>

        {/* Arrow */}
        <div className="flex items-center gap-2 text-sm font-medium text-[#666] group-hover:text-white transition-colors duration-300">
          Learn More
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
