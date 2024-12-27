import { ItemBuilder } from "~/interfaces/Item";

export const Beetroot = new ItemBuilder()
  .name("Beetroot")
  .defaultPrice(0)
  .toItem();

export const BeetrootSeeds = new ItemBuilder()
  .name("Beetroot Seeds")
  .defaultPrice(0)
  .toItem();
