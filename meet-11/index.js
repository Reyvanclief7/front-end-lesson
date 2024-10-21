// String Literals , Arrow Function & Default Paramater

//1. String literal
// let fullName = "Jon doe";
// let age = 33;
// let address = "manado";

// Jalo nama saya Jon doe, umur saya 33 tahun dan saya tinggal di manado

// let kalimat = "Halo nama saya " 
// + fullName + " Umur saya " 
// + age + " dan saya tinggal di " 
// + address + "."

// console.log(kalimat);

// let kalimat2 = `Halo nama saya ${fullName} umur saya ${age} dan saya tinggal di ${address}`

// console.log(kalimat2);

//2. Arrow function

// function sayGreetings(fullName) {
//   return `Hello ${fullName}`;
// }

// console.log(sayGreetings("Jhon doe"));

// const sayGreetings2 = (fullName) => {
//   return `Hello ${fullName}`
// }
// console.log(sayGreetings2("Jhon doe"));

//Implicit return value 

// const sayGreetings2 = (fullName) `Hello ${fullName}`
// console.log(sayGreetings2("Jhon doe"))

//IIFE

let output1 = (() => `Hello`)()

console.log(output1);

//Arrow function pada callback
let numbers = [1,2,3,4,5]
let output2 = numbers.map ((item) => item )
console.log(output2);

//Default paramater
const sayGreetings3 = (fullName = "me", age = 30, address = "Surga") => {
  console.log(`Hello nama saya ${fullName} umur saya ${age} saya tinggal di ${address}`);

}
sayGreetings3

sayGreetings3("Reyvan", 20, )