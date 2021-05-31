
let letter = "ABC"

let charCode = letter.charCodeAt(0)  //iegūstam burta vietu
//console.log(charCode)
//console.log(letter.charCodeAt(1))

let l =  String.fromCharCode(77)
//console.log(l)

function caesarsCipher(text, key) {

}

 //let random = Math.random() //0.000000  - 0.99999999999// Math.random()*10 palielinas 0.999999
 //console.log(random)

 //Math.floor(4.5) === 4   
 //Math.floor(5,7) === 5

 /*function generateRandomNumber(){
      let random = Math.random() * 10
 let floored = Math.floor(random)
 return floored
 }


 //console.log(floored) // randoma būs skaitli lidz 9, ieskaitot, bet nekad 10

 //alert("hey !!!!")
 //let answer = prompt("What is day today?")

 let guess = prompt ("What number am I thinking of (0-9)?")
 if (guess === generateRandomNumber()){
     alert("good job, you have guessed number! It was" + floored)

 } else {
    alert("Sorry! you lost! the number was! It was" + floored)
 }*/
/*
 function greet(){
    console.log('Hello, World')  
 }
 function changeText(){
 let text = document.getElementById('myText')
 text.innerText = "You change the text"
 } */
/*
 let isGreen = true
 let colors = [ "red", "green", " blue", "yellow", "cyan"]
 function changeBackgroung(){
     let b = documnet.body
     let randomIndex = Match.floor(Math.random())
     if (isGreen) {
         b.style.backgroundColor = 'red'
     } else{
         b.backgroundColor = '#00FF00'
     }
     isGreen = !isGreen
 }
 */
 
 alert ("Welcome, we are glad to welcome you on our website ")
 let languages = prompt ('Which programming language do you want to learn? Please choose one of them HTML (H), Java (J), Javascript (JSc), Python (P)') 
if (languages === "H") {
  alert ('Great, You choose HTML')
} else if (languages === "J") {
  alert ("Great, You choose Java")
}else if (languages === "JSc") {
    alert ("Great, You choose Javascript")
} else {
    alert ("Great, You choose Python")
}

let days = prompt("what working days are suit you best? Please choose - Monday and Wednesday (MW) or Tuesday and Friday (TF)")

if (days === "MW" || languages === "H"){
  console.log("Nice, your choice is - HTML studies on Monday and Wednesday")
}else if (days === "MW" || languages === "J"){
  console.log("Nice, your choice is - Java studies on Monday and Wednesday")
}else if (days === "MW" || languages === "JSc"){
    console.log("Nice, your choice is - Javascript studies on Monday and Wednesday")
}else if (days === "MW" || languages === "P"){
    console.log("Nice, your choice is - Python studies on Monday and Wednesday")
}else if (days === "TF" || languages === "P"){
    console.log("Nice, your choice is - Python studies on Tuesday and Friday ")
}else if (days === "TF" || languages === "J"){
    console.log("Nice, your choice is - Java studies on Tuesday and Friday ")
}else if (days === "MW" || languages === "JSc"){
    console.log("Nice, your choice is - Javascript studies on Tuesday and Friday ")
}else if (days === "MW" || languages === "HTML"){
    console.log("Nice, your choice is - HTML studies on Tuesday and Friday ")
}
alert ("Thanks for your time, we will contact with you during the next working day!")


