// 73 - MASALA
// let eni = prompt("enini kiriting");
// let baland = prompt("Balandligini kiriting");
// let uzunlig = prompt("uzunligini kiriting");

// function hajm(a, b, c) {
//   const hajm = {
//     width: a,
//     length: b,
//     height: c,
//   };
//   let result = hajm.height * hajm.width * hajm.length;
//   return result;
// }
// console.log(hajm(eni, baland, uzunlig));

// 74 - MASALA
// let son1 = +prompt("birinchi sonni kiriting ");
// let son2 = +prompt("ikkinchi sonni kiriting birinchi sondan katta bulsin");
// let mass = [2, 5, 25, 6, 8, 10, 34, 0];

// function sonlar(son1, son2, arr) {
//   let yangiMassiv = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > son1 && arr[i] < son2) {
//       yangiMassiv.push(arr[i]);
//     }
//   }
//   return yangiMassiv;
// }
// console.log(sonlar(son1, son2, mass));

// 83 - MASALA
// let soz1 = prompt("birinchi sozni kiriting ");
// let soz2 = prompt("ikkinchi sozni kiriting birinchi");

// function tengmi(soz1, soz2) {
//   let result = soz1.toLowerCase() == soz2.toLowerCase();
//   return result;
// }
// console.log(tengmi(soz1, soz2));

// 84 - MASALA
// let soz = prompt("sozni kiriting");
// function belgiSoni(n) {
//   var belgiSoni = 0;
//   for (var i = 0; i < n.length; i++) {
//     belgiSoni++;
//   }
//   return belgiSoni;
// }
// console.log(belgiSoni(soz));

// 86 - MASALA
// let mass = [2, 5, 25];

// function sonlar(arr) {
//   let yangiMassiv = [];
//   for (let i = 0; i < arr.length; i++) {
//     yangiMassiv.push(arr[i] * 2);
//   }
//   return yangiMassiv;
// }
// console.log(sonlar(mass));

// 87 - MASALA
// let mass = ["salom", "akbarjon", "mosinov"];

// function sonlar(arr) {
//   let yangiMassiv = [];
//   for (let i = 0; i < arr.length; i++) {
//     yangiMassiv.push(arr[i].length);
//   }
//   return yangiMassiv;
// }
// console.log(sonlar(mass));

// 94 - MASALA
// let mass = [2, 4, 5, 7, 6, 0, 8, 12, 34, 1];
// let son = +prompt("son kiriting");
// function yigindiTopsin(arr, n) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > n) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(yigindiTopsin(mass, son));

// 95 - MASALA
// let mass = [2, 4, 5, 7, 6, 0, 8, 12, 34, 1];
// function yigindiTopsin(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(yigindiTopsin(mass));

// 99 - MASALA
// let son1 = +prompt("birinchi sonni kiriting");
// let son2 = +prompt("ikkinchi sonni kiriting");

// function sonlar(x, y) {
//   let yangiMassiv = [];
//   for (let i = x + 1; i < y; i++) {
//     yangiMassiv.push(i);
//   }
//   return yangiMassiv;
// }
// console.log(sonlar(son1, son2));
