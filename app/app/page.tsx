import { Heading, Text } from "@chakra-ui/react";
import { generateMetadata } from "@/utils/metadata";
import { Section } from "@/components/layout/section";
import { SignedIn } from "../../components/auth/protect-content";
import ProtectedRoute from "@/components/auth/protect-route";

export const metadata = generateMetadata({
  title: "Dashboard",
  description: "Zugriff auf dein persönliches Dashboard und verwalte dein Konto",
  noIndex: true,
});

export default function App() {
  return (
    <ProtectedRoute>
      <Section header>
        <Heading>Dashboard</Heading>
        <SignedIn isPrimaryContact={false}>
          <Text>Willkommen in deinem TitanScale Dashboard</Text>
        </SignedIn>
      </Section>
    </ProtectedRoute>
  );
}
