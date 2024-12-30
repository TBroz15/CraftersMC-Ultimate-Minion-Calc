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
import {
  CombatMinions,
  FarmingCropsMinions,
  FarmingMobsMinions,
  ForagingMinions,
  MiningMinions,
} from "~/data/MinionList";
import { Minion } from "~/interfaces/Minion";
import { Separator } from "./ui/separator";

interface MinionOption {
  value: string;
  label: string;
}
interface Options {
  label: string;
  options: MinionOption[];
}

const getMinionOptions = (minions: Minion[]): MinionOption[] =>
  minions.map((minion) => ({
    value: minion.name,
    label: minion.name,
  }));

const ALL_OPTIONS: Options[] = [
  {
    label: "Combat",
    options: getMinionOptions(CombatMinions),
  },
  {
    label: "Farming (Crops)",
    options: getMinionOptions(FarmingCropsMinions),
  },
  {
    label: "Farming (Mobs)",
    options: getMinionOptions(FarmingMobsMinions),
  },
  { label: "Foraging", options: getMinionOptions(ForagingMinions) },
  { label: "Mining", options: getMinionOptions(MiningMinions) },
];

export function MinionCombobox() {
  return (
    <Combobox<MinionOption, Options>
      options={ALL_OPTIONS}
      optionValue="value"
      optionTextValue="label"
      optionLabel="label"
      optionGroupChildren="options"
      placeholder="Select a minion…"
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
        aria-label="Minion"
        class="border-transparent hover:border-neutral-400 p-0"
      >
        <ComboboxInput class="text-2xl" />
        <ComboboxTrigger />
      </ComboboxControl>
      <ComboboxContent />
    </Combobox>
  );
}
