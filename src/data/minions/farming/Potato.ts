import { Minion, MinionTier } from "~/interfaces/Minion";
import { Potato } from "../../items/farming/crops/Potato";

const PotatoTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [6480] },
  { tier: 2, dailyReturns: [6480] },
  { tier: 3, dailyReturns: [7200] },
  { tier: 4, dailyReturns: [7200] },
  { tier: 5, dailyReturns: [8100] },
  { tier: 6, dailyReturns: [8100] },
  { tier: 7, dailyReturns: [9257] },
  { tier: 8, dailyReturns: [9257] },
  { tier: 9, dailyReturns: [10800] },
  { tier: 10, dailyReturns: [10800] },
  { tier: 11, dailyReturns: [12960] },
];

export const PotatoMinion: Minion = {
  name: "Potato Minion",
  returns: [Potato],
  tiers: PotatoTiers,
};
