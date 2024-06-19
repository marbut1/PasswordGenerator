// Genereer twee random passwords wanner de gebruiker op de knop klikt.
// Elk password moet 15 karakters lang zijn.
// Uitbreiding: mogelijkheid om de passwoordlengte in te stellen (max. 15).
// Mogelijkheid om symbolen en/of cijfers uit te sluiten. 

const alleKarakters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
"}","]",",","|",":",";","<",">",".","?", "/"];

const geenCijfers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
"}","]",",","|",":",";","<",">",".","?", "/"];

const geenSymbolen = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9"];

const geenCijfersOfSymbolen = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"];


let firstPasswordButton = document.getElementById("firstPassword")
let secondPasswordButton = document.getElementById("secondPassword")
let checkboxGeenCijfers = document.getElementById("geenCijfers")
let checkboxGeenSymbolen = document.getElementById("geenSymbolen")
let passwordLengthEl = document.getElementById("passwordLength")
let lengte = ""


firsPasswordButton.textContent = ""
secondPasswordButton.textContent = ""

passwordLengthEl.focus()


function generatePasswords() {
    lengte = document.getElementById("passwordLength").value 
    if (lengte > 15) {
        alert("Teveel karakters! (max. 15)")
        document.getElementById("passwordLength").value = ""
        lengte = 0
    } else {
        let firstPassword = ""
        let secondPassword = ""
        if ((checkboxGeenCijfers.checked === true) && (checkboxGeenSymbolen.checked === true)){
            for (let intI = 0 ; intI < lengte ; intI++){
                firstPassword += geenCijfersOfSymbolen[Math.floor(Math.random()*52)]
                secondPassword += geenCijfersOfSymbolen[Math.floor(Math.random()*52)]
            }
        } else {
            if (checkboxGeenCijfers.checked === true){
                for (let intI = 0 ; intI < lengte ; intI++){
                    firstPassword += geenCijfers[Math.floor(Math.random()*81)]
                    secondPassword += geenCijfers[Math.floor(Math.random()*81)]
                }
            } else {
                if (checkboxGeenSymbolen.checked === true){
                for (let intI = 0 ; intI < lengte ; intI++){
                    firstPassword += geenSymbolen[Math.floor(Math.random()*62)]
                    secondPassword += geenSymbolen[Math.floor(Math.random()*62)]
                }
            } else {
                for (let intI = 0 ; intI < lengte ; intI++){
                    firstPassword += alleKarakters[Math.floor(Math.random()*91)]
                    secondPassword += alleKarakters[Math.floor(Math.random()*91)]
                }
            }
            }
        } 
        firstPasswordButton.textContent = firstPassword
        secondPasswordButton.textContent = secondPassword
        passwordLengthEl.value = ""
        passwordLengthEl.focus()
        lengte = 0
    }    
}
    
