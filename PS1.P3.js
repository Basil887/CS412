
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
console.log("sfa"-"sfA")

const func2 = (str,func) =>
{
    let newstr= func(str)
    let  num= filter(num)
    return {originalString:str, modifiedString:newstr, numberReplaced:num, length:newstr.length}
}

const count =(str,char) =>
{
    let x=0
    let arr=str.split("");
    for(let i=0; i<arr.length;i++){
        if (arr[i]==char){
            x++
        }
    }
    return x
}
