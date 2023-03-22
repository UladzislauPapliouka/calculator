import { Operation } from '@constants/keypadConstansts';
import operationsPriority from '@constants/styles/operationsConstants';
import Calculator from '@utils/calculator';
import {
  AddCommand,
  DivCommand,
  MulCommand,
  SubCommand,
} from '@utils/commands';
import { isNumber } from '@utils/validation';

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
    default:
  }
  return +calculator.getResult().toFixed(3);
};

export default function calculateState(statement) {
  const operatorsStack = [];
  let numbersResult = '';
  let longOperator = '';
  const calculator = new Calculator();

  for (let i = 0; i < statement.length; i++) {
    const char = statement.charAt(i);
    if (numbersValue.indexOf(char) >= 0) {
      if (char === 'e') {
        numbersResult += 2.71;
      } else if (char === 'π') {
        numbersResult += 3.14;
      } else {
        numbersResult += char;
      }
    } else if (
      operationsPriority[char] >= 0 &&
      char !== Operation.LeftBracket &&
      char !== Operation.RightBracket
    ) {
      if (numbersResult !== '') {
        calculator.pushValue(+numbersResult);
        numbersResult = '';
      }
      if (
        i === 0 ||
        (operationsPriority[statement.charAt(i - 1)] >= 0 &&
          statement.charAt(i - 1) !== Operation.RightBracket)
      ) {
        calculator.pushValue(0);
      }
      let signInStack = operatorsStack.pop();
      while (operationsPriority[signInStack] >= operationsPriority[char]) {
        if (operationsPriority[signInStack] <= 3) {
          calculator.pushValue(calculateOperator(signInStack, calculator));
        } else {
          calculator.pushValue(calculateOperator(signInStack, calculator));
        }
        signInStack = operatorsStack.pop();
      }
      operatorsStack.push(signInStack);
      operatorsStack.push(char);
    } else if (char === Operation.RightBracket) {
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
    } else if (char === Operation.LeftBracket) {
      if (longOperator !== '') {
        operatorsStack.push(longOperator);
        longOperator = '';
      }
      operatorsStack.push(char);
    } else {
      longOperator += char;
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
