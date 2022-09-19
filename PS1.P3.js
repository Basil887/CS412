
const eval = (str, func) =>
{
    return func(str);
}
const csplit= a => {
    return str => cadder(str.split('c'));
}
const cadder = arr =>
{
    for(let i=1; i<arr.length;i++){
        arr[i]='c'+arr[i];
    }
    return arr;
}

let str1 = "supercalifragilisticexpialidocious";
console.log(eval(str1, csplit(str1) ))