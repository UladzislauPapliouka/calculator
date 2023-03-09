class Command {
    unit = null
    operand =null
    execute = () =>{}
    unExecute = () => {}
}
export class AddCommand extends  Command {
    constructor(unit, operand) {
        super();
        this.unit = unit
        this.operand = operand
    }
    execute = () => this.unit.Add(this.operand)
    unExecute = () =>this.unit.Substruct(this.operand)
}
export class SubCommand extends  Command {
    constructor(unit, operand) {
        super();
        this.unit = unit
        this.operand = operand
    }
    execute = () =>this.unit.Substruct(this.operand)
    unExecute = () => this.unit.Add(this.operand)
}
export class MulCommand extends  Command {
    constructor(unit, operand) {
        super();
        this.unit = unit
        this.operand = operand
    }
    execute = () => this.unit.Multiply(this.operand)
    unExecute = () =>this.unit.Divide(this.operand)
}
export class DivCommand extends  Command {
    constructor(unit, operand) {
        super();
        this.unit = unit
        this.operand = operand
    }
    execute = () =>this.unit.Divide(this.operand)
    unExecute = () => this.unit.Multiply(this.operand)
}
export class ReversSingCommand extends  Command {
    constructor(unit) {
        super();
        this.unit =unit
    }
    execute = () =>{return this.unit.ReversSign()}
    unExecute = () => {return this.unit.ReversSign()}
}