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
function* evenfib(){
    let fibgen=fib();
    while(true) {
        let current = fibgen.next();
        if (current.value % 2 === 0) {
            yield current;
        }

    }
}
let gen= evenfib(6);
let cur =gen.next();
for(let iteration=0; iteration<6;iteration++)
{
    console.log(cur.value);
    cur=gen.next();
}
