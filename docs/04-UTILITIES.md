# Utilities & Hooks

## Metadata-Generierung (`utils/metadata.ts`)

### generateMetadata

Generiert SEO-Metadata für Next.js Seiten.

**Verwendung:**
```typescript
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Über uns",
  description: "Lerne mehr über unser Unternehmen",
  path: "/about",
  noIndex: false,
});
```

**Props:**
- `title`: Seitentitel (wird mit Projektname kombiniert)
- `description`: Meta-Description
- `path`: URL-Pfad (für canonical URL)
- `noIndex`: `true` für `noindex, nofollow`

**Generierte Metadata:**
- `title`: Kombiniert mit Projektname
- `description`: Fallback auf `projectConfig.seo.defaultDescription`
- `robots`: Basierend auf `noIndex`
- `canonical`: URL
- `openGraph`: OG Tags
- `twitter`: Twitter Card Tags

## URL-Matching (`utils/url-matcher.ts`)

### isUrlMatchingPattern

Prüft ob eine URL einem Pattern entspricht (Glob-Syntax).

**Verwendung:**
```typescript
import { isUrlMatchingPattern } from "@/utils/url-matcher";

const matches = isUrlMatchingPattern("/app/basic", "/app/**");
// true
```

**Pattern-Syntax:**
- `**`: Matcht alles (inkl. Slashes)
- `*`: Matcht alles außer Slashes
- `/app/**`: Matcht alle `/app/...` URLs
- `/app/basic`: Exakter Match

**Beispiele:**
```typescript
isUrlMatchingPattern("/app/basic", "/app/**")        // true
isUrlMatchingPattern("/app/basic", "/app/*")          // false (kein Match für Slash)
isUrlMatchingPattern("/app/basic", "/app/basic")      // true
isUrlMatchingPattern("/app/basic", "**")              // true
```

## Chat-Sichtbarkeit (`utils/use-chat-visibility.ts`)

### useChatVisibility

Hook zum automatischen Ein-/Ausblenden des Outseta-Chats basierend auf URL-Patterns.

**Verwendung:**
```typescript
import { useChatVisibility } from "@/utils/use-chat-visibility";

export default function Layout() {
  useChatVisibility();  // Automatisch basierend auf projectConfig.outsetaExtraOptions.showChatOn
  return <>{children}</>;
}
```

**Konfiguration:**
```typescript
// config/index.ts
outsetaExtraOptions: {
  showChatOn: "**",  // Zeige Chat auf allen Seiten
  // oder
  showChatOn: "/app/**",  // Nur auf App-Seiten
}
```

**Funktionsweise:**
- Prüft aktuellen `pathname`
- Vergleicht mit `projectConfig.outsetaExtraOptions.showChatOn`
- Zeigt/versteckt Chat automatisch

## Best Practices

1. **Metadata**: Immer `generateMetadata` für Seiten verwenden
2. **URL-Patterns**: Glob-Syntax für flexible Matching-Logik
3. **Chat-Visibility**: Automatisch durch Hook gehandhabt
4. **TypeScript**: Alle Utilities sind typisiert

