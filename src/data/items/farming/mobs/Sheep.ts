import { ItemBuilder } from "~/interfaces/Item";

export const RawMutton = new ItemBuilder()
  .name("Raw Mutton")
  .defaultPrice(0)
  .toItem();

export const Wool = new ItemBuilder().name("Wool").defaultPrice(0).toItem();
