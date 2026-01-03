# Authentifizierung

Das Projekt nutzt **Outseta** als SaaS-Authentifizierungsplattform für User Management, Subscriptions und Billing.

## Architektur

### AuthProvider (`components/provider/auth-provider.tsx`)

Der `AuthProvider` verwaltet den Authentifizierungszustand und stellt einen Context bereit:

```typescript
interface AuthContextType {
  user: OutsetaUser | null;
  isLoading: boolean;
  logout: () => void;
  openLogin: (options?: any) => void;
  openSignup: (options?: any) => void;
  openProfile: (options?: any) => void;
}
```

**Verwendung:**
```typescript
import { useAuth } from "@/components/provider/auth-provider";

const { user, isLoading, logout, openLogin } = useAuth();
```

### Token-Verifikation

- JWT-Tokens werden mit dem öffentlichen Schlüssel aus `outsetaConfig.auth.publicKey` verifiziert
- Token wird aus URL-Parameter `access_token` gelesen (nach Outseta-Redirect)
- Token wird in Cookie gespeichert (`tokenStorage: "cookie"`)

### User-Update Events

Der Provider hört auf folgende Outseta-Events:
- `subscription.update`: Bei Subscription-Änderungen
- `profile.update`: Bei Profil-Änderungen
- `account.update`: Bei Account-Änderungen

## Geschützte Routen

### ProtectedRoute (`components/auth/protect-route.tsx`)

Schützt komplette Seiten basierend auf Authentifizierung und Plan:

```typescript
<ProtectedRoute plansWithAccess="basic,pro">
  {children}
</ProtectedRoute>
```

**Props:**
- `children`: Zu schützender Inhalt
- `plansWithAccess`: Komma-getrennte Liste von Plan-Namen (z.B. "basic,pro")
- `fallback`: Optionaler Fallback-Inhalt

**Verhalten:**
1. Zeigt Loading-Spinner während `isLoading === true`
2. Zeigt Login-Screen wenn `user === null`
3. Zeigt Upgrade-Screen wenn User keinen passenden Plan hat
4. Rendert `children` wenn Zugriff gewährt wird

**Beispiel:**
```typescript
// app/app/basic/page.tsx
export default function BasicPage() {
  return (
    <ProtectedRoute plansWithAccess="basic">
      <div>Nur für Basic-Plan Nutzer</div>
    </ProtectedRoute>
  );
}
```

### ProtectContent (`components/auth/protect-content.tsx`)

Bedingte Rendering-Komponenten für Inhalte:

#### SignedIn
Zeigt Inhalt nur für eingeloggte Nutzer:

```typescript
<SignedIn plan="L9nqaeQZ" accountStage="subscribing" isPrimaryContact>
  <div>Nur für Basic-Plan Nutzer</div>
</SignedIn>
```

**Props:**
- `plan`: Komma-getrennte Plan-UIDs
- `accountStage`: Billing-Stage (`trialing`, `subscribing`, `canceling`, etc.)
- `addOn`: Komma-getrennte Add-On-UIDs
- `isPrimaryContact`: Nur für Primary Contact

#### SignedOut
Zeigt Inhalt nur für nicht-eingeloggte Nutzer:

```typescript
<SignedOut>
  <div>Bitte einloggen</div>
</SignedOut>
```

#### Show
Allgemeine Bedingung:

```typescript
<Show condition={someCondition} fallback={<div>Fallback</div>}>
  <div>Inhalt</div>
</Show>
```

## Outseta Widgets

### Embed-Komponenten (`components/auth/embed.tsx`)

Wrapper-Komponenten für Outseta-Widgets:

#### Login
```typescript
<Login popup>
  <Button>Login</Button>
</Login>
```

#### SignUp
```typescript
<SignUp popup>
  <Button>Sign up</Button>
</SignUp>
```

#### Profile
```typescript
<Profile popup data-tab="profile">
  <Button>Profil öffnen</Button>
</Profile>
```

#### LeadCapture
```typescript
<LeadCapture popup uid="form-uid">
  <Button>Formular öffnen</Button>
</LeadCapture>
```

#### EmailList
```typescript
<EmailList popup uid="list-uid">
  <Button>E-Mail-Liste</Button>
</EmailList>
```

#### Support
```typescript
<Support popup>
  <Button>Support</Button>
</Support>
```

#### LogOut
```typescript
<LogOut>
  <Button>Abmelden</Button>
</LogOut>
```

**Props:**
- `popup`: Öffnet Widget als Popup (sonst embedded)
- `uid`: UID für LeadCapture/EmailList
- Weitere Props werden an das Widget weitergegeben

## User-Typen

### OutsetaUser (`types/outseta.ts`)

```typescript
type OutsetaUser = {
  Email: string;
  FirstName: string;
  LastName: string;
  FullName: string;
  ProfileImageS3Url: string | null;
  MailingAddress: OutsetaAddress | null;
  PhoneMobile: string;
  PhoneWork: string;
  Language: string;
  LastLoginDateTime: string;
  Account: OutsetaAccount;
  Uid: string;
  Created: string;
  Updated: string;
};
```

### OutsetaAccount

```typescript
type OutsetaAccount = {
  Name: string;
  AccountStage: number;  // 2=trialing, 3=subscribing, etc.
  AccountStageLabel: string;
  CurrentSubscription: OutsetaSubscription | null;
  PrimaryContact: { ... };
  Uid: string;
  Created: string;
  Updated: string;
};
```

### OutsetaSubscription

```typescript
type OutsetaSubscription = {
  Plan: {
    Name: string;
    Uid: string;  // Wichtig für Plan-Vergleich
  };
  StartDate: string;
  EndDate: string | null;
  RenewalDate: string;
  Rate: number;
  SubscriptionAddOns: OutsetaSubscriptionAddOn[];
  Uid: string;
};
```

## Plan-basierte Zugriffskontrolle

### Plan-Konfiguration

Pläne werden in `config/auth-config.ts` definiert:

```typescript
plans: {
  free: { uid: "7maOrK9E", label: "Free" },
  basic: { uid: "L9nqaeQZ", label: "Basic" },
  pro: { uid: "LmJZpYmP", label: "Pro" },
}
```

### Plan-Vergleich

```typescript
const userPlanUid = user.Account.CurrentSubscription?.Plan?.Uid;
const requiredPlanUid = projectConfig.auth.plans.basic.uid;

if (userPlanUid === requiredPlanUid) {
  // Zugriff gewährt
}
```

## Best Practices

1. **ProtectedRoute für Seiten**: Für komplette Seiten-Schutz
2. **SignedIn/SignedOut für Inhalte**: Für bedingte UI-Elemente
3. **Plan-UIDs aus Config**: Immer `projectConfig.auth.plans` verwenden
4. **Loading States**: Immer `isLoading` prüfen vor User-Zugriff
5. **Token-Verifikation**: Automatisch durch AuthProvider gehandhabt

## Chat-Sichtbarkeit

Der Chat wird automatisch basierend auf URL-Patterns ein-/ausgeblendet:

```typescript
// config/index.ts
outsetaExtraOptions: {
  showChatOn: "**",  // Zeige Chat auf allen Seiten
}
```

Pattern-Syntax:
- `**`: Alle Seiten
- `/app/**`: Nur App-Seiten
- `/app/basic`: Nur Basic-Seite

