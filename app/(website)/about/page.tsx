import { Heading, Text, VStack } from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { Prose } from "@/components/ui/prose";
import Markdown from "react-markdown";

export default function AboutPage() {
  return (
    <>
      <Section
        header
        bg="bg.muted"
        borderBottomColor="border"
        borderBottomWidth="1px"
      >
        <VStack gap={{ base: "6", md: "8" }} textAlign="center">
          <VStack gap={{ base: "5", md: "6" }}>
            <VStack gap={{ base: "3", md: "4" }}>
              <Text
                textStyle={{ base: "sm", md: "md" }}
                fontWeight="medium"
                color="colorPalette.fg"
              >
                Über uns
              </Text>
              <Heading as="h1" textStyle={{ base: "4xl", md: "5xl" }}>
                TitanScale: Die Business-Software für skalierende Experten
              </Heading>
            </VStack>
            <Text
              color="fg.muted"
              textStyle={{ base: "lg", md: "xl" }}
              maxW="3xl"
            >
              Wir helfen Experten dabei, ihr Geschäft zu skalieren und ihre Prozesse zu optimieren.
            </Text>
          </VStack>
        </VStack>
      </Section>
      <Section>
        <Prose mx="auto" size="lg">
          <Markdown>
            {`
## Unsere Mission

TitanScale wurde entwickelt, um Experten dabei zu helfen, ihr Geschäft zu skalieren und ihre Prozesse zu optimieren. Wir glauben daran, dass jeder Experte die Tools und die Infrastruktur verdient, die er braucht, um erfolgreich zu sein.

## Was wir tun

Wir bieten eine vollständige Business-Software-Vorlage, die alle wichtigen Funktionen für den Start und Betrieb eines Online-Businesses enthält. Von der Authentifizierung über Zahlungen bis hin zu E-Mail-Marketing und Support – alles ist bereits integriert und einsatzbereit.

## Unsere Werte

- **Einfachheit**: Komplexe Technologie einfach gemacht
- **Skalierbarkeit**: Von der ersten Idee bis zum großen Business
- **Qualität**: Hochwertige Lösungen für hochwertige Ergebnisse
- **Support**: Wir helfen dir bei jedem Schritt

## Unser Team

Unser Team besteht aus erfahrenen Entwicklern und Business-Experten, die verstehen, was es braucht, um erfolgreich zu sein. Wir arbeiten kontinuierlich daran, TitanScale zu verbessern und neue Features hinzuzufügen.
          `}
          </Markdown>
        </Prose>
      </Section>
    </>
  );
}
