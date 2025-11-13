//Program-1) Find the largest Number in an array: Write a function that takes an array
//of numbers and returns the largest number
{
    let arr = [23, 67, 34, 99, 467, 267, 290]

    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    console.log("1) This solution is simple for loop =>", max);
}

{
    let arr = [23, 67, 34, 99, 467, 267, 290]

    let max = arr[0]
    for (let i in arr) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    console.log("2) This solution is simple in loop =>", max);
}

{
    let arr = [23, 67, 34, 99, 467, 267, 290]

    let max = arr[0]
    for (let i of arr) {
        if (max < i) {
            max = i
        }
    }
    console.log("3) This solution is simple of loop =>", max);
}

{
    let arr = [23, 67, 34, 99, 467, 267, 290]

    let max = arr[0]
    let i = 0
    while (i < arr.length) {
        if (max < arr[i]) {
            max = arr[i]
        }
        i++
    }
    console.log("4) This solution is Simple While loop =>", max);
}
console.log();

// Program-2) Write a function to calculate the sum of all element in an Array.

//Solution:=>
{
    let arr = [34, 23, 5, 6, 9]

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log("1) This Solution is simple for loop =>", sum);
}

{
    let arr = [34, 23, 5, 6, 9]

    let sum = 0
    for (let i in arr) {
        sum = sum + arr[i]
    }
    console.log("2) This Solution is simple in loop =>", sum);
}

{
    let arr = [34, 23, 5, 6, 9]

    let sum = 0
    for (let i of arr) {
        sum = sum + i
    }
    console.log("3) This Solution is simple of loop =>", sum);
}

{
    let arr = [34, 23, 5, 6, 9]

    let sum = 0
    let i = 0
    while (i < arr.length) {
        sum = sum + arr[i]
        i++
    }
    console.log("4) This Solution is simple while loop =>", sum);
}

console.log();

// Program-3) Reverse an array: Write a function to reverse the elements of an array without
//using built-in reverse() method
{
    let arr = [34, 7, 8, 4, 5, 3]

    let reverse_arr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse_arr += arr[i] + " "
    }
    console.log("1) This Solution is simple for loop=>", reverse_arr);
}


{
    let arr = [34, 7, 8, 4, 5, 3]

    let reverse_arr = []
    let i = arr.length - 1
    while (i >= 0) {
        reverse_arr += arr[i] + " "
        i--
    }
    console.log("2) This Solution is simple while loop =>", reverse_arr);
}

console.log();

// Program-5) Find the intersection of two arrays:
// Write a function that takes two arrays and return a new array containing elements common
// to both arrays.

{
    let arr1 = [3, 6, 3, 6, 79, 7]
    let arr2 = [3, 5, 9, 79, 8, 7]

    let intersection = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
            intersection.push(arr1[i])
        }
    }
    console.log("1) This solution is simple for loop =>", intersection);
}

{
    let arr1 = [3, 6, 3, 6, 79, 7]
    let arr2 = [3, 5, 9, 79, 8, 7]

    let intersection = []
    for (let i in arr1) {
        if (arr1[i] == arr2[i]) {
            intersection.push(arr1[i])
        }
    }
    console.log("2) This Solution is simple in loop =>", intersection);
}

{
    let arr1 = [3, 6, 3, 6, 79, 7]
    let arr2 = [3, 5, 9, 79, 8, 7]

    let intersection = []
    let i = 0
    while (i < arr1.length) {
        if (arr1[i] == arr2[i]) {
            intersection.push(arr1[i])
        }
        i++
    }
    console.log("3) This Solution is simple while loop =>", intersection);
}
console.log();

//Program-6) Array chunking:
// Write a function that splits an array into chunks of a specified size.
{
    let arr = [3, 6, 3, 7, 89, 68, 45, 34]

    console.log("This Solution is Simple for loop=>");
    for (let i = 0; i < arr.length; i++) {
        let bag = ""
        for (let j = 0; j <= i; j++) {
            bag += arr[j] + "  "
        }
        console.log(bag);

    }
}

{
    let arr = [3, 6, 3, 7, 89, 68, 45, 34]

    console.log("2) This solution is Simple while loop=>");
    let i = 0
    while (i < arr.length) {
        let bag = ""
        let j = 0
        while (j <= i) {
            bag += arr[j] + "  "
            j++
        }
        console.log(bag);
        i++
    }
}
console.log();

//Program-7) Rotate an array: 
//Write a function to rotate an array by n positions.
{
    let arr = [5, 7, 3, 2, 9, 78, 4]

    let arr1 = []
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i])
    }
    console.log("1) This solutin is simple for loop=>", arr1);
}

{
    let arr = [5, 7, 3, 2, 9, 78, 4]

    let i = arr.length - 1
    let arr1 = []
    while (i >= 0) {
        arr1.push(arr[i])
        i--
    }
    console.log("2) This solutin is simple while loop=>", arr1);
}
console.log();

// // Program-8) Find the missing number: 
// // Write a function that takes an array contains number from 1 to n 
// // with one number missing, and return the missing number
{
    let arr = [1, 3, 5, 6, 7, 8]

    let s = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== s) {
            console.log("1) This Solution is Simple for loop =>", s);
            break;
        }
        s++
    }
}

{
    let arr = [1, 2, 3, 5, 6]

    let s = arr[0]
    for (let i in arr) {
        if (arr[i] !== s) {
            console.log("2) This Solution is Simple in loop =>", s);
            break;
        }
        s++
    }
}

let arr = [1, 2, 3, 6]

let s = arr[0]
for (let i of arr) {
    if (i !== s) {
        console.log("3) This Solution is Simple of loop =>", s);
        break;
    }
    s++
}

{
    let arr = [1, 3, 4, 5, 6]

    let s = arr[0]
    let i = 0
    while (i < arr.length) {
        if (arr[i] != s) {
            console.log("4) This Solution is Simple While loop =>", s);
            break;
        }
        i++
        s++
    }

}
console.log();

// Program-10) Reverse a string;
// Write a function to reverse a string.
{
    let s = "Riya Sindhu"

    let bag = ""
    for (let i = s.length - 1; i >= 0; i--) {
        bag += s[i]
    }
    console.log("1) This Solution is Simple for loop =>", bag);
}

{
    let s = "Riya Sindhu"

    let bag = ""
    let i = s.length - 1
    while (i >= 0) {
        bag += s[i]
        i--
    }
    console.log("2) This Solution is Simple While loop =>", bag);
}
console.log()


//Progra-12) Count Vowels in a String:
// Write a function to count the number of vowels in a given string.
{
    let str = "Riya Sindhu"

    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            count++
        }
        else {

        }
    }
    console.log("1) This Solution is simple for loop =>", count)
}

{
    let str = "Riya Sindhu"

    let count = 0
    for (let i in str) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            count++
        }
        else {

        }
    }
    console.log("2) This Solution is simple in loop =>", count)
}

{
    let str = "Riya Sindhu"

    let count = 0
    for (let i of str) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            count++
        }
        else {

        }
    }
    console.log("3) This Solution is Simple of loop =>", count)
}

{
    let str = "Riya Sindhu"

    let count = 0
    let i = 0
    while (i < str.length) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            count++
        }
        else {

        }
        i++
    }
    console.log("4) This Solution is Simple While loop =>", count)
}





























