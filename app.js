'use strict';
const Memo = new Map();
Memo.set(0, 0);
Memo.set(1, 1);
function fib(n){
    if (Memo.has(n)){
        return Memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    Memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
} 