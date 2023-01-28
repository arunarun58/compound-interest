

const event1 = document.getElementById("calc-el")
const event2 = document.getElementById("clear-el")

event1.addEventListener("click", function(){
    let p = parseInt(document.getElementById("principle-el").value)
    let r = parseInt(document.getElementById("ir-el").value)
    let n = parseInt(document.getElementById("ntimes-el").value)
    let t = parseInt(document.getElementById("time-el").value)

    let a = p*((1+r/n)^(n*t));

    
    
    

    document.getElementById("output-el").innerText = a;
})

event2.addEventListener("click", function(){
    document.getElementById("output-el").innerText = ""
    document.getElementById("principle-el").value=""
    document.getElementById("ir-el").value=""
    document.getElementById("ntimes-el").value=""
    document.getElementById("time-el").value=""
})
