let ham = document.getElementById("burgir");
let nav = document.getElementById("navbar");
ham.addEventListener("click",function(){
    if(nav.style.display === ""){
        nav.style.display = "flex";
        nav.style.position = "sticky";
    }
    else nav.style.display = "";
    ham.classList.toggle("change");
});

let nav_content = document.getElementsByClassName("redirect");
var prev_scroll = [0,200,600,1000,0];
for(let i = 0;i<nav_content.length;i++){
    nav_content[i].addEventListener("click",function(){
        if($(window).scrollTop()!=prev_scroll[i]){
            $(window).scrollTop(prev_scroll[i]);
        }
        nav.style.display = "";
    })
}

let scrollup = document.getElementById("scrollup");

window.onscroll = function(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop>20){
        scrollup.style.display = "block";
    }else{
        scrollup.style.display ="none";
    }
}

scrollup.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
