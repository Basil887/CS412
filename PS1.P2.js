
const operator = expr => {
    let [val1, op, val2]= expr;
    switch (op){
        case '+':
            return (left, right)=>left +right;
            break;
        case "-":
            return (left, right)=>left -right;
            break;
        case "*":
            return (left, right)=>left *right;
            break;
        case "/":
            return (left, right)=>left /right;
            break;
        case "^":
            return (left, right)=>left^right;
            break;

    }

};

const evaluate = (expr,func)=>{
    let [val1, op, val2]= expr.split("");
    let left=val1;
    let right=val2;
    return func(left,right);

}
let expression = '8/3';
const opr = operator(expression);
console.log(opr);
console.log(`${expression} = ${evaluate(expression, opr)}`);