import updateState, { hasAliveCondition, hasDeadCondition } from './index';
import { DeadCell, LivingCell, LifeCell } from "./entities";

test('when Life is alive', () => {
  const randomFn = () => 1;
  const firstState = updateState([], randomFn);

  expect(firstState).toContain(LivingCell);

  const secondState = updateState(firstState, randomFn);

  expect(secondState).toContain(LifeCell);
});

test('when Life is dead', () => {
  const randomFn = () => 0;
  const initState = [LivingCell, LivingCell, LifeCell];
  const firstState = updateState(initState, randomFn);

  expect(firstState).toContain(DeadCell);

  const secondState = updateState(firstState, randomFn);

  expect(secondState).toContain(LifeCell);

  const thirdState = updateState(secondState, randomFn);

  expect(thirdState).not.toContain(LifeCell);
});

test('has alive condition?', () => {
  const state = [LivingCell, LivingCell];

  expect(hasAliveCondition(state)).toBeTruthy();

  state.push(DeadCell);

  expect(hasAliveCondition(state)).not.toBeTruthy();
});


test('has dead condition?', () => {
  const state = [DeadCell, DeadCell, DeadCell];

  expect(hasDeadCondition(state)).toBeTruthy();

  state.pop();

  expect(hasDeadCondition(state)).not.toBeTruthy();
});
