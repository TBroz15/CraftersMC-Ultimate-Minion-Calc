import { ItemBuilder } from "~/interfaces/Item";

export const RawRabbit = new ItemBuilder()
  .name("Raw Rabbit")
  .defaultPrice(0)
  .toItem();

export const RabbitFoot = new ItemBuilder()
  .name("Rabbit Foot")
  .defaultPrice(0)
  .toItem();

export const RabbitHide = new ItemBuilder()
  .name("Rabbit Hide")
  .defaultPrice(0)
  .toItem();
