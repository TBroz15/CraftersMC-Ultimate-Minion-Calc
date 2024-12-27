import { Minion, MinionTier } from "~/interfaces/Minion";
import { Coal } from "../../items/mining";

const CoalTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [2880] },
  { tier: 2, dailyReturns: [2880] },
  { tier: 3, dailyReturns: [3323] },
  { tier: 4, dailyReturns: [3323] },
  { tier: 5, dailyReturns: [3600] },
  { tier: 6, dailyReturns: [3600] },
  { tier: 7, dailyReturns: [4320] },
  { tier: 8, dailyReturns: [4320] },
  { tier: 9, dailyReturns: [4800] },
  { tier: 10, dailyReturns: [4800] },
  { tier: 11, dailyReturns: [6171] },
];

export const CoalMinion: Minion = {
  name: "Coal Minion",
  returns: [Coal],
  tiers: CoalTiers,
};
