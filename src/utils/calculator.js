export default class Calculator {
  constructor() {
    this.history = [];
    this.values = [];
  }

  executeCommand(command) {
    const value = command.execute(this.values.pop(), this.values.pop());
    this.values.push(value);
    this.history.push(value);
  }

  getResult() {
    return this.values.pop();
  }

  getHistory() {
    return this.history;
  }

  pushValue(value) {
    this.values.push(value);
  }
}
