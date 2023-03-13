import {Operation} from "@constants/KeypadConstansts";
import {AddCommand, SubCommand,MulCommand,DivCommand} from "@utils/Commands";

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

const searchLastDigit = /-?\d*\.?\d*$/g;
const searchFirstDigit = /^-?\d*\.?\d*/g;
const operatorPriority = [
    [ Operation.Devide, Operation.Myltiply],
    [Operation.Add, Operation.Subtract],
];

const operatorToCommand = {
    [Operation.Add]: AddCommand,
    [Operation.Subtract]: SubCommand,
    [Operation.Myltiply]: MulCommand,
    [Operation.Devide]: DivCommand,
};
const calculateAction = (expression,runCommand,arithmeticUnit) => {
    if (!expression) return "0";
    console.log(expression)
    console.log(expression.slice(0,2))
    if (expression.slice(0,2) === "--") {
        console.log(expression.slice(2))
        expression = expression.slice(2)
    }
    for (const priorityLevel of operatorPriority) {
        for (const operator of priorityLevel) {
            const splittedExpression = expression.split(operator);
            if (splittedExpression.length > 1) {
                expression = splittedExpression.reduce((acc, element) => {
                    const numA = acc.match(searchLastDigit)[0];
                    const numB = element.match(searchFirstDigit)[0];
                    const operationResult = runCommand(new operatorToCommand[operator](arithmeticUnit,+numA, +numB));
                    if (!Number.isFinite(operationResult) && operator === Operation.Divide) {
                        throw new Error("Devision by zero");
                    }
                    return acc.slice(0, -numA.length) + operationResult + element.slice(numB.length);
                });
            }
        }
    }
    return expression;
};
const getExpressionValue = (expression, runCommand, arithmeticUnit) => {
    let workingExpression = expression
    const regExp = /\(([^()]*)\)/g;
    let matches = workingExpression.match(regExp);
    while (matches?.length) {
        console.log(matches)
        for (const expression of matches) {
            const index = workingExpression.indexOf(expression);
            workingExpression =
                workingExpression.slice(0, index) +
                calculateAction(expression.slice(1, -1),runCommand,arithmeticUnit) +
                workingExpression.slice(index + expression.length);
         }
        matches = workingExpression.match(regExp);
     }
     return calculateAction(workingExpression,runCommand,arithmeticUnit);
};

export {
    getLastNumber,
    isOperationLast,
    getExpressionValue
}