function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function DoOperation(a, b, operation){
    return operation(a, b);
}

console.log(DoOperation(20, 5, multiply));


function Sum_Of_N_Natural_Numbers(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}

function Sum_Of_N_Natural_Numbers_Mathematical(n){
    return (n * (n + 1)) / 2;
}

console.log(Sum_Of_N_Natural_Numbers(10));
console.log(Sum_Of_N_Natural_Numbers_Mathematical(100));