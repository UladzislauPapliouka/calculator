import {Operation} from "../Constants/KeypadConstansts";

const getLastNumber = (value) => {
    for(let i = value.length -1;i>=0;i--){
        if(value[i] === Operation.Add ||
            value[i] === Operation.Subtract
            || value[i] ===Operation.Myltiply
            ||value[i] === Operation.Devide
            || value[i] ===Operation.LeftBracket
            || value[i] ===Operation.RightBracket){
            return value.slice(i+1) || null
        }
    }
    return value
}
const isOperationLast =(value)=>{
    const symbol = value[value.length-1]
    return symbol === Operation.Add
        || symbol === Operation.Subtract
        || symbol ===Operation.Myltiply
        || symbol === Operation.Devide
        || symbol ===Operation.LeftBracket
        || symbol ===Operation.RightBracket
}
export {
    getLastNumber,
    isOperationLast
}