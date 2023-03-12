import {ArithmeticUnit} from "./ArithmeticUnit";
import {ControlUnit} from "./ControlUnit";
import {AddCommand, DivCommand, MulCommand, ReversSingCommand, SubCommand} from "./Commands";
import {Operation} from "../Constants/KeypadConstansts";
import {getExpressionValue, getLastNumber, isOperationLast} from "./utilities";
import display from "../Components/Display";

export class Calculator {
    constructor() {
        this.arithmeticUnit = new ArithmeticUnit()
        this.controlUnit = new ControlUnit()
        this.displayValue = ''
    }
    EnterSymbol =(symbol)=>{
        const lastNumber = getLastNumber(this.displayValue)
        switch (symbol) {
            case Operation.Clear:
                this.displayValue = ''
                break;
            case Operation.Dot:
                if(lastNumber && lastNumber.indexOf(Operation.Dot)===-1){
                    this.displayValue +=symbol
                    break;
                } else {
                    console.log("That number already  has dot...")
                    break
                }
            case Operation.Add :
                if(isOperationLast(this.displayValue)){
                    this.displayValue = this.displayValue.slice(0,this.displayValue.length -1) + symbol
                } else {
                    this.displayValue+=symbol
                }
                    break;

            case Operation.Subtract :
                if(isOperationLast(this.displayValue)){
                    this.displayValue = this.displayValue.slice(0,this.displayValue.length -1) + symbol
                }else {
                    this.displayValue+=symbol
                }
                    break;
            case Operation.Myltiply :
                if(isOperationLast(this.displayValue)){
                    this.displayValue = this.displayValue.slice(0,this.displayValue.length -1) + symbol
                }else {
                    this.displayValue+=symbol
                }
                break;
            case Operation.Devide :
                if(isOperationLast(this.displayValue)){
                    this.displayValue = this.displayValue.slice(0,this.displayValue.length -1) + symbol
                }else {
                    this.displayValue+=symbol
                }
                break;
            case Operation.LeftBracket : {
                if(isOperationLast(this.displayValue)){
                    this.displayValue+=symbol
                } else {
                    this.displayValue += '*'+symbol
                }
            }
            break;
            case Operation.ChangeSign :
                    if(this.displayValue[0] === '-' && this.displayValue.slice(1) === lastNumber){
                        this.displayValue = this.displayValue.slice(1)
                        break
                    }
                    if(this.displayValue === lastNumber){
                        this.displayValue = -this.displayValue
                        break
                    }
                    if(this.displayValue.length > lastNumber && this.displayValue[0]==='-'  && this.displayValue[1]==='(' && this.displayValue[this.displayValue.length-1]===')'){
                        this.displayValue= this.displayValue.slice(2,-1)
                        break
                    }
                    if(this.displayValue.length > lastNumber.length){
                        this.displayValue = `-(${this.displayValue})`
                        break
                    }
                    break
            case Operation.Equal :
                this.displayValue = getExpressionValue(this.displayValue,this.Run, this.arithmeticUnit)
                break;
            default :
                if(lastNumber && lastNumber[lastNumber.length-4] === '.' ){
                    console.log("Too much symbols after dot")
                }else {
                    this.displayValue +=symbol
                }

        }
        return this.displayValue
    }
    Run = (command) =>{
        this.controlUnit.StoreCommand(command)
        return this.controlUnit.ExecuteCommand()
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