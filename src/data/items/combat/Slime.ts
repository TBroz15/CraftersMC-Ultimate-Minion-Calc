import { ItemBuilder } from "~/interfaces/Item";

export const Slimeball = new ItemBuilder()
  .name("Slimeball")
  .defaultPrice(0)
  .toItem();
