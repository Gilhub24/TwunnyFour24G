import SectionPage from "@/components/SectionPage";

export default function Resources() {
  return (
    <SectionPage
      title="Resources"
      subtitle="Short, practical artifacts you can drop straight into conversations with your team."
      bullets={[
        {
          title: "One‑pagers",
          body: "Explain email and endpoint risk in plain language for non‑technical stakeholders.",
          cta: "Browse one‑pagers"
        },
        {
          title: "Playbooks",
          body: "Turn incidents into repeatable, calm responses instead of chaos.",
          cta: "Browse playbooks"
        },
        {
          title: "Checklists",
          body: "Make sure nothing critical gets missed when you’re under pressure.",
          cta: "Browse checklists"
        }
      ]}
    />
  );
}
