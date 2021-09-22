
console.log("script mounted");
var easter = document.getElementsByClassName("hidden-elem")[0];
var popcat = document.getElementById("popcat");
var number = document.getElementById("number");
var button = document.getElementById("clickme");
var pop = document.getElementById("pop");

// just a random junk number
console.log(Math.ceil(Math.random()*10));



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