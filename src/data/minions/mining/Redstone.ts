import { Minion, MinionTier } from "~/interfaces/Minion";
import { Redstone } from "../../items/mining";

const RedstoneTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [6703] },
  { tier: 2, dailyReturns: [6703] },
  { tier: 3, dailyReturns: [7200] },
  { tier: 4, dailyReturns: [7200] },
  { tier: 5, dailyReturns: [7775] },
  { tier: 6, dailyReturns: [7775] },
  { tier: 7, dailyReturns: [8452] },
  { tier: 8, dailyReturns: [8452] },
  { tier: 9, dailyReturns: [9257] },
  { tier: 10, dailyReturns: [9257] },
  { tier: 11, dailyReturns: [10800] },
];

export const RedstoneMinion: Minion = {
  name: "Redstone Minion",
  returns: [Redstone],
  tiers: RedstoneTiers,
};
