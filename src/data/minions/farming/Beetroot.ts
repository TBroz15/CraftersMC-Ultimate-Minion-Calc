import { Minion, MinionTier } from "~/interfaces/Minion";
import { Beetroot, BeetrootSeeds } from "../../items/farming/crops/Beetroot";

const BeetrootTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [5890, 8835] },
  { tier: 2, dailyReturns: [5890, 8835] },
  { tier: 3, dailyReturns: [6480, 9720] },
  { tier: 4, dailyReturns: [6480, 9720] },
  { tier: 5, dailyReturns: [7200, 10800] },
  { tier: 6, dailyReturns: [7200, 10800] },
  { tier: 7, dailyReturns: [8100, 12150] },
  { tier: 8, dailyReturns: [8100, 12150] },
  { tier: 9, dailyReturns: [9257, 13885] },
  { tier: 10, dailyReturns: [9257, 13885] },
  { tier: 11, dailyReturns: [10800, 16200] },
];

export const BeetrootMinion: Minion = {
  name: "Sugar Cane Minion",
  returns: [Beetroot, BeetrootSeeds],
  tiers: BeetrootTiers,
};
