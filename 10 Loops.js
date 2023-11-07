// loops in js
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// let arr = [1, 2, 3];
// for (let item of arr) {
//   console.log(item);
// }
// while (true){
//   break;
// }

// do{
//   continue;
// }while(false)

// for(var i=2 ; i<=10 ; i++ ){
//     console.log(i * 10 );
// }

// function Employee(person_info){
//     this.Name = person_info;
//     this.LastName = "Essa";
//     this.Age = 36;
// }

// var person = new Employee("Muhammed")
// for(var p in person){
//     console.log(person[p] );
// }

// var names = ['Osama','Ali','Samir','Hassan'];
// for (const x of names) {
//     console.log( x );
// }

// var i = 0;
// while (i<= 5) {
//     console.log( i );
//     i++;
// }

// var i = 8;
// do {
//     console.log( i );
//     i++;
// }while (i<= 5);

// var i = 0;
// while (i<= 5) {
//     i++;

//     if (i ==3 ) {
//      continue;  // break;
//     }
//     console.log( i );
// }

// let a = 0;
// while (a < 12) {
//   console.log(a);
//   a++;
//   if (a == 10) {
//     break;
//   }
// }

// let a = 0;
// while (a < 12) {
//   console.log(a);
//   a++;
//   if (a == 10) {
//     continue;
//   }
// }

// let arr1= new Array(12,13,14);
// for (var item in arr1){
// console.log(item);
// }

for (let i=0; i<10;i++){
    console.log(i);
}

for (let k=12; k>10;k--){
    console.log(k);
    if (k<=12) {
        console.log("cant proceed any More !");

    }
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
  console.log(`Element at index ${index}: ${number}`);
});
