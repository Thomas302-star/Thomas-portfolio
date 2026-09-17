import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/navigation/site-header";

export const metadata: Metadata = {
  title: "Thomas Fatade | Web Developer",
  description: "Modern websites for brands and businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
