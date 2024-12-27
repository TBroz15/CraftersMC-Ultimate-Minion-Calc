import { ItemBuilder } from "~/interfaces/Item";

export const SpiderEye = new ItemBuilder()
  .name("Spider Eye")
  .defaultPrice(0)
  .toItem();

export const String = new ItemBuilder().name("String").defaultPrice(0).toItem();
