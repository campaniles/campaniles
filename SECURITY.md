# Security Policy

Campaniles is an open-source, community-first project, and we take the security of our users and contributors seriously. Thank you for helping keep the project and its community safe.

## Supported Versions

Campaniles is in active, early development. Security fixes are applied to the latest `main` branch. Until a stable release line is established, only the most recent code on `main` is supported.

| Version | Supported |
| --- | --- |
| `main` (latest) | ✅ |
| Older commits / tags | ❌ |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.**

Instead, report them privately using one of the following:

1. **GitHub Security Advisories (preferred).** Open a private report via the repository's
   [Security Advisories](https://github.com/campaniles/campaniles/security/advisories/new) page.
   This keeps the discussion private until a fix is ready.
2. If you cannot use GitHub Security Advisories, contact the maintainers privately through the
   contact method listed on the [project repository](https://github.com/campaniles/campaniles).

When reporting, please include as much of the following as you can:

- A clear description of the vulnerability and its impact.
- Steps to reproduce, or a proof-of-concept.
- The affected files, routes, endpoints, or components.
- Any suggested remediation, if you have one.
- Whether the issue is already publicly known.

## What to Expect

- **Acknowledgement.** We aim to acknowledge your report within **5 business days**.
- **Assessment.** We will investigate, confirm the issue, and determine its severity and scope.
- **Updates.** We will keep you informed of progress toward a fix.
- **Resolution.** Once a fix is ready, we will release it and, where appropriate, publish a security advisory.
- **Credit.** With your permission, we are happy to credit you for the responsible disclosure.

## Disclosure Policy

We follow a **coordinated disclosure** model. Please give us a reasonable window to investigate and release a fix before any public disclosure. We will work with you to agree on a disclosure timeline.

## Scope

This policy covers the Campaniles application code in this repository. Vulnerabilities in third-party dependencies should generally be reported upstream to the relevant project; if a dependency issue affects Campaniles directly, let us know so we can update or mitigate.

## Best Practices for Contributors

- Never commit secrets, API keys, or credentials. Use `.env.local` (git-ignored) for local secrets.
- Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser — never place secrets behind that prefix.
- Validate and sanitize all user-provided input.
- Keep dependencies up to date and review `npm audit` output.

Thank you for helping keep Campaniles and its community secure.
