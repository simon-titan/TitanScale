# Komponenten-Übersicht

## Layout-Komponenten

### Navbar (`components/layout/navbar.tsx`)

Navigation-Bar mit Logo, Links und User-Menu.

**Props:**
- `type`: `"website"` | `"app"` - Bestimmt das Layout

**Verwendung:**
```typescript
<Navbar type="website" />
```

**Features:**
- Responsive Design (Mobile/Desktop)
- Collapsible Menu für Mobile
- Automatische Login/Signup Buttons für nicht-eingeloggte Nutzer
- UserMenu für eingeloggte Nutzer

### Footer (`components/layout/footer.tsx`)

Footer mit Logo, Social-Links und Copyright.

**Verwendung:**
```typescript
<Footer />
```

**Features:**
- Social-Links aus `projectConfig.links`
- Automatisches Copyright-Jahr
- Responsive Layout

### Section (`components/layout/section.tsx`)

Wrapper-Komponente für Seitenabschnitte.

### Wrapper (`components/layout/wrapper.tsx`)

Container-Wrapper für Seiten-Inhalte.

## Authentifizierungs-Komponenten

Siehe [02-AUTHENTIFIZIERUNG.md](./02-AUTHENTIFIZIERUNG.md) für Details.

### ProtectRoute
Schützt komplette Seiten.

### ProtectContent
- `SignedIn`: Zeigt Inhalt nur für eingeloggte Nutzer
- `SignedOut`: Zeigt Inhalt nur für nicht-eingeloggte Nutzer
- `Show`: Allgemeine Bedingung

### Embed-Komponenten
- `Login`, `SignUp`, `Profile`, `LeadCapture`, `EmailList`, `Support`, `LogOut`

## UI-Komponenten

### Button (`components/ui/button.tsx`)

Standard-Button-Komponente von Chakra UI.

**Variants:**
- `solid` (Standard)
- `outline`
- `ghost`
- `plain`

**Verwendung:**
```typescript
<Button variant="outline" size="sm" colorPalette="gray">
  Klick mich
</Button>
```

### Avatar (`components/ui/avatar.tsx`)

Avatar-Komponente für User-Profile.

**Verwendung:**
```typescript
<Avatar
  src={user?.ProfileImageS3Url}
  name={user?.FullName}
  size="sm"
/>
```

### UserMenu (`components/ui/user-menu.tsx`)

Dropdown-Menu für eingeloggte Nutzer.

**Features:**
- Zeigt User-Name und E-Mail
- Plan-Badge (Pro/Basic)
- Links zu Profil, Support, Logout

**Verwendung:**
```typescript
<UserMenu />
```

### PricingCard (`components/ui/pricing-card.tsx`)

Karte für Pricing-Pläne.

**Props:**
- `data`: PlanData-Objekt
- `planPaymentTerms`: `"month"` | `"annual"`

**Verwendung:**
```typescript
<PricingCard
  planPaymentTerms="annual"
  data={planData}
/>
```

**PlanData-Struktur:**
```typescript
interface PlanData {
  value: string;
  title: string;
  description: string;
  features: Array<{ title: string; icon: string }>;
  priceCurrency: string;
  priceSymbol: string;
  monthlyPrice: { unit: string; price: number };
  yearlyPrice: { unit: string; price: number };
  uid: string;  // Outseta Plan UID
  recommended?: boolean;
}
```

### EmptyState (`components/ui/empty-state.tsx`)

Leerzustand-Komponente für leere Seiten.

**Verwendung:**
```typescript
<EmptyState
  icon={<Lock />}
  title="Upgrade to unlock"
  description="This page requires a Pro plan"
>
  <Button>Upgrade</Button>
</EmptyState>
```

### Dialog (`components/ui/dialog.tsx`)

Modal-Dialog-Komponente.

### Drawer (`components/ui/drawer.tsx`)

Side-Drawer-Komponente (Mobile).

### Menu (`components/ui/menu.tsx`)

Dropdown-Menu-Komponente.

**Verwendung:**
```typescript
<MenuRoot>
  <MenuTrigger>
    <Button>Menu</Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItemGroup title="Gruppe">
      <MenuItem value="item1">Item 1</MenuItem>
    </MenuItemGroup>
    <MenuSeparator />
    <MenuItem value="item2">Item 2</MenuItem>
  </MenuContent>
</MenuRoot>
```

### Link (`components/ui/link.tsx`)

Next.js Link-Wrapper.

**Verwendung:**
```typescript
<Link href="/about" colorPalette="gray">
  Über uns
</Link>
```

### Field (`components/ui/field.tsx`)

Formular-Feld-Komponente.

### Checkbox (`components/ui/checkbox.tsx`)

Checkbox-Komponente.

### Radio (`components/ui/radio.tsx`)

Radio-Button-Komponente.

### Switch (`components/ui/switch.tsx`)

Toggle-Switch-Komponente.

### Slider (`components/ui/slider.tsx`)

Range-Slider-Komponente.

### Tag (`components/ui/tag.tsx`)

Badge/Tag-Komponente.

**Verwendung:**
```typescript
<Tag colorPalette="purple" size="sm" startElement={<Star />}>
  Pro
</Tag>
```

### Tooltip (`components/ui/tooltip.tsx`)

Tooltip-Komponente.

### Popover (`components/ui/popover.tsx`)

Popover-Komponente.

### ToggleTip (`components/ui/toggle-tip.tsx`)

Toggle-Tooltip-Komponente.

### Heading (`components/ui/heading.tsx`)

Überschriften-Komponente.

### Image (`components/ui/image.tsx`)

Next.js Image-Wrapper.

### Prose (`components/ui/prose.tsx`)

Typography-Komponente für Markdown-Inhalte.

### Confetti (`components/ui/confetti.tsx`)

Confetti-Animation-Komponente.

### ColorModeToggle (`components/ui/color-mode-toggle.tsx`)

Toggle für Dark/Light Mode.

### FeedbackButton (`components/ui/feedback-button.tsx`)

Feedback-Button-Komponente.

## Provider-Komponenten

### Provider (`components/provider/provider.tsx`)

Haupt-Provider-Wrapper:
- `ChakraProvider`: Chakra UI Theme
- `ColorModeProvider`: Dark/Light Mode
- `AuthProvider`: Authentifizierung

**Verwendung:**
```typescript
<Provider>
  {children}
</Provider>
```

### AuthProvider (`components/provider/auth-provider.tsx`)

Siehe [02-AUTHENTIFIZIERUNG.md](./02-AUTHENTIFIZIERUNG.md).

### ColorModeProvider (`components/provider/color-mode-provider.tsx`)

Provider für Dark/Light Mode mit `next-themes`.

**Hooks:**
```typescript
import { useColorMode, useColorModeValue } from "@/components/provider/color-mode-provider";

const { colorMode, setColorMode, toggleColorMode } = useColorMode();
const bgColor = useColorModeValue("white", "gray.900");
```

## Best Practices

1. **Komponenten-Import**: Immer aus `@/components/ui/...` importieren
2. **Chakra UI**: Nutze Chakra UI Komponenten direkt wenn möglich
3. **Props-Typisierung**: Alle Props sind typisiert
4. **Wiederverwendbarkeit**: Komponenten sind generisch und wiederverwendbar
5. **Accessibility**: Komponenten folgen Accessibility-Best-Practices

