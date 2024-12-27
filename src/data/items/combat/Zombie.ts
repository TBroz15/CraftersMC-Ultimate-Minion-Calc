import { ItemBuilder } from "~/interfaces/Item";

export const RottenFlesh = new ItemBuilder()
  .name("Rotten Flesh")
  .defaultPrice(0)
  .toItem();
