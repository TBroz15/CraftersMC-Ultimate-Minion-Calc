import { Minion, MinionTier } from "~/interfaces/Minion";
import { CocoaBeans } from "../../items/farming/crops/CocoaBeans";

const CocoaBeansTiers: MinionTier[] = [
  { tier: 1, dailyReturns: [4800] },
  { tier: 2, dailyReturns: [4800] },
  { tier: 3, dailyReturns: [5183] },
  { tier: 4, dailyReturns: [5183] },
  { tier: 5, dailyReturns: [5634] },
  { tier: 6, dailyReturns: [5634] },
  { tier: 7, dailyReturns: [6171] },
  { tier: 8, dailyReturns: [6171] },
  { tier: 9, dailyReturns: [7200] },
  { tier: 10, dailyReturns: [7200] },
  { tier: 11, dailyReturns: [8640] },
];

export const CocoaBeansMinion: Minion = {
  name: "Cocoa Beans Minion",
  returns: [CocoaBeans],
  tiers: CocoaBeansTiers,
};
