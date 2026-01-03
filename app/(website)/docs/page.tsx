import { promises as fs } from "fs";
import { join } from "path";
import { Section } from "@/components/layout/section";
import { Prose } from "@/components/ui/prose";
import { generateMetadata } from "@/utils/metadata";
import Markdown from "react-markdown";
import { Heading, VStack, Text, Stack, Card, SimpleGrid } from "@chakra-ui/react";

export const metadata = generateMetadata({
  title: "Dokumentation",
  description: "Lerne, wie du TitanScale konfigurierst und nutzt",
});

async function getDocsContent() {
  const docsPath = join(process.cwd(), "docs", "README.md");
  const content = await fs.readFile(docsPath, "utf8");
  return content;
}

export default async function DocsPage() {
  const docsContent = await getDocsContent();

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
              <Heading as="h1" textStyle={{ base: "4xl", md: "5xl" }}>
                Dokumentation
              </Heading>
              <Text color="fg.muted" textStyle="lg" maxW={{ md: "2xl" }}>
                TitanScale ist eine vollständige Business-Software-Vorlage für skalierende Experten. 
                Erstelle schnell Mitgliedschaftsseiten, Kurse, SaaS-Anwendungen oder jede andere Art von Online-Business.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Section>
      <Section size="md">
        <VStack gap="8" align="stretch">
          <Stack gap="6">
            <Heading as="h2" textStyle="2xl">
              Was kannst du mit TitanScale machen?
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
              <Card.Root>
                <Card.Body>
                  <Card.Title>Mitgliedschaftsseiten</Card.Title>
                  <Card.Description>
                    Erstelle geschützte Bereiche mit verschiedenen Mitgliedschaftsstufen. 
                    Nutzer können sich registrieren, einen Plan wählen und auf exklusive Inhalte zugreifen.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
              <Card.Root>
                <Card.Body>
                  <Card.Title>Online-Kurse</Card.Title>
                  <Card.Description>
                    Baue eine Kursplattform mit geschützten Lektionen, Fortschritts-Tracking 
                    und automatischer Rechnungsstellung für Kursverkäufe.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
              <Card.Root>
                <Card.Body>
                  <Card.Title>SaaS-Anwendungen</Card.Title>
                  <Card.Description>
                    Entwickle Software-as-a-Service Produkte mit Abonnement-Billing, 
                    Nutzer-Management und skalierbarer Architektur.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
              <Card.Root>
                <Card.Body>
                  <Card.Title>Coaching-Plattformen</Card.Title>
                  <Card.Description>
                    Erstelle eine Plattform für Coaches mit Terminbuchung, 
                    Kunden-Management und automatisierten E-Mail-Kampagnen.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
              <Card.Root>
                <Card.Body>
                  <Card.Title>Digital Products</Card.Title>
                  <Card.Description>
                    Verkaufe digitale Produkte wie E-Books, Templates oder Tools 
                    mit automatischer Bereitstellung nach dem Kauf.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
              <Card.Root>
                <Card.Body>
                  <Card.Title>Community-Plattformen</Card.Title>
                  <Card.Description>
                    Baue Communities mit geschützten Foren, Diskussionen und 
                    exklusiven Inhalten für Mitglieder.
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            </SimpleGrid>
          </Stack>

          <Stack gap="6">
            <Heading as="h2" textStyle="2xl">
              Was ist enthalten?
            </Heading>
            <Stack gap="3">
              <Text>✅ <strong>Authentifizierung & User Management</strong> - Vollständiges Auth-System mit Outseta</Text>
              <Text>✅ <strong>Zahlungen & Abonnements</strong> - Einmalzahlungen, Abonnements und Nutzungsbasierte Abrechnung</Text>
              <Text>✅ <strong>Geschützte Inhalte</strong> - Plan-basierte Zugriffskontrolle für Seiten und Komponenten</Text>
              <Text>✅ <strong>E-Mail-Marketing</strong> - Automatische E-Mails, Broadcasts und Drip-Kampagnen</Text>
              <Text>✅ <strong>Support-Desk</strong> - Integriertes Ticket-System für Kundenbetreuung</Text>
              <Text>✅ <strong>Theme-System</strong> - Vollständig anpassbares Design mit Chakra UI</Text>
              <Text>✅ <strong>SEO-Optimierung</strong> - Automatische Meta-Tags und Sitemap-Generierung</Text>
              <Text>✅ <strong>Analytics-Integration</strong> - Google Analytics und Meta Pixel Support</Text>
              <Text>✅ <strong>Supabase-Integration</strong> - Optionale Datenbank-Integration für erweiterte Features</Text>
              <Text>✅ <strong>Cookie-Consent</strong> - DSGVO-konformes Cookie-Banner</Text>
            </Stack>
          </Stack>

          <Prose mx="auto" size="lg">
            <Markdown>{docsContent}</Markdown>
          </Prose>
        </VStack>
      </Section>
    </>
  );
}
