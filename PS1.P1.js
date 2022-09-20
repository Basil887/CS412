
const reversorder = str => {
    let arr=str.split("").sort().join("");
    //console.log("after split " +arr);
    //console.log("sort: " +arr);
    //console.log("reverse: " +arr);

    return arr;
};

console.log(reversorder("supercalifragilisticexpialidocious"))