import { ItemBuilder } from "~/interfaces/Item";

export const BlazeRod = new ItemBuilder()
  .name("Blaze Rod")
  .defaultPrice(0)
  .toItem();
