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