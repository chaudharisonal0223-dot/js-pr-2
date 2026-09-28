//Create a program to reverse a given number using a loop.
let ans1= document.getElementById("ans1")
let num : number = 123456;
let reverse  = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

ans1.innerHTML="Reversed Number =" + reverse;

// Q2 Develop a program to check whether a number is a palindrome.//
let ans2= document.getElementById("ans2")
let num1 = 1245;
let temp = num1;
let rev1 = 0;

while(num1 > 0){
    let rem = num1 %10;
    rev1 = rev1 * 10 + rem;
    num1= Math.floor(num1/10);
}
if(temp===rev1){
   ans2.innerHTML="palidrone Number"
}else{
    ans2.innerHTML=" Not palidrone Number"
}

//Q3:Write a program to print the Fibonacci series up to n terms using a loop.//
let ans3 = document.getElementById("ans3");

let n = 10;
let a = 0;
let b = 1;

for(let i = 1; i <= n; i++)
{
    ans3.innerHTML += a + " ";

    let c = a + b;
    a = b;
    b = c;
}

//Q4 : Create a program to find the factorial of a number using a loop.

let ans4 = document.getElementById("ans4");

let num5 = 5;
let fact = 1;

while(num5 > 0)
{
    fact = fact * num5;
    num5--;
}

ans4.innerHTML = "Factorial = " + fact;


//Q5 Develop a program to check whether a number is a prime number.//                                                                                                                                                                                                                                                                                                                                                                

let ans5 = document.getElementById("ans5");
let num6 = 8;
let prime = true;

for(let i = 2; i < num6; i++)
{
    if(num6 % i == 0)
    {
        prime = false;
        break;
    }
}

if(prime)
{
    ans5.innerHTML = num6 + " is a Prime Number";
}
else
{
    ans5.innerHTML = num6 + " is Not a Prime Number";
}

//Q6 Write a program to count the total number of digits in a given number.

// Q6 Write a program to count the total number of digits in a given number.
let ans6 = document.getElementById("ans6");

let nums = 123456;
let count = 0;

while (nums > 0) {
    nums = Math.floor(nums / 10);
    count++;
}

ans6.innerHTML = "Total Digits = " + count;

//Q.7 Create a program to calculate the sum of digits of a number.//

let ans7 = document.getElementById("ans7");

let numss = 123456;
let sum = 0;

while (numss > 0) {
    let digit = numss % 10;
    sum = sum + digit;
    numss = Math.floor(numss / 10);
}

ans7.innerHTML = "Sum of Digits = " + sum;

// Q.8 Develop a program to check whether a number is an Armstrong number.//

let ans8 = document.getElementById("ans8");

let local = 153;
let temps = local;
let sums = 0;

while (temps > 0) {

    let digit = temps % 10;

    sums = sums + (digit * digit * digit);

    temps = Math.floor(temps / 10);

}

if (sums == local) {

    ans8.innerHTML = local + " is an Armstrong Number";

} else {

    ans8.innerHTML = local + " is not an Armstrong Number";

}

//Q.9 Write a program to calculate the power of a number using a loop.//


let ans9 = document.getElementById("ans9");

let base = 2;
let power = 3;

let result = 1;

for(let i = 1; i <= power; i++) {
    result = result * base;
}

ans9.innerHTML = base + " raised to " + power + " = " + result;

//Q.10 Create a program to print the following number pattern://

    // 1 
    // 12 
    // 123 
    // 1234 
    // 12345


let ans10 = document.getElementById("ans10");
let str = "";

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <=i ; j++){
        str += j;
    }
    str += "<br>";
}

ans10.innerHTML = str;

// Q.11 Create a program to print the following number pattern:
    // 12345
    // 1234
    // 123
    // 12   
    // 1 

let ans11 = document.getElementById("ans11");
let strs = "";

for(let k = 5; k >= 1; k--){
    for(let l = 1; l <= k; l++){
        strs += l;
    }
    strs += "<br>";
}

ans11.innerHTML = strs;


// Q.12 Create a program to print the following number pattern:
// 12345
//   1234
//     123
//       12   
//         1

let ans12 = document.getElementById("ans12");
let strk = "";

for(let s = 5; s >= 1; s--){

    
    for(let z = 5; z> s; z--){
        strk += "-";
    }

    // numbers
    for(let y = 1; y <= s; y++){
        strk += y;
    }

    strk += "<br>";
}

ans12.innerHTML = strk;

// Q.13 Create a program to print the following number pattern:
//         1 
//       12 
//     123 
//   1234 
// 12345

let ans13 = document.getElementById("ans13");
let pattern13 = "";

for(let row = 1; row <= 5; row++){

    // spaces
    for(let space = 5; space > row; space--){
        pattern13 += "-";
    }

    // numbers
    for(let num = 1; num <= row; num++){
        pattern13 += num;
    }

    pattern13 += "<br>";
}

ans13.innerHTML = pattern13;