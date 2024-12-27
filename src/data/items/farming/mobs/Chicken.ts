import { ItemBuilder } from "~/interfaces/Item";

export const RawChicken = new ItemBuilder()
  .name("Raw Chicken")
  .defaultPrice(0)
  .toItem();

export const Feather = new ItemBuilder()
  .name("Feather")
  .defaultPrice(0)
  .toItem();
