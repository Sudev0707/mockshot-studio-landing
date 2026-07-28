import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/mockshot/Layout";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — MockShot" },
      {
        name: "description",
        content: "How MockShot collects, uses, stores, and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — MockShot" },
      {
        property: "og:description",
        content: "How MockShot collects, uses, stores, and protects your personal information.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function Privacy() {
  return (
    <PageShell>
      <div className="border-b border-gray-100 bg-gray-50/80">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="mb-3 text-sm font-semibold text-blue-600">Legal</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: July 29, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <article className="ms-legal-page">
          <p>
            MockShot (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This
            Privacy Policy explains what information we collect when you use the MockShot website,
            mobile apps, and related services (the &quot;Service&quot;), how we use it, and the
            choices you have.
          </p>
          <p>
            By using MockShot, you agree to the collection and use of information as described in
            this policy. If you do not agree, please do not use the Service.
          </p>

          <h2>1. Information we collect</h2>
          <p>We collect information in the following categories:</p>

          <h3>Account information</h3>
          <p>
            When you create an account or subscribe, we may collect your name, email address,
            password (stored in hashed form), billing details processed by our payment provider,
            and profile preferences you choose to save.
          </p>

          <h3>Content you provide</h3>
          <p>
            Screenshots, images, logos, backgrounds, and other assets you upload or create in
            MockShot are processed so we can deliver mockups and exports. We do not sell this
            content.
          </p>

          <h3>Usage and device data</h3>
          <p>
            We may collect basic analytics such as feature usage, crash reports, app version,
            device type, operating system, approximate location derived from IP address, and
            diagnostic logs needed to keep the Service reliable.
          </p>

          <h3>Communications</h3>
          <p>
            If you contact us at{" "}
            <a href="mailto:support@mockshot.ai">support@mockshot.ai</a>, we keep the contents of
            that correspondence so we can respond and improve support.
          </p>

          <h2>2. How we use information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve MockShot</li>
            <li>Create, process, and export your mockups and screenshots</li>
            <li>Authenticate accounts and process subscriptions or purchases</li>
            <li>Send transactional messages (receipts, security alerts, product updates)</li>
            <li>Respond to support requests and investigate abuse</li>
            <li>Analyze aggregated usage to improve performance and product design</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information to third parties.
          </p>

          <h2>3. How we share information</h2>
          <p>We may share information only in these limited cases:</p>
          <ul>
            <li>
              <strong>Service providers</strong> — trusted vendors who help us host, process
              payments, send email, or analyze product usage, under contractual confidentiality
              obligations
            </li>
            <li>
              <strong>Legal requirements</strong> — when required by law, court order, or to protect
              the rights, safety, and property of MockShot or others
            </li>
            <li>
              <strong>Business transfers</strong> — in connection with a merger, acquisition, or
              sale of assets, with notice when required
            </li>
            <li>
              <strong>With your consent</strong> — when you ask us to share information with another
              party
            </li>
          </ul>

          <h2>4. Data storage &amp; security</h2>
          <p>
            Your data is stored on trusted infrastructure providers with industry-standard
            protections, including encryption in transit and access controls limited to authorized
            personnel. No method of transmission or storage is 100% secure; we work to protect your
            information but cannot guarantee absolute security.
          </p>

          <h2>5. Data retention</h2>
          <p>
            We retain account and usage information for as long as your account is active or as
            needed to provide the Service. Uploaded assets may be retained until you delete them or
            close your account, subject to backup retention windows. We may keep limited records
            longer when required for legal, accounting, or security purposes.
          </p>

          <h2>6. Your rights &amp; choices</h2>
          <p>Depending on where you live, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict certain processing</li>
            <li>Export a copy of your data in a portable format</li>
            <li>Opt out of non-essential marketing emails</li>
          </ul>
          <p>
            To exercise these rights, email{" "}
            <a href="mailto:support@mockshot.ai">support@mockshot.ai</a>. We may need to verify your
            identity before fulfilling a request.
          </p>

          <h2>7. Children&apos;s privacy</h2>
          <p>
            MockShot is not directed to children under 13 (or the minimum age required in your
            jurisdiction). We do not knowingly collect personal information from children. If you
            believe a child has provided us information, contact us and we will take appropriate
            steps to delete it.
          </p>

          <h2>8. International transfers</h2>
          <p>
            MockShot may process information on servers located outside your country of residence.
            Where required, we use appropriate safeguards for cross-border transfers.
          </p>

          <h2>9. Cookies &amp; similar technologies</h2>
          <p>
            Our website may use cookies or similar technologies for essential functionality,
            preferences, and analytics. You can control cookies through your browser settings;
            disabling some cookies may affect site features.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            &quot;Last updated&quot; date above and, for material changes, provide additional notice
            as appropriate. Continued use of the Service after changes means you accept the updated
            policy.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about this Privacy Policy or your data? Reach us at{" "}
            <a href="mailto:support@mockshot.ai">support@mockshot.ai</a>.
          </p>
          <p>
            See also our <Link to="/terms">Terms of Service</Link>.
          </p>
        </article>
      </div>
    </PageShell>
  );
}
