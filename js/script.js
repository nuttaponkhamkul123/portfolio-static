
console.log("script mounted");
var easter = document.getElementsByClassName("hidden-elem")[0];
var popcat = document.getElementById("popcat");
var number = document.getElementById("number");
var button = document.getElementById("clickme");
var pop = document.getElementById("pop");
var btn = document.querySelectorAll("a.nav-item");
var pitem = document.querySelectorAll(".project-item")
const PROJECT_DETAIL = [
    {
        id: 0,
        "title" : "Parcel Management",
        "description" : "this project was created by me.<br> After my dad told me to do it for his job",
        "link" : "https://github.com/nuttaponkhamkul123/parcel1.0",
        "img" : "./images/proj1.png"
    },
    {
        id: 1,
        "title" : "CS251 Final Project",
        "description" : "Computer part E-commerce using PHP and mySQL ",
        "link" : "https://github.com/nuttaponkhamkul123/bij",
        "img" : "./images/proj2.png"
    }

]

// just a random junk number
console.log(Math.ceil(Math.random()*10));
console.log(btn[1].innerHTML)


//pinfo click event 
let pinfo = document.querySelector(".pinfo");
pinfo.addEventListener("click" ,function(){
    pinfo.style.display = "none";
})
function nav(number){
    console.log("nav")
    for(let i = 0 ; i < 3 ; i++){
        if(i != number){
            btn[i].classList.remove("active");
        }
    }
    btn[number].classList.add("active")
}
function add(){
    console.log(number.innerHTML)
    let temp = parseInt(number.innerHTML);
    temp += 1;
    number.innerHTML = temp;
    easter.style.display = "block";
    pop.play();
}

function mouseout(){
    easter.style.display = "none";
}
function mouseup(){
    popcat.src = "./images/meme-pop-cat-pack-1.png"
}
function mousedown(){
    popcat.src = "./images/meme-pop-cat-pack-2.png"
}

function pdetail(number){
    let infbox = document.querySelector(".pinfo");
    infbox.classList.add("project-animate")

    document.querySelector(".pd-box.pd-img > img").src = PROJECT_DETAIL[number].img + ""
    for(let i = 0 ; i < PROJECT_DETAIL.length;i++){
        if (PROJECT_DETAIL[i].id === number){
            infbox.classList.toggle("project-animate")
            let inf_title = infbox.querySelector(".pinfo-title")
            let inf_desc = infbox.querySelector(".pinfo-desc")
            inf_title.innerHTML = PROJECT_DETAIL[i].title
            inf_desc.innerHTML = PROJECT_DETAIL[i].description
            infbox.style.display = "block";
            infbox.addEventListener("click", function(){ 
                infbox.classList.remove("project-animate")
                // document.querySelectorAll(".project-item")[number].classList.remove("pdetail-animation")
            })
        }
    }
}

