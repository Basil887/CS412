function* fib (n){
    let a=0;
    let b=1;
    let c=0;
    yield a;
    yield b;
    for(let i=0; i<n;i++){
        c=a+b;
        a=b;
        b=c;
        yield c;
    }
}
function* evenfib(n){
    let fibgen=fib(Number.MAX_SAFE_INTEGER);
    for(let i=0; i<n;i++){
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
