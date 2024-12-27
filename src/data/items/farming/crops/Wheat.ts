import { ItemBuilder } from "~/interfaces/Item";

export const Wheat = new ItemBuilder().name("Wheat").defaultPrice(0).toItem();

export const WheatSeeds = new ItemBuilder()
  .name("Wheat Seeds")
  .defaultPrice(0)
  .toItem();
