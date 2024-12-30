import { ThemeToggle } from "~/components/ThemeToggle";
import { Flex } from "./ui/flex";
import Border from "./Border";
import { Resizable, ResizableHandle, ResizablePanel } from "./ui/resizable";
import { Button } from "./ui/button";
import { MinionCombobox } from "./MinionCombobox";
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
} from "./ui/number-field";
import { createWindowSize } from "@solid-primitives/resize-observer";
import {
  BsCurrencyDollar,
  BsEraser,
  BsGear,
  BsTrashFill,
} from "solid-icons/bs";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { JSX, Show } from "solid-js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

function ResponsiveResizable(props: {
  Minions: JSX.Element;
  Result: JSX.Element;
}) {
  const size = createWindowSize() ?? { width: 1280, height: 0 };

  return (
    <Show
      when={size?.width >= 1280}
      fallback={
        <Tabs class="w-full flex flex-col">
          <TabsList class="mx-auto">
            <TabsTrigger value="Minions">Minions</TabsTrigger>
            <TabsTrigger value="Result">Result</TabsTrigger>
          </TabsList>
          <TabsContent value="Minions">{props.Minions}</TabsContent>
          <TabsContent value="Result">{props.Result}</TabsContent>
        </Tabs>
      }
    >
      <Resizable
        as={Flex}
        justifyContent="start"
        flexDirection="row"
        class="w-full gap-2 items-stretch"
        orientation="horizontal"
      >
        <ResizablePanel initialSize={0.65}>{props.Minions}</ResizablePanel>

        <ResizableHandle
          withHandle
          class="self-center not-xl:min-w-16 xl:min-h-16"
        />

        <ResizablePanel initialSize={0.35}>{props.Result}</ResizablePanel>
      </Resizable>
    </Show>
  );
}

function MinionItem() {
  return (
    <Border>
      <Flex justifyContent="start" class="gap-2">
        <MinionCombobox />
        <p>x</p>
        <NumberField class="w-12" defaultValue={1} minValue={1} maxValue={99}>
          <NumberFieldGroup>
            <NumberFieldInput class="border-transparent hover:border-neutral-400 text-xl p-0" />
            <NumberFieldIncrementTrigger />
            <NumberFieldDecrementTrigger />
          </NumberFieldGroup>
        </NumberField>
        <Button variant={"ghost"} class="ml-auto w-10 h-10">
          <BsTrashFill />
        </Button>
      </Flex>
      <Flex justifyContent="start" class="gap-8">
        <NumberField class="w-18" defaultValue={1} minValue={1} maxValue={11}>
          Tier
          <NumberFieldGroup class="dark:bg-neutral-900 not-dark:bg-neutral-200">
            <NumberFieldInput />
            <NumberFieldIncrementTrigger />
            <NumberFieldDecrementTrigger />
          </NumberFieldGroup>
        </NumberField>
        <NumberField defaultValue={1} minValue={1} maxValue={11}>
          Fuel <i>(assume infinite duration)</i>
          <NumberFieldGroup class="dark:bg-neutral-900 not-dark:bg-neutral-200">
            <NumberFieldInput />
            <NumberFieldIncrementTrigger />
            <NumberFieldDecrementTrigger />
          </NumberFieldGroup>
        </NumberField>
      </Flex>
      <Flex justifyContent="start" class="gap-2">
        <Checkbox id="REPLACE" />
        <Label for="REPLACE">With Diamond Spreading</Label>
      </Flex>
      <Flex justifyContent="start" class="gap-2">
        <Checkbox id="REPLACE" />
        <Label for="REPLACE">With Super Compactor 3000</Label>
      </Flex>
    </Border>
  );
}

export default function Calculator() {
  return (
    <>
      <Flex class="justify-start h-fit gap-8">
        <Button variant={"secondary"}>
          <BsGear />
          Settings
        </Button>
        <Button>
          <BsCurrencyDollar />
          Modify Price
        </Button>
        <Button variant={"destructive"}>
          <BsEraser />
          Reset
        </Button>
      </Flex>
      <ResponsiveResizable
        Minions={
          <Border class="h-fit overflow-y-auto">
            <Flex justifyContent="between" class="gap-8">
              <h2 class="text-xl font-semibold">Minions</h2>
              <Button>Add</Button>
            </Flex>
            <Flex flexDirection="col" class="gap-4">
              <MinionItem />
              <MinionItem />
              <MinionItem />
              <MinionItem />
              <MinionItem />
              <MinionItem />
              <MinionItem />
              <MinionItem />
            </Flex>
          </Border>
        }
        Result={
          <Border class="h-fit">
            <h2 class="text-xl font-semibold">Result</h2>
          </Border>
        }
      ></ResponsiveResizable>
    </>
  );
}
