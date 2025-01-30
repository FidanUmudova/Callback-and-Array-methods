// //1ci
// let text = "Salam menim adim Fidandi";
// function modifyText(text, callback) {
//   return callback(text);
// }
// function lowercase(text) {
//   return text.toLowerCase();
// }
// console.log(modifyText(text, lowercase));

// function splitWords(text) {
//   return text.split(" ").join(" ");
// }
// console.log(modifyText(text, splitWords));

// function capitalize(text) {
//   let words = text.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }
// console.log(modifyText(text, capitalize));

// function mark(text) {
//   return text + "!";
// }
// console.log(modifyText(text, mark));

// //2ci
// let num = 16;
// function modifyNumber(num, callback) {
//   return callback([num]);
// }
// function doubleNum(num) {
//   return num.map((n) => n * 2);
// }
// console.log(modifyNumber(num, doubleNum));

// function halfNumber(num) {
//   return num.map((n) => n / 2);
// }
// console.log(modifyNumber(num, halfNumber));

// function rootNumber(num) {
//   let root = num / 2;
//   for (let i = 0; i < 10; i++) {
//     root = (root + num / root) / 2;
//   }
//   return root;
// }
// console.log(modifyNumber(num, rootNumber));

// function absNumber(num) {
//   if (num > 0) {
//     return num;
//   } else {
//     return num * -1;
//   }
// }
// console.log(modifyNumber(num, absNumber));

// //3cu
// let arr = [5, 8, 13, -4, 0];
// function transformArray(arr, callback) {
//   return callback([arr]);
// }
// function plusArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     return arr[i].map((arr) => arr + 1);
//   }
// }
// console.log(transformArray(arr, plusArr));

// function minusArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     return arr[i].map((num) => {
//       if (num === 0) {
//         return 0;
//       }
//       return num * -1;
//     });
//   }
// }
// console.log(transformArray(arr, minusArr));

// function minusArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     return arr[i].map((num) => {
//       if (num === 0) {
//         return 0;
//       }
//       return num * -1;
//     });
//   }
// }
// console.log(transformArray(arr, minusArr));

// function modArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     return arr[i].map((num) => {
//       if (num === 0) {
//         return 0;
//       }
//       return num % 3;
//     });
//   }
// }
// console.log(transformArray(arr, modArr));

// //4cu
// let arr = [5, 7, "Salam", 15, "ana", 0, 8, -2, "Alma", 45];
// function findInArray(arr, callback) {
//   return callback(arr);
// }
// function evenArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] !== 0) {
//       return arr[i];
//       break;
//     }
//   }
// }
// console.log(findInArray(arr, evenArr));

// function largerArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       return arr[i];
//       break;
//     }
//   }
// }
// console.log(findInArray(arr, largerArr));

// function startingAArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string" && arr[i].toUpperCase().startsWith('A')) {
//       return arr[i];
//     }
//   }
// }
// console.log(findInArray(arr, startingAArr));

// //5ci
// let user = {
//   firstName: "Fidan",
//   lastName: "Umudova",
//   age: 19,
//   email: "fidanumudova05@gmail.com",
// };
// function processUserData(user, callback) {
//   return callback(user);
// }
// function concatNames(arr) {
//   return user.firstName + " " + user.lastName;
// }
// console.log(processUserData(user, concatNames));

// function largerAge(user) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(processUserData(user, largerAge));

// function starArr(user) {
//   return "*****" + user.email.slice(user.email.indexOf("@"));
// }
// console.log(processUserData(user, starArr));
