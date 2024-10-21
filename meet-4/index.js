// //function
// //cara 1. tanpa input parameter dan output

// function greetings1() {
//   console.log("Hello World");
// }

// //cara 2.

// let greetings2 = function() {
//   console.log("Hello World");
// }

// greetings1();//call function

//parameter dan argument
// dengan input (paramater dan output (returt))
//1/
// function greetings1(fullName) {//paramater
//   return "Hello" + fullName;
// }

// let output1 = greetings1("Reyvan")//argument
// console.log(output1);

// //2.
// let greetings2 = function(fullName) {
//   return "Hello" + fullName
// }

// let output2 = greetings2("Clief")
// console.log(output2);

// Global & local Scope
let x = 10; //global

function foo() { //local (function)
  let y = 20;
  let z = 30
  console.log(x);
  console.log(y);
  if (z > x){
    let a = 40; //local (Block)
    console.log(a);
  }

}

foo()