class AddCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo + currentValueOne;
    return this.value.toString();
  }
}

class SubCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo - currentValueOne;
    return this.value.toString();
  }
}

class MulCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo * currentValueOne;
    return this.value.toFixed(3);
  }
}
class DivCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo / currentValueOne;
    return this.value.toFixed(3);
  }
}
class ModCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo % currentValueOne;
    return this.value.toFixed(3);
  }
}

export { AddCommand, DivCommand, ModCommand, MulCommand, SubCommand };
