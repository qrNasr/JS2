// let temp = parseFloat(prompt("Please enter a temperature: "));
// let unit = prompt('Convert to Celsius (C) or Fahrenheit (F)?');

// if (unit === 'C') {
//     let celsius = (temp - 32) * 5/9;
//     alert(`Your temperature is ${celsius.toFixed(2)} degrees Celsius.`);
// } else if (unit === 'F') {
//     let fahrenheit = (temp * 9/5) + 32;
//     alert(`Your temperature is ${fahrenheit.toFixed(2)} degrees Fahrenheit.`);
// } else {
//     alert('Invalid input. Please enter "C" for Celsius or "F" for Fahrenheit.');
// }

//datatype in javascript.
//number, string, boolean, null, undefined, object, array, function
// examples of parse in javascript
//parseInt() -> converts the first number it sees into an integer and ignores anything after that.
//parseFloat() -> converts the first number it sees into a float and ignores anything after that.
// what is tofixed in js

// toFixed() method returns a new string with the specified number of digits after the decimal point. If no arguments are provided, Number.prototype.

// let temp2 = parseFloat(prompt("Please enter a temperature: "));
// let unit2 = prompt("Please enter 'c' for Celsius and 'f' for Fahrenheit");

// let celsius2 = (temp2 - 32) * 5/9;
// let fahrenheit2 = (temp2 * 9/5) + 32;

// if (unit2 === 'c') {
//     alert(`The temperature in Celsius is ${celsius2.toFixed(2)} degrees Celsius.`);
// } else if (unit2 === 'f') {
//     alert(`The temperature in Fahrenheit is ${fahrenheit2.toFixed(2)} degrees Fahrenheit.`);
// } else {
//     alert('Invalid input. Please enter "c" for Celsius or "f" for Fahrenheit.');
// }

/*Problem 2: Grade Calculator
Create a program that calculates the letter grade for a student based on their numerical score. You can use the following grading scale:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/
// let grade = parseFloat(prompt("Enter your grade: "));

// if (!isNaN(grade)) {
//     if (grade >= 90 && grade <= 100) {
//         console.log("A!");
//     } else if (grade >= 80 && grade < 90) {
//         console.log("B!");
//     } else if (grade >= 70 && grade < 80) {
//         console.log("C");
//     } else if (grade >= 60 && grade < 70) {
//         console.log("D!");
//     } else if (grade >= 0 && grade < 60) {
//         console.log("F!");
//     } else {
//         console.log("Invalid input. Grade should be between 0 and 100.");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid numeric grade.");
// }

let year = prompt("Enter the year you want to check: ");
year = Number(year);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("This is a leap year.");
} else {
    console.log("This is not a leap year.");
}




/*Problem 3: Percentage Converter
Given an exam score, calculate the percentage of the total points scored out of.
For example, given that you have scored 45 out of 100 points, it would return 45%.
*/
// let score = parseInt(prompt("Enter your score: "));
// let max_score = parseInt(prompt("Enter maximum possible score: "));
// if (!isNaN(score) && !isNaN(max_score)) {
//     let percent = ((score / max_score) * 100).toFixed(2);
//     console.log(`You got ${percent}%`);
// } else {
//     console.log("Invalid input. Score and Maximum Score must be numbers.");
//     }
    /*Problem 4: Time Conversion
Convert time from hours to minutes. For example, convert 3 hours to minutes.
*/
// let hrs = parseInt(prompt("Enter number of hours: "));
// let mins = hrs * 60;
// console.log(`${hrs} hour is equal to ${mins} minute.`);
/*Problem 5: Factorial
Calculate factorial of a number. For example, find the factorial of 5 which is 5*4*3*2*1
*/
// let num = parseInt(prompt("Enter a positive integer: "));
// let fact = 1;
// for (let i=num; i>0; i--){
//   fact = fact * i;
// }
// console.log(`The factorial of ${num} is ${fact}`);



// Problem 3: Guessing Game
// let guessesLeft = 4;
// let randomNumber = Math.floor(Math.random()*10)+1;
// console.log(randomNumber);
// while (guessesLeft>0){
//     let userGuess=prompt("Make a guess between 1 and 10: ");
//     while (!isNaN(userGuess)){
//         userGuess=parseInt(userGuess);
//         break;
//     }
//     if (userGuess===randomNumber){
//         alert("Correct! You win!");
//         break;
//     }else if (userGuess<randomNumber){
//         alert("Too low! Try again");
//         guessesLeft--;
//         }else if (userGuess>randomNumber){
//         alert("Too high! Try again");
//         guessesLeft--;
//     }if (guessesLeft<=0) {
//         alert("Sorry, you ran out of guesses! The correct answer was "+randomNumber+".");
// }
// }
// // Problem 4: Factorial Program
// function factorial(num){
//     for (i=num; i>=1; i--){
//         num *= i;
//     }return num;
// }
// alert(factorial(5));

//Create a simple login system where the user enters a username and password. Use conditionals to check if the entered username and password match the predefined values. Provide appropriate messages for successful and unsuccessful logins.

let username = "Nasr";
let passwordd = "123"; // I assume the password should be a string

function login() {
    let uname = prompt('Please enter your Username');
    let pword = prompt('Please enter your Password');

    if (uname === username && pword === passwordd) {
        return true; // Login successful
    } else {
        return false; // Login failed
    }
}

if (login()) {
    alert("Login successful!");
} else {
    alert("Login failed. Please check your username and password.");
}

//2

let username2 = "Nasr";
let password2 = "123"; // Enclose the password in quotes to ensure it's treated as a string.

function login() {
    let uname = prompt('Please enter your Username');
    let pword = prompt('Please enter your Password');

    if (uname === username2 && pword === password2) { // Use strict equality (===) for comparison.
        return true;
    } else {
        return false;
    }
}

if (login()) {
    alert("Login successful!");
} else {
    alert("Login failed. Please check your username and password.");
}

