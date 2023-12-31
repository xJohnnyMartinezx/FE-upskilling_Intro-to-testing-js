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


// ****** EXERCISES 10. ************
// function isFive() {
// // return true;
// return false;
// }

function isFive(num) {
    return num === 5 || num === "5";
}

// ****** EXERCISES 11. ************
// function isEven(){
//   // return true;
//   return false;
// }

function isEven(evenNum){
    // return evenNum === 2 || evenNum === -4 || evenNum === 8;
    if (typeof evenNum == "boolean"){
        return false;
    } else {
        return evenNum % 2 === 0;
    }
}



// ****** EXERCISES 12. ************
function isVowel(letter){
    let vowels = "aeiou";
    if (typeof letter !== 'string'){
        return false;
    } else {
        return vowels.includes(letter.toLowerCase());
    }
}



// ****** EXERCISES 13. ************
function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}



