import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of Campaniles, an independent, community-first media platform for computer science and information technology.",
};

const LAST_UPDATED = "October 15, 2026";

export default async function TermsPage({
  params,
}: PageProps<"/[locale]/legal/terms">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <h1>Terms of Service</h1>
      <p className="text-sm text-muted-foreground">
        Last updated: {LAST_UPDATED}
      </p>

      <p>
        These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to
        and use of Campaniles (the &ldquo;Platform&rdquo;), an independent,
        community-first media platform for computer science and information
        technology. By accessing or using the Platform, you agree to be bound by
        these Terms. If you do not agree, do not use the Platform.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 16 years old, or the age of digital consent in your
        jurisdiction, to use the Platform. By using the Platform, you represent
        that you meet this requirement and that any information you provide is
        accurate and current.
      </p>

      <h2>2. Your account</h2>
      <p>
        Some features require an account. You are responsible for maintaining the
        confidentiality of your credentials and for all activity that occurs
        under your account. Notify us promptly of any unauthorized use. We are
        not liable for losses arising from your failure to safeguard your
        account.
      </p>

      <h2>3. Content you submit</h2>
      <p>
        You retain ownership of the content you publish on the Platform. By
        submitting content, you grant Campaniles a worldwide, non-exclusive,
        royalty-free license to host, store, reproduce, display, and distribute
        that content for the purpose of operating and improving the Platform. You
        are solely responsible for your content and represent that you have the
        rights necessary to grant this license.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to use the Platform to:</p>
      <ul>
        <li>
          Post content that is unlawful, infringing, defamatory, or that
          violates the rights of others;
        </li>
        <li>
          Harass, threaten, or impersonate any person, or misrepresent your
          affiliation with any person or entity;
        </li>
        <li>
          Distribute malware, attempt to gain unauthorized access to systems, or
          interfere with the integrity or performance of the Platform;
        </li>
        <li>
          Scrape, harvest, or collect data about other users without their
          consent or in violation of applicable law.
        </li>
      </ul>

      <h2>5. Open source</h2>
      <p>
        The software that powers Campaniles is released under the Apache License
        2.0. Your use of the source code is governed by that license, which is
        separate from these Terms that govern your use of the hosted Platform.
      </p>

      <h2>6. Moderation and termination</h2>
      <p>
        We may remove content or suspend accounts that violate these Terms or
        applicable law. Because the Platform is community-first, moderation
        decisions aim to be transparent and consistent. We may discontinue the
        Platform, in whole or in part, at any time.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        The Platform is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, whether express or
        implied, including fitness for a particular purpose and
        non-infringement, to the maximum extent permitted by law.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Campaniles and its contributors
        will not be liable for any indirect, incidental, special, consequential,
        or punitive damages, or for any loss of data, use, or goodwill arising
        from your use of the Platform.
      </p>

      <h2>9. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we make material
        changes, we will update the &ldquo;Last updated&rdquo; date above.
        Continued use of the Platform after changes take effect constitutes
        acceptance of the revised Terms.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms can be raised through the project&rsquo;s
        public community channels.
      </p>
    </>
  );
}
