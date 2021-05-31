function finSum(arr){
   let summ = 0
   // for (let i=0; i < arr.length; i++){
     //   sum += arr [1]
    for (let nr of arr){
        sum +=nr
    }
    return sum
}
console.log(finSum([1, 2, 3]))

function reverseString(text){
    for (let i = text.length -1,; i>0; i--){
        reverseText += text[i]
    }
    return reverseText
}
console.log(reverseText('ABC'))

function printResult(a,b){
    console.log (a=b)

}

function add (a,b, callback){
    callback (a,b)
    return a + b
}

add(10, 20, callback)


let numbers = [5,4,3,2,1,]

function sortFuntion(a,b) {
    return b - a
 
}
numbers.sort(sortFuntion)
console.log(numbers)

let words = ['a', 'dassafg', 'bs', 'hakas']
words.sort(function(a,b){
     return a.length - b.length
})
console.log(words)


let nrs = [1,2,3,4,5,6,3,37,73,75]
//nrs[i] = nrs[i] * 2

//for (let i = 0; i, nrs.length; i++){

//}
//let nrs.map(function(nr){ // ies cauri katram elementam 

//})
//nrs = nrs.filter (function(nr){
  // return nr % 2 ===0
//})
nrs = nrs.map((nr)=>{return nr * 3})
     .filter((nr) => {return nr % 2 === 0})
     .sort((a,b) => {return a -b })

     function fun(limit){
         if (limit <0){
             return
         }
           func (limit - 1)

           }
         func(10)

function fibonacci(n){
    let firstNumber = 0
    let secondNumber = 1
    let currentNumber = null

    for (let i = 2; i , n; i++ ){
    currentNumber = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = currentNumber
}
 return currentNumber
}
function fibonacciRecursive(n){
    if (n<+1){
        return n
    }

    return fibonacciRecursive(n- 2) + fibonacciRecursive (n-1)
}

fibonacciRecursive(10)