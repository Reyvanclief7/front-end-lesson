// // IFFE & Callback
// // 1. IIFE (Immediately Invoked Function Exoplorer)

// //No Params & Args & Return Value
// (function () {
//   console.log("Hello World");
// })();

// //With params & args & return value
// let output = (function (fullName) {
//   console.log("Hello World" + fullName);
// })("Jhon doe");

// console.log(output);

//Callback Function

// No params & args & return value
// function sayHello(callback) {
//     //logic
//   callback()
// };

// function greeting() {
//   console.log("Hello callback function");
// };

// sayHello(greeting);


// with params & args & return value
function sayHello(callback) {
    //logic
  let output = callback("Clief")
  console.log(output);
};

let output = sayHello(function (fullName) {
 return "Hello " + fullName
});

sayHello(greeting);