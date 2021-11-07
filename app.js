const myColor = ["red","green","rgba(133,122,200)","#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector("#color");

btn.addEventListener("click",function (){
    let num = getRandom();
    document.body.style.backgroundColor = myColor[num];
    color.textContent = myColor[num];
    color.textContent = myColor[num];
});

function getRandom(){
    return Math.floor(Math.random()*myColor.length);
}