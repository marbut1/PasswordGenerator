// Genereer twee random passwords wanner de gebruiker op de knop klikt.
// Elk password moet 15 karakters lang zijn.
// Uitbreiding: mogelijkheid om de passwoordlengte in te stellen.
// Mogelijkheid om symbolen en/of cijfers uit te sluiten. 

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
"}","]",",","|",":",";","<",">",".","?", "/"];

let firstPasswordButton = document.getElementById("firstPassword")
let secondPasswordButton = document.getElementById("secondPassword")
let lengte = ""

function openInput() {
    document.getElementById("passwordLength").setAttribute("type", "text")
    document.getElementById("passwordLength").focus()
    document.getElementById("firstPassword").textContent = ""
    document.getElementById("secondPassword").textContent = ""
}

document.getElementById("passwordLength").addEventListener("keypress",(event) => {
    if (event.key != "Enter") {
        lengte += event.key
        alert(event.key)
    } else {    
        alert(event.key)
        let firstPassword = ""
        let secondPassword = ""
        alert("lengte = " + lengte)
        for (let intI = 0 ; intI < lengte ; intI++){
            firstPassword += characters[Math.floor(Math.random()*91)]
            secondPassword += characters[Math.floor(Math.random()*91)]
        }
        firstPasswordButton.textContent = firstPassword
        secondPasswordButton.textContent = secondPassword
        document.getElementById("passwordLength").setAttribute("type", "hidden")
        document.getElementById("passwordLength").value = ""
        lengte = 0
        alert(firstPasswordButton.textContent)
        alert(secondPasswordButton.textContent)
    }
})

