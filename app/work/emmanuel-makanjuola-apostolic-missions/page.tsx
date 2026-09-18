import { CaseStudyLayout } from "@/components/projects/case-study-layout";

export default function EmmanuelMakanjuolaApostolicMissionsPage() {
  return (
    <CaseStudyLayout
      category="Ministry / Organization"
      title="EMMANUEL MAKANJUOLA APOSTOLIC MISSIONS"
      intro="A modern ministry website presenting the mission, ministry focus, resources, and ways to connect through a clear digital experience."
      overview={[
        "The website gives the ministry a focused digital home for its mission and ministry focus, with clear pathways to explore its work and resources.",
        "The experience is centered around revival, prayer, discipleship, soul winning, and equipping, while keeping the presentation clear and accessible across devices.",
      ]}
      focus={[
        "Clear presentation of the ministry mission and focus.",
        "Structured navigation for ministry resources and key information.",
        "Responsive layouts for visitors across different devices.",
        "A focused digital experience that keeps the ministry message central.",
      ]}
      details={[
        { label: "Type", value: "Ministry website" },
        { label: "Focus", value: "Mission and resources" },
        { label: "Experience", value: "Responsive web" },
      ]}
      deliverables={["Website structure", "Mission presentation", "Resource navigation", "Responsive experience"]}
      nextProject={{ title: "Tee Luxury Couture", href: "/work/tee-luxury-couture" }}
    />
  );
}
