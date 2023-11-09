let age=12;

console.log((age==12)? "yes":"no");

//ternary operator in js
let x = 5, y = 3;
console.log((x > y) ? 'greater' : 'not greater'); //output: not greater
//nested ternary operators
function getAge(){
    return (age>=0 && age<=18)?"minor":"adult";
}
console.log(getAge(33));

let namez = 13;
//ternary operatorall into brakets,backet 1 for condition,following by? bracket 2 if true condition followed by ":" and bracket 3 if false.
((namez==13)?console.log("ok"):console.log("nnnnn"));

// how to have user input in js ?
let name = prompt('Please enter your name','John Doe');
alert(`Hello ${name}`);

let temp = parseFloat(prompt("Please enter a temperature: "));
let unit = prompt('Convert to Celsius (C) or Fahrenheit (F)?');

if (unit === 'C') {
    let celsius = (temp - 32) * 5/9;
    alert(`Your temperature is ${celsius.toFixed(2)} degrees Celsius.`);
} else if (unit === 'F') {
    let fahrenheit = (temp * 9/5) + 32;
    alert(`Your temperature is ${fahrenheit.toFixed(2)} degrees Fahrenheit.`);
} else {
    alert('Invalid input. Please enter "C" for Celsius or "F" for Fahrenheit.');
}

// // Problem 3: Leap Year Checker
// Write a function that checks if a given year is a leap year. A leap year is a year that is divisible by 4, except for years that are divisible by 100 but not by 400. Use conditional statements to determine whether a year is a leap year or not.
let year = prompt("Enter the year you want to check: ");
year = Number(year);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("This is a leap year.");
} else {
    console.log("This is not a leap year.");
}

