import { Minion, MinionTier } from "~/interfaces/Minion";
import { Bone } from "../../items/combat/Skeleton";

const SkeletonTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1662] },
  { tier: 2, dailyReturns: [1662] },
  { tier: 3, dailyReturns: [1800] },
  { tier: 4, dailyReturns: [1800] },
  { tier: 5, dailyReturns: [1964] },
  { tier: 6, dailyReturns: [1964] },
  { tier: 7, dailyReturns: [2160] },
  { tier: 8, dailyReturns: [2160] },
  { tier: 9, dailyReturns: [2541] },
  { tier: 10, dailyReturns: [2541] },
  { tier: 11, dailyReturns: [3323] },
];

export const SkeletonMinion: Minion = {
  name: "Skeleton Minion",
  returns: [Bone],
  tiers: SkeletonTiers,
};
