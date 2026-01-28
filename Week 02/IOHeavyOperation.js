const fs = require("fs");
// Import the fs(File System) library of Java Script.
const contents = fs.readFileSync("a.txt", "utf-8"); // Objects
console.log(contents);

const contents_ = fs.readFileSync("b.txt", "utf-8");
console.log(contents_);

// Let's Make an Object

var User = {
    age : 20,
    name : "Vanshit",
    calculateSum : function(a, b){
        return a + b;
    }
}

console.log(User.calculateSum(12, 88)); // Calling Object 