function random(number){
    return Math.floor(Math.random()*number)
}
const all=document.querySelectorAll(".button");
const button1=document.querySelector(".red");
const button2=document.querySelector(".blue");
const button3=document.querySelector(".green");
const button4=document.querySelector(".random");
button1.innerText="RED";
button2.innerText="BLUE";
button3.innerText="GREEN";
button4.innerText="RANDOM";
button1.style.backgroundColor="red";
button2.style.backgroundColor="blue";
button3.style.backgroundColor="green";
button1.addEventListener("click", ()=>{
    document.body.style.backgroundColor="#F00";
})
button2.addEventListener("click",()=>{
    document.body.style.backgroundColor="#00F";
})
button3.addEventListener("click", ()=>{
    document.body.style.backgroundColor="#0F0";
})
button4.addEventListener("click", ()=>{
    document.body.style.backgroundColor=`rgb(${random(255)}, ${random(255)}, ${random(255)})`
    button4.style.backgroundColor=`rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}, {once:false})

