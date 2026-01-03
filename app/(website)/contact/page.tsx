import { Card, Heading, Text, VStack } from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { Support } from "@/components/auth/embed";
import "@/styles/contact-page-styles.css";

export default function ContactPage() {
  return (
    <>
      <Section
        header
        bg="bg.muted"
        borderBottomColor="border"
        borderBottomWidth="1px"
        pb={28}
      >
        <VStack gap={{ base: "6", md: "8" }} textAlign="center">
          <VStack gap={{ base: "5", md: "6" }}>
            <VStack gap={{ base: "3", md: "4" }}>
              <Heading as="h1" textStyle={{ base: "4xl", md: "5xl" }}>
                Kontakt
              </Heading>
            </VStack>
            <Text
              color="fg.muted"
              textStyle={{ base: "lg", md: "xl" }}
              maxW="lg"
            >
              Schicke uns eine Nachricht, wenn du Fragen, Feedback oder eine Idee hast. 
              Wir antworten normalerweise innerhalb von 24 Stunden.
            </Text>
          </VStack>
        </VStack>
      </Section>
      <Section>
        <Card.Root mt={{ base: "-40", md: "-44" }} id="contact-form">
          <Support />
        </Card.Root>
      </Section>
    </>
  );
}
