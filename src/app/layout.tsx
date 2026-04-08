import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Edbros — Premium Creative Agency",
  description:
    "Edbros is a premium social media and creative agency specializing in social media management, video editing, graphic design, and content strategy.",
  keywords: [
    "social media agency",
    "video editing",
    "content creation",
    "graphic design",
    "social media management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
