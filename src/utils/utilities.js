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
  if (expression.slice(0, 2) === '--') expression = expression.slice(2);
  for (const priorityLevel of operatorPriority) {
    for (const operator of priorityLevel) {
      const splittedExpression = expression.split(operator);
      if (splittedExpression.length > 1) {
        expression = splittedExpression.reduce((acc, element) => {
          const operand1 = acc.match(getLastDigit)[0];
          const operand2 = element.match(getFirstDigit)[0];
          const operationResult = runCommand(
            new operatorToCommand[operator](
              arithmeticUnit,
              +operand1,
              +operand2,
            ),
          );
          if (
            !Number.isFinite(operationResult) &&
            operator === Operation.Divide
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
    for (const expression1 of matches) {
      const index = workingExpression.indexOf(expression1);
      workingExpression =
        workingExpression.slice(0, index) +
        calculateAction(expression1.slice(1, -1), runCommand, arithmeticUnit) +
        workingExpression.slice(index + expression1.length);
    }
    matches = workingExpression.match(regularExpression);
  }
  return calculateAction(workingExpression, runCommand, arithmeticUnit);
};

export { getExpressionValue, getLastNumber, isOperationLast };
