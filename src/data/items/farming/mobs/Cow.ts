import { ItemBuilder } from "~/interfaces/Item";

export const RawBeef = new ItemBuilder()
  .name("Raw Beef")
  .defaultPrice(0)
  .toItem();

export const Leather = new ItemBuilder()
  .name("Leather")
  .defaultPrice(0)
  .toItem();
