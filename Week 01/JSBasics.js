let naam = "Jhon Cena";
const age = 45;
var isStudent = false;

console.log(naam);
console.log(age);
console.log(isStudent);
console.log("isStudent");


let users = ["Cohort", "Striver", "DSA"];
console.log(users[0]);

let sum = 10 + 15;
let isEqual = (10 == 10);
let isTrue = (true && false);
let canVote = (age >= 18);
console.log(isTrue);
console.log(canVote);

function greet(name) {
    return "Namaste! " + name;
}

function addition(a, b) {
    return a + b;
}

let message = greet("Vanshit");
console.log(message);

let a = 10;
let b = 20;
c = addition(23, 32);
d = addition(24, 21);

console.log(c);
console.log(d);

function ableToVote(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

let Ans = ableToVote(20);

if (Ans) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}

// Print N Natural Numbers form 1 to 5 

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Using While

let k = 6;
while (k <= 10 ) {
    console.log(k);
    k++;
}

let user = {
    naam : "Vanshit",
    age : 20,
    gender : "Male"
}

console.log(user.gender);

let arr = ["Vanshit", 20, {
    naam : "Vanshit",
    age : 20,
    cities : ["Bengluru", "Mumbai", "Delhi", {
        country : "USA", 
        city : "New York"
    }]
}]

console.log(arr[2].cities[3]);

function users_name_print(Users_Details){
    let k = Users_Details.length;
    while (k--){
        console.log(Users_Details[k].naam);
    }
}

Users_Details = [
    {
        naam : "Vanshit", 
        age : 20, 
        gender : "Male"
    },
    {
        naam : "Rashi", 
        age : 19, 
        gender : "Female"
    },
    {
        naam : "Vansh", 
        age : 19, 
        gender : "Male"
    },
    {
        naam : "Sujal Bhaiya", 
        age : 22, 
        gender : "Male"
    }
]

users_name_print(Users_Details);