import { Minion, MinionTier } from "~/interfaces/Minion";
import { SpiderEye, String } from "../../items/combat/Spider";

const SpiderTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [1662, 831] },
  { tier: 2, dailyReturns: [1662, 831] },
  { tier: 3, dailyReturns: [1800, 900] },
  { tier: 4, dailyReturns: [1800, 900] },
  { tier: 5, dailyReturns: [1964, 982] },
  { tier: 6, dailyReturns: [1964, 982] },
  { tier: 7, dailyReturns: [2160, 1080] },
  { tier: 8, dailyReturns: [2160, 1080] },
  { tier: 9, dailyReturns: [2541, 1271] },
  { tier: 10, dailyReturns: [2541, 1271] },
  { tier: 11, dailyReturns: [3323, 1662] },
];

export const SpiderMinion: Minion = {
  name: "Spider Minion",
  returns: [String, SpiderEye],
  tiers: SpiderTiers,
};
