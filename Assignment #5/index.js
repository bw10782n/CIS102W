var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//Draw Rectangle//
//to fill the rectangle you use fillstyle
c.fillStyle="blue";
/c.fillRect(x,y,width,height);/
c.fillRect(200,100,200,100);
c.fillStyle="grey";
c.fillRect(200,200,100,100);
c.fillStyle="blue";
c.fillRect(200,300,200,100);


//Draw a line
c.beginPath(); // we are saying that in canvas we are going to begin a path
//c.moveTo(x,y)
c.moveTo(100,200); // where on canvas we going to being a path
c.lineTo(300,100); // untill where you want the line to be
c.strokeStyle ="purple"; //to give a color to line
c.stroke() // until you say stroke line will not popup
console.log(canvas);

// Draw a circle
//c.arc(x,y,radius, startangle, endangle, drawcounterclockwise = true/false)
c.beginPath();
c.arc(300,300,300, Math.PI*2,false)
c.strokeStyle ="white";
c.stroke();

//for loop example with circles
for(var i=1; i<5; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x,y,30,0, Math.PI*2,false)
  c.strokeStyle ="white";
  c.stroke();

}