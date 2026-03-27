interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"
      }`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#6c5ce7] mb-4 px-4 py-1.5 rounded-full bg-[#6c5ce7]/10 border border-[#6c5ce7]/20">
          {label}
        </span>
      )}
      <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[#888] text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
