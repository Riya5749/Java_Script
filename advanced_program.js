// Program-1) Find the largest number in an array: Write a function that takes an array
// of numbers and returns the largest number

//Solution:=>
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
    console.log("4) This Solution is simple While loop =>", sum);
}

