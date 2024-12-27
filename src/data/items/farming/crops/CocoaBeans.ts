import { ItemBuilder } from "~/interfaces/Item";

export const CocoaBeans = new ItemBuilder()
  .name("Cocoa Beans")
  .defaultPrice(0)
  .toItem();
