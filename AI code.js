
// let color = ['red', 'blue', 'green'];
// color[0] = 'yellow';
// console.log(color);
// //array loop
// for (let i=0; i<color.length; i++){
//     console.log(color[i]);
// }

//object loop
// const person = {name: "John", age: 30};
// for (let key in person){
//     console.log(`${key}: ${person[key]}`);
//     }
    //function declaration
    function addNumbers(a, b){
        return a+b;
    }
    //arrow function expression
    const multiplyNumbers = (x, y) => x*y;

    //calling functions
    console.log(addNumbers(4,6));
    console.log(multiplyNumbers(7,8));
    //recursion
    function factorial(num){
        if (num <= 1){
            return num;
            } else {
            return num * factorial(num - 1);
        }
    }
    console.log(factorial(5));


