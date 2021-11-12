let statutCarre1 = false ;
let statutCarre2 = false ;
let statutCarre3 = false ;
let statutCarre4 = false ;
let randomPassword ;
let randomLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z"];
let randomUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
        "P","Q","R","S","T","U","V","W","X","Y","Z"];
let randomNumber = ["0","1","2","3","4","5","6","7","8","9"];
let randomSpecialCharacters = ["~", "}","|","{","'","-","^","]","\\","[","@","?",">","=","<",";",
":","/",".","_",",","+","*",")","(","`","&","%","$","#",'"',"!"," "];
console.log("lower case : " + randomLowerCase.length);
console.log("upper case : " + randomUpperCase.length);
console.log("number : " + randomNumber.length);
console.log("special character : " + randomLowerCase.length);

document.body.addEventListener("click",(e) => {
    console.log(e.target.id)
    if (e.target.id == "carre1") {
        if( statutCarre1 === false) {
        statutCarre1 = true;
        console.log("ok")
        document.getElementById("carre1").style.transform = "scale(0.7)";
        document.getElementById("carre1").style.backgroundColor = "var(--selector)";
        
        } else if(statutCarre1 === true) {
            statutCarre1 = false;
            document.getElementById("carre1").style.transform = "scale(1)";
            document.getElementById("carre1").style.backgroundColor = "var(--background)";
        }
    } else if(e.target.id == "carre2") {
        if( statutCarre2 === false) {
            statutCarre2 = true;
            console.log("ok2")
            document.getElementById("carre2").style.transform = "scale(0.7)";
            document.getElementById("carre2").style.backgroundColor = "var(--selector)";
            } else if(statutCarre2 === true) {
                statutCarre2 = false;
                document.getElementById("carre2").style.transform = "scale(1)";
                document.getElementById("carre2").style.backgroundColor = "var(--background)";
            }
    } else if(e.target.id == "carre3") {
        if( statutCarre3 === false) {
            statutCarre3 = true;
            console.log("ok3")
            document.getElementById("carre3").style.transform = "scale(0.7)";
            document.getElementById("carre3").style.backgroundColor = "var(--selector)";
            } else if(statutCarre3 === true) {
                statutCarre3 = false;
                document.getElementById("carre3").style.transform = "scale(1)";
                document.getElementById("carre3").style.backgroundColor = "var(--background)";
            }
    } else if(e.target.id == "carre4") {
        if( statutCarre4 === false) {
            statutCarre4 = true;
            console.log("ok4")
            document.getElementById("carre4").style.transform = "scale(0.7)";
            document.getElementById("carre4").style.backgroundColor = "var(--selector)";
            } else if(statutCarre4=== true) {
                statutCarre4 = false;
                document.getElementById("carre4").style.transform = "scale(1)";
                document.getElementById("carre4").style.backgroundColor = "var(--background)";
            }  
    }
    
})

let score = document.getElementById("scoreSelector").innerHTML;
console.log("score : " + score)
document.getElementById("generateBtn").addEventListener("click", () => {
    if (statutCarre1 === true) {
        for(let i = 0 ; i <= score;i++){
            randomPassword = random() * randomLowerCase.length;

        }
    }
})

document.getElementById("selector").addEventListener("click", (e) => {
    console.log("barre : " + e.clientX)
    if (e.clientX >= 386 && e.clientX <= 527){
    document.getElementById("selectorBar").style.transform = `translateY(-5px) translateX(${e.clientX - 376}px)`
    } else if (e.clientX <= 386) {
        document.getElementById("selectorBar").style.transform = `translateY(-5px) translateX(10px)`
    } else {
        document.getElementById("selectorBar").style.transform = `translateY(-5px) translateX(151px)`
    }
    let score = 4 + Math.floor((e.clientX - 386 ) / 7.05);
    if (score <= 4) {
        score = 4;
    } else if(score >= 24) {
        score = 24;
    }
    document.getElementById("scoreSelector").innerHTML = `${score}`
    }
    
)