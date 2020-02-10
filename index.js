var t=null;
var displayImgCount = 0;


window.onload = function(){
    cycleImage();
}

function cycleImage(){
    if (displayImgCount !== 0) {
        document.getElementById(displayImgCount).style.display = "none";
    }
    displayImgCount = displayImgCount === 9 ? 1 : displayImgCount + 1;
    document.getElementById(displayImgCount).style.display = "block";
    if(t){
        clearTimeout(t);
        t = null;
    }
    t=setTimeout(cycleImage, 500);
}

var i = 0;
var txt = 'I LOVE YOU 3000 ';
var speed = 2;
    for(i=0;i<3000;i++){
        txt = txt + "I LOVE YOU 3000 "
    }
i=0;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo1").innerHTML += txt.charAt(i);
        document.getElementById("demo2").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function clear1(){
    clearTimeout(t);
    t=null;
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
    document.getElementById("9").style.display = "none";
    document.getElementById("10").style.display = "block";
}