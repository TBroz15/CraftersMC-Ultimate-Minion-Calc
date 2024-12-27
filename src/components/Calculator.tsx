import { ThemeToggle } from "~/components/ThemeToggle";
import { Flex } from "./ui/flex";
import Border from "./Border";
import { Resizable, ResizableHandle, ResizablePanel } from "./ui/resizable";
import { Button } from "./ui/button";
import { MinionList } from "./MinionList";
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
} from "./ui/number-field";
import { Show } from "solid-js";
import { createWindowSize } from "@solid-primitives/resize-observer";

function ResponsiveResizable(props: { children: any }) {
  const size = createWindowSize() ?? { width: 1280, height: 0 };

  return (
    <Resizable
      as={Flex}
      justifyContent="start"
      flexDirection="row"
      class="w-full gap-2"
      orientation={size.width >= 1280 ? "horizontal" : "vertical"}
      alignItems="start"
    >
      {props.children}
    </Resizable>
  );
}

export default function Calculator() {
  return (
    <>
      <ResponsiveResizable>
        <ResizablePanel initialSize={0.65} class="large">
          <Border>
            <Flex justifyContent="start" class="gap-8">
              <h2 class="text-xl font-semibold">Minions</h2>
              <Button>Add</Button>
            </Flex>
            <Flex flexDirection="col" class="gap-4">
              <Border>
                <MinionList />
              </Border>
              <Border>
                <MinionList />
              </Border>
            </Flex>
          </Border>
        </ResizablePanel>
        <ResizableHandle
          withHandle
          class="self-center not-xl:min-w-16 xl:min-h-16 border"
        />
        <ResizablePanel initialSize={0.35}>
          <Border>
            <h2 class="text-xl font-semibold">Result</h2>
          </Border>
        </ResizablePanel>
      </ResponsiveResizable>
    </>
  );
}
