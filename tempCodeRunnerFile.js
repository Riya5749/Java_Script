
    for(let i=n; i>=1; i--){
factorial=factorial*i
    }
    console.log("Factorial of 5=>",factorial)
} 
console.log()


//Program-4) Print Even Numbers between 1 and 20:write a program to print all even numbers
//between 1 and 20.
{
let n=20
console.log("Even Numbers between 1 to 20 in column=>")
for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}
}

{
    let n=20
    bag=""
    for(let i=1; i<=n; i++){
        if(i%2==0){
          bag+=i+" "
        }   
    }
    console.log("Even Numbers between 1 to 20 in row =>",bag)
}
console.log()

//Program-5) Multiplication Table:Write a program to print the multiplication table of a number
//provided by the user.
{
    console.log("Table of 5 =>")
    let table=5

    let table_of_5=""
    for(let i=1; i<=10;i++){
table_of_5=table*i
console.log(table,"*",i,"=",table_of_5)
    }
}
console.log()


//Program-6) Reverse a String:Write a program to reverse a string using a for loop.
{
    let str="Riya Sindhu"
    let bag=""
    for(let i=str.length-1; i>=0; i--){
        bag+=str[i]
    }