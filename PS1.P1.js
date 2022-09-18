
const reversorder = str => {
    let arr=str.split("");
    //console.log("after split " +arr);
    arr= arr.sort();
    //console.log("sort: " +arr);
    arr= arr.reverse();
    //console.log("reverse: " +arr);
    arr=arr.join("");
    return arr;
};

console.log(reversorder("supercalifragilisticexpialidocious"))