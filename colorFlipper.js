const myColor = ["red","gree","rgba(133,122,200)","#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector("color");

btn.addEventListener("click",function (){
    const num = 2;
    document.body.style.backgroundColor = myColor[num];
    color.textContent = myColor[num];
});