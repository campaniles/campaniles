import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

// Next.js 16 renamed the `middleware` file convention to `proxy`.
// next-intl's request handler is wired here as the default export.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (_next)
  // - Vercel internals (_vercel)
  // - static files (anything containing a dot, e.g. favicon.ico)
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
