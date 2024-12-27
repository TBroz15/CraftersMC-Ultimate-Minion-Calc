import { ItemBuilder } from "~/interfaces/Item";

export const SugarCane = new ItemBuilder()
  .name("Sugar Cane")
  .defaultPrice(0)
  .toItem();
