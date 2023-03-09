class Command {
    constructor(unit, operand) {
        this.unit =unit
        this.operand =operand
    }
    execute = () =>{}
    unExecute = () => {}
}
export class AddCommand extends  Command {
    execute = () => {return this.unit.add(this.operand)}
    unExecute = () =>{return this.unit.sub(this.operand)}
}
export class SubCommand extends  Command {
    execute = () =>{ return this.unit.sub(this.operand)}
    unExecute = () => {return this.unit.add(this.operand)}
}
export class mulCommand extends  Command {
    execute = () => {return this.unit.mul(this.operand)}
    unExecute = () =>{return this.unit.div(this.operand)}
}
export class divCommand extends  Command {
    execute = () =>{return this.unit.div(this.operand)}
    unExecute = () => {return this.unit.mul(this.operand)}
}
export class reversSingCommand extends  Command {
    constructor(unit) {
        super(unit,0);
    }
    execute = () =>{return this.unit.reversSign()}
    unExecute = () => {return this.unit.reversSign()}
}