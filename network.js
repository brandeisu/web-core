/* Prakhar Sahay 01/18/2015

Use node_heap[] and edge_heap[] to produce the graphical map on network.html.
Position nodes over the canvas and draw edges to the canvas.
*/

var content=document.getElementById("content_body");
var svg=document.getElementsByTagName("svg")[0];
var offset=getOffset(content);
console.log(offset);

var elem=document.createElement("line");
elem.setAttribute("x1",500);
elem.setAttribute("y1",150);
elem.setAttribute("x2",500);
elem.setAttribute("y2",75);
elem.setAttribute("style","stroke:rgb(0,0,255);stroke-width:2");
svg.appendChild(elem);

function NetNode(name,img_name,picX,picY,x,y){
	this.element=document.createElement("div");
	this.element.title=this.name=name;
	this.element.className="net_node";
	this.element.style.backgroundImage="url('res/members/"+img_name+"')";

	this.element.style.backgroundPosition=(picX||0)+"px "+(picY||0)+"px";
	this.element.style.left=x;
	this.element.style.top=y+168;
	content.appendChild(this.element);
}

function getOffset(elem){
	var offset=elem.offsetLeft;
	while(elem.offsetParent!=null){
		elem=elem.offsetParent;
		offset+=elem.offsetLeft;

	}
	return offset;
}


var node_heap=[
	new NetNode("Mitchell Beers","Beers.jpg",-25,-5,450,150),
	new NetNode("Ari Ben-Elazar","BenElazar.jpg",-35,-10,0,100),
	new NetNode("Anna Bessendorf","Bessendorf.jpg",-100,-45,0,0),
	new NetNode("Dor Cohen","Cohen.jpg",-25,0,0,0),
	new NetNode("Emily Conrad","Conrad.jpg",-5,-10,0,0),
	new NetNode("Brian Dorfman","Dorfman.jpg",-10,0,0,0),
	new NetNode("Lorenzo Finamore","Finamore.jpg",-5,-15,0,0),
	new NetNode("Brittany Finney","Finney.jpeg",-215,-25,0,0),
	new NetNode("Charlotte Franco","Franco.jpg",-80,-25,0,0),
	new NetNode("Skye Golann","Golann.jpg",-22,-20,0,0),
	new NetNode("Gali Gordon","Gordon.png",-120,-55,0,0),
	new NetNode("David Heaton","Heaton.jpg",-120,-50,0,0),
	new NetNode("David Herbstritt","Herbstritt.jpg",-25,-15,0,0),
	new NetNode("Brian Hough","Hough.jpg",-50,-5,0,0),
	new NetNode("Meher Irani","Irani.png",-15,-20,0,0),
	new NetNode("Helen Lee","Lee.jpg",-53,-33,0,0),
	new NetNode("Xinyu (Annie) Li","Li.jpg",-270,-90,150,0),
	new NetNode("Ben Margolin","Margolin.jpg",-43,-5,0,0),
	new NetNode("Ruth Messele","Messele.jpg",-60,-10,0,0),
	new NetNode("Mary Michalos","Michalos.png",0,-80,0,0),
	new NetNode("Andrew Miller","Miller.jpg",-120,-25,250,50),
	new NetNode("Sofia Muhlmann","Muhlmann.jpg",-6,0,0,0),
	new NetNode("Judy Nam","Nam.jpg",-8,-2,0,200),
	new NetNode("Leah Newman","Newman.png",-60,-25,0,0),
	new NetNode("Lauren Phillips","Phillips.jpg",-40,0,0,0),
	new NetNode("Kira Setren","Setren.jpg",0,-5,0,0),
	new NetNode("Mohamed Sidique","Sidique.jpg",-80,-55,0,0),
	new NetNode("Sneha Walia","Walia.jpg",-140,-70,450,0),
	new NetNode("Luxi Wen","Wen.jpg",-10,0,0,0),
	new NetNode("Millie Wu","Wu.jpg",-46,-31,0,0),
	new NetNode("Shukai Zhang","Zhang.jpg",-20,-10,0,0),
	new NetNode("Caiwei (Alison) Zheng","Zheng.jpg",-20,0,0,0)
];


