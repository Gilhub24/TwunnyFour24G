import SectionPage from "@/components/SectionPage";

export default function Pricing() {
  return (
    <SectionPage
      title="Pricing"
      subtitle="Transparent, conversation‑first pricing. No dark patterns, no surprise line items."
      bullets={[
        {
          title: "Email‑only",
          body: "Start with focused email protection and expand when you’re ready.",
          cta: "Discuss email pricing"
        },
        {
          title: "Endpoint‑only",
          body: "Lock in endpoint visibility and response as a dedicated track.",
          cta: "Discuss endpoint pricing"
        },
        {
          title: "Full stack",
          body: "Bundle email + endpoint for aligned coverage and simpler buying.",
          cta: "Discuss full stack pricing"
        }
      ]}
    />
  );
}
