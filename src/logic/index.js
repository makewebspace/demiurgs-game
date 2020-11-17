import { DeadCell, LivingCell, LifeCell } from "./entities";
import { tossCoin, makePredicateFor } from "./helpers";

export const hasAliveCondition = makePredicateFor(LivingCell, 2);
export const hasDeadCondition = makePredicateFor(DeadCell, 3);

const updateState = (state) => {
  const newCell = tossCoin() ? LivingCell : DeadCell;
  const result = [...state, newCell];

  if (hasAliveCondition(result)) {
    result.push(LifeCell);
  }

  if (hasDeadCondition(result)) {
    const toCellId = (cell) => cell.id;
    const idx = result.map(toCellId).lastIndexOf(LifeCell.id);
    idx > -1 && result.splice(idx, 1);
  }

  return result;
};

export default updateState;
