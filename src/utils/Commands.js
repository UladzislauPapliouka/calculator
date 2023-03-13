class Command {
    unit = null
    operand =null
    execute = () =>{}
    unExecute = () => {}
}
export class AddCommand extends  Command {
    constructor(unit, operand1,operand2) {
        super();
        this.unit = unit
        this.operand = operand1
        this.operand2 = operand2
    }
    execute = () => this.unit.Add(this.operand,this.operand2)
    unExecute = () =>this.unit.Subtruct(this.operand,this.operand2)
}
export class SubCommand extends  Command {
    constructor(unit, operand1,operand2) {
        super();
        this.unit = unit
        this.operand = operand1
        this.operand2 = operand2
    }
    execute = () =>this.unit.Subtruct(this.operand,this.operand2)
    unExecute = () => this.unit.Add(this.operand,this.operand2)
}
export class MulCommand extends  Command {
    constructor(unit, operand1,operand2) {
        super();
        this.unit = unit
        this.operand = operand1
        this.operand2 = operand2
    }
    execute = () => this.unit.Multiply(this.operand,this.operand2)
    unExecute = () =>this.unit.Divide(this.operand,this.operand2)
}
export class DivCommand extends  Command {
    constructor(unit, operand1,operand2) {
        super();
        this.unit = unit
        this.operand = operand1
        this.operand2 = operand2
    }
    execute = () =>this.unit.Divide(this.operand,this.operand2)
    unExecute = () => this.unit.Multiply(this.operand,this.operand2)
}
export class ReversSingCommand extends  Command {
    constructor(unit, operand1) {
        super();
        this.unit = unit
        this.operand = operand1
    }
    execute = () =>{return this.unit.ReversSign(this.operand)}
    unExecute = () => {return this.unit.ReversSign(this.operand)}
}