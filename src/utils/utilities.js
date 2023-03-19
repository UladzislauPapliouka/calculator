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
const isOperandLast = (value) => {
  const symbol = value[value.length - 1];
  return (
    symbol === Operation.Add ||
    symbol === Operation.Subtract ||
    symbol === Operation.Myltiply ||
    symbol === Operation.Devide
  );
};
const isOperation = (symbol) =>
  symbol === Operation.Add ||
  symbol === Operation.Subtract ||
  symbol === Operation.Myltiply ||
  symbol === Operation.Devide ||
  symbol === Operation.LeftBracket ||
  symbol === Operation.RightBracket;

const EnterSymbol = (state, symbol) => {
  if (state.expression === 'Incorrect state.expression') {
    state.expression = symbol;
    return;
  }
  const lastNumber = getLastNumber(state.expression);
  const lastNumberLength = lastNumber ? lastNumber.length : 0;
  const expressionLength = state.expression ? state.expression.length : 0;
  switch (symbol) {
    case Operation.Clear:
      state.expression = '';
      state.history = [];
      break;
    case Operation.Dot:
      if (!state.expression || isOperandLast(state.expression)) {
        state.expression = `${state.expression}0.`;
      }
      if (lastNumber && lastNumber.indexOf(Operation.Dot) === -1) {
        state.expression = `${state.expression}${symbol}`;
      }
      break;

    case Operation.Add:
      if (isOperandLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Subtract:
      if (isOperandLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Myltiply:
      if (isOperandLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Devide:
      if (isOperandLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.LeftBracket:
      if (!state.expression) {
        state.expression = '(';
        break;
      }
      if (isOperandLast(state.expression)) {
        state.expression = `${state.expression}${symbol}`;
        break;
      }
      state.expression = `${state.expression}*${symbol}`;
      break;
    case Operation.ChangeSign:
      if (expressionLength === 0) break;
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
      if (lastNumber && lastNumberLength < expressionLength) {
        console.log(state.expression[expressionLength - lastNumberLength - 2]);
        if (
          isOperation(state.expression[expressionLength - lastNumberLength - 1])
        ) {
          state.expression = `${state.expression.slice(
            0,
            expressionLength - lastNumberLength,
          )}-${lastNumber}`;
        }
        if (
          state.expression[expressionLength - lastNumberLength - 1] === '-' &&
          isOperation(state.expression[expressionLength - lastNumberLength - 2])
        ) {
          state.expression = `${state.expression.slice(
            0,
            expressionLength - lastNumberLength - 1,
          )}${lastNumber}`;
        }
        break;
      }
      if (
        state.expression[0] === '-' &&
        state.expression[1] === '(' &&
        state.expression[state.expression.length - 1] === ')'
      ) {
        state.expression = state.expression.slice(2, -1);
        break;
      }
      if (
        state.expression[0] === '(' &&
        state.expression[state.expression.length - 1] === ')'
      ) {
        state.expression = `-${state.expression}`;
        break;
      }
      state.expression = `-(${state.expression})`;
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
        state.expression = `${state.expression}${symbol}`;
      }
  }
};

export { EnterSymbol, getLastNumber, isOperandLast };
