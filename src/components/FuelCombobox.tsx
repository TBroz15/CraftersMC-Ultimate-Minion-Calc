import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemLabel,
  ComboboxSection,
  ComboboxTrigger,
} from "~/components/ui/combobox";

import { Minion } from "~/interfaces/Minion";
import { Separator } from "./ui/separator";

interface FuelOption {
  value: string;
  label: string;
}
interface Options {
  label: string;
  options: FuelOption[];
}

const ALL_OPTIONS: Options[] = [
  {
    label: "Fuels",
    options: [
      { value: "None", label: "None" },

      { value: "Coal 5%", label: "Coal 5%" },
      { value: "Coal Block 5%", label: "Coal Block 5%" },
      { value: "Enchanted Bread 5%", label: "Enchanted Bread 5%" },
      { value: "Enchanted Coal 10%", label: "Enchanted Coal 10%" },
      { value: "Enchanted Charcoal 20%", label: "Enchanted Charcoal 20%" },
      {
        value: "Enchanted Lava Bucket 25%",
        label: "Enchanted Lava Bucket 25%",
      },
      {
        value: "Hamster Wheel 40%",
        label: "Hamster Wheel 40%",
      },
      { value: "Foul Flesh 80%", label: "Foul Flesh 80%" },
    ],
  },
];

export function FuelCombobox() {
  return (
    <Combobox<FuelOption, Options>
      options={ALL_OPTIONS}
      optionValue="value"
      optionTextValue="label"
      optionLabel="label"
      optionGroupChildren="options"
      placeholder="Select a Fuel..."
      itemComponent={(props) => (
        <ComboboxItem item={props.item}>
          <ComboboxItemLabel>{props.item.rawValue.label}</ComboboxItemLabel>
          <ComboboxItemIndicator />
        </ComboboxItem>
      )}
      sectionComponent={(props) => (
        <ComboboxSection>
          {props.section.rawValue.label}
          <Separator />
        </ComboboxSection>
      )}
    >
      <ComboboxControl
        aria-label="Fuel"
        class="dark:bg-neutral-900 not-dark:bg-neutral-200"
      >
        <ComboboxInput />
        <ComboboxTrigger />
      </ComboboxControl>
      <ComboboxContent />
    </Combobox>
  );
}
