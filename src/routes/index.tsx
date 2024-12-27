import Calculator from "~/components/Calculator";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Flex } from "~/components/ui/flex";

export default function Home() {
  return (
    <Flex flexDirection="col" class="gap-8">
      <Flex class="gap-8" justifyContent="start">
        <h1 class="font-bold text-2xl font-RedHatDisplay">
          CraftersMC Ultimate Minion Calculator
        </h1>
        <ThemeToggle />
      </Flex>

      <Calculator />
    </Flex>
  );
}
