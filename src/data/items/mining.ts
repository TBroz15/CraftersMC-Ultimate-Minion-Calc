import { ItemBuilder } from "~/interfaces/Item";

export const Cobblestone = new ItemBuilder()
  .name("Cobblestone")
  .defaultPrice(10)
  .toItem();

export const Coal = new ItemBuilder().name("Coal").defaultPrice(10).toItem();

export const IronIngot = new ItemBuilder()
  .name("Iron Ingot")
  .defaultPrice(10)
  .toItem();

export const GoldIngot = new ItemBuilder()
  .name("Gold Ingot")
  .defaultPrice(20)
  .toItem();

export const Diamond = new ItemBuilder()
  .name("Diamond")
  .defaultPrice(50)
  .toItem();

export const LapisLazuli = new ItemBuilder()
  .name("Lapis Lazuli")
  .defaultPrice(15)
  .toItem();

export const Emerald = new ItemBuilder()
  .name("Emerald")
  .defaultPrice(30)
  .toItem();

export const Redstone = new ItemBuilder()
  .name("Redstone")
  .defaultPrice(5)
  .toItem();

export const Obsidian = new ItemBuilder()
  .name("Obsidian")
  .defaultPrice(25)
  .toItem();

export const Ice = new ItemBuilder().name("Ice").defaultPrice(8).toItem();
