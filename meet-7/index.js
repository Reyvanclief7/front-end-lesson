// //Javascript Object (have property and value)
// // let  jhon = ["jhon", 30, true]
// //deklarasi object
// //cara 1. Object Literal
// let jhon = {
//   firstName: "Jhon",
//   age: 30,
//   isMarried: true,
//   grade: [80, 90, 100],
//   sayGreetings: function(){
//     console.log("Hello my name is " + this.firstName);
//   },
//   address: {
//     street: 'Jl. Arnold Mononutu',
//     city: "Minahasa utara",
//     province: "Sulawesi Utara",
//     postalCode: 95371,
//   }, 
// }
// console.log(jhon);

// //cara 2. keyword new

// let jane = new Object();

// jane.firstName = "Jane",
// jane.age = 25,
// jane,isMarried = false

// console.log(jane);

// // Cara mengakses properti dalam object
// //1. Dot notation
// console.log(jhon.firstName);// Jhon 
// console.log(jhon.age);//30
// jhon.age = 31;
// console.log(jhon.age);//31
// jhon.job = "Teacher";
// console.log(john);

// //2. Bracket notation

// console.log(jhon["isMarried"]);
// jhon["nationality"] = "indonesia";
// console.log(jhon);

// //object method
// jhon.sayGreetings();

// //object inside object

// console.log(jhon.address.city);

// //delete property
// delete jhon.grade;
// console.log(jhon); 

//JavaScript condition
// 1. if - else
let numbers = 5;

if (numbers % 2 == 0) {
  console.log("Bilangan genap");
} else {
  console.log("Bilangan Ganjil");
}

//2. if - else if

//100 - 80 nilai A
// 60 - 80 nilai B
// < 60 nilai c

let nilai = 80;

if (nilai >=80 && nilai <=100) {
  console.log("Grade A");
} else if (nilai >=60 && nilai <=80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
};

//3. Switch - Case
//

let month = 1;

switch(month) {
  case 1 : console.log("Bulan January");
  break
  case 2 : console.log("Bulan February");
  break
  case 3 : console.log("Bulan Maret");
  break
  default:
    console.log("not found");
    break
}


