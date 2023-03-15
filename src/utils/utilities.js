import { Operation } from '@constants/KeypadConstansts';
import {
  AddCommand,
  DivCommand,
  MulCommand,
  SubCommand,
} from '@utils/Commands';

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

const getLastDigit = /-?\d*\.?\d*$/g;
const getFirstDigit = /^-?\d*\.?\d*/g;

const operatorPriority = [
  [Operation.Devide, Operation.Myltiply],
  [Operation.Add, Operation.Subtract],
];

const operatorToCommand = {
  [Operation.Add]: AddCommand,
  [Operation.Subtract]: SubCommand,
  [Operation.Myltiply]: MulCommand,
  [Operation.Devide]: DivCommand,
};

const calculateAction = (expression, runCommand, arithmeticUnit) => {
  if (!expression) return '0';
  // eslint-disable-next-line no-param-reassign
  if (expression.slice(0, 2) === '--') expression = expression.slice(2);
  for (let i = 0; i < operatorPriority.length - 1; i += 1) {
    for (let j = 0; j < operatorPriority[i].length - j; i += j) {
      const splittedExpression = expression.split(operatorPriority[i][j]);
      if (splittedExpression.length > 1) {
        // eslint-disable-next-line no-loop-func,no-param-reassign
        expression = splittedExpression.reduce((acc, element) => {
          const operand1 = acc.match(getLastDigit)[0];
          const operand2 = element.match(getFirstDigit)[0];
          const operationResult = runCommand(
            new operatorToCommand[operatorPriority[i][j]](
              arithmeticUnit,
              +operand1,
              +operand2,
            ),
          );
          if (
            !Number.isFinite(operationResult) &&
            operatorPriority[i][j] === Operation.Divide
          ) {
            throw new Error('Devision by zero');
          }
          return (
            acc.slice(0, -operand1.length) +
            operationResult +
            element.slice(operand2.length)
          );
        });
      }
    }
  }
  return expression;
};
const getExpressionValue = (expression, runCommand, arithmeticUnit) => {
  let workingExpression = expression;
  const regularExpression = /\(([^()]*)\)/g;
  let matches = workingExpression.match(regularExpression);
  while (matches?.length) {
    for (let i = 0; i < matches.length - 1; i += 1) {
      const index = workingExpression.indexOf(matches[i]);
      workingExpression =
        workingExpression.slice(0, index) +
        calculateAction(matches[i].slice(1, -1), runCommand, arithmeticUnit) +
        workingExpression.slice(index + matches[i].length);
    }
    matches = workingExpression.match(regularExpression);
  }
  return calculateAction(workingExpression, runCommand, arithmeticUnit);
};

export { getExpressionValue, getLastNumber, isOperationLast };
