import { ThemeToggle } from "~/components/ThemeToggle";
import { Flex } from "./ui/flex";
import Border from "./Border";
import { Resizable, ResizableHandle, ResizablePanel } from "./ui/resizable";
import { Button } from "./ui/button";
import { MinionList } from "./MinionList";

export default function Calculator() {
  return (
    <Resizable
      as={Flex}
      justifyContent="start"
      flexDirection="row"
      class="w-full gap-2"
      orientation="horizontal"
      alignItems="start"
    >
      <ResizablePanel initialSize={0.65}>
        <Border>
          <Flex justifyContent="start" class="gap-8">
            <h2 class="text-xl font-semibold">Minions</h2>
            <Button>Add</Button>
          </Flex>
          <Flex>
            <Border>asd</Border>
          </Flex>
          <MinionList />
        </Border>
      </ResizablePanel>
      <ResizableHandle withHandle class="self-center min-h-[4rem]  border" />
      <ResizablePanel initialSize={0.35}>
        <Border>
          <h2 class="text-xl font-semibold">Result</h2>
        </Border>
      </ResizablePanel>
    </Resizable>
  );
}
