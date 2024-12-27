import { Minion, MinionTier } from "~/interfaces/Minion";
import { Mushroom } from "../../items/farming/crops/Mushroom";

const MushroomTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1440] },
  { tier: 2, dailyReturns: [1440] },
  { tier: 3, dailyReturns: [1542] },
  { tier: 4, dailyReturns: [1542] },
  { tier: 5, dailyReturns: [1660] },
  { tier: 6, dailyReturns: [1660] },
  { tier: 7, dailyReturns: [1878] },
  { tier: 8, dailyReturns: [1878] },
  { tier: 9, dailyReturns: [2160] },
  { tier: 10, dailyReturns: [2160] },
  { tier: 11, dailyReturns: [2700] },
];

export const MushroomMinion: Minion = {
  name: "Mushroom Minion",
  returns: [Mushroom],
  tiers: MushroomTiers,
};
