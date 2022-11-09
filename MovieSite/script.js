// Arrow
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNum = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        const ratio = Math.floor(window.innerWidth/480);
        clickCounter++;
        if(itemNum - (4+clickCounter)+ (4 - ratio) >=0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value -460}px)`
        }
        else{
            movieLists[i].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    });
});

// Dark and Light Mode Toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .movie-list-item-title, .movie-list-item-img, .menu-list-item a, .movie-list-item-desc");

ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})



