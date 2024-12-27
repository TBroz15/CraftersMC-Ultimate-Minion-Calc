import { ItemBuilder } from "~/interfaces/Item";

export const GreenDye = new ItemBuilder()
  .name("Green Dye")
  .defaultPrice(0)
  .toItem();
