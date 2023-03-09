export class ArithmeticUnit {
    constructor() {
        this.result =0
    }
    Add = (value)=>{
        this.result += value
        console.log(this.result.toFixed(3))
        return this.result
    }
    Substruct = (value)=>{
        this.result-=value
        console.log(this.result.toFixed(3))
        return this.result
    }
    Multiply = (value) => {
        this.result*=value
        console.log(this.result.toFixed(3))
        return this.result
    }
    Divide = (value) => {
        this.result/=value
        console.log(this.result.toFixed(3))
        return this.result
    }
    ReversSign = () => {
        this.result = -this.result
        console.log(this.result.toFixed(3))
        return this.result
    }
}