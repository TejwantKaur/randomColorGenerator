// let btn = document.querySelector("button");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");
let divp = document.querySelector("p");

let existingContent = divp.innerText;

btn.addEventListener("click", function(){
    
    let randomClr = randClrFunc();
    h1.innerText = randomClr; 
    div.style.backgroundColor = randomClr;
    
    // divp.prepend(randomClr);
    divp.innerHTML = `${randomClr} <br> ${existingContent}`;
    console.log("Color Updated!!");
})

function randClrFunc(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`
    return color;
}