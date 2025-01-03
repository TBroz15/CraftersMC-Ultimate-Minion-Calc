// holy crap this file is a mess
// From: TBroz15 (half generated by Github Copilot)

import { Minion } from "~/interfaces/Minion";
import { BlazeMinion } from "./minions/combat/Blaze";
import { CreeperMinion } from "./minions/combat/Creeper";
import { MagmaCubeMinion } from "./minions/combat/MagmaCube";
import { SkeletonMinion } from "./minions/combat/Skeleton";
import { SlimeMinion } from "./minions/combat/Slime";
import { SpiderMinion } from "./minions/combat/Spider";
import { ZombieMinion } from "./minions/combat/Zombie";
import { BeetrootMinion } from "./minions/farming/crops/Beetroot";
import { CactusMinion } from "./minions/farming/crops/Cactus";
import { CarrotMinion } from "./minions/farming/crops/Carrot";
import { CocoaBeansMinion } from "./minions/farming/crops/CocoaBeans";
import { MelonMinion } from "./minions/farming/crops/Melon";
import { MushroomMinion } from "./minions/farming/crops/Mushroom";
import { PotatoMinion } from "./minions/farming/crops/Potato";
import { PumpkinMinion } from "./minions/farming/crops/Pumpkin";
import { SugarCaneMinion } from "./minions/farming/crops/SugarCane";
import { WheatMinion } from "./minions/farming/crops/Wheat";
import { ChickenMinion } from "./minions/farming/mobs/Chicken";
import { CowMinion } from "./minions/farming/mobs/Cow";
import { DuckMinion } from "./minions/farming/mobs/Duck";
import { PigMinion } from "./minions/farming/mobs/Pig";
import { RabbitMinion } from "./minions/farming/mobs/Rabbit";
import { SheepMinion } from "./minions/farming/mobs/Sheep";
import {
  AcaciaLogMinion,
  BirchLogMinion,
  DarkOakLogMinion,
  JungleLogMinion,
  OakLogMinion,
  SpruceLogMinion,
} from "./minions/foraging";
import { CoalMinion } from "./minions/mining/Coal";
import { CobblestoneMinion } from "./minions/mining/Cobblestone";
import { DiamondMinion } from "./minions/mining/Diamond";
import { EmeraldMinion } from "./minions/mining/Emerald";
import { GoldMinion } from "./minions/mining/Gold";
import { IceMinion } from "./minions/mining/Ice";
import { IronMinion } from "./minions/mining/Iron";
import { LapisLazuliMinion } from "./minions/mining/LapisLazuli";
import { ObsidianMinion } from "./minions/mining/Obsidian";
import { RedstoneMinion } from "./minions/mining/Redstone";

export const CombatMinions: Minion[] = [
  BlazeMinion,
  CreeperMinion,
  MagmaCubeMinion,
  SkeletonMinion,
  SlimeMinion,
  SpiderMinion,
  ZombieMinion,
];

export const FarmingCropsMinions: Minion[] = [
  BeetrootMinion,
  CactusMinion,
  CarrotMinion,
  CocoaBeansMinion,
  MelonMinion,
  MushroomMinion,
  PotatoMinion,
  PumpkinMinion,
  SugarCaneMinion,
  WheatMinion,
];

export const FarmingMobsMinions: Minion[] = [
  ChickenMinion,
  CowMinion,
  DuckMinion,
  PigMinion,
  RabbitMinion,
  SheepMinion,
];

export const ForagingMinions: Minion[] = [
  AcaciaLogMinion,
  BirchLogMinion,
  DarkOakLogMinion,
  JungleLogMinion,
  OakLogMinion,
  SpruceLogMinion,
];

export const MiningMinions: Minion[] = [
  CoalMinion,
  CobblestoneMinion,
  DiamondMinion,
  EmeraldMinion,
  GoldMinion,
  IceMinion,
  IronMinion,
  LapisLazuliMinion,
  ObsidianMinion,
  RedstoneMinion,
];
