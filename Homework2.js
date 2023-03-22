//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function foodDisplay(obj){
    for (const key in obj){
        if (typeof obj[key] == "string"){
            console.log(obj[key])
        }
        else{
            foodDisplay(obj[key])
        }
    }
}
foodDisplay(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
// Use an arrow to create the printInfo method
    this.printInfo = () =>{
        console.log(`Name: ${this.name} \nAge: ${this.age}`)
    }
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.ageUp = () =>{
        this.age++;
    }
}
john = new Person("John", 27)
jack = new Person("Jack", 76)

john.printInfo()
jack.printInfo()
for (let i = 0; i < 3; i++){
    john.ageUp()
}
john.printInfo()
// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isBigWord = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length >= 10){
            resolve(true)
        } else{
            reject(false)
        }
    })
}
isBigWord("hibadibjib")
.then( () => {
    console.log("Big Word")
})
.catch( () => {
    console.log("Small Number")
})

// CODEWARS

//Find the odd int
function findOdd(A){
    let ASet = new Set(A);
    for (setNum of ASet){
        let counter = 0;
        for (arrNum of A){
            if (setNum == arrNum){
                counter++
            }
        }
        if (counter % 2 == 1){
            return setNum
        }
    }
}
let arr = [1,2,2,3,3,3,4,3,3,3,2,2,1]
console.log(findOdd(arr))

// Multiples of 3 or 5
function solution(number){
    let numArr = []
    for (let i = 3; i < number; i += 3){
        numArr.push(i)
    }
    for (let i = 5; i < number; i += 5){
        numArr.push(i)
    }
    numArr = new Set(numArr)
    let sum = 0
    for (num of numArr){
        sum += num
    }
    return sum
}
console.log(solution(10))