function sum(a, b){
    return a + b;
}

function sumParseInt(a, b){
    return a + parseInt(b);
}

let ans = sum(30, "20");
let ans_ = sumParseInt(30, "70");

console.log(ans);
console.log(ans_);

// Two Ways to concatenate the string as integer
// 1. Parse Int Method
// 2. Use TypeScript 