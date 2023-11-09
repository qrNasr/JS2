//how to use arrays in JS
let arr=[1,2,"hello",true];
arr[4]=false;
console.log(arr);

//array methods
let names = ['Alice', 'Bob', 'Charlie'];
names.push('David');
console.log(names);
let numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);
let letters = ['a', 'b', 'c'];
letters.shift();
console.log(letters);
let animals = ['cat', 'dog', 'elephant'];
animals.unshift('lion');
console.log(animals);

//multidimensional array
let matrix = [[1,2],[3,4]];
matrix[0][0]='a';
console.log(matrix);
//accessing elements of an array
let myArray = ["apple","banana","cherry"];
console.log(myArray[1]); // banana

//sorting and reversing array
let nums = [7, 2, 8, 6, 1];
nums.reverse();
console.log(nums);
nums.sort((a, b)=>a-b);
console.log(nums);

//finding the index of element in array
let findIndex = function(arr, x){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===x){
            return i;
        }
    }
    return -1;
};
console.log(findIndex(nums, 6));

//splicing array
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Cherry
" ];
fruits.splice(2, 2);
console.log(fruits);

//join method
let arr=[1,2,3,4,5];
console.log(arr.join(" ,"));

//slice method
let arrSlice=[1,2,3,4,5];
console.log(arrSlice.slice(2,4));

//indexOf method
let arrIndexOf=[1,2,3,4,5];
console.log(arrIndexOf.indexOf(3));
//lastIndexOf method
let arrLastIndexOf=[1,2,3,4,5,3];
console.log(arrLastIndexOf.lastIndexOf(3));

//concat method
let arrConcat=[1,2,3];
let arrConcatTwo=[4,5,6];
console.log(arrConcat.concat(arrConcatTwo));

//includes method
let arrIncludes=[1,2,3,4,5];
console.log(arrIncludes.includes(3));
//flat method
let arrFlat=[1,[2,3],[[4,5]]];
console.log(arrFlat.flat());

//fill method
let arrFill=[1,2,3,4,5];
arrFill.fill(9);
console.log(arrFill);

//copyWithin method
let arrCopyWithin=[1,2,3,4,5];
arrCopyWithin.copyWithin(1,3);
console.log(arrCopyWithin);

//entries method
for (let [index, value] of arrEntries) {
 console.log(`${index} : ${value}`);
}
//keys method
for (let index of arrKeys) {
 console.log(index);
}

//values method
for (let value of arrValues) {
  console.log(value);
}

//find method
let arrFind=[1,2,3,4,5];
console.log(arrFind.find((num)=>{return num>2}));

//findIndex method
let arrFindIndex=[1,2,3,4,5];
console.log(arrFindIndex.findIndex((num)=>{return num>2}));

//push and pop methods
let arrPushPop =[1,2,3];
arrPushPop.pop();
console.log(arrPushPop);
arrPushPop.push(7);
console.log(arrPushPop);

//shift and unshift methods
let arrShiftUnshift=[1,2,3];
arrShiftUnshift.unshift(-1,-2);
console.log(arrShiftUnshift);
arrShiftUnshift.shift();
console.log(arrShiftUnshift);
//splice method
let arrSplice=[1,2,3,4,5];
arrSplice.splice(0,2,'a','b');
console.log(arrSplice);

//sort method
let arrSort=[6,8,1,2,4,7];
arrSort.sort();
console.log(arrSort);

//reverse method
let arrReverse=[1,2,3,4,5];
arrReverse.reverse();
console.log(arrReverse);

//fill method
let arrFill=[1,2,3,4,5];
arrFill.fill('x',2,4);
console.log(arrFill);

//copyWithin method
let arrCopyWithin=[1,2,3,4,5];
arrCopyWithin.copyWithin(1,3);
console.log(arrCopyWithin);

//entries method
for (var [index,value] of arrEntries) {
    console.log(`${index} : ${value}`);
    }
let arrEntries=['a','b','c'];

//keys method
for (var index of arrKeys){
    console.log(index);
}
let arrKeys=['a','b','c'];

//values method
for (var value of arrValues){
    console.log(value);
}
let arrValues=['a','b','c'];
//findIndex method
let arrFindIndex=[1,2,3,4,5];
console.log(arrFindIndex.indexOf(3));
console.log(arrFindIndex.lastIndexOf(3));
//includes method
let arrIncludes=[1,2,3,4,5];
console.log(arrIncludes.includes(3));

//flat method
let arrFlat=[[1],[2,[3]],[[4],5]];
console.log(arrFlat.flat());
//flatMap method
let arrFlatMap=[1,2,3,4,5];
console.log(arrFlatMap.flatMap((num)=>{return num*2}));
//from entries method
let objFromEntries={'name':'John','age':30};
let arrObjFromEntries = Object.entries(objFromEntries);
console.log(Object.fromEntries(arrObjFromEntries));

//is prototype method
function isPrototype(){
    let person={
        name:'John',
        age:30
    };
    let anotherPerson={
        __proto__:{
            job:'Software Engineer'
        },
        name:'John',
        age:30
        };
    console.log(person.__proto__===anotherPerson.__proto__);
    console.log(Array.prototype.toString() === '[object Array]');

}
isPrototype();
