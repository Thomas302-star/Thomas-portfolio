import { CaseStudyLayout } from "@/components/projects/case-study-layout";

export default function RemoteScoutPage() {
  return (
    <CaseStudyLayout
      category="Remote Jobs / SaaS"
      title="RemoteScout"
      intro="Find legitimate remote jobs from trusted sources in one place."
      overview={[
        "RemoteScout brings remote job opportunities from multiple trusted sources into a centralized experience, making discovery easier for people looking for legitimate remote work.",
        "The product is designed around the core journey of discovering, saving, applying to, and tracking remote job opportunities.",
      ]}
      focus={[
        "A centralized experience for discovering remote opportunities.",
        "A clear structure for job information and opportunity discovery.",
        "A workflow that supports saving, applying, and tracking jobs.",
        "A responsive product experience built around practical job searching.",
      ]}
      details={[
        { label: "Type", value: "SaaS product" },
        { label: "Category", value: "Remote jobs" },
        { label: "Core flow", value: "Discover to track" },
      ]}
      deliverables={["Product structure", "Job discovery flow", "Opportunity tracking", "Responsive experience"]}
        visual={{ eyebrow: "Remote Jobs / SaaS", title: "A focused workflow for discovering and tracking opportunities.", accent: "#2563EB" }}
      nextProject={{ title: "EMMANUEL MAKANJUOLA APOSTOLIC MISSIONS", href: "/work/emmanuel-makanjuola-apostolic-missions" }}
    />
  );
}
