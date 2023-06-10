var style = document.getElementById("style");
var icon = document.getElementById("dmode");
var manifest = document.getElementById("manifestID");
var androidColor = document.getElementById("androidColorID");

if(!localStorage.getItem("theme")){
    style.href = "main.css";
    icon.src = "icons/dark.svg";
    manifest.href = "manifest.json";
    localStorage.setItem("theme","light");
}else{
    if(localStorage.getItem("theme") == "dark"){
        style.href = "dmode.css";
        icon.src = "icons/light.svg"
        manifest.href = "manifest_d.json";
        androidColor.content = "#262626";
        localStorage.setItem("theme","dark");
    }
    else{
        style.href = "main.css";
        icon.src = "icons/dark.svg"
        manifest.href = "manifest.json";
        androidColor.content = "#4379bd";
        localStorage.setItem("theme","light");
    }
}


if(localStorage.getItem("theme") == "light"){
    document.getElementById("dmode").innerHTML = "Dark Mode";
}else{
    document.getElementById("dmode").innerHTML = "Light Mode";
} 


function toggleMode(x){
    if(localStorage.getItem("theme") == "light"){
        x.innerHTML = "Light Mode";
        icon.src = "icons/light.svg"
        style.href = "dmode.css"
        manifest.href = "manifest_d.json";
        androidColor.content = "#262626";
        localStorage.setItem("theme","dark");
    }else{
        x.innerHTML = "Dark Mode";
        icon.src = "icons/dark.svg"
        style.href = "main.css"
        manifest.href = "manifest.json";
        androidColor.content = "#4379bd";
        localStorage.setItem("theme","light");
    }
}


//Mode Change Rotate Animation
let x = document.getElementById("modeClick");
icon.addEventListener("click", function(){
    x.classList.add("rotate");
    setTimeout(() => {
        x.classList.remove("rotate");
    }, 1000);
});



//service worker code
if('serviceWorker' in navigator){
    try{
        navigator.serviceWorker.register('serviceWorker.js');
        console.log("Success, Service Worker Registered!");
    }catch(err){
        console.log("Failed, Service Worker Not Registered!")
    }
}





const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
let menuOpen = false;
let burgerOpen = false;


burger.addEventListener('click',()=>{
    if(menuOpen == false && burgerOpen == false){
        menu.classList.add("open");
        burger.classList.add("active");
        burger.classList.add("rotateB"); 
        menuOpen = true;
        burgerOpen = true;
    }
    else if(menuOpen == true && burgerOpen == true){
        menu.classList.remove("open");
        burger.classList.remove("active");
        burger.classList.remove("rotateB");
        menuOpen = false;
        burgerOpen = false;
    }
    else{
        menu.classList.remove("open");
        burger.classList.remove("active");
        burger.classList.remove("rotateB");
    }
});

document.addEventListener('mouseup', function(e) {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove("open");
        burger.classList.remove("active");
        burger.classList.remove("rotateB");
        menuOpen = false;
        burgerOpen = false;
    }
  });
  


const iclick = document.getElementsByClassName("ic")[0];
const captureDiv = document.getElementsByClassName("captureS")[0];
const categoryDiv = document.getElementsByClassName("category")[0];
const captureIcon = document.getElementById("captureIcon");
const lineActive = document.getElementsByClassName("line")[0];

iclick.addEventListener("click",()=>{
    captureIcon.classList.toggle("on");
    iclick.classList.toggle("rotateDown");
    //categoryDiv.style.height ="300px";
    categoryDiv.classList.toggle("showCapture");
    //captureDiv.style.display = "grid";
    captureDiv.classList.toggle("beGrid");
    lineActive.classList.toggle("on");
});


