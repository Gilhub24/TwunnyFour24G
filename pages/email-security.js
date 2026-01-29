import SectionPage from "@/components/SectionPage";

export default function EmailSecurity() {
  return (
    <SectionPage
      title="Email Security"
      subtitle="Stop phishing, spoofing, and payloads before they ever reach your people."
      bullets={[
        {
          title: "Inbound protection",
          body: "Filter, inspect, and quarantine high‑risk mail without drowning users in noise.",
          cta: "Review inbound controls"
        },
        {
          title: "Impersonation & spoofing",
          body: "Tighten DMARC, SPF, and DKIM so your domain can’t be weaponized.",
          cta: "Harden your domain"
        },
        {
          title: "User‑safe workflows",
          body: "Give people a clear, simple way to report suspicious mail without slowing them down.",
          cta: "Design safe workflows"
        }
      ]}
    />
  );
}
