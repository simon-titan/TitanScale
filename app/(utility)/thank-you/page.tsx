import { Box, Button, VStack, AbsoluteCenter } from "@chakra-ui/react";
import { EnvelopeOpen, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/components/ui/link";
import Confetti from "@/components/ui/confetti";
import { generateMetadata } from "@/utils/metadata";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata = generateMetadata({
  title: "Vielen Dank",
  description:
    "Vielen Dank für deine Registrierung. Bitte überprüfe deine E-Mails, um die Registrierung abzuschließen",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <Confetti type="fireworks" />
      <Box p="relative" h="100vh" w="100vw">
        <AbsoluteCenter>
          <VStack>
            <EmptyState
              icon={<EnvelopeOpen />}
              title="Fast geschafft! Überprüfe dein Postfach."
              description="Wir haben dir eine E-Mail gesendet, um deine Registrierung abzuschließen und dein
                Passwort festzulegen. Falls du sie nicht gleich siehst, überprüfe bitte deinen Spam-Ordner."
            >
              <Box pt="4">
                <Link href="https://mail.google.com">
                  <Button size="sm">
                    <ArrowSquareOut weight="duotone" />
                    Gmail öffnen
                  </Button>
                </Link>
              </Box>
            </EmptyState>
          </VStack>
        </AbsoluteCenter>
      </Box>
    </>
  );
}
