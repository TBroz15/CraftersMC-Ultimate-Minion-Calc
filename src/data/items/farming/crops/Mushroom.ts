import { ItemBuilder } from "~/interfaces/Item";

export const Mushroom = new ItemBuilder()
  .name("Mushroom")
  .defaultPrice(0)
  .toItem();
