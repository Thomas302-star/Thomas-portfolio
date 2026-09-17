import type { Metadata } from "next";
import "./globals.css";
import { LazyMotion, domAnimation } from "motion/react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { PageTransition } from "@/components/ui/page-transition";

const siteUrl = "https://thomas-portfolio-psi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thomas Fatade | Web Developer",
    template: "%s | Thomas Fatade",
  },
  description: "Modern websites for brands and businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Thomas Fatade | Web Developer",
    description: "Modern websites for brands and businesses.",
    siteName: "Thomas Fatade",
  },
  twitter: {
    card: "summary",
    title: "Thomas Fatade | Web Developer",
    description: "Modern websites for brands and businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <LazyMotion features={domAnimation} strict>
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </LazyMotion>
      </body>
    </html>
  );
}
