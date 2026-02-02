function sum(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

console.log(sum(15, 85));

const thenable = {
    then : function(Onfulfilled){
        setTimeout(() => Onfulfilled(42), 1000);
    }
}

const p = new Promise(function(){});
console.log(p);

console.log(thenable);
async function main() {
    const v = await thenable.then(function(){
        console.log("Hi There!");
    });
}
main();

const fs = require('fs');
function master(filename){
    fs.readFile(filename, 'utf-8', function(err, data){
        let total = 1;
        for(let i = 0; i < data.length; i++){
            if (data[i] === " "){
                total++;
            }
        }
        console.log(total);
    });
}
function master_(data){
        let total = 1;
        for(let i = 0; i < data.length; i++){
            if (data[i] === "_"){
                total++;
            }
        }
        console.log(total);
}

master('a.txt');
master_(process.argv[2]);