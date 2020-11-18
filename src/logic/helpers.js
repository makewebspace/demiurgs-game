export const tossCoin = (randomFn) => Boolean(randomFn());

export const makePredicateFor = (entity, threshold = 2) => {
  const satisfyTheCondition = ({ id }) => id === entity.id;
  return (list) => list.length >= threshold && list.slice(-threshold).every(satisfyTheCondition);
};
