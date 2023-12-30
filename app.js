/* Created by Tivotal */

let canvas = document.querySelector("#canvas");

let ctx = canvas.getContext("2d");
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

//Set Canvas Background Color;
canvas.width = winWidth;
canvas.height = winHeight;
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, winWidth, winHeight);

//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "#fff";

function animate() {
  //Random position and size of stars;
  let x = winWidth * Math.random();
  let y = winHeight * Math.random();
  let r = 2.5 * Math.random();

  //Draw the stars;
  ctx.beginPath();
  ctx.fillStyle = "#fff";
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  setTimeout(animate, 100);
}

animate();
