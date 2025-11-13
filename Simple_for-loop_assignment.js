//Program-1) Print Numbers from 1 to 10:
// Write a program to print numbers from 1 to 10 using a for loop.
{
    let n = 10
    console.log("Numbers from 1 to 10 in column=>")
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

{
    let n = 10
    bag = ""
    for (let i = 1; i <= n; i++) {
        bag += i + " "
    }
    console.log("Numbers from 1 to 10 in row=>", bag)
}
console.log()


//Program-2) Sum of First N Natural Numbers:Write a program to calculate the sum of the first
// N natural numbers, where N is provided by the user.
{
    let n = 10
    sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    console.log("Sum of First 10 Natural Numbers=>", sum)
}
console.log()


//Program-3) Factorial of a Number:Write a program to find the factorial of a given number
//using a for loop.
{
    let n = 5
    let factorial = 1
    for (let i = n; i >= 1; i--) {
        factorial = factorial * i
    }
    console.log("Factorial of 5=>", factorial)
}
console.log()


//Program-4) Print Even Numbers between 1 and 20:write a program to print all even numbers
//between 1 and 20.
{
    let n = 20
    console.log("Even Numbers between 1 to 20 in column=>")
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

{
    let n = 20
    bag = ""
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            bag += i + " "
        }
    }
    console.log("Even Numbers between 1 to 20 in row =>", bag)
}
console.log()

//Program-5) Multiplication Table:Write a program to print the multiplication table of a number
//provided by the user.
{
    console.log("Table of 5 =>")
    let table = 5

    let table_of_5 = ""
    for (let i = 1; i <= 10; i++) {
        table_of_5 = table * i
        console.log(table, "*", i, "=", table_of_5)
    }
}
console.log()


//Program-6) Reverse a String:Write a program to reverse a string using a for loop.
{
    let str = "Riya Sindhu"
    let bag = ""
    for (let i = str.length - 1; i >= 0; i--) {
        bag += str[i]
    }
    console.log("Reverse of Riya Sindhu =>", bag)
}
console.log()


//Program-7) Count Vowels in a String:Write a program to count the number of vowels in a
//given string.
{
    let str = "Hello World"
    let count = 0
    for (let i = 0; i <= str.length - 1; i++) {
        count += 1
    }
    console.log(count)
}
console.log()


//Program-8) Check Prime Number:Write a program to check if a given number is prime.
{
    let n = 2
    let factor = 0
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            factor++
        }
    }
    if (factor == 2) {
        console.log("Prime Number")
    }
    else[
        console.log("Not a Prime Number")
    ]
}
console.log()


//Program-9) Find the Largest Number in an Array:Write a program to find the largest number
// in a given array.
{
    let arr = [1, 2, 3, 6, 77, 80]
    let largest_number = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (largest_number < arr[i]) {
            largest_number = arr[i]
        }
    }
    console.log("Largest Number", largest_number)

}
console.log()


//Program-10) Sum of Elements in an Array:Write a program to calculate the sum of all elements
//in an array.
{
    let arr = [2, 4, 6, 7]
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log("Sum of arr =>", sum)
}

