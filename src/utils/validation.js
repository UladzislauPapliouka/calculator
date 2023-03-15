import { Operation } from '@constants/keypadConstansts';

const isBracketCorrect = (expression) => {
  const brackets = expression
    .split('')
    .filter(
      (symbol) => symbol === Operation.LeftBracket || Operation.RightBracket,
    );
  if (brackets[0] === Operation.RightBracket) return false;
  const openedBrackets = [];
  for (let i = 0; i < brackets.length; i += 1) {
    if (brackets[i] === Operation.LeftBracket) {
      openedBrackets.push(brackets[i]);
    }
    if (brackets[i] === Operation.RightBracket) {
      if (openedBrackets.length !== 0) {
        openedBrackets.shift();
      } else if (openedBrackets.length === 0) {
        return false;
      }
    }
  }
  if (openedBrackets.length === 0) return true;
  return false;
};

const isNumber = (value) => !Number.isNaN(parseFloat(value));

export { isBracketCorrect, isNumber };
