# Routing & Seitenstruktur

Das Projekt nutzt **Next.js 15 App Router** mit Route Groups für die Organisation.

## Route Groups

### (website) - Öffentliche Website

**Layout:** `app/(website)/layout.tsx`
- Navbar (type="website")
- Footer
- Hauptinhalt

**Seiten:**
- `/` - Homepage
- `/about` - Über uns
- `/contact` - Kontakt
- `/docs` - Dokumentation
- `/pricing` - Preise
- `/support` - Support
- `/legal/privacy-policy` - Datenschutz
- `/legal/terms-and-conditions` - AGB
- `/legal/cookie-policy` - Cookie-Richtlinie
- `/embed/*` - Embed-Seiten für Outseta-Widgets

**Verwendung:**
```typescript
// app/(website)/about/page.tsx
export default function AboutPage() {
  return <div>Über uns</div>;
}
```

### (utility) - Utility-Seiten

**Layout:** `app/(utility)/layout.tsx`
- Kein Standard-Layout (keine Navbar/Footer)

**Seiten:**
- `/login` - Login-Seite
- `/sign-up` - Registrierungs-Seite
- `/thank-you` - Danke-Seite (nach Registrierung)
- `/javascript` - JavaScript-Required-Seite

**Verwendung:**
```typescript
// app/(utility)/login/page.tsx
export default function LoginPage() {
  return <div>Login</div>;
}
```

### app - Geschützte App-Seiten

**Layout:** `app/app/layout.tsx`
- Navbar (type="app")
- Hauptinhalt
- **Kein Footer**

**Seiten:**
- `/app` - App-Homepage
- `/app/basic` - Basic-Plan Seite (geschützt)
- `/app/pro` - Pro-Plan Seite (geschützt)

**Verwendung:**
```typescript
// app/app/basic/page.tsx
import ProtectedRoute from "@/components/auth/protect-route";

export default function BasicPage() {
  return (
    <ProtectedRoute plansWithAccess="basic">
      <div>Basic-Plan Inhalt</div>
    </ProtectedRoute>
  );
}
```

## Root Layout

### app/layout.tsx

Haupt-Layout für alle Seiten:
- Font-Loading (Inter)
- Provider-Setup
- Outseta-Script-Integration
- Cookie-Banner-Initialisierung
- Chat-Visibility-Hook

**Wichtig:**
- `suppressHydrationWarning` für Cookie-Banner
- Outseta-Script wird `beforeInteractive` geladen
- Cookie-Banner wird via `useEffect` initialisiert

## SEO & Metadata

### Metadata-Generierung

```typescript
// app/(website)/about/page.tsx
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Über uns",
  description: "Lerne mehr über unser Unternehmen",
  path: "/about",
});
```

### Sitemap (`app/sitemap.ts`)

Automatische Sitemap-Generierung:

```typescript
export default async function sitemap() {
  const routes = [
    "",
    "/about",
    "/contact",
    // ...
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
  
  return routes;
}
```

**Zugriff:** `/sitemap.xml`

### Robots.txt (`app/robots.ts`)

Robots.txt-Generierung:

```typescript
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: projectConfig.seo.robotsDisallowPaths,
      },
    ],
    sitemap: `${projectConfig.general.siteUrl}/sitemap.xml`,
  };
}
```

**Zugriff:** `/robots.txt`

**Disallow-Pfade:**
- `/app/*` - Geschützte App-Seiten
- `/api/*` - API-Routen

## Not Found

### app/not-found.tsx

404-Seite für nicht gefundene Routen.

## Embed-Seiten

### Outseta-Widget Embeds

**Seiten:**
- `/embed/login` - Login-Widget
- `/embed/sign-up` - Signup-Widget
- `/embed/lead-capture` - Lead-Capture-Formular
- `/embed/email-list` - E-Mail-Liste

**Verwendung:**
Diese Seiten zeigen die Outseta-Widgets als embedded Version (nicht Popup).

## Best Practices

1. **Route Groups**: Nutze Route Groups für logische Gruppierung
2. **Layouts**: Jede Route Group hat eigenes Layout
3. **Metadata**: Immer `generateMetadata` für SEO verwenden
4. **Protected Routes**: Nutze `ProtectedRoute` für geschützte Seiten
5. **Sitemap**: Halte Sitemap aktuell für öffentliche Seiten
6. **Robots.txt**: Konfiguriere Disallow-Pfade für geschützte Bereiche

## Routing-Beispiele

### Öffentliche Seite mit Metadata

```typescript
// app/(website)/about/page.tsx
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Über uns",
  description: "Lerne mehr über unser Unternehmen",
  path: "/about",
});

export default function AboutPage() {
  return <div>Über uns</div>;
}
```

### Geschützte Seite

```typescript
// app/app/basic/page.tsx
import ProtectedRoute from "@/components/auth/protect-route";

export default function BasicPage() {
  return (
    <ProtectedRoute plansWithAccess="basic">
      <div>Basic-Plan Inhalt</div>
    </ProtectedRoute>
  );
}
```

### Seite mit bedingtem Inhalt

```typescript
// app/(website)/pricing/page.tsx
import { SignedIn, SignedOut } from "@/components/auth/protect-content";

export default function PricingPage() {
  return (
    <div>
      <SignedOut>
        <div>Bitte einloggen für Preise</div>
      </SignedOut>
      <SignedIn>
        <div>Preise für eingeloggte Nutzer</div>
      </SignedIn>
    </div>
  );
}
```

