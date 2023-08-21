// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//******** EXERCISE 1. **********
// function sayHello() {
//     //******** EXERCISE 2. **********
//     // return "";
//     //******** EXERCISE 3. **********
//     return "Hello, Jane!"
// }

// // ****** EXERCISES 4 & 5. ************
// function sayHello(input) {
//     if (input === "Alex" || input === "Pat"){
//         return `Hello, ${input}!`;
//     } else {
//         return "Hello, Jane!";
//     }
// }

// // ****** EXERCISES 6 & 7. ************
// function sayHello(name) {
//     return `Hello, ${name}!`;
// }

// ****** EXERCISES 8 and 9. ************
function sayHello(name) {
    // if (name === undefined || name === true || name === false){
    if (typeof (name) !== typeof(String())){
        return "Hello, World!";
    } else {
        return `Hello, ${name}!`;
    }
}
