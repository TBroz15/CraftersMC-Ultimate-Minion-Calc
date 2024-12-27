import { Minion, MinionTier } from "~/interfaces/Minion";
import { BlazeRod } from "../../items/combat/Blaze";

const BlazeTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1309] },
  { tier: 2, dailyReturns: [1309] },
  { tier: 3, dailyReturns: [1394] },
  { tier: 4, dailyReturns: [1394] },
  { tier: 5, dailyReturns: [1516] },
  { tier: 6, dailyReturns: [1516] },
  { tier: 7, dailyReturns: [1728] },
  { tier: 8, dailyReturns: [1728] },
  { tier: 9, dailyReturns: [2057] },
  { tier: 10, dailyReturns: [2057] },
  { tier: 11, dailyReturns: [2618] },
];

export const BlazeMinion: Minion = {
  name: "Blaze Minion",
  returns: [BlazeRod],
  tiers: BlazeTiers,
};
