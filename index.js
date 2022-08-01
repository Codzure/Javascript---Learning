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


//Operators
 let number1 = 2500;
 let number2 = 500;

 console.log(number1 + number2);

 console.log(number1 - number2);

 console.log(number1 * number2);

 console.log(number1 / number2);

 console.log(number1 ** number2);

 console.log(number1 % number2);



 //Conditional Statement

 let key = 0;
 if(key == 0) {
    console.log("Bualaa!")
 } else if(key == 1) {
    console.log("Burst!")
 } else {
    console.log("!")
 }



 let color = 'white';

 switch (color){
    case 'black':
        console.log("Black");
        break;

    case 'white':
        console.log("White");
        break;
 }


 //Ternary Operator

 let operator1 = 10;
 let operator2 = 20;

 let maxValue = 0;

 if(operator1 > operator2){
    maxValue = operator1;
 } else {
    console.log(maxValue);
 }

 //in ternary
 let max = operator1 > operator2 ? operator1 : operator2;
 console.log(max);



 //Concatenate
 let m1 = "Hi ";
 let m2 = "My name is ";
 let m3 = "Leonard";

 let m = m1.concat(m2,m3); //or m1 + m2 + m3;
 console.log(m);

 //Splitting 

 let message = "Hi My name is Leonard";

console.log(message.split(' '));



//Objects

const userObj = {
    name: "Leonard", 
    age: 30, 
    location: "Nairobi, Kenya",
    isMarried: true,
    friends: ['Leon', 'John', 'Tim'],
    selectColor: null,
    calculateAge: function(){
        console.log(`I am leonard ${this.age} old`);
    }
};

console.log(userObj);
console.log(userObj.age); //or console.log(userObj['name']);
console.log(userObj.location);


//Object Manipulation 
//Add
userObj.email = "codzure@gmail.com";
userObj['phone'] = '0797035510';

//Update
userObj.isMarried = false;
userObj.age = 45;

//Delete
//delete userObj.age;

//Function
userObj.calculateAge();


