import { Operation } from '@constants/keypadConstansts';
import operationsPriority from '@constants/operationsConstants';
import Calculator from '@utils/calculator';
import {
  AddCommand,
  DivCommand,
  ModCommand,
  MulCommand,
  SubCommand,
} from '@utils/commands';

const numbersValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

const calculateOperator = (operator, calculator) => {
  switch (operator) {
    case Operation.Add:
      calculator.executeCommand(new AddCommand());
      break;
    case Operation.Subtract:
      calculator.executeCommand(new SubCommand());
      break;
    case Operation.Myltiply:
      calculator.executeCommand(new MulCommand());
      break;
    case Operation.Devide:
      calculator.executeCommand(new DivCommand());
      break;
    case Operation.Mod:
      calculator.executeCommand(new ModCommand());
      break;
    default:
  }
  return +calculator.getResult().toFixed(3);
};

export default function calculateExpression(expression) {
  const operatorsStack = [];

  let numbersResult = '';

  let longOperator = '';

  const calculator = new Calculator();

  for (let i = 0; i < expression.length; i++) {
    const symbol = expression.charAt(i);

    if (numbersValue.indexOf(symbol) >= 0) {
      numbersResult += symbol;
    } else if (
      operationsPriority[symbol] >= 0 &&
      symbol !== Operation.LeftBracket &&
      symbol !== Operation.RightBracket
    ) {
      if (numbersResult !== '') {
        calculator.pushValue(+numbersResult);
        numbersResult = '';
      }
      if (
        i === 0 ||
        (operationsPriority[expression.charAt(i - 1)] >= 0 &&
          expression.charAt(i - 1) !== Operation.RightBracket)
      ) {
        calculator.pushValue(0);
      }
      let signInStack = operatorsStack.pop();

      while (operationsPriority[signInStack] >= operationsPriority[symbol]) {
        if (operationsPriority[signInStack] <= 3) {
          calculator.pushValue(calculateOperator(signInStack, calculator));
        } else {
          calculator.pushValue(calculateOperator(signInStack, calculator));
        }
        signInStack = operatorsStack.pop();
      }
      operatorsStack.push(signInStack);
      operatorsStack.push(symbol);
    } else if (symbol === Operation.RightBracket) {
      if (numbersResult !== '') {
        calculator.pushValue(+numbersResult);
        numbersResult = '';
      }
      let operatorFromStack = operatorsStack.pop();

      while (operatorFromStack !== Operation.LeftBracket) {
        if (operationsPriority[operatorFromStack] <= 3) {
          calculator.pushValue(
            calculateOperator(operatorFromStack, calculator),
          );
        } else {
          calculator.pushValue(
            calculateOperator(operatorFromStack, calculator),
          );
        }
        operatorFromStack = operatorsStack.pop();
      }
      if (longOperator !== '') {
        operatorsStack.push(longOperator);
        longOperator = '';
      }
    } else if (symbol === Operation.LeftBracket) {
      if (longOperator !== '') {
        operatorsStack.push(longOperator);
        longOperator = '';
      }
      operatorsStack.push(symbol);
    } else {
      longOperator += symbol;
    }
  }

  if (numbersResult !== '') {
    calculator.pushValue(+numbersResult);
  }

  let operatorFromStack = operatorsStack.pop();

  while (operatorFromStack) {
    if (operationsPriority[operatorFromStack] <= 3) {
      calculator.pushValue(calculateOperator(operatorFromStack, calculator));
    } else {
      calculator.pushValue(calculateOperator(operatorFromStack, calculator));
    }
    operatorFromStack = operatorsStack.pop();
  }
  if (+calculator.getResult() === Infinity) {
    return 'Infinity';
  }

  if (Number.isNaN(+calculator.getResult())) {
    return 'Error';
  }
  return +calculator.getResult().toFixed(3);
}
