/* DATENSTRUKTUREN */

/* Primitives */

// let a; // var - Definition oder Deklaration

// // Wertzuweisung / Assignment
// a = true; // boolean (true, false)
// a = "Hallo"; // string
// a = 2; // number

// console.log(a);
// console.log(typeof a);

/* Arrays */

// let arr;
// arr = new Array();
// arr = [];
// arr = [false,true,false,false];
// arr = ["a","b","c","d"];

// // Index beginnt mit 0
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[arr.length-1]);
// console.log(arr[7]);

/* Array -Info, nicht klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.pop();
// console.log(arr);

/* Objekte */

// let obj = {};
// obj = {x:10, y:"Hallo"};

// console.log(obj);
// console.log(obj.x);
// console.log(obj.y);

// obj = {
//             val0: 10,
//             sub1: {
//                     val1: "hi",
//                     val2: 2
//             }
// }

// // {{{  ... }}}  - nested object
// console.log(obj);
// console.log(obj.val0);
// console.log(obj.sub1.val1);

/*DOM*/
// DOM  --> Modell der HTMl-Struktur
// DOM --> Document Object Model
// DOM --> nach dem Parsen / Laden der HTML-Seite 

// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerHTML = "Hi";
// console.log(document.body.children[1]);
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!";

