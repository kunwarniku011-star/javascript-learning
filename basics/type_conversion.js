//type conversion means changing a value from one data type to another
let age ="20"; // age is a string
// here we convert string into a number 
let numberage= Number(age);
console.log(`the string  is ${age}`);
console.log(numberage); 
// string conversion
let size =20;
let result=String(size);
console.log(size);
console.log(`the size type is ${typeof size}`);
// so we have learned how to convert one data type of another
//### now we learn about type coercion i.e automatic conversion of one data type into another
let marks = "10" + 5;
console.log(marks)// note + with a string gives concatination and the output will be 105
// but with - it gives 5
console.log("10" - 5);