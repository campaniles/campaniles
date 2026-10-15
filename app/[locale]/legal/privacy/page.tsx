import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Campaniles collects, uses, and protects your personal data as an independent, community-first media platform.",
};

const LAST_UPDATED = "October 15, 2026";

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/legal/privacy">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">
        Last updated: {LAST_UPDATED}
      </p>

      <p>
        This Privacy Policy explains how Campaniles (the &ldquo;Platform&rdquo;)
        collects, uses, and protects your personal data. As an independent,
        community-first project, we aim to collect as little as possible and to
        be transparent about what we do collect.
      </p>

      <h2>1. Data we collect</h2>
      <ul>
        <li>
          <strong>Account data:</strong> if you create an account, we store the
          identifier and contact address you provide, and a securely hashed
          password where applicable.
        </li>
        <li>
          <strong>Content data:</strong> the posts, comments, and other content
          you choose to publish, along with associated metadata such as
          timestamps.
        </li>
        <li>
          <strong>Technical data:</strong> limited server logs (such as IP
          address, user agent, and request time) used to operate the Platform
          securely and to diagnose problems.
        </li>
      </ul>

      <h2>2. How we use data</h2>
      <p>We use personal data to:</p>
      <ul>
        <li>Operate, maintain, and secure the Platform;</li>
        <li>Publish and display the content you submit;</li>
        <li>Prevent abuse, fraud, and violations of our Terms of Service;</li>
        <li>Comply with legal obligations.</li>
      </ul>
      <p>
        We do not sell your personal data, and we do not run ad-driven ranking.
      </p>

      <h2>3. Legal bases</h2>
      <p>
        Where the GDPR or similar laws apply, we process personal data on the
        basis of performing our contract with you (providing the Platform), our
        legitimate interests (operating and securing the Platform), your consent
        (where requested), and compliance with legal obligations.
      </p>

      <h2>4. Cookies</h2>
      <p>
        We use strictly necessary cookies to keep you signed in and to protect
        the Platform. For details, see our{" "}
        <Link href="/legal/cookies">Cookie Policy</Link>.
      </p>

      <h2>5. Data sharing</h2>
      <p>
        We share personal data only with service providers who help us operate
        the Platform (such as hosting and infrastructure providers), bound by
        confidentiality and data-processing obligations, and where required by
        law. Content you publish is, by its nature, visible to others.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain account and content data for as long as your account is active
        or as needed to provide the Platform. Server logs are retained for a
        limited period for security and troubleshooting, then deleted or
        anonymized.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on your jurisdiction, you may have the right to access,
        correct, export, or delete your personal data, and to object to or
        restrict certain processing. You can exercise these rights through the
        channels described in the Contact section below.
      </p>

      <h2>8. Security</h2>
      <p>
        We apply reasonable technical and organizational measures to protect
        personal data. No method of transmission or storage is completely
        secure, so we cannot guarantee absolute security.
      </p>

      <h2>9. Children</h2>
      <p>
        The Platform is not directed to children under the age of digital consent
        in their jurisdiction, and we do not knowingly collect their personal
        data.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this Policy from time to time. Material changes will be
        reflected in the &ldquo;Last updated&rdquo; date above.
      </p>

      <h2>11. Contact</h2>
      <p>
        Privacy questions and data-rights requests can be raised through the
        project&rsquo;s public community channels.
      </p>
    </>
  );
}
