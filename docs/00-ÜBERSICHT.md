# Projekt-Übersicht

## Technologie-Stack

- **Framework**: Next.js 15.0.4 (App Router)
- **UI Library**: Chakra UI 3.2.2
- **Styling**: Emotion (CSS-in-JS)
- **Authentication**: Outseta (SaaS Authentication Platform)
- **Language**: TypeScript 5.6.2
- **React**: 19.0.0

## Projektstruktur

```
titanscale/
├── app/                    # Next.js App Router Seiten
│   ├── (website)/         # Öffentliche Website-Seiten
│   ├── (utility)/         # Utility-Seiten (Login, Sign-up, etc.)
│   └── app/               # Geschützte App-Seiten
├── components/            # React Komponenten
│   ├── auth/             # Authentifizierungs-Komponenten
│   ├── layout/           # Layout-Komponenten (Navbar, Footer)
│   ├── provider/         # Context Provider
│   └── ui/               # Wiederverwendbare UI-Komponenten
├── config/               # Projekt-Konfigurationen
├── theme/                # Theme-Konfiguration
├── types/                # TypeScript Typdefinitionen
├── utils/                # Utility-Funktionen und Hooks
└── styles/               # Globale Styles
```

## Wichtige Konzepte

### 1. Route Groups
- `(website)`: Öffentliche Seiten mit Navbar und Footer
- `(utility)`: Utility-Seiten ohne Standard-Layout
- `app`: Geschützte Seiten (erfordern Authentifizierung)

### 2. Provider-Hierarchie
```
ChakraProvider → ColorModeProvider → AuthProvider
```

### 3. Authentifizierung
- Integration mit Outseta für User Management
- JWT-basierte Token-Verifikation
- Plan-basierte Zugriffskontrolle

### 4. Konfiguration
Zentrale Konfiguration über `config/index.ts`:
- Allgemeine Einstellungen
- Theme-Konfiguration
- SEO-Einstellungen
- Outseta-Konfiguration
- Cookie-Banner-Konfiguration

## Nächste Schritte

- [01-KONFIGURATION.md](./01-KONFIGURATION.md) - Konfigurationsdateien
- [02-AUTHENTIFIZIERUNG.md](./02-AUTHENTIFIZIERUNG.md) - Auth-System
- [03-KOMPONENTEN.md](./03-KOMPONENTEN.md) - Komponenten-Übersicht
- [04-UTILITIES.md](./04-UTILITIES.md) - Utility-Funktionen
- [05-THEME-STYLING.md](./05-THEME-STYLING.md) - Theme & Styling
- [06-ROUTING.md](./06-ROUTING.md) - Routing-Struktur

