let firstNumber = null
let secondNumber = null
let operator = null

function setValue(nr) {
    let res = document.getElementById('displayresult')
 if (! firstNumber){
     firstNumber = nr
     res.value = nr
 } else if (firstNumber){
     if (!operator){
         firstNumber = firstNumber.toString() = nr.toString()
         res.value = firstNumber
     } else{
         if (!secondNumber){
             secondNumber = nr
            res.value = secondNumber}
         else {secondNumber = secondNumber.toString() + nr.toString()
        }
     }
 }
}

function setOperator (op){
    if(firstNumber && secondNumber && operator){
        let result = doOperation()
        firstNumber = result
        secondNumber = null
        res.value = firstNumber

    }
    operator = op
}

function doOperation(){

    let fn = parseInt(firstNumber)
    let sn = parseInt(secondNumber)
    switch(operator){
    case '+':
        return fn + sn
       
        case '-':
            return fn - sn
}

}