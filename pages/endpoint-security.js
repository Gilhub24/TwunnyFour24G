import SectionPage from "@/components/SectionPage";

export default function EndpointSecurity() {
  return (
    <SectionPage
      title="Endpoint Security"
      subtitle="See, stop, and respond on every device that touches your data."
      bullets={[
        {
          title: "Coverage map",
          body: "Know exactly which devices are protected, exposed, or misconfigured.",
          cta: "Map your endpoints"
        },
        {
          title: "Detection & response",
          body: "Move from blind spots to real‑time visibility and guided response.",
          cta: "Tighten detection"
        },
        {
          title: "Policy in practice",
          body: "Turn your written policies into actual enforced controls on devices.",
          cta: "Operationalize policy"
        }
      ]}
    />
  );
}
