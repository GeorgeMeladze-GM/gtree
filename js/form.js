let Title = document.querySelector("#Title")
let Desc = document.querySelector("#Description")
let formDate = document.querySelector("#Date")
let Skills = document.querySelector("#Skills")
let Img = document.querySelector("#Browse")
let Submit = document.querySelector("#Submit")


let b1 = document.querySelector("#b1")
let b2 = document.querySelector("#b2")
let b3 = document.querySelector("#b3")
let b4 = document.querySelector("#b4")


Title.addEventListener("input", () => {
    if(Title.value != "") {
        b1.setAttribute('style', 'display: block !important;');
    } else{
        b1.removeAttribute("style")
    }
})    
Desc.addEventListener("input", () => {
    if(Desc.value != "") {
        b2.setAttribute('style', 'display: block !important;');
    } else{
        b2.removeAttribute("style")
    }
})    
formDate.addEventListener("input", () => {
    if(formDate.value != "") {
        b3.setAttribute('style', 'display: block !important;');
    } else{
        b3.removeAttribute("style")
    }
})    
Skills.addEventListener("input", () => {
    if(Skills.value != "") {
        b4.setAttribute('style', 'display: block !important;');
    } else{
        b4.removeAttribute("style")
    }
}) 

let selects = document.querySelector("#selectSpace")

Skills.addEventListener("click", ()=>{
    selects.style.display = "block"
    
})

let s1 = document.querySelector("#s1")
let s2 = document.querySelector("#s2")
let s3 = document.querySelector("#s3")
let s4 = document.querySelector("#s4")
let s5 = document.querySelector("#s5")
let s6 = document.querySelector("#s6")
let s7 = document.querySelector("#s7")

s1.addEventListener("click", () => {
    Skills.value += " HTML, ";
})
s2.addEventListener("click", () => {
    Skills.value += " CSS, ";
})
s3.addEventListener("click", () => {
    Skills.value += " JavaScript, ";
})
s4.addEventListener("click", () => {
    Skills.value += " React.JS, ";
})
s5.addEventListener("click", () => {
    Skills.value += " WordPress, ";
})
s6.addEventListener("click", () => {
    Skills.value += " PHP, ";
})
s7.addEventListener("click", () => {
    Skills.value += " MYSQL, ";
})




Submit.addEventListener("click", (e) => {
    e.preventDefault();
    let formObj = {
        title: Title.value,
        description: Desc.value,
        date: formDate.value,
        skills: Skills.value,
        image: Img.value
    }
    let formJson = JSON.stringify(formObj);

    Title.value = ""
    Desc.value = ""
    formDate.value = ""
    Skills.value = ""
    Img.value = ""
    

    console.log(formObj);
    console.log(formJson);
})

let hint1 = document.querySelector("#hint1")
let hint2 = document.querySelector("#hint2")
let hint3 = document.querySelector("#hint3")
let hint4 = document.querySelector("#hint4")

let mobHint1 = document.querySelector("#mobHint1")
let mobHint2 = document.querySelector("#mobHint2")
let mobHint3 = document.querySelector("#mobHint3")
let mobHint4 = document.querySelector("#mobHint4")


let Switch = document.querySelector(".slider")
let ClickCounter = 0;
let Qbox = document.querySelector("#QBox")
Switch.addEventListener("click", () =>{
    ClickCounter++;
    if(ClickCounter % 2 == 1) {
        hint1.style.display = "block"
        Qbox.style.display = "block"
        
        if(window.screen.width <= 1106) {
            mobHint1.setAttribute ('style', 'display: block !important;');
        }
        
        Title.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "block"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
            if(window.screen.width <= 1106) {
                mobHint1.setAttribute ('style', 'display: block !important;');
                mobHint2.style.display = "none"
                mobHint3.style.display = "none"
                mobHint4.style.display = "none"
            }
            
           
        })
        
        Desc.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "block"
            hint3.style.display = "none"
            hint4.style.display = "none"
            if(window.screen.width <= 1106) {
                mobHint1.style.display = "none"
                mobHint2.setAttribute ('style', 'display: block !important;');
                mobHint3.style.display = "none"
                mobHint4.style.display = "none"
            }
            
        })
        
        formDate.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "block"
            hint4.style.display = "none"
            if(window.screen.width <= 1106) {
                mobHint1.style.display = "none"
                mobHint2.style.display = "none"
                mobHint3.setAttribute ('style', 'display: block !important;');
                mobHint4.style.display = "none"
            }
            
        })
        
        Skills.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "block"
            if(window.screen.width <= 1106) {
                mobHint1.style.display = "none"
                mobHint2.style.display = "none"
                mobHint3.style.display = "none"
                mobHint4.setAttribute ('style', 'display: block !important;');
            }
            
        })
        
        console.log("111");

    } else {

        Qbox.style.display = "none"
        hint1.style.display = "none"
        hint2.style.display = "none"
        hint3.style.display = "none"
        hint4.style.display = "none"
        mobHint1.style.display = "none"
        mobHint2.style.display = "none"
        mobHint3.style.display = "none"
        mobHint4.style.display = "none"
        Title.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
            mobHint1.style.display = "none"
            mobHint2.style.display = "none"
            mobHint3.style.display = "none"
            mobHint4.style.display = "none"
        })
        
        Desc.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
            mobHint1.style.display = "none"
            mobHint2.style.display = "none"
            mobHint3.style.display = "none"
            mobHint4.style.display = "none"
        })
        
        formDate.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
            mobHint1.style.display = "none"
            mobHint2.style.display = "none"
            mobHint3.style.display = "none"
            mobHint4.style.display = "none"
        })
        
        Skills.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
            mobHint1.style.display = "none"
            mobHint2.style.display = "none"
            mobHint3.style.display = "none"
            mobHint4.style.display = "none"
        })
        console.log("222");
    }
    
})



