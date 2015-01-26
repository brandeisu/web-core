

/* Prakhar Sahay 12/27/2014

revolve.js interacts with divs on proto.php, transformations via CSS3

*/

var content_contain=document.getElementById("content_contain");
var backdrop=document.getElementById("backdrop");
var raf=requestAnimationFrame || webkitRequestAnimationFrame
	|| mozRequestAnimationFrame || function(callback){setTimeout(callback,1000/15)};
var NUM_PANELS=3;
var RADIUS=200;
var MINOR=100;
var PANEL_WIDTH=300;
var PANEL_HEIGHT=300;
var eY=400;
var eZ=400;
var oX=parseInt(backdrop.style.width,10)/2;
var oY=parseInt(backdrop.style.height,10)/2;

var panels=[];
initPanels();

// pause 5 sec, then call turn
function pauseTurn(){
	setTimeout(turn,5000);
}

// turn the panels,then render and raf(turn)
function turn(){

}

// produce the panel divs
function initPanels(){
	for(var i=0;i<NUM_PANELS;i++){
		var div=document.createElement("div");
		div.style.width=PANEL_WIDTH;
		div.style.height=PANEL_HEIGHT;
		div.style.position="absolute";
		div.style.backgroundColor="#0F0";
		var panel=new Panel(div,2*Math.PI*i/NUM_PANELS,0);
		panels.push(panel);
		content_contain.appendChild(div);
	}
	// render();
}

// set theta->(x,y) and slant
function Panel(elem,theta){
	this.elem=elem;

	this.update=function(th){// set theta,slant,x,y
		this.theta=th;
		// set (x,y)
		this.x=RADIUS*Math.sin(th);
		this.y=MINOR*Math.cos(th);
		console.log(this.x+", "+this.y);
		this.elem.style.left=oX-PANEL_WIDTH/2+this.x;
		this.elem.style.top=oY-PANEL_HEIGHT/2+this.y;

		this.slant=getSlant(this.y);
		console.log(this.slant);
		this.elem.style.transform="rotateY("+this.theta*(180/Math.PI)+"deg) skewY("+this.slant+"deg)";
	}

	this.update(theta);
}

// slope of (-,y,0) to (-,eY,eZ), ignore x-component
function getSlant(y){
	var phi=Math.PI-Math.atan(eZ/(eY-y));
	return phi*(180/Math.PI);
}
