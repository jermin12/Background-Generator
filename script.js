var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body= document.getElementById("gradient");
var css1=document.querySelector("h4");
var b1= document.getElementById("random");

function setGradient()
{
	body.style.background= "linear-gradient(to right,"
	+ color1.value 
	+ " , "
	+ color2.value 
	+ " ) ";
	css.textContent = body.style.background;
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

b1.addEventListener("click",function()
{
css1.textContent = Math.random() + " , " + Math.random();
})



