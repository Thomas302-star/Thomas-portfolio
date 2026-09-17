import { CaseStudyLayout } from "@/components/projects/case-study-layout";

export default function TeeLuxuryCouturePage() {
  return (
    <CaseStudyLayout
      category="Fashion / E-commerce"
      title="Tee Luxury Couture"
      intro="A fashion-focused digital experience designed to present the brand clearly and create a polished path through its online presence."
      overview={[
        "The project focuses on strong visual presentation, clear content hierarchy, and a responsive experience across screen sizes.",
        "The interface was shaped to give the fashion brand a confident digital presence while keeping navigation and important actions easy to understand.",
      ]}
      focus={[
        "Clear visual hierarchy for a fashion-led brand experience.",
        "Responsive layouts that adapt across mobile, tablet, and desktop.",
        "Simple navigation that keeps important actions easy to find.",
        "A polished presentation that keeps the brand at the center of the experience.",
      ]}
      details={[
        { label: "Type", value: "Brand website" },
        { label: "Focus", value: "Visual presentation" },
        { label: "Experience", value: "Responsive web" },
      ]}
      nextProject={{ title: "Creator Content Planner", href: "/work/creator-content-planner" }}
    />
  );
}
