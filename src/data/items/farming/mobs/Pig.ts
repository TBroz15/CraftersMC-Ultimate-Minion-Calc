import { ItemBuilder } from "~/interfaces/Item";

export const RawPorkchop = new ItemBuilder()
  .name("Raw Porkchop")
  .defaultPrice(0)
  .toItem();
