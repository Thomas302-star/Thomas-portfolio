import { CaseStudyLayout } from "@/components/projects/case-study-layout";

export default function CreatorContentPlannerPage() {
  return (
    <CaseStudyLayout
      category="SaaS / Product"
      title="Creator Content Planner"
      intro="A focused product experience that helps solo creators decide what to create next and organize their ideas into a simple plan."
      overview={[
        "The product is centered on a simple creator journey: define a niche and content goal, generate ideas, review them, save useful ideas, and organize selected ideas on a calendar.",
        "The interface prioritizes clarity and a low-friction workflow so creators can spend less time deciding what to post and more time creating.",
      ]}
      focus={[
        "A straightforward journey from creator goals to content ideas.",
        "Clear idea presentation so generated content is easy to review.",
        "Saved ideas and calendar organization for a simple planning workflow.",
        "A focused product structure designed around solo creators.",
      ]}
      details={[
        { label: "Type", value: "SaaS product" },
        { label: "Audience", value: "Solo creators" },
        { label: "Core flow", value: "Ideas to calendar" },
      ]}
      deliverables={["Product structure", "Creator workflow", "Idea management", "Calendar planning"]}
        visual={{ eyebrow: "SaaS / Product", title: "From content ideas to a simple publishing plan.", accent: "#2563EB" }}
      nextProject={{ title: "Bitget Education", href: "/work/bitget-education" }}
    />
  );
}
