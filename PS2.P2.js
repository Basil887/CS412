function* emits (str){
    let arr= str.split(' ');
    for(let i=0; i<arr.length;i++){
        yield arr[i];
    }
}
let gen= emits("All I know is something like a\n" +
    "bird within her sang");
let cur =gen.next();
while(!(cur.done))
{
    console.log(cur.value);
    cur=gen.next();
}