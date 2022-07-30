console.log("Hi, Leo", "The determined frontend developer");


//variables

let price = 250; //Location in the memory can be changed - can be reassigned
const name = 'Leonard'; // location in the memory cannot be changed - can't be reassigned
console.log(price, name);


//Data Types
//number
let age = 45;
console.log(typeof age);

//string
const userName = 'Leonard'; // "Leonard" ,  `Leonard`
console.log(typeof userName);

//boolean
let isMarried = false;
console.log(typeof isMarried);

//undefined
let colors;
console.log(typeof colors);

let selectColor = null;
console.log(typeof selectColor);


//object
let firstName = 'Leonard';
let userAge = '45';
let hobby = 'Coding';



let user = {
    firstName : 'Leonard',
    userAge: 40,
    hobby: 'Coding',
}

console.log(user);
console.log(user.firstName);
console.log(user['firstName']);
console.log(user['userAge']);



//Array
let friends = ['Malcolm', 'Francis', 'Timmy', 'Success'];
console.log(friends);
console.log(friends[2]);
console.log(typeof friends);
console.log(friends.length);

//function

function showMyName() {
    console.log('My name is Leonard');
}//showMyName()


function showMyName(name) { // passing an argument
    console.log(name);
}

showMyName('Timmy Success');


function showMyName(name) { // make it dynamic
    console.log('My name is ' + name);
}//showMyName('Leonardo Decaprio');


function showMyName(name, age) { // make it dynamic -passing more arguments
    console.log('My name is ' + name + 'I am ' + age + ' Years old.');
}

showMyName('Leonardo Decaprio', 40);



let num1 = 30;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);


function calculateSum(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result = calculateSum(60, 70);
console.log(result);


//Test

let number = 1;

console.log(number++);
console.log(++number);
console.log(number);
