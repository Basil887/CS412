
const operator = expr => {
    let [val1, op, val2]= expr.split("");
    switch (op){
        case "+":
            return (left, right)=>left +right;
            break;

    }
    return expr;
};