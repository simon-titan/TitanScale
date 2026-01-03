# Projekt-Dokumentation

Diese Dokumentation beschreibt alle wichtigen Komponenten, Konfigurationen und Best Practices des Projekts.

## Übersicht

- [00-ÜBERSICHT.md](./00-ÜBERSICHT.md) - Projekt-Übersicht und Architektur
- [01-KONFIGURATION.md](./01-KONFIGURATION.md) - Konfigurationsdateien und Einstellungen
- [02-AUTHENTIFIZIERUNG.md](./02-AUTHENTIFIZIERUNG.md) - Auth-System und Outseta-Integration
- [03-KOMPONENTEN.md](./03-KOMPONENTEN.md) - Komponenten-Übersicht
- [04-UTILITIES.md](./04-UTILITIES.md) - Utility-Funktionen und Hooks
- [05-THEME-STYLING.md](./05-THEME-STYLING.md) - Theme-Konfiguration und Styling
- [06-ROUTING.md](./06-ROUTING.md) - Routing-Struktur und Seitenorganisation

## Schnellstart

### Wichtige Imports

```typescript
// Konfiguration
import { projectConfig } from "@/config";

// Authentifizierung
import { useAuth } from "@/components/provider/auth-provider";
import ProtectedRoute from "@/components/auth/protect-route";
import { SignedIn, SignedOut } from "@/components/auth/protect-content";

// Layout
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// UI-Komponenten
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

// Utilities
import { generateMetadata } from "@/utils/metadata";
```

### Häufige Patterns

#### Geschützte Seite erstellen

```typescript
// app/app/my-page/page.tsx
import ProtectedRoute from "@/components/auth/protect-route";

export default function MyPage() {
  return (
    <ProtectedRoute plansWithAccess="basic,pro">
      <div>Geschützter Inhalt</div>
    </ProtectedRoute>
  );
}
```

#### Metadata für Seite hinzufügen

```typescript
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Meine Seite",
  description: "Beschreibung",
  path: "/my-page",
});
```

#### Bedingter Inhalt

```typescript
import { SignedIn, SignedOut } from "@/components/auth/protect-content";

<SignedIn plan="L9nqaeQZ">
  <div>Nur für Basic-Plan</div>
</SignedIn>

<SignedOut>
  <div>Bitte einloggen</div>
</SignedOut>
```

## Wichtige Dateien

### Konfiguration
- `config/index.ts` - Zentrale Konfiguration
- `config/auth-config.ts` - Plan-Konfiguration
- `config/outseta-config.ts` - Outseta-Einstellungen
- `config/theme-config.ts` - Theme-Einstellungen

### Komponenten
- `components/provider/auth-provider.tsx` - Auth-Context
- `components/auth/protect-route.tsx` - Route-Schutz
- `components/auth/protect-content.tsx` - Bedingtes Rendering
- `components/layout/navbar.tsx` - Navigation
- `components/layout/footer.tsx` - Footer

### Utilities
- `utils/metadata.ts` - SEO-Metadata
- `utils/url-matcher.ts` - URL-Pattern-Matching
- `utils/use-chat-visibility.ts` - Chat-Sichtbarkeit

## Nächste Schritte

1. Lese [00-ÜBERSICHT.md](./00-ÜBERSICHT.md) für einen Überblick
2. Konfiguriere dein Projekt in [01-KONFIGURATION.md](./01-KONFIGURATION.md)
3. Verstehe das Auth-System in [02-AUTHENTIFIZIERUNG.md](./02-AUTHENTIFIZIERUNG.md)
4. Nutze die Komponenten aus [03-KOMPONENTEN.md](./03-KOMPONENTEN.md)

