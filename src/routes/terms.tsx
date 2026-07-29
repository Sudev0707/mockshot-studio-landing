import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/mockshot/Layout";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms of Service — MockShot" },
      {
        name: "description",
        content: "The terms that govern your access to and use of MockShot.",
      },
      { property: "og:title", content: "Terms of Service — MockShot" },
      {
        property: "og:description",
        content: "The terms that govern your access to and use of MockShot.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function Terms() {
  return (
    <PageShell>
      <div className="border-b border-gray-100 bg-gray-50/80">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="mb-3 text-sm font-semibold text-blue-600">Legal</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: July 29, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <article className="ms-legal-page">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of MockShot,
            including our website, mobile applications, and related services (the
            &quot;Service&quot;). By accessing or using MockShot, you agree to these Terms.
          </p>
          <p>
            If you do not agree, do not use the Service. If you are using MockShot on behalf of an
            organization, you represent that you have authority to bind that organization to these
            Terms.
          </p>

          <h2>1. The Service</h2>
          <p>
            MockShot provides tools to create device mockups and App Store / Google Play style
            screenshots and related marketing assets. Features, plans, and availability may change
            as we develop the product. Some capabilities described on our marketing site may be
            labeled as &quot;coming soon&quot; and are not yet available.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 13 years old (or the minimum age of digital consent in your
            country) to use MockShot. By using the Service, you confirm that you meet this
            requirement and that the information you provide is accurate.
          </p>

          <h2>3. Accounts</h2>
          <p>
            You are responsible for keeping your account credentials secure and for all activity
            that occurs under your account. Notify us promptly at{" "}
            <a href="mailto:support@mockshot.app">support@mockshot.app</a> if you suspect unauthorized
            access. We may suspend or terminate accounts that violate these Terms or pose a
            security risk.
          </p>

          <h2>4. Acceptable use</h2>
          <p>You agree to use MockShot only for lawful purposes. You may not:</p>
          <ul>
            <li>Upload content you do not have the right to use</li>
            <li>Infringe intellectual property, privacy, or other rights of others</li>
            <li>Attempt to reverse engineer, scrape, or disrupt the Service</li>
            <li>Use the Service to distribute malware, spam, or deceptive material</li>
            <li>Circumvent plan limits, payment, or security controls</li>
            <li>Misrepresent MockShot exports as official Apple or Google assets</li>
          </ul>
          <p>
            You are solely responsible for the content you create, upload, and export, and for how
            you use those assets in app stores or elsewhere.
          </p>

          <h2>5. Your content</h2>
          <p>
            You retain ownership of the screenshots, images, logos, and other materials you upload
            or create (&quot;User Content&quot;). By using the Service, you grant MockShot a limited
            license to host, process, display, and export User Content solely as needed to operate
            and improve the Service.
          </p>
          <p>
            You represent that you have all rights necessary to upload and use your User Content
            with MockShot.
          </p>

          <h2>6. Our intellectual property</h2>
          <p>
            MockShot, including its software, branding, device frames, templates, UI, and
            documentation, is owned by us or our licensors and protected by applicable intellectual
            property laws. These Terms do not grant you ownership of MockShot or permission to copy
            our branding except as needed to use the Service.
          </p>

          <h2>7. Subscriptions, trials &amp; payments</h2>
          <p>
            Paid plans, if offered, are billed according to the pricing shown at purchase. Fees are
            generally non-refundable except where required by law or stated otherwise at checkout.
            Free trials or free tiers may have usage limits. We may change prices with reasonable
            notice for renewing subscriptions.
          </p>
          <p>
            Taxes may apply based on your location. Failed payments may result in suspension of paid
            features until billing is resolved.
          </p>

          <h2>8. Third-party services</h2>
          <p>
            The Service may integrate with or link to third-party platforms (for example, app
            stores, payment processors, or analytics). Those services are governed by their own
            terms and privacy policies. MockShot is not responsible for third-party products or
            practices.
          </p>

          <h2>9. Disclaimer of warranties</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties
            of any kind, whether express, implied, or statutory, including merchantability, fitness
            for a particular purpose, and non-infringement. We do not warrant that the Service will
            be uninterrupted, error-free, or that exports will meet every app store requirement
            without review on your part.
          </p>

          <h2>10. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, MockShot and its affiliates, officers, and
            employees will not be liable for any indirect, incidental, special, consequential, or
            punitive damages, or for any loss of profits, data, goodwill, or business opportunities,
            arising from your use of the Service.
          </p>
          <p>
            Our total liability for any claim related to the Service will not exceed the amounts you
            paid to MockShot in the twelve (12) months before the claim, or one hundred U.S. dollars
            (US $100) if you have not paid any fees.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless MockShot from claims, damages, and expenses
            (including reasonable legal fees) arising from your User Content, your use of the
            Service, or your violation of these Terms or applicable law.
          </p>

          <h2>12. Termination</h2>
          <p>
            You may stop using MockShot at any time and may request account deletion by contacting
            support. We may suspend or terminate access if you violate these Terms, if required by
            law, or if we discontinue the Service. Provisions that by their nature should survive
            (including intellectual property, disclaimers, liability limits, and indemnity) will
            survive termination.
          </p>

          <h2>13. Changes to the Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will revise the &quot;Last
            updated&quot; date above. Continued use of the Service after changes become effective
            constitutes acceptance of the updated Terms. If you do not agree, stop using the Service.
          </p>

          <h2>14. Governing law</h2>
          <p>
            These Terms are governed by the laws applicable in the jurisdiction where MockShot
            operates its primary business, without regard to conflict-of-law principles, except
            where mandatory consumer protections in your country of residence apply.
          </p>

          <h2>15. Contact</h2>
          <p>
            Questions about these Terms? Email us at{" "}
            <a href="mailto:support@mockshot.app">support@mockshot.app</a>.
          </p>
          <p>
            See also our <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </article>
      </div>
    </PageShell>
  );
}
