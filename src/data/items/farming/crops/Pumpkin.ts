import { ItemBuilder } from "~/interfaces/Item";

export const Pumpkin = new ItemBuilder()
  .name("Pumpkin")
  .defaultPrice(0)
  .toItem();
