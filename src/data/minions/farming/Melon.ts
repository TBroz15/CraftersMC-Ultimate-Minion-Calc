import { Minion, MinionTier } from "~/interfaces/Minion";
import { Melon } from "../../items/farming/crops/Melon";

const MelonTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [9000] },
  { tier: 2, dailyReturns: [9000] },
  { tier: 3, dailyReturns: [9599] },
  { tier: 4, dailyReturns: [9599] },
  { tier: 5, dailyReturns: [10285] },
  { tier: 6, dailyReturns: [10285] },
  { tier: 7, dailyReturns: [11675] },
  { tier: 8, dailyReturns: [11675] },
  { tier: 9, dailyReturns: [13500] },
  { tier: 10, dailyReturns: [13500] },
  { tier: 11, dailyReturns: [16615] },
];

export const MelonMinion: Minion = {
  name: "Melon Minion",
  returns: [Melon],
  tiers: MelonTiers,
};
