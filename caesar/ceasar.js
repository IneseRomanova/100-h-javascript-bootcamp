function caesarsCipher(){
    let text = document.getElementById("msg-input").value // būs no user ievades
    let key = document.getElementById("key-input").value
    
    key = key % 26   // tik cik burti alfabētā
    
    let encryptedText = ""
    let currentCharCode = null
    let newCharCode = null
    for (let i = 0; i < text.length; i++){
        currentCharCode = text.charCodeAt(i)
        newCharCode = currentCharCode + key
        
        if (isCapitalLetter(currentCharCode)) {
            if (newCharCode >90){
                newCharCode = newCharCode - 26
            } else if (newCharCode < 65){
                newCharCode +=26
            }
        } else if (isLowerCaseLetter){
            if (newCharCode > 122){
                newCharCode -=26
            } else if (newCharCode <97){
                newCharCode +=26
            }
        } else {
            newCharCode = currentCharCode
        }

        let newChar = String.fromCharCode(newCharCode)
        encryptedText +=newChar
    }
  


let resultContainer = document.getElementById("result-container")
resultContainer.innerText = encryptedText
}

function isCapitalLetter(charCode) {
    return charCode >= 65 && charCode <= 90
}

function isLowerCaseLetter(charCode){
    return charCode >= 97 && charCode <= 122
}