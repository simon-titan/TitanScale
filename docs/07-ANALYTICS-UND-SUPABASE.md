# Analytics und Supabase Konfiguration

Diese Dokumentation beschreibt die Konfiguration und Einbindung von Google Analytics, Meta Pixel und Supabase.

## Umgebungsvariablen

Erstelle eine `.env.local` Datei im Root-Verzeichnis mit folgenden Variablen:

```bash
# Supabase Konfiguration
NEXT_PUBLIC_SUPABASE_ENABLED=false
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
NEXT_PUBLIC_SUPABASE_SCHEMA=public
NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=
NEXT_PUBLIC_SUPABASE_REALTIME_ENABLED=false

# Google Analytics Konfiguration
NEXT_PUBLIC_GA_ENABLED=false
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GA_PROPERTY_ID=

# Meta Pixel Konfiguration
NEXT_PUBLIC_META_ADS_ENABLED=false
NEXT_PUBLIC_META_PIXEL_ID=
```

## Supabase Konfiguration

### Aktivierung

1. Setze `NEXT_PUBLIC_SUPABASE_ENABLED=true` in deiner `.env.local`
2. Füge deine Supabase-Credentials hinzu:
   - `NEXT_PUBLIC_SUPABASE_URL`: Findest du in deinem Supabase Dashboard unter Settings > API
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Findest du in deinem Supabase Dashboard unter Settings > API
   - `SUPABASE_SERVICE_ROLE_KEY`: Findest du in deinem Supabase Dashboard unter Settings > API (NUR für Server-Side!)

### Verwendung

#### Client-Side

```typescript
import { getSupabaseClient } from "@/utils/supabase";

const supabase = getSupabaseClient();

// Beispiel: Daten abrufen
const { data, error } = await supabase
  .from("users")
  .select("*");
```

#### Server-Side (mit Admin-Zugriff)

```typescript
import { createServerClient } from "@/utils/supabase/server";

const supabase = createServerClient();

// Beispiel: Daten abrufen
const { data, error } = await supabase
  .from("users")
  .select("*");
```

#### Server-Side (mit User-Session)

```typescript
import { createServerClientWithAuth } from "@/utils/supabase/server";

const supabase = await createServerClientWithAuth();

// Beispiel: Daten abrufen
const { data, error } = await supabase
  .from("users")
  .select("*");
```

### Konfiguration anpassen

Die Supabase-Konfiguration findest du in `config/supabase-config.ts`:

```typescript
export const supabaseConfig = {
  enabled: process.env.NEXT_PUBLIC_SUPABASE_ENABLED === "true",
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  // ... weitere Optionen
};
```

## Google Analytics Konfiguration

### Aktivierung

1. Setze `NEXT_PUBLIC_GA_ENABLED=true` in deiner `.env.local`
2. Füge deine Google Analytics Measurement ID hinzu:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Format: `G-XXXXXXXXXX` oder `UA-XXXXXXXXX-X`

### Automatisches Tracking

Google Analytics trackt automatisch:
- **Page Views**: Bei jedem Seitenwechsel
- **Outbound Links**: Klicks auf externe Links
- **Downloads**: Klicks auf Download-Links (PDF, ZIP, etc.)

### Konfiguration anpassen

Die Google Analytics-Konfiguration findest du in `config/google-analytics-config.ts`:

```typescript
export const googleAnalyticsConfig = {
  enabled: process.env.NEXT_PUBLIC_GA_ENABLED === "true",
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  // ... weitere Optionen
};
```

### Manuelles Event Tracking

```typescript
// In einer Client-Komponente
if (typeof window !== "undefined" && (window as any).gtag) {
  (window as any).gtag("event", "button_click", {
    event_category: "engagement",
    event_label: "newsletter_signup",
  });
}
```

### Seiten-spezifische Konfiguration

Du kannst festlegen, auf welchen Seiten Google Analytics geladen werden soll:

```typescript
// In config/google-analytics-config.ts
includePaths: ["/", "/pricing", "/about"], // Nur auf diesen Seiten
excludePaths: ["/app/*", "/api/*"], // Nicht auf diesen Seiten
```

## Meta Pixel Konfiguration

### Aktivierung

1. Setze `NEXT_PUBLIC_META_ADS_ENABLED=true` in deiner `.env.local`
2. Füge deine Meta Pixel ID hinzu:
   - `NEXT_PUBLIC_META_PIXEL_ID`: Findest du in deinem Meta Events Manager

### Automatisches Tracking

Meta Pixel trackt automatisch:
- **PageView**: Bei jedem Seitenwechsel
- **CompleteRegistration**: Wenn aktiviert in der Config

### Konfiguration anpassen

Die Meta Pixel-Konfiguration findest du in `config/meta-ads-config.ts`:

```typescript
export const metaAdsConfig = {
  enabled: process.env.NEXT_PUBLIC_META_ADS_ENABLED === "true",
  pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  // ... weitere Optionen
};
```

### Manuelles Event Tracking

```typescript
// In einer Client-Komponente
if (typeof window !== "undefined" && (window as any).fbq) {
  (window as any).fbq("track", "Purchase", {
    value: 29.99,
    currency: "EUR",
  });
}
```

### Standard Events

Die folgenden Events können automatisch getrackt werden (in `config/meta-ads-config.ts`):

- `pageView`: Automatisch aktiviert
- `viewContent`: Für Produktseiten
- `addToCart`: Für E-Commerce
- `initiateCheckout`: Für Checkout-Prozess
- `purchase`: Für erfolgreiche Käufe
- `lead`: Für Lead-Generierung
- `completeRegistration`: Automatisch aktiviert

### Seiten-spezifische Konfiguration

Du kannst festlegen, auf welchen Seiten Meta Pixel geladen werden soll:

```typescript
// In config/meta-ads-config.ts
includePaths: ["/", "/pricing"], // Nur auf diesen Seiten
excludePaths: ["/app/*", "/api/*"], // Nicht auf diesen Seiten
```

## Cookie Consent Integration

Alle Analytics-Tools respektieren die Cookie-Consent-Einstellungen:

- **Google Analytics**: Verwendet die `analytics` Cookie-Kategorie
- **Meta Pixel**: Verwendet die `marketing` Cookie-Kategorie

Die Cookie-Kategorien müssen mit deiner `cookie-banner-config.ts` übereinstimmen.

## Best Practices

1. **Umgebungsvariablen**: Verwende `.env.local` für lokale Entwicklung und setze die Variablen in deinem Hosting-Provider für Production
2. **Cookie Consent**: Stelle sicher, dass die Cookie-Consent-Kategorien mit deiner Cookie-Banner-Konfiguration übereinstimmen
3. **Performance**: Analytics-Scripts werden mit `strategy="afterInteractive"` geladen, um die Performance nicht zu beeinträchtigen
4. **Privacy**: Alle Analytics-Tools respektieren die Cookie-Consent-Einstellungen und werden nur geladen, wenn der Benutzer zugestimmt hat

## Installation von Supabase

Falls du Supabase verwenden möchtest, installiere das Package:

```bash
npm install @supabase/supabase-js
```

## Troubleshooting

### Analytics werden nicht geladen

1. Prüfe, ob `enabled` auf `true` gesetzt ist
2. Prüfe, ob die Measurement ID/Pixel ID korrekt ist
3. Prüfe die Browser-Console auf Fehler
4. Prüfe, ob Cookie Consent gegeben wurde

### Supabase Fehler

1. Prüfe, ob `NEXT_PUBLIC_SUPABASE_ENABLED=true` gesetzt ist
2. Prüfe, ob alle erforderlichen Umgebungsvariablen gesetzt sind
3. Prüfe, ob die Supabase-URL und Keys korrekt sind
4. Prüfe die Browser-Console/Server-Logs auf Fehler

