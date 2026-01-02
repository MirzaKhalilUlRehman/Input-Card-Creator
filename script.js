let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit",(data)=>{
data.preventDefault();
let main = document.createElement("div");
main.classList.add("main");
let card_container = document.createElement("div");
card_container.classList.add("card-container");
let profile_pic = document.createElement("div");
profile_pic.classList.add("profile-pic");
let img = document.createElement("img");
let name = document.createElement("h1");
let occupation = document.createElement("h3");
let info = document.createElement("p");
img.setAttribute("src", inputs[0].value);
name.textContent = inputs[1].value;
occupation.textContent = inputs[2].value;
info.textContent = inputs[3].value;

});