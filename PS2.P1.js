function* fib (){
    let a=0;
    let b=1;
    let c=0;
    yield a;
    yield b;
    while(true){
        c=a+b;
        a=b;
        b=c;
        yield c;
    }
}
function* evenfib(numberofevens){
    let fibgen=fib();
    for(let i=0; i<numberofevens;i++){
        current=fibgen.next();
        while(current.value%2!==0){
            current=fibgen.next();
        }
        yield current;
    }
}
let gen= evenfib(6);
let cur =gen.next();
while(!(cur.done))
{
    console.log(cur.value);
    cur=gen.next();
}
