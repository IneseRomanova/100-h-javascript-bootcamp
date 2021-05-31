

/*function multiplay(a,b){
    let result = a *b 
    return result
}
let res = multiplay(100,3)
console.log(res)

function add (a,b){
    let result = a + b 
    return result
}

let res1 = add (100,3)
console.log(res1)

function subtract(a,b){
    let result = a - b 
    return result
}
let res2 = subtract (100,3)
console.log(res2)

function divide (a,b){
    let result = a / b 
    return result
}
let res3 = divide (100,3)
console.log(res3)

let  = 5
a = 9
a = 20

const b = 10
//AND &&
let someVar = true
let v = true && true //true
let y = true && false // false

// oR
let otherVar = false
let zz = someVar || otherVar //true

//NOT !
let bb = !otherVar // bb = true

//>greater than
5>3 // true

//  smaler than
10<2 //false

//>=
10>=0+10//true

//<=
let q = 5
q <= 5 * 5//true

// = assigment
let ff = 'ABC'

//== or === equals
5==5 // true
5 === 5 //true
5 === 3 // false

//! = not equals
10 != 5 * 5 //true
3 !== 9 //true

let u = 10
u = u + 2//12
u += 2//14

let r = 100
r = r -2 //98
r -= 2 //96

let m = 5
m = m * 5 //25
m *= 2 //50

let p = 5
//+ incrementing
p = p+1 //6
p +=1 //7
P ++ //8
++ p //9

//--decrementing
let qw = 100
qw = qw -1 //99
qw -= 1 //98
qw -- //97
--qw //96 */

/*let animal = {
    name: "Good doggo",
    color: "White and black",
    height :100,
    pet: function() {//method is a function inside of an object
        console.log('The dog feels good when you pet it')
    },

    feed: function(food){

        console.log('The dog is very much enjoying eating ' + food)
    }
}

animal.pet()
animal.feed("sausages")*/

// conditional statements
//branching

/*let boolOne = false
let boolTwo = true
let boolThree = false

if (boolOne && boolTwo) {
    console.log('If!')
} else if((boolOne || boolTwo) && boolThree){
    console.log("Else if one!")
    }
   else if ( 10 == 10){
        console.log("Else if two!")
    }
else {
    console.log('Else!!')
}*/

/*let a= "abc"
let b = a.length

let d = "deff"
let e = d.length

console.log("abc".lenght +10)*/

/*let animal = "cat"

//[] square brackets

let firstLetter = animal[0] //piekluve burtam
console.log(firstLetter)

let planet = "neptune"

console.log(planet[0])
console.log(planet[5])

console.log(planet.indexOf('n'))
console.log(planet.lastIndexOf('n'))

console.log(planet.indexOf('n', 1))*/

/*let magicWord = "abrakadabra"
console.log(magicWord.toUpperCase())

let sun = "SUN"
console.log("SUN".toLowerCase())

console.log("abc".toUpperCase() == "ABC")*/

/*
let magicWord = "abrakadabra"

let newWord = magicWord.slice(4)
console.log(newWord)

let otherWord = magicWord.slice(4, 7)
console.log(otherWord)

console.log(otherWord[0])

let combined = otherWord[0] + magicWord[0] + otherWord[2]
console.log(combined)
console.log(otherWord == combined) 
console.log(otherWord.length == combined.length)
*/
/*
let ww = 'nlndlehfijqerlqerljqyttytstyhstjtj'
console.log(ww.length)
console.log(ww.slice(-3))//burti no aizmugures
*/
/*
let greeting = "hello, World!"
console.log(greeting)
greeting = greeting.replace("World", "Javascript")
console.log(greeting)*/


// Arrays

/*let someObj = {
    someProperty: "someValue"
}
let a = 'abc'
let b = 5
let arr = [a, b, 'QQ', true, false, someObj]
//objects have methots and 
let arrLength = arr.length

console.log(arr.length)
console.log(arr[0])
console.log(arr[4])

console.log(arr[5].someProperty)

arr.push('Latest value')//ieliekam array list vēl vienu vērtību
console.log(arr[6])

arr.pop() //noņemt pēdējo element
*/
/*
let numbers = [1,2,3,4,5]
console.log(numbers)

numbers[0] = 100
console.log(numbers)*/

// for-loop
/*for(let i = 0; i <= 10; i+=2) {//body of the loop
    console.log(i)
}
*/
/*let names = ['Ance', 'Anna', 'Lina']

for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

// for/of loop
for (element of names){
    console.log(element)
}*/
/*
let numbers = [100, 500, 1000, 500]

let sum = numbers[0] + numbers[2]

let sum=0
for (nr of numbers) {
    sum = sum + nr 
    
}

let newNumbers = [1,2,3,4,5]
let ssum = 0
for (let i = 0; i < newNumbers.length: i++){
    ssum +=newNumbers[i]
}
*/

//while loop
/*
let i = 0
while(i < 10){
    console.log(i)
    i++
}
*/


//create two variables, assign numbers to those variables, change volumes

//sleepIn(false, false) - true
// sleepIn(true, false) - false
// sleepIn(false, true) - true
/*function sleepIn(weekDay, vacation){
    return
}
*/
//Given a string name, e.g. return a greeting of the form "Hello, Josh! 
//helloName('Josh') - Hello, Josh
//helloName('Jared") - Hello, Jared

//given an "out" string of length 4 such as "<<>>", and a word,
// return a new string where the word is in the middle of the out string, <<word>>
//makeOutWord("<<>>", "AnyWord") ==> <<anyWord>>

/*19.04.*/
/*let someNumbers = 5
someNumber = 7 // nav vairs jādefinē*/
/*
let = isSunny = true
let = isSpring = true
let = isRaining = false
let = isHumid = true

let isSummerSoon = isSunny && isSpring
let itsGoingToBeThunder = isRaining || isHumid

if (isSummerSoon){
    console.log('Lets get the beach body ready!')
} else if (itsGoingToBeThunder) {
    console.log('I need an umbrellla')
} else{
    console.log("What is the weather then?")
}


for (let i=0; i < 11; i++){
    console.log(i)
}





for (let i = 0; i <10; i +=2){
    console.log(i)
}
*/
/*
let seasons = ['winter', 'spring', 'summer', 'autumn']
console.log(seasons.length)
console.log(seasons[1])
console.log(seasons[3])

seasons[1] = 'The season of flowers' // nomainit elementu
console.log(seasons)

for (let i = 0; i < seasons.length; i++) { //loop lai pieklutu visiem elementiem
console.log(seasons[i])
}

//for-off loop
for (el of seasons) {
    console.log(el)
}
let numbers = [1,2,3,4,5]
let sum= 0
for (nr of numbers){
    sum += nr
}
console.log(sum)*/

/*
//Defining the function
function getSum(numbers) {
    let sum = 0
    for (n of numbers) {
        sum +=n
    }
    return sum
}

//calling the function
let ourSum = getSum ([1,2,3,4,5])
console.log(ourSum)*/



















