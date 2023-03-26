export default class Calculator {
  constructor() {
    this.history = [];
    this.values = [];
  }

  executeCommand(command) {
    const v1 = this.values.pop();
    const v2 = this.values.pop();

    const value = command.execute(v1, v2);

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
