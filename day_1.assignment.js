//Program-1) Write a program that determines whether a given number is positive or
//negative.
{
    let n = 0

    if (n > 0) {
        console.log("Positive Number")
    }
    else {
        console.log("Negative Number")
    }
}
console.log()

// Program-2) Write a program that checks if a number is even or odd.
{
    let n = 23

    if (n % 2 == 0) {
        console.log("🔢 Even Number")
    }
    else {
        console.log("🔢 Odd Number")
    }
}
console.log()

//Program-3) Write a program to determine the greater of two numbers.
{
    let a = 56
    let b = 38

    if (a > b) {
        console.log("a is greater")
    }
    else if (a == b) {
        console.log("a is equal to b")
    }
    else {
        console.log("b is greater")
    }

}
console.log()

//Program-4) Suppose we need to assign different grades to students based on their
// If a student scores above 91-100, assign grade A.
// If a student scores above 81-90, assign grade B.
// If a student scores above 71-80, assign grade C.
// If a student scores above 61-70, assign grade D.
// Other wise fail

{
    let student_score = 78

    if (student_score >= 91 && student_score <= 100) {
        console.log("Grade 🅰️")
    }
    else if (student_score >= 81 && student_score <= 90) {
        console.log("Grade 🅱️")
    }
    else if (student_score >= 71 && student_score <= 80) {
        console.log("Grade ©️")
    }
    else if (student_score >= 61 && student_score <= 70) {
        console.log("😔 Grade D")
    }
    else {
        console.log("🥹 Fail")
    }
}
console.log()

//Program-5) . Write a program that calculates the ticket price based on age with the
// following conditions: age below 12 pay a ticket price of 5, age below 18 pay
// a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a
//ticket price of 15.
{
    let age = 56

    if (age < 12) {
        console.log("Ticket Price is 5")
    }
    else if (age < 18) {
        console.log("Ticket Price is 10")
    }
    else if (age < 60) {
        console.log("Ticket Price is 20")
    }
    else {
        console.log("Ticket Price is 15")
    }
}
console.log()

//Program-6) Write a program that determines if a year is a leap year.
{
    let year = 1576

    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        console.log("LEAP YEAR")
    }
    else {
        console.log("Not a leap year")
    }
}
console.log()

//Program-7) Write a program that calculates a discount based on the purchase
//amount.Prices equal or over 100 discount have a discount of 20. Prices
//equal or over 50 have a discount of 10. Otherwise discount is 0
{
    let price = 46

    let selling_price = ""
    if (price >= 100) {
        selling_price = price - price * (1 / 5)
        console.log(selling_price)
    }
    else if (price >= 50) {
        selling_price = price - price * (1 / 10)
        console.log(selling_price)
    }
    else {
        console.log(price)
    }
}
console.log()

//Program-8) Write a program that greets the user based on the time of day. Display
//good morning, good afternoon or good evening based on the time of day
//when you run the code.
{
    let time = 22.00

    if (time < 12.00) {
        console.log("🌄 Good Morning")
    }
    else if (time < 18.00) {
        console.log("🕝 Good afternoon")
    }
    else {
        console.log("🌃 Good Evening")
    }
}
console.log()

//Program-9) Write a program that calculates the Body Mass Index(BMI) and categorizes it.
// The formula of BMI is: weight/(height*height)
{
    let height = 5.3
    let weight = 42
    let h_meter = height * 0.3048
    let BMI = weight / (h_meter * h_meter)
    if (BMI < 18.5) {
        console.log("Under Weight")
    }
    else if (BMI < 25) {
        console.log("Normal Weight")
    }
    else if (BMI < 30) {
        console.log("Over Weight")
    }
    else {
        console.log("Obesity")
    }
}
console.log()

//Program-10) Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give
// players clues if their guess is higher, lower or correct. 
{
    let me = 5
    let guess = 7
    if (me == guess) {
        console.log("Correct")
    }
    else if (me < guess) {
        console.log("Guess is higher")
    }
    else {
        console.log("Guess is lower")
    }
}