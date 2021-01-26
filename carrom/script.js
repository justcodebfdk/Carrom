const c1 = document.getElementById("canvas1");
const context1 = c1.getContext('2d');



// context1.beginPath();
// context1.arc(150, 75, 15, 0, 2 * Math.PI);
// context1.fillStyle = "blue"
// context1.fill();



x = 150;
y = 75;
dx=1;
dy=2.8;
radius=15;

function mvStriker(){
	if(x + radius > 445)            
      { context1.clearRect(0, 0, 450, 450);
        return;
      }
	
    requestAnimationFrame(mvStriker);
	
	context1.clearRect(0, 0, 450, 450);
	context1.fillStyle = "black";
	context1.beginPath();
	context1.arc(15, 15, 25, 0, 2 * Math.PI);
	context1.closePath();
	context1.fill();

	context1.fillStyle = "black";
	context1.beginPath();
	context1.arc(435, 435, 25, 0, 2 * Math.PI);
	context1.closePath();
	context1.fill();

	context1.fillStyle = "black";
	context1.beginPath();
	context1.arc(15, 435, 25, 0, 2 * Math.PI);
	context1.closePath();
	context1.fill();

	context1.fillStyle = "black";
	context1.beginPath();
	context1.arc(435, 15, 25, 0, 2 * Math.PI);
	context1.closePath();
	context1.fill();
	
	if( x + radius > 450 || x - radius < 0  ) {

    		dx = -dx;
  	}

  	if(  y + radius > 450 || y - radius < 0 ) {

    		dy = -dy;
  	}

  	x += dx;
  	y += dy;

    context1.fillStyle = "blue";
    context1.beginPath();
    context1.arc(x, y, 15, 0, 2 * Math.PI);
    context1.closePath();
    context1.fill();
	
	}
mvStriker();




