import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/mockshot/Layout";
import { Landing } from "@/components/mockshot/Landing";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "MockPixel — Device Mockups & App Store Screenshots" },
      {
        name: "description",
        content:
          "Design store-ready device mockups and App Store & Google Play screenshots in minutes. Professional exports, no design experience required.",
      },
      { property: "og:title", content: "MockPixel — Device Mockups & App Store Screenshots" },
      {
        property: "og:description",
        content:
          "Design store-ready device mockups and App Store & Google Play screenshots in minutes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  useReveal();

  return (
    <PageShell>
      <Landing />
    </PageShell>
  );
}
