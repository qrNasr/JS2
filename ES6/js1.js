// ES10 in javascript
// const arr = [5, 6, 7];
// console.log(arr);
// let i=0;
// while (i<3){
//   if (i===2) {
//     break;
//   }
//   console.log(`${i} : ${arr[i]}`);
//   i++;
// }
// const arr = [5, 6, 7];
// console.log(arr);
// let i=0;
// while (i<3){
//   if (i===2) {
//     continue;
//   }
//   console.log(`${i} : ${arr[i]}`);
//   i++;
//   }

  // comments in ES6
  /* This is a comment */

  //spread operator
  let nms=['mona','omar','malak'];
  let nms2=[...nms,'nasr','shahd'];
  console.log(nms2);
// spread operator to handle as an array
let letters=['a','b',...'Nasr'];
// will handle Nasr as an array of letters
console.log(letters);

// rest parameter
  const numbers = [1, 2, 3, 4];
  const newNumbers = [...numbers, 5, 6];
  console.log(`the new numbers are `, {newNumbers});
  //rest parameter
  function sum(...args){
    return args.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
  }
  console.log(sum(1, 2, 3));

//create an object.
const person = {name: 'John', age: 30};
console.log({person});
// 5 JavaScript ES9 Rest Parameter
function myFunction(...params) {
  for (let param of params) {
    console.log(param);
  }
  }
  myFunction('Hello', 'World!');

//   JavaScript ES9 Rest Parameter?
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
       total += number;
    }
    return total;
   }

   console.log(sum(1, 2, 3, 4)); // Output: 10
/*In this example, the ...numbers syntax in the function parameter list is the rest parameter. When the sum function is called with four arguments, the numbers array will contain those four values.

This allows you to accept any number of arguments in your function, not just a fixed number.*/

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(sum(1, 2, 3, 4)); // Output: 10

function sum(...nums){
    let total=0;
    nums.forEach(num=>total+=num);
    return total;
}

console.log(`The total sum of rest args is `,sum(12,13,14));

function add(...adds){
    let k=0;

    adds.forEach(n=>k+=n);
    return k;
}

console.log(`The total sum of Adds args is `,sum(12,13,14));
// rest parameters syntax
// var arr= [x,y,...args];



// var x="hello";
// var y="world";

// function dynamicFunc(){
//     if(typeof this=='string'){
//         alert("String");
//     }else{
//         alert("Not String");
//     }
// }


// const dynamicFunc=(name)=>{
//     if(typeof name==='string'){
//         return `${name}`;
//         }else{
//         throw new Error("Invalid Name");
//     }
// };

// try{
//     console.log(dynamicFunc('John'));
//     console.log(dynamicFunc(5678));
//     }catch(e){
//     console.error(e.message);
//     }


