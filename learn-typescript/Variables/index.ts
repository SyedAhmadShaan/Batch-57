// values can be changed at any time
//let
//two phase
// 1: Declaration
let firstName;
//2. Initialization
firstName = "ahmad";
//vslues cannot be change at any time
//const
const batch = "batch 57";

//Rules of varibles
//no space is allowed
//only letters, nunbers, $, _ are allowed
let lastName;
let last2;
let last2$;
let last2$_name;

let last@batch; "error"

//numbers in start are not allowedv(as the first charchter of variable)
let 2end; "error"
let _end;
let $end;
//same with const
//Commnents:
// (double forwar slash) (single line comment)
//(/*  */) (Multiline comments)
//Satements:
//statement ends with semi-colon
//Primirive data types:at a time one value can be stored

//1. String: letters alphabets numbers (text value)
// //written in "  " or ' '
let fullName = "Ahamd Shan";
//number value without string
// By default undefined if no value is assigned

let abc;
console.log(abc)  // undefined
// Non-premitive. multiple values can be stored in a variable
// Null
let nullValue = null

//type annotatons on variables
//variable name : data type
let x:string;
x = 45; //Error

// Tempelate Literals
let myName = "hello";
let name1 = "Ahmad";
//out Hello Ahmad

let fullName2 = myName + " " + name1;

//(backtick) ``
let fullName3 = `My name is ${myName} ${name1}`;