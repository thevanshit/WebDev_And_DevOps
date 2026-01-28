function Sum_N_Natural_numbers (n){
    let k = 1;
    let sum = 0;
    while(k <= n){
        sum = sum + k;
        k++;
    }
    return sum;
}

let ans = Sum_N_Natural_numbers(10);
console.log(ans);