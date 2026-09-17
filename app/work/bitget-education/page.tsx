import { CaseStudyLayout } from "@/components/projects/case-study-layout";

export default function BitgetEducationPage() {
  return (
    <CaseStudyLayout
      category="Web3 / Education"
      title="Bitget Education"
      intro="An educational landing experience built to make exchange features easier to understand through clear sections and straightforward navigation."
      overview={[
        "The page organizes educational information around common exchange activities, including buying and selling crypto, P2P, deposits and withdrawals, rewards, futures, spot, and stocks.",
        "The experience keeps the content educational and structured, with responsive navigation and visual sections designed to make each topic easier to scan.",
      ]}
      focus={[
        "Clear information architecture for multiple educational topics.",
        "Responsive navigation that keeps the page usable on smaller screens.",
        "Visual sections that help separate and explain related content.",
        "A neutral educational presentation focused on clarity and usability.",
      ]}
      details={[
        { label: "Type", value: "Educational landing page" },
        { label: "Category", value: "Web3" },
        { label: "Focus", value: "Content clarity" },
      ]}
      nextProject={{ title: "RemoteScout", href: "/work/remotescout" }}
    />
  );
}
