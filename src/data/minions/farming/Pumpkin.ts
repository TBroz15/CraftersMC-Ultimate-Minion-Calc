import { Minion, MinionTier } from "~/interfaces/Minion";
import { Pumpkin } from "../../items/farming/crops/Pumpkin";

const PumpkinTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1350] },
  { tier: 2, dailyReturns: [1350] },
  { tier: 3, dailyReturns: [1440] },
  { tier: 4, dailyReturns: [1440] },
  { tier: 5, dailyReturns: [1600] },
  { tier: 6, dailyReturns: [1600] },
  { tier: 7, dailyReturns: [1800] },
  { tier: 8, dailyReturns: [1800] },
  { tier: 9, dailyReturns: [2160] },
  { tier: 10, dailyReturns: [2160] },
  { tier: 11, dailyReturns: [2700] },
];

export const PumpkinMinion: Minion = {
  name: "Pumpkin Minion",
  returns: [Pumpkin],
  tiers: PumpkinTiers,
};
