export class ArithmeticUnit {
    constructor() {}
    Add = (value1, value2)=>{
        return (value1 + value2).toFixed(3)
    }
    Substruct = (value1, value2)=>{
        return (value1 - value2).toFixed(3)
    }
    Multiply = (value1, value2) => {
        return (value1 * value2).toFixed(3)
    }
    Divide = (value1, value2) => {
        return (value1 / value2).toFixed(3)
    }
    ReversSign = (value) => {
        return -value.toFixed(3)
    }
}