let statutCarre1 = false ;
let statutCarre2 = false ;
let statutCarre3 = false ;
let statutCarre4 = false ;

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