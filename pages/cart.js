import SectionPage from "@/components/SectionPage";

export default function Cart() {
  return (
    <SectionPage
      title="Cart"
      subtitle="Lock in what matters, remove what doesn’t, and move forward with clarity."
      bullets={[
        {
          title: "Current selection",
          body: "Review the components and bundles you’ve short‑listed.",
          cta: "Review selection"
        },
        {
          title: "Alignment check",
          body: "Confirm that what’s in your cart matches your actual risk and priorities.",
          cta: "Run alignment check"
        },
        {
          title: "Next steps",
          body: "Schedule a working session to finalize scope, pricing, and rollout.",
          cta: "Schedule a session"
        }
      ]}
    />
  );
}
