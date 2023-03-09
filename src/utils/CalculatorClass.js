export class CalculatorClass {
    constructor() {
        this.result =0
    }
    add = (value)=>{
        this.result += value
        console.log(this.result.toFixed(3))
        return this.result
    }
    sub = (value)=>{
        this.result-=value
        console.log(this.result.toFixed(3))
        return this.result
    }
    mul = (value) => {
        this.result*=value
        console.log(this.result.toFixed(3))
        return this.result
    }
    div = (value) => {
        this.result/=value
        console.log(this.result.toFixed(3))
        return this.result
    }
    reversSign = () => {
        this.result = -this.result
        console.log(this.result.toFixed(3))
        return this.result
    }
}