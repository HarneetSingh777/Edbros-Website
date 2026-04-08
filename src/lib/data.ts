import {
  Palette,
  Video,
  Film,
  Share2,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "End-to-end social media strategy, content calendars, and community management to grow your brand presence.",
    longDescription:
      "We handle everything from strategy to execution. Our team creates bespoke content calendars, manages daily posting, engages with your community, and provides in-depth analytics reports so you can focus on what matters — running your business.",
    icon: Share2,
    features: [
      "Content Calendar Planning",
      "Daily Post Management",
      "Community Engagement",
      "Monthly Analytics Reports",
      "Platform Optimization",
      "Hashtag Strategy",
    ],
    color: "#6c5ce7",
  },
  {
    id: "short-form-editing",
    title: "Short Form Video Editing",
    description:
      "Scroll-stopping Reels, TikToks, and Shorts designed to go viral and boost engagement.",
    longDescription:
      "We craft short-form videos that stop the scroll. From punchy transitions and kinetic text overlays to perfectly timed sound design, every video is engineered for maximum engagement and shareability across TikTok, Instagram Reels, and YouTube Shorts.",
    icon: Video,
    features: [
      "TikTok & Reels Editing",
      "Kinetic Typography",
      "Sound Design",
      "Trend-Based Content",
      "Fast Turnaround",
      "Platform-Specific Optimization",
    ],
    color: "#00cec9",
  },
  {
    id: "long-form-editing",
    title: "Long Form Video Editing",
    description:
      "Cinematic YouTube videos, podcasts, and documentary-style content that keeps viewers watching.",
    longDescription:
      "Our long-form editing transforms raw footage into polished, story-driven content that audiences can't stop watching. We specialize in YouTube videos, podcast edits, course content, and brand documentaries with professional-grade color grading and sound.",
    icon: Film,
    features: [
      "YouTube Video Editing",
      "Podcast Production",
      "Color Grading",
      "Motion Graphics",
      "Subtitles & Captions",
      "Thumbnail Design",
    ],
    color: "#fd79a8",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Eye-catching visuals, brand identity systems, and social media graphics that set you apart.",
    longDescription:
      "From social media carousels to complete brand identity systems, our design team creates visuals that demand attention. Every design is crafted with your brand's DNA in mind, ensuring consistency across every touchpoint.",
    icon: Palette,
    features: [
      "Brand Identity Design",
      "Social Media Graphics",
      "Carousel Design",
      "Presentation Design",
      "Ad Creatives",
      "Print Design",
    ],
    color: "#e17055",
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    description:
      "Data-driven content roadmaps that align your brand voice, audience, and business goals.",
    longDescription:
      "We build content strategies rooted in data. Through audience research, competitor analysis, and trend mapping, we create roadmaps that align your content with business goals — driving growth, engagement, and conversions.",
    icon: Lightbulb,
    features: [
      "Audience Research",
      "Competitor Analysis",
      "Content Roadmap",
      "Brand Voice Development",
      "Performance Tracking",
      "Growth Strategy",
    ],
    color: "#ffeaa7",
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Viral Campaign — FitLife",
    category: "Short Form Video Editing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "30-day viral campaign that generated 2.4M+ views across platforms.",
  },
  {
    id: "2",
    title: "Brand Overhaul — NovaTech",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    description: "Complete brand identity redesign for a leading tech startup.",
  },
  {
    id: "3",
    title: "YouTube Series — Mindful Living",
    category: "Long Form Video Editing",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    description: "10-episode series that grew a wellness channel from 5K to 10K subs.",
  },
  {
    id: "4",
    title: "Social Growth — Yogesh Dhal ",
    category: "Social Media Management",
    image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&q=80",
    description: "300 followers growth in 2 months.",
  },
  {
    id: "5",
    title: "Content Roadmap — SinghEats",
    category: "Content Strategy",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    description: "Full content strategy that positioned a food brand as a market leader.",
  },
  {
    id: "6",
    title: "Reels Package — Tishfitness",
    category: "Short Form Video Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    description: "Monthly Reels package generating consistent 1K+ views per video.",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Founder",
    company: "FitLife",
    quote:
      "Edbros transformed our social media presence. Our engagement rate tripled and we gained over 50K followers in just 3 months.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    id: "2",
    name: "Marcus Rivera",
    role: "CEO",
    company: "NovaTech",
    quote:
      "The brand identity they created perfectly captures our vision. Professional, creative, and incredibly responsive team.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "Content Creator",
    company: "Mindful Living",
    quote:
      "My YouTube channel exploded after working with Edbros. Their editing quality is unmatched and they truly understand storytelling.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "4",
    name: "Jordan Blake",
    role: "Marketing Director",
    company: "GlowUp Beauty",
    quote:
      "From strategy to execution, Edbros delivers. They're not just a vendor — they're a true creative partner.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  service: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "fitlife-viral",
    title: "From Zero to Viral",
    client: "FitLife",
    service: "Short Form Video Editing",
    challenge:
      "FitLife had great products but zero social media traction. Their in-house videos struggled to break 500 views.",
    solution:
      "We created a 30-day viral content strategy with scroll-stopping Reels featuring trending audio, quick cuts, and kinetic text overlays tailored to their audience.",
    results: [
      { metric: "Total Views", value: "2.4M+" },
      { metric: "Follower Growth", value: "+52K" },
      { metric: "Engagement Rate", value: "8.7%" },
      { metric: "Revenue Impact", value: "+340%" },
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    id: "novatech-rebrand",
    title: "The Complete Rebrand",
    client: "NovaTech",
    service: "Graphic Design",
    challenge:
      "NovaTech's outdated branding was undermining their position as an industry innovator. They needed a complete visual overhaul.",
    solution:
      "We designed a futuristic brand identity system — logo, color palette, typography, social templates, and a comprehensive brand guideline deck.",
    results: [
      { metric: "Brand Recognition", value: "+180%" },
      { metric: "Website Traffic", value: "+95%" },
      { metric: "Lead Quality", value: "+60%" },
      { metric: "Client Perception", value: "Premium" },
    ],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
  },
  {
    id: "mindful-youtube",
    title: "Building a YouTube Empire",
    client: "Mindful Living",
    service: "Long Form Video Editing",
    challenge:
      "Aisha had incredible content ideas but lacked the editing skills to produce professional-quality videos consistently.",
    solution:
      "We produced a 10-episode series with cinematic editing, custom motion graphics, professional color grading, and optimized thumbnails.",
    results: [
      { metric: "Subscribers", value: "5K → 120K" },
      { metric: "Watch Time", value: "+420%" },
      { metric: "Ad Revenue", value: "+$8K/mo" },
      { metric: "Brand Deals", value: "6 Secured" },
    ],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
];

export const teamMembers = [
  {
    name: "Rijak Singh",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "5+ years in digital media. Former creative lead at a top agency.",
  },
  {
    name: "Preet Singh",
    role: "Video Editor & Web Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    bio: "Specializes in short-form viral content.",
  },
  {
    name: "Anubhav Vashisht",
    role: "Social Media Management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Manages Social Media Handles for creators and Brand",
  },
  {
    name: "Yashika Bhatnagar",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Creates stunning visuals for brands and creators",
  },
];

export const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "100K+", label: "Views Generated" },
  { value: "80%+", label: "Client Retention" },
];
