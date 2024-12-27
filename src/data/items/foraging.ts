import { ItemBuilder } from "~/interfaces/Item";

export const Oak = new ItemBuilder().name("Oak Log").defaultPrice(5).toItem();

export const Spruce = new ItemBuilder()
  .name("Spruce Log")
  .defaultPrice(6)
  .toItem();

export const Birch = new ItemBuilder()
  .name("Birch Log")
  .defaultPrice(7)
  .toItem();

export const DarkOak = new ItemBuilder()
  .name("Dark Oak Log")
  .defaultPrice(8)
  .toItem();

export const Acacia = new ItemBuilder()
  .name("Acacia Log")
  .defaultPrice(9)
  .toItem();

export const Jungle = new ItemBuilder()
  .name("Jungle Log")
  .defaultPrice(10)
  .toItem();
