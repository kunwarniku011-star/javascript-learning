//welcome to looops in JavaScript
/*there are three types of loops in JavaScript
1. for loop
2. while loop
3. do while loop
*/
/*for loop 
syntax: 
for(initialization; condition; increment/decrement){
    //code block to be executed
}
*/
for(let i=0;i<5;i++){
    console.log(i);
}/*the for loop is used to execute a block of code a specific number of times. 
It consists of three parts: initialization, condition, and increment/decrement.
In this example, the loop will run as long as the value of i is less than 5
*/
/* while loop syntax:
while(condition){
    //code block to be executed
}
*/
let j=0;
while(j<5){
    console.log(j);
    j++;
}
/*the while loop is used to execute a block of code as long as a specified condition is true*/
/* do while loop syntax:
do{
    //code block to be executed
}while(condition);
the do while loop is similar to the while loop, but it will always execute the code block at least once, even if the condition is false. 
*/
let k=0;
do{
    console.log(k);
    k++;
}while(k<5);
