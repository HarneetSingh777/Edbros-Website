import Link from "next/link";
import { ArrowUpRight, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Social Media Management", href: "/services" },
    { label: "Short Form Editing", href: "/services" },
    { label: "Long Form Editing", href: "/services" },
    { label: "Graphic Design", href: "/services" },
    { label: "Content Strategy", href: "/services" },
  ],
  Resources: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Start a Project", href: "/start-project" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      {/* CTA Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#6c5ce7]/20 to-[#00cec9]/20 border border-white/5 p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to elevate your brand?
            </h2>
            <p className="text-[#aaa] text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s create something extraordinary together. Get started with a free consultation.
            </p>
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#050505] font-semibold text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(108,92,231,0.3)]"
            >
              Start Your Project
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-white font-bold text-sm">
                E
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Edbros
              </span>
            </Link>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              Premium creative agency specializing in social media, video editing, and brand design.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#666] text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6">
          <p className="text-[#444] text-sm">
            © {new Date().getFullYear()} Edbros. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#666] hover:text-white hover:border-white/25 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
