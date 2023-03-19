import { Operation } from '@constants/keypadConstansts';
import {
  calculatePolishString,
  convertToPolishString,
} from '@utils/polishNotation';
import { isBracketCorrect } from '@utils/validation';

const getLastNumber = (value) => {
  for (let i = value.length - 1; i >= 0; i -= 1) {
    if (
      value[i] === Operation.Add ||
      value[i] === Operation.Subtract ||
      value[i] === Operation.Myltiply ||
      value[i] === Operation.Devide ||
      value[i] === Operation.LeftBracket ||
      value[i] === Operation.RightBracket
    ) {
      return value.slice(i + 1) || null;
    }
  }
  return value;
};
const isOperationLast = (value) => {
  const symbol = value[value.length - 1];
  return (
    symbol === Operation.Add ||
    symbol === Operation.Subtract ||
    symbol === Operation.Myltiply ||
    symbol === Operation.Devide
  );
};

const EnterSymbol = (state, symbol) => {
  if (state.expression === 'Incorrect state.expression') {
    state.state.expression = '';
    return;
  }
  const lastNumber = getLastNumber(state.expression);
  switch (symbol) {
    case Operation.Clear:
      state.expression = '';
      state.history = [];
      break;
    case Operation.Dot:
      if (!state.expression || isOperationLast(state.expression)) {
        state.expression = `${state.expression}0.`;
      }
      if (lastNumber && lastNumber.indexOf(Operation.Dot) === -1) {
        state.expression = `${state.expression}${symbol}`;
      }
      break;

    case Operation.Add:
      if (isOperationLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Subtract:
      if (isOperationLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Myltiply:
      if (isOperationLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Devide:
      if (isOperationLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.LeftBracket:
      if (isOperationLast(state.expression)) {
        state.expression = `${state.expression}${symbol}`;
        break;
      }
      state.expression = `*${symbol}`;
      break;
    case Operation.ChangeSign:
      if (
        state.expression[0] === '-' &&
        state.expression.slice(1) === lastNumber
      ) {
        state.expression = state.expression.slice(1);
        break;
      }
      if (state.expression === lastNumber) {
        state.expression = -state.expression;
        break;
      }
      if (
        state.expression.length > lastNumber &&
        state.expression[0] === '-' &&
        state.expression[1] === '(' &&
        state.expression[state.expression.length - 1] === ')'
      ) {
        state.expression = state.expression.slice(2, -1);
      }
      if (state.expression.length > lastNumber.length) {
        state.expression = `-(${state.expression})`;
      }
      break;
    case Operation.CleanEntry:
      state.expression = '';
      break;
    case Operation.Equal:
      if (isBracketCorrect(state.expression)) {
        state.history.push(state.expression);
        state.expression = calculatePolishString(
          convertToPolishString(state.expression),
        );
        break;
      }
      state.expression = 'Incorrect state.expression';
      break;
    default:
      if (lastNumber && lastNumber[lastNumber.length - 4] === '.') {
        // TODO:  implement warning 'Too much symbols after dot';
      } else {
        console.log(`${state.expression}${symbol}`);
        state.expression = `${state.expression}${symbol}`;
      }
  }
};

export { EnterSymbol, getLastNumber, isOperationLast };
