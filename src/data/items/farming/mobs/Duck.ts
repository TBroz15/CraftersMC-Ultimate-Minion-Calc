import { ItemBuilder } from "~/interfaces/Item";

export const RawDuck = new ItemBuilder()
  .name("Raw Duck")
  .defaultPrice(0)
  .toItem();

export const DuckEgg = new ItemBuilder()
  .name("Duck Egg")
  .defaultPrice(0)
  .toItem();
