import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How and why Campaniles uses cookies and similar technologies, and the choices available to you.",
};

const LAST_UPDATED = "October 15, 2026";

export default async function CookiesPage({
  params,
}: PageProps<"/[locale]/legal/cookies">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <h1>Cookie Policy</h1>
      <p className="text-sm text-muted-foreground">
        Last updated: {LAST_UPDATED}
      </p>

      <p>
        This Cookie Policy explains how Campaniles (the &ldquo;Platform&rdquo;)
        uses cookies and similar technologies. It should be read together with
        our <Link href="/legal/privacy">Privacy Policy</Link>.
      </p>

      <h2>1. What cookies are</h2>
      <p>
        Cookies are small text files stored on your device by your browser. They
        let a site remember information between requests, such as whether you are
        signed in. Similar technologies include local storage and session
        storage.
      </p>

      <h2>2. How we use cookies</h2>
      <p>
        Consistent with our community-first, non-ad-driven approach, we keep our
        use of cookies to a minimum. We use the following categories:
      </p>
      <ul>
        <li>
          <strong>Strictly necessary:</strong> required for the Platform to
          function, including keeping you signed in and protecting against
          cross-site request forgery. These cannot be switched off through the
          Platform.
        </li>
        <li>
          <strong>Preferences:</strong> remember choices such as your selected
          language or theme so the Platform behaves the way you expect.
        </li>
      </ul>
      <p>
        We do not use advertising or cross-site tracking cookies, and we do not
        sell data derived from cookies.
      </p>

      <h2>3. Managing cookies</h2>
      <p>
        Most browsers let you view, block, or delete cookies through their
        settings. Blocking strictly necessary cookies may prevent parts of the
        Platform, such as signing in, from working correctly.
      </p>

      <h2>4. Changes</h2>
      <p>
        We may update this Cookie Policy from time to time. Material changes will
        be reflected in the &ldquo;Last updated&rdquo; date above.
      </p>

      <h2>5. Contact</h2>
      <p>
        Questions about this Cookie Policy can be raised through the
        project&rsquo;s public community channels.
      </p>
    </>
  );
}
