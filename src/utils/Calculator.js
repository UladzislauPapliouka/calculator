import {ArithmeticUnit} from "./ArithmeticUnit";
import {ControlUnit} from "./ControlUnit";
import {AddCommand, DivCommand, MulCommand, ReversSingCommand, SubCommand} from "./Commands";

export class Calculator {
    constructor() {
        this.arithmeticUnit = new ArithmeticUnit()
        this.controlUnit = new ControlUnit()
    }

    Run = (command) =>{
        this.controlUnit.StoreCommand(command)
        this.controlUnit.ExecuteCommand()
        return this.arithmeticUnit.result
    }
    Add = (operand) => {
        return this.Run(new AddCommand(this.arithmeticUnit, operand))
    }
    Sub = (operand) => {
        return this.Run(new SubCommand(this.arithmeticUnit, operand))
    }
    Mul = (operand) => {
        return this.Run(new MulCommand(this.arithmeticUnit, operand))
    }
    Div = (operand) => {
        return this.Run(new DivCommand(this.arithmeticUnit, operand))
    }
    Rev = (operand) => {
        return this.Run(new ReversSingCommand(this.arithmeticUnit))
    }
    Undo = (level) => {
        this.controlUnit.Undo(level)
        return this.arithmeticUnit.result
    }
    Redo = (level) => {
        this.controlUnit.Redo(level)
        return this.arithmeticUnit.result
    }
}