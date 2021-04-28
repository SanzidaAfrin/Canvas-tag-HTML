var c = document.getElementById("emoji");
var ctx = c.getContext("2d");

ctx.lineWidth = "2.5";
ctx.fillStroke = "blue";
ctx.strokeRect(8,8,364,264);

ctx.fillStyle = "#30336b";
ctx.fillRect(10,10,360,260);

ctx.beginPath();
ctx.arc(c.width/2.1,c.height/2.1,75,0,2*Math.PI,false);
ctx.fillStyle = "#303952";
ctx.fill();
ctx.strokeStyle = "white";
ctx.lineWidth = "4"
ctx.stroke();

//inside circle
ctx.beginPath();
ctx.arc(c.width/1.86,c.height/2.3,13,0,2*Math.PI,false);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(c.width/1.86,c.height/2.3,5,0,2*Math.PI,false);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(c.width/2.4,c.height/2.3,13,0,2*Math.PI,false);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(c.width/2.4,c.height/2.3,5,0,2*Math.PI,false);
ctx.fillStyle = "black";
ctx.fill();

//half circle
ctx.beginPath();
ctx.arc(c.width/2.1,c.height/1.9,40,0,Math.PI,false);
ctx.strokeStyle = "white";
ctx.lineWidth = "4.8"
ctx.stroke();



// ctx.strokeStyle = "white";
// ctx.stroke();
