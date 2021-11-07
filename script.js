const myColor = ["red","green","rgba(133,122,200)","#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector("#color");

btn.addEventListener("click",function (){
    // let num = getRandom();
    let num1 = randomNum1();
    let num2 = randomNum2();
    let num3 = randomNum3();
    console.log(num1,num2,num3);
    document.body.style.backgroundColor =;
    // document.body.style.backgroundColor = myColor[num];
    // color.textContent = myColor[num];
    // color.textContent = myColor[num];
});

function getRandom(){
    return Math.floor(Math.random()*myColor.length);
}

const randomNum1 = () =>{
    let num1 = Math.floor((Math.random()*255)+1);
    return num1;
}
const randomNum2 = () =>{
    let num2 = Math.floor((Math.random()*255)+1);
    return num2;
}
const randomNum3 = () =>{
    let num3 = Math.floor((Math.random()*255)+1);
    return num3;
}