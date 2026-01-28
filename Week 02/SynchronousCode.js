function Sum_Of_N_Numbers(n){
    let result = 0;
    for(let i = 1; i <= n; i++){
        result += i;
    }
    return result;
}

const result = Sum_Of_N_Numbers(100);
console.log(result);
const result_ = Sum_Of_N_Numbers(1000);
console.log(result_);
const result__ = Sum_Of_N_Numbers(10000);
console.log(result__);