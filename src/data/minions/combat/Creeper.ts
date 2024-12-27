import { Minion, MinionTier } from "~/interfaces/Minion";
import { Gunpowder } from "../../items/combat/Creeper";

const CreeperTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1600] },
  { tier: 2, dailyReturns: [1600] },
  { tier: 3, dailyReturns: [1728] },
  { tier: 4, dailyReturns: [1728] },
  { tier: 5, dailyReturns: [1878] },
  { tier: 6, dailyReturns: [1878] },
  { tier: 7, dailyReturns: [2057] },
  { tier: 8, dailyReturns: [2057] },
  { tier: 9, dailyReturns: [2400] },
  { tier: 10, dailyReturns: [2400] },
  { tier: 11, dailyReturns: [3086] },
];

export const CreeperMinion: Minion = {
  name: "Creeper Minion",
  returns: [Gunpowder],
  tiers: CreeperTiers,
};
