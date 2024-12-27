import { ItemBuilder } from "~/interfaces/Item";

export const Gunpowder = new ItemBuilder()
  .name("Gunpowder")
  .defaultPrice(0)
  .toItem();
