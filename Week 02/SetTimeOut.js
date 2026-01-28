// Callbacks 
setTimeout(() => {
    console.log("Hello World!");
    console.log("Printing after the gap of");
    console.log("Two Second.");
}, 2000);

// Promisification of the Callbacks
await delay(1000);
console.log("Hello World! Printing after the gap of One Second.");

