import { projectConfig } from "@/config";

export const plans: PlanData[] = [
  {
    value: "free",
    title: "Free",
    description: "Einblick in wie die Software funktioniert",
    features: [
      { title: "Zugang zur Plattform", icon: "user" },
      { title: "Grundlegende Funktionen", icon: "help" },
      { title: "Einführung in TitanScale", icon: "help" },
      { title: "Community-Zugang", icon: "team" },
    ],
    priceCurrency: "EUR",
    priceSymbol: "€",
    monthlyPrice: { unit: "Monat", price: 0 },
    yearlyPrice: { unit: "Jahr", price: 0 },
    uid: projectConfig.auth.plans.free.uid,
  },
  {
    value: "basic",
    title: "Basis",
    description: "Einblicke wie unsere Case-Studys arbeiten",
    features: [
      { title: "Alle Free-Features", icon: "user" },
      { title: "Zugang zu Case-Studys", icon: "help" },
      { title: "Detaillierte Einblicke", icon: "help" },
      { title: "Erweiterte Funktionen", icon: "team" },
    ],
    priceCurrency: "EUR",
    priceSymbol: "€",
    monthlyPrice: { unit: "Monat", price: 44.9 },
    yearlyPrice: { unit: "Jahr", price: 449 },
    uid: projectConfig.auth.plans.basic.uid,
  },
  {
    value: "pro",
    title: "Pro",
    description: "Vollwertiger Blue Print zu Skalierung",
    features: [
      { title: "Alle Basis-Features", icon: "user" },
      { title: "Vollständiger Blue Print", icon: "help" },
      { title: "Skalierungs-Strategien", icon: "help" },
      { title: "Premium-Support", icon: "team" },
    ],
    priceCurrency: "EUR",
    priceSymbol: "€",
    recommended: true,
    monthlyPrice: { unit: "Monat", price: 99 },
    yearlyPrice: { unit: "Jahr", price: 990 },
    uid: projectConfig.auth.plans.pro.uid,
  },
];

export interface PlanData {
  value: string;
  title: string;
  description: string;
  features: Array<{ title: string; icon: string }>;
  priceCurrency: string;
  recommended?: boolean;
  priceSymbol: string;
  monthlyPrice: { unit: string; price: number };
  yearlyPrice: { unit: string; price: number };
  uid: string;
}
