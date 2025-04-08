myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "yellow";  
}

document.getElementById("photo").onmouseover = function() {
    mouseOver();
};

document.getElementById("photo").onmouseout = function() {
    mouseOut();
};

function mouseOver() {
    var img = document.getElementById("photo");
    img.style.height = "100px";
}

function mouseOut() {
    var img = document.getElementById("photo");
    img.style.height = "32px";
}