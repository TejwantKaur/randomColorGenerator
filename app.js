// let btn = document.querySelector("button");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");
let divp = document.querySelector("p");

btn.addEventListener("click", function(){
    
    let randomClr = randClrFunc();
    h1.innerText = randomClr; 

    div.style.backgroundColor = randomClr;
    
    // divp.prepend(randomClr);
    
    let existingContent = divp.innerHTML;
    divp.innerHTML = `${randomClr} <br> ${existingContent}`;
    console.log("Color Updated!!");
})

// btn.addEventListener("click", function(){
//     let randomClr = randClrFunc();

//     // Find and remove the previously prepended color value
//     let existingColorNode = divp.querySelector(".color-value");
//     if (existingColorNode) {
//         divp.removeChild(existingColorNode);
//     }

//     // Create a new element for the color value and prepend it
//     let colorElement = document.createElement("span");
//     colorElement.classList.add("color-value");
//     colorElement.textContent = randomClr;

//     // divp.prepend(colorElement);

//     let existingContent = divp.innerHTML;
//     divp.innerHTML = `${colorElement.textContent} <br> ${existingContent}`;
    

//     console.log("Color Updated!!");
// });
function randClrFunc(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`
    return color;
}