import { Heading, Text } from "@chakra-ui/react";
import { generateMetadata } from "@/utils/metadata";
import { Section } from "@/components/layout/section";
import ProtectedRoute from "@/components/auth/protect-route";

export const metadata = generateMetadata({
  title: "Free Plan",
  description: "Einblick in wie die Software funktioniert",
  noIndex: true,
});

export default function Free() {
  return (
    <ProtectedRoute plansWithAccess="free">
      <Section header>
        <Heading>Free Plan</Heading>
        <Text mt="4">
          Willkommen im Free Plan! Hier erhältst du einen ersten Einblick in 
          wie TitanScale funktioniert. Entdecke die Grundfunktionen und 
          bereite dich darauf vor, die nächste Stufe zu erreichen.
        </Text>
      </Section>
    </ProtectedRoute>
  );
}

