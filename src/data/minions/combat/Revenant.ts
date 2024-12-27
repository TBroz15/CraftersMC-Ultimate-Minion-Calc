import { Minion, MinionTier } from "~/interfaces/Minion";
import { RottenFlesh } from "~/data/items/combat/Zombie";
import { Diamond } from "~/data/items/mining";

const RevenantTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [4469, 298] },
  { tier: 2, dailyReturns: [4469, 298] },
  { tier: 3, dailyReturns: [4985, 332] },
  { tier: 4, dailyReturns: [4985, 332] },
  { tier: 5, dailyReturns: [5635, 376] },
  { tier: 6, dailyReturns: [5635, 376] },
  { tier: 7, dailyReturns: [6821, 455] },
  { tier: 8, dailyReturns: [6821, 455] },
  { tier: 9, dailyReturns: [8938, 596] },
  { tier: 10, dailyReturns: [8938, 596] },
  { tier: 11, dailyReturns: [12960, 864] },
];

export const RevenantMinion: Minion = {
  name: "Revenant Minion",
  returns: [RottenFlesh, Diamond],
  tiers: RevenantTiers,
};
