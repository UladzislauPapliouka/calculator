import { Operation } from '@constants/keypadConstansts';
import operationsPrioritets from '@constants/styles/operationsConstants';
import Calculator from '@utils/calculator';
import {
  AddCommand,
  DivCommand,
  MulCommand,
  SubCommand,
} from '@utils/commands';

const SPLITTER = '&';
const convertToPolishString = (expression) => {
  const stack = [];
  let result = '';

  for (let i = 0; i < expression.length; i++) {
    const char = expression.charAt(i);

    if (
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].indexOf(char) >= 0
    ) {
      result += char;
    } else if (char === Operation.LeftBracket) {
      stack.push(char);
    } else if (char === Operation.RightBracket) {
      if (
        result[result.length - 1] !== ' ' &&
        Object.keys(operationsPrioritets).indexOf(result[result.length - 1]) < 0
      ) {
        result += SPLITTER;
      }
      let el = stack.pop();

      while (el && el !== Operation.LeftBracket) {
        result += el;
        el = stack.pop();
      }
    } else if (Object.keys(operationsPrioritets).indexOf(char) >= 0) {
      if (
        result[result.length - 1] !== ' ' &&
        Object.keys(operationsPrioritets).indexOf(result[result.length - 1]) < 0
      ) {
        result += SPLITTER;
      }
      while (
        operationsPrioritets[stack.slice(-1)[0]] >= operationsPrioritets[char]
      ) {
        result += stack.pop();
      }

      stack.push(char);
    }
  }

  const lastChar = result[result.length - 1];

  if (
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(lastChar) >= 0
  ) {
    result += SPLITTER;
  }
  let sym = stack.pop();

  while (sym) {
    result += sym;
    sym = stack.pop();
  }
  return result;
};

const calculatePolishString = (expression) => {
  let number = 0;
  let result = '';
  const calculator = new Calculator();

  for (let i = 0; i < expression.length; i++) {
    if (
      (expression[i] <= '9' && expression[i] >= '0') ||
      expression[i] === '.'
    ) {
      result += expression[i];
    } else if (expression[i] === SPLITTER) {
      number = +result;
      calculator.pushValue(number);
      result = '';
    } else {
      switch (expression[i]) {
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
    }
  }
  return +calculator.getResult().toFixed(3);
};
export { calculatePolishString, convertToPolishString };
