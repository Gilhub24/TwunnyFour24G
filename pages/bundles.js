import SectionPage from "@/components/SectionPage";

export default function Bundles() {
  return (
    <SectionPage
      title="Bundles"
      subtitle="Opinionated combinations of email and endpoint security that actually work together."
      bullets={[
        {
          title: "Starter",
          body: "For teams taking their first serious step into structured security.",
          cta: "View starter bundle"
        },
        {
          title: "Growth",
          body: "For companies scaling fast and needing guardrails that keep up.",
          cta: "View growth bundle"
        },
        {
          title: "Enterprise",
          body: "For complex environments where context, visibility, and speed matter most.",
          cta: "View enterprise bundle"
        }
      ]}
    />
  );
}
