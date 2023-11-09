let grade = parseFloat(prompt("Enter your grade: "));

if (!isNaN(grade)) {
    if (grade >= 90 && grade <= 100) {
        console.log("A!");
    } else if (grade >= 80 && grade < 90) {
        console.log("B!");
    } else if (grade >= 70 && grade < 80) {
        console.log("C");
    } else if (grade >= 60 && grade < 70) {
        console.log("D!");
    } else if (grade >= 0 && grade < 60) {
        console.log("F!");
    } else {
        console.log("Invalid input. Grade should be between 0 and 100.");
    }
} else {
    console.log("Invalid input. Please enter a valid numeric grade.");
}

//switch statment with date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log(`Today's date is ${today}`);

//boolean switch statment.
let age = prompt('How old are you?');
age = Number(age);

if (typeof age === 'number'){
    if (age > 35){
        console.log('You can vote!');
    }else{
        console.log('You cannot vote yet!');
    }
}else{
    console.log('Please enter a number for the age!');
    }
