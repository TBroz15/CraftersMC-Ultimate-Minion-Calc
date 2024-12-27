import { Minion, MinionTier } from "~/interfaces/Minion";
import { SugarCane } from "../../items/farming/crops/SugarCane";

const SugarCaneTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [5890] },
  { tier: 2, dailyReturns: [5890] },
  { tier: 3, dailyReturns: [6480] },
  { tier: 4, dailyReturns: [6480] },
  { tier: 5, dailyReturns: [7200] },
  { tier: 6, dailyReturns: [7200] },
  { tier: 7, dailyReturns: [8100] },
  { tier: 8, dailyReturns: [8100] },
  { tier: 9, dailyReturns: [8937] },
  { tier: 10, dailyReturns: [8937] },
  { tier: 11, dailyReturns: [10800] },
];

export const SugarCaneMinion: Minion = {
  name: "Sugar Cane Minion",
  returns: [SugarCane],
  tiers: SugarCaneTiers,
};
