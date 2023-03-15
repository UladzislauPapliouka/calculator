export class AddCommand {
  constructor(unit, operand1, operand2) {
    this.unit = unit;
    this.operand = operand1;
    this.operand2 = operand2;
  }

  execute = () => this.unit.Add(this.operand, this.operand2);

  unExecute = () => this.unit.Subtruct(this.operand, this.operand2);
}
export class SubCommand {
  constructor(unit, operand1, operand2) {
    this.unit = unit;
    this.operand = operand1;
    this.operand2 = operand2;
  }

  execute = () => this.unit.Subtruct(this.operand, this.operand2);

  unExecute = () => this.unit.Add(this.operand, this.operand2);
}
export class MulCommand {
  constructor(unit, operand1, operand2) {
    this.unit = unit;
    this.operand = operand1;
    this.operand2 = operand2;
  }

  execute = () => this.unit.Multiply(this.operand, this.operand2);

  unExecute = () => this.unit.Divide(this.operand, this.operand2);
}
export class DivCommand {
  constructor(unit, operand1, operand2) {
    this.unit = unit;
    this.operand = operand1;
    this.operand2 = operand2;
  }

  execute = () => this.unit.Divide(this.operand, this.operand2);

  unExecute = () => this.unit.Multiply(this.operand, this.operand2);
}
export class ReversSingCommand {
  constructor(unit, operand1) {
    this.unit = unit;
    this.operand = operand1;
  }

  execute = () => this.unit.ReversSign(this.operand);

  unExecute = () => this.unit.ReversSign(this.operand);
}
