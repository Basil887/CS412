
const operator = expr => {
    let [val1, op, val2]= expr.split("");
    switch (op){
        case "+":
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
    return expr;
};

const vals = expr =>{
    let [val1, op, val2]= expr.split("");
    let left=val1;
    let right=val2
    return left,right;
}