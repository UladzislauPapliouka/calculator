import { Operation } from '@constants/KeypadConstansts';
import ArithmeticUnit from '@utils/ArithmeticUnit';
import ControlUnit from '@utils/ControlUnit';
import {
  getExpressionValue,
  getLastNumber,
  isOperationLast,
} from '@utils/utilities';
import { isBracketCorrect } from '@utils/validation';

export default class Calculator {
  constructor() {
    this.arithmeticUnit = new ArithmeticUnit();
    this.controlUnit = new ControlUnit();
    this.displayValue = '';
    this.operationHistory = [];
  }

  EnterSymbol = (symbol) => {
    if (this.displayValue === 'Incorrect expression') this.clearEntry();
    const lastNumber = getLastNumber(this.displayValue);
    switch (symbol) {
      case Operation.Clear:
        this.clearAll();
        break;
      case Operation.Dot:
        if (lastNumber && lastNumber.indexOf(Operation.Dot) === -1) {
          this.displayValue += symbol;
          break;
        } else {
          break;
        }
      case Operation.Add:
        if (isOperationLast(this.displayValue)) {
          this.displayValue =
            this.displayValue.slice(0, this.displayValue.length - 1) + symbol;
        } else {
          this.displayValue += symbol;
        }
        break;

      case Operation.Subtract:
        if (isOperationLast(this.displayValue)) {
          this.displayValue =
            this.displayValue.slice(0, this.displayValue.length - 1) + symbol;
        } else {
          this.displayValue += symbol;
        }
        break;
      case Operation.Myltiply:
        if (isOperationLast(this.displayValue)) {
          this.displayValue =
            this.displayValue.slice(0, this.displayValue.length - 1) + symbol;
        } else {
          this.displayValue += symbol;
        }
        break;
      case Operation.Devide:
        if (isOperationLast(this.displayValue)) {
          this.displayValue =
            this.displayValue.slice(0, this.displayValue.length - 1) + symbol;
        } else {
          this.displayValue += symbol;
        }
        break;
      case Operation.LeftBracket:
        if (isOperationLast(this.displayValue)) {
          this.displayValue += symbol;
        } else {
          this.displayValue += `*${symbol}`;
        }
        break;
      case Operation.ChangeSign:
        if (
          this.displayValue[0] === '-' &&
          this.displayValue.slice(1) === lastNumber
        ) {
          this.displayValue = this.displayValue.slice(1);
          break;
        }
        if (this.displayValue === lastNumber) {
          this.displayValue = -this.displayValue;
          break;
        }
        if (
          this.displayValue.length > lastNumber &&
          this.displayValue[0] === '-' &&
          this.displayValue[1] === '(' &&
          this.displayValue[this.displayValue.length - 1] === ')'
        ) {
          this.displayValue = this.displayValue.slice(2, -1);
          break;
        }
        if (this.displayValue.length > lastNumber.length) {
          this.displayValue = `-(${this.displayValue})`;
          break;
        }
        break;
      case Operation.CleanEntry:
        this.clearEntry();
        break;
      case Operation.Equal:
        if (isBracketCorrect(this.displayValue)) {
          this.operationHistory.push(this.displayValue);
          this.displayValue = getExpressionValue(
            this.displayValue,
            this.Run,
            this.arithmeticUnit,
          );
        } else {
          this.displayValue = 'Incorrect expression';
        }
        break;
      default:
        if (lastNumber && lastNumber[lastNumber.length - 4] === '.') {
          // TODO:  implement warning 'Too much symbols after dot';
        } else {
          this.displayValue += symbol;
        }
    }
    return this.displayValue;
  };

  clearHistory = () => {
    this.operationHistory = [];
  };

  clearEntry = () => {
    this.displayValue = '';
  };

  clearAll = () => {
    this.clearHistory();
    this.clearEntry();
  };

  getHistory = () => this.operationHistory;

  Run = (command) => {
    this.controlUnit.StoreCommand(command);
    return this.controlUnit.ExecuteCommand();
  };

  Undo = (level) => {
    this.controlUnit.Undo(level);
    return this.arithmeticUnit.result;
  };

  Redo = (level) => {
    this.controlUnit.Redo(level);
    return this.arithmeticUnit.result;
  };
}
