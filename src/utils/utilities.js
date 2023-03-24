import { Operation } from '@constants/keypadConstansts';
import calculateExpression from '@utils/calculationLogic';
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
    symbol === Operation.Devide ||
    symbol === Operation.Mod
  );
};

const isOperation = (symbol) =>
  symbol === Operation.Add ||
  symbol === Operation.Subtract ||
  symbol === Operation.Myltiply ||
  symbol === Operation.Devide ||
  symbol === Operation.LeftBracket ||
  symbol === Operation.RightBracket ||
  symbol === Operation.Equal ||
  symbol === Operation.Clear ||
  symbol === Operation.CleanEntry ||
  symbol === Operation.ChangeSign ||
  symbol === Operation.Mod;

const isErrorMessage = (expression) =>
  expression === 'Infinity' ||
  expression === 'Error' ||
  expression === 'Incorrect brackets';

const EnterSymbol = (state, symbol) => {
  if (state.lastExpression && !isOperation(symbol) && state.calculated) {
    state.lastExpression = '';
    state.calculated = false;
    state.expression = symbol;
    return;
  }
  if (isErrorMessage(state.expression.toString())) {
    state.lastExpression = '';
    state.calculated = false;
    if (!isOperation(symbol)) {
      state.expression = symbol;
      return;
    }
    state.expression = '';
  }
  const lastNumber = getLastNumber(state.expression);

  const lastNumberLength = lastNumber ? lastNumber.length : 0;

  const expressionLength = state.expression ? state.expression.length : 0;

  switch (symbol) {
    case Operation.Clear:
      state.expression = '';
      state.lastExpression = '';
      state.calculated = false;
      break;
    case Operation.CleanEntry:
      state.calculated = false;
      state.lastExpression = '';
      state.expression = state.expression.slice(0, -1);
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
      state.calculated = false;
      if (isOperandLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Mod:
      state.calculated = false;
      if (isOperandLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Subtract:
      state.calculated = false;
      if (isOperandLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Myltiply:
      state.calculated = false;
      if (isOperandLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.Devide:
      state.calculated = false;
      if (isOperandLast(state.expression)) {
        state.expression =
          state.expression.slice(0, state.expression.length - 1) + symbol;
        break;
      }
      state.expression = `${state.expression}${symbol}`;
      break;
    case Operation.LeftBracket:
      state.calculated = false;
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
      state.calculated = false;
      if (expressionLength === 0) break;
      if (
        state.expression[expressionLength - lastNumberLength - 1] ===
        Operation.Devide
      ) {
        state.expression = `${state.expression.slice(
          0,
          expressionLength - lastNumberLength,
        )}(-${lastNumber}`;
        break;
      }

      if (
        state.expression[expressionLength - lastNumberLength - 1] ===
        Operation.Myltiply
      ) {
        state.expression = `${state.expression.slice(
          0,
          expressionLength - lastNumberLength,
        )}(-${lastNumber}`;
        break;
      }

      if (
        state.expression[expressionLength - lastNumberLength - 1] ===
        Operation.LeftBracket
      ) {
        state.expression = `${state.expression.slice(
          0,
          expressionLength - lastNumberLength,
        )}-${lastNumber}`;
        break;
      }
      if (
        state.expression[expressionLength - lastNumberLength - 1] ===
          Operation.Subtract &&
        state.expression[expressionLength - lastNumberLength - 2] ===
          Operation.LeftBracket
      ) {
        state.expression = `${state.expression.slice(
          0,
          expressionLength - lastNumberLength - 1,
        )}${lastNumber}`;
        break;
      }
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
        if (
          state.expression[expressionLength - lastNumberLength - 1] ===
          Operation.Subtract
        ) {
          state.expression = `${state.expression.slice(
            0,
            expressionLength - lastNumberLength - 1,
          )}+${lastNumber}`;
          break;
        }
        if (
          state.expression[expressionLength - lastNumberLength - 1] ===
          Operation.Add
        ) {
          state.expression = `${state.expression.slice(
            0,
            expressionLength - lastNumberLength - 1,
          )}-${lastNumber}`;
          break;
        }
        break;
      }
      if (
        state.expression[0] === '-' &&
        state.expression[1] === '(' &&
        state.expression[state.expression.length - 1] === ')'
      ) {
        state.expression = state.expression.slice(1);
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
    case Operation.Equal:
      const rememberedExpression = state.expression;

      if (isBracketCorrect(state.expression)) {
        if (state.expression === state.history[state.history.length - 1]) {
          break;
        }
        if (state.expression.length) {
          state.expression = calculateExpression(state.expression).toString();
          if (!isErrorMessage(state.expression) && !state.calculated) {
            state.lastExpression = `${rememberedExpression}=`;
            state.history.push(rememberedExpression);
            state.calculated = true;
          }
          break;
        }

        break;
      }
      state.expression = 'Incorrect brackets';
      break;
    default:
      if (lastNumber && lastNumber[lastNumber.length - 4] === '.') {
        break;
      } else {
        state.calculated = false;
        state.expression = `${state.expression}${symbol}`;
      }
  }
};

export { EnterSymbol, getLastNumber, isOperandLast };
