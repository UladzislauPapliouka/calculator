class AddCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo + currentValueOne;
    return this.value;
  }
}

class SubCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo - currentValueOne;
    return this.value;
  }
}

class MulCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo * currentValueOne;
    return this.value;
  }
}
class DivCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo / currentValueOne;
    return this.value;
  }
}
class ModCommand {
  constructor() {
    this.value = 0;
  }

  execute(currentValueOne, currentValueTwo) {
    this.value = currentValueTwo % currentValueOne;
    return this.value;
  }
}

export { AddCommand, DivCommand, ModCommand, MulCommand, SubCommand };
