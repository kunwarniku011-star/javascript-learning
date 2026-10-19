//method is a function which is associated with a value or object and perform some action 
//.touppercase() here touppercase= nethod ()= method call
console.log("method 1 .touppercase()");
let name="niku";
console.log(name.toUpperCase());//output will be capital NIKU
console.log("method 2 .tolowercase() ");
let n="RAHUL";//OUTPUT WILL BE small rahul
console.log(n.toLowerCase());
console.log("method 3.trim()");// removes whitespaces of beginning and ending of any word but cant remove middle spaces
let b=" hupi ";
console.log(b.trim());
console.log("method 4. includes()");//checks wheather the word is present or not in the string
let message =" i am learning javascript";
console.log(message.includes("javascript"));//output will be true or false
console.log("method 5. startswith()");//checks weather the string starts from that specific word or not
let word="javascript";
console.log(word.startsWith("java"));//returns true or false value
console.log("method 5. endswith()");//checks wheather string ends with particular string
let file="script.js";
console.log(file.endsWith("js"));//output will be true or false 
console.log("method 6. slice()");//extracts a portion of a string and returns it as a new string 
//syntax string.slice(start,end) note : end index is not include
let k="java script"
console.log(k.slice(0,4))//output will be java
console.log("method 7. replace()")//replaces a specified value with another value in a string
let messsagae="i like java";//synatx .replace(old,new);
console.log(message.replace("java","javascript"));//output will be i like javascript
console.log("method 8: split")//converts a string into a array based on a specified separartor
let fruits="apple,bananana,mango";
let result=fruits.split(",");
console.log(result);//output will be a array

