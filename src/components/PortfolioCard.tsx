"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function PortfolioCard({
  title,
  category,
  image,
  description,
}: PortfolioCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#111] cursor-pointer transition-all duration-500 hover:border-white/10">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
            <ArrowUpRight className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-medium text-[#6c5ce7] uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-lg font-bold text-white mt-2 mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-[#666] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
