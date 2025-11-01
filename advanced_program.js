console.log();
// Program-3) Reverse an array: Write a function to reverse the elements of 
// an array without using built-in reverse() method.
{
    let arr = [2, 7, 8, 4, 3, 0]

    let reverse_function = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse_function += arr[i] + " "
    }
    console.log("1) This solution is Simple for loop=>", reverse_function);
}

{
    let arr = [2, 7, 8, 4, 3, 0]

    let reverse_function = []
    let i = arr.length - 1
    while (i >= 0) {
        reverse_function += arr[i] + " "
        i--
    }
    console.log("2) This Solution is Simple while loop=>", reverse_function);
}

