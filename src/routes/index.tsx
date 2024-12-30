import { A } from "@solidjs/router";
import Calculator from "~/components/Calculator";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Flex } from "~/components/ui/flex";

export default function Home() {
  return (
    <Flex flexDirection="col" class="gap-4 h-full justify-start">
      <Flex class="gap-8" justifyContent="start">
        <Flex justifyContent="start" flexDirection="col" alignItems="start">
          <h1 class="font-bold text-2xl font-RedHatDisplay">
            CraftersMC Ultimate Minion Calculator
          </h1>
          <pre>
            <code class="font-black">By TBroz15 =P</code>
            <code>{"\n"}</code>
            <A href="https://buymeacoffee.com/tbroz15" target="_blank">
              <code class="font-bold underline dark:text-blue-300 not-dark:text-blue-700">
                Support me with a donation!
              </code>
            </A>
          </pre>
        </Flex>
        <ThemeToggle />
      </Flex>

      <Calculator />
    </Flex>
  );
}
