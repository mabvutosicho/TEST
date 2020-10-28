




let canv = document.querySelector("canvas");

canv.width = window.windth;
canv.height = window.height;
let cont = canv.getContext("2d");


cont.beginPath();
cont.arc(100,100,30,0,Math.PI*2,false)
cont.stroke();
