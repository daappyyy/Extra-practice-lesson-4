// -----------------------------EXTRA PRACTICE------------------------------

// ---------------------------------Task 1----------------------------------

// let attempt = parseInt(prompt("Enter a number, please :)"));

// switch(attempt)
// {
//     case 1:
//         console.log("a");
//         break;
//     case 2:
//         console.log("b");
//         break;
//     case 3:
//         console.log("c");
//         break;
//     default:
//        console.log("UA"); 
//        break
// }


// ---------------------------------Task 2----------------------------------

// let firstNumber = parseInt(prompt("Hi! Enter the first number, please!")), secondNumber = parseInt(prompt("Great! Now enter the second number!"));

// if(firstNumber > secondNumber)
// {
//     document.write(firstNumber + " is greater than " + secondNumber);
// }
// else{
//     document.write(secondNumber + " is greater than " + firstNumber);
// }


// ---------------------------------Task 3----------------------------------

// let number = prompt ("Hi! Enter a number which consists of 2 digits!");
// let firstDigit, lastDigit;

// lastDigit = number % 10;
// number -= lastDigit;
// number /=10;
// firstDigit = number;

// if(firstDigit > lastDigit)
// {
//     document.write("The first digit is greater than the last digit!");
// }
// else{
//     document.write("The last digit is greater than the first digit!");
// }



// ---------------------------------Task 4----------------------------------

// let number = parseInt(prompt("Hello! Enter a number!"));

// if(number % 2 == 0){
//     document.write("You've entered an even number!");
// }
// else{
//     document.write("You've entered an odd number!");
// }


// ---------------------------------Task 5----------------------------------

// let number = parseInt(prompt("Hi! Enter a number, please ;)"));
// let lastDigit = number % 10;

// if(lastDigit % 2 == 0)
// {
//     document.write("You've entered an even number and the last digit is: " + lastDigit);
// }
// else
// {
//     document.write("You've entered an odd number and the last digit is: " + lastDigit);
// }


// ---------------------------------Task 6----------------------------------

let number = parseInt(prompt("Hi! Enter a random number, please!"));

if( number >= 0 && number <= 500)
{
    document.write("Your number is in the range between 0 and 500!");
}
else
{
    document.write("Your number isn't in the range between 0 and 500 ;(");
}