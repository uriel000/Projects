let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountain1 = document.querySelector("#mountain1");
let mountain2 = document.querySelector("#mountain2");
let trees = document.querySelector("#trees");
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");
let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    stars.style.left = value*0.5 + 'px';
    stars.style.left = value*0.5 + 'px';
    moon.style.top = value*1 + 'px';
    moon.style.marginLeft = value*1.2 + 'px';
    mountain2.style.top = value*0.5 + 'px';
    text.style.marginLeft = value*4 + 'px';
    btn.style.marginTop = value*1 + 'px';
    header.style.top = value*0.5 + 'px';

});
