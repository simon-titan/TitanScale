import {
  Badge,
  For,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Tabs,
  Center,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { PricingCard } from "../../../components/ui/pricing-card";
import { plans } from "./data";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Preise",
  description: "Entdecke unsere Preismodelle, die auf deine Bedürfnisse zugeschnitten sind.",
});

export default function PricingPage() {
  return (
    <>
      <Section header>
        <VStack gap="12">
          <VStack gap={{ base: "6", md: "8" }} textAlign="center">
            <VStack gap={{ base: "5", md: "6" }}>
              <VStack gap={{ base: "3", md: "4" }}>
                <Heading as="h1" textStyle={{ base: "4xl", md: "5xl" }}>
                  Preise
                </Heading>
              </VStack>
              <VStack gap="1">
                <Text
                  color="fg.muted"
                  textStyle={{ base: "lg", md: "xl" }}
                  maxW="lg"
                >
                  Starte kostenlos und steigere dich Schritt für Schritt.
                </Text>
                <Text
                  color="fg.muted"
                  textStyle={{ base: "lg", md: "xl" }}
                  maxW="lg"
                >
                  Bereite dich darauf vor, TitanScale selbst zu nutzen.
                </Text>
              </VStack>
            </VStack>
          </VStack>
          <VStack gap="6">
            <VStack gap="8" alignSelf="stretch">
              <Tabs.Root variant="enclosed" defaultValue={"month"}>
                <Center>
                  <Tabs.List>
                    <Tabs.Trigger value="month">Monatlich</Tabs.Trigger>
                    <Tabs.Trigger value="annual">Jährlich</Tabs.Trigger>
                  </Tabs.List>
                </Center>
                <Tabs.Content value="annual">
                  <SimpleGrid w="full" columns={{ base: 1, md: 3 }} gap="6">
                    <For each={plans}>
                      {(plan) => (
                        <PricingCard
                          key={plan.value}
                          planPaymentTerms="annual"
                          data={plan}
                        />
                      )}
                    </For>
                  </SimpleGrid>
                </Tabs.Content>
                <Tabs.Content value="month">
                  <SimpleGrid w="full" columns={{ base: 1, md: 3 }} gap="6">
                    <For each={plans}>
                      {(plan) => (
                        <PricingCard
                          key={plan.value}
                          planPaymentTerms="month"
                          data={plan}
                        />
                      )}
                    </For>
                  </SimpleGrid>
                </Tabs.Content>
              </Tabs.Root>
            </VStack>
          </VStack>
        </VStack>
      </Section>
    </>
  );
}
