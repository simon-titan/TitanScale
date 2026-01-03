# Theme & Styling

Das Projekt nutzt **Chakra UI 3.2.2** mit einem vollständig konfigurierbaren Theme-System.

## Theme-Konfiguration

### Theme-System (`theme/theme.tsx`)

Das Theme wird über `createSystem` erstellt und kombiniert:
- `defaultConfig`: Chakra UI Standard-Konfiguration
- `customConfig`: Projekt-spezifische Anpassungen

**Verwendung:**
```typescript
import { system } from "@/theme/theme";

<ChakraProvider value={system}>
  {children}
</ChakraProvider>
```

## Farbpaletten

### Neutral-Farbpaletten (`theme/colors.ts`)

Verfügbare Neutral-Paletten:
- `gray`
- `slate`
- `zinc`
- `stone`
- `neutral`

**Konfiguration:**
```typescript
// config/theme-config.ts
neutralColorPalette: "gray"
```

### Primary/Secondary-Farbpaletten

Verfügbare Farben:
- `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`
- `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`
- `fuchsia`, `pink`, `rose`

**Konfiguration:**
```typescript
// config/theme-config.ts
primaryColorPalette: "red"
secondaryColorPalette: "gray"
```

## Semantic Tokens

### Background-Farben

```typescript
bg.DEFAULT        // Haupt-Hintergrund
bg.subtle         // Subtiler Hintergrund
bg.muted          // Gedämpfter Hintergrund
bg.emphasized     // Hervorgehobener Hintergrund
bg.inverted       // Invertierter Hintergrund
bg.panel          // Panel-Hintergrund
bg.error          // Fehler-Hintergrund
bg.warning        // Warnung-Hintergrund
bg.success        // Erfolg-Hintergrund
bg.info           // Info-Hintergrund
```

**Verwendung:**
```typescript
<Box bg="bg.panel">Panel</Box>
```

### Foreground-Farben

```typescript
fg.DEFAULT        // Haupt-Textfarbe
fg.muted          // Gedämpfte Textfarbe
fg.subtle         // Subtile Textfarbe
fg.inverted       // Invertierte Textfarbe
fg.error          // Fehler-Textfarbe
fg.warning        // Warnung-Textfarbe
fg.success        // Erfolg-Textfarbe
fg.info           // Info-Textfarbe
```

**Verwendung:**
```typescript
<Text color="fg.muted">Gedämpfter Text</Text>
```

### Border-Farben

```typescript
border.DEFAULT
border.muted
border.subtle
border.emphasized
border.inverted
border.error
border.warning
border.success
border.info
```

**Verwendung:**
```typescript
<Box borderColor="border.DEFAULT">Box</Box>
```

### Primary-Farben

```typescript
primary.contrast      // Kontrast-Farbe
primary.fg            // Text-Farbe
primary.subtle        // Subtile Farbe
primary.muted         // Gedämpfte Farbe
primary.emphasized    // Hervorgehobene Farbe
primary.solid         // Solide Farbe
primary.focusRing     // Focus-Ring-Farbe
```

**Verwendung:**
```typescript
<Button colorPalette="primary">Button</Button>
```

## Schriftarten

### Font-Konfiguration

```typescript
// config/theme-config.ts
headingFont: "Inter"
bodyFont: "Inter"
```

**Verwendung:**
```typescript
<Text fontFamily="heading">Überschrift</Text>
<Text fontFamily="body">Body-Text</Text>
```

**Font-Sizes:**
- `2xs`, `xs`, `sm`, `md`, `lg`, `xl`
- `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`

## Border-Radius

### Radius-Konfiguration

```typescript
// config/theme-config.ts
radius: "md"  // none, xs, sm, md, lg, xl, 2xl, 3xl, full
```

**Semantic Tokens:**
- `radii.l1`: Radius -1 Stufe
- `radii.l2`: Radius (Standard)
- `radii.l3`: Radius +1 Stufe

**Verwendung:**
```typescript
<Box borderRadius="l3">Box</Box>
```

## Schatten

### Shadow-Tokens

```typescript
shadows.xs      // Extra Small
shadows.sm      // Small
shadows.md      // Medium
shadows.lg      // Large
shadows.xl      // Extra Large
shadows.2xl     // 2X Large
shadows.inner   // Inner Shadow
shadows.inset   // Inset Shadow
```

**Verwendung:**
```typescript
<Box boxShadow="xs">Box</Box>
```

## Dark Mode

### Color Mode Provider

```typescript
import { ColorModeProvider } from "@/components/provider/color-mode-provider";

<ColorModeProvider forcedTheme="light">
  {children}
</ColorModeProvider>
```

**Konfiguration:**
```typescript
// config/theme-config.ts
colorMode: "light" | "dark" | "auto"
```

**Hooks:**
```typescript
import { useColorMode, useColorModeValue } from "@/components/provider/color-mode-provider";

const { colorMode, setColorMode, toggleColorMode } = useColorMode();
const bgColor = useColorModeValue("white", "gray.900");
```

**Semantic Tokens:**
Alle Semantic Tokens unterstützen automatisch Dark Mode:
- `_light`: Wert für Light Mode
- `_dark`: Wert für Dark Mode

## Responsive Design

### Breakpoints

Chakra UI Standard-Breakpoints:
- `base`: 0px
- `sm`: 480px
- `md`: 768px
- `lg`: 992px
- `xl`: 1280px
- `2xl`: 1536px

**Verwendung:**
```typescript
<Box
  width={{ base: "full", md: "50%", lg: "33%" }}
  display={{ base: "none", md: "block" }}
>
  Responsive Box
</Box>
```

**Responsive Props:**
- `hideBelow`: Versteckt unter Breakpoint
- `hideFrom`: Versteckt ab Breakpoint

```typescript
<Box hideBelow="md">Nur Desktop</Box>
<Box hideFrom="md">Nur Mobile</Box>
```

## Best Practices

1. **Semantic Tokens**: Immer Semantic Tokens verwenden statt direkter Farbwerte
2. **Color Palette**: Nutze `colorPalette` Prop für Primary/Secondary Farben
3. **Dark Mode**: Alle Komponenten unterstützen automatisch Dark Mode
4. **Responsive**: Nutze responsive Props für Mobile-First Design
5. **Konsistenz**: Nutze definierte Tokens für konsistentes Design

