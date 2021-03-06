var canvas = document.getElementById("battle");
var ct = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var canWidth = canvas.width;
var canHeight = canvas.height;

var background = function()
{
	ct.beginPath();
	ct.strokeStyle = "#b54dff";
	ct.moveTo(canWidth * .512, 0);
	ct.lineTo(canWidth * .544, canHeight * .034);
	ct.stroke();
	ct.closePath();
	ct.beginPath();
	ct.lineWidth = 2.9;
	ct.strokeStyle="#FFFFFF"
	ct.moveTo(0, canHeight * .25);
	ct.lineTo(canWidth * .10, canHeight * .22);
	ct.lineTo(canWidth * .15, canHeight * .24);
	ct.lineTo(canWidth * .41, canHeight * .09);
	ct.lineTo(canWidth * .45, canHeight * .105);
	ct.lineTo(canWidth * .56, canHeight * .02);
	ct.lineTo(canWidth * .59, canHeight * .02);
	ct.lineTo(canWidth * .60, canHeight * .01);
	ct.stroke();
	ct.closePath();
	ct.beginPath();
	ct.strokeStyle = "#9f1aff";
	ct.moveTo(canWidth * .60, canHeight * .01);
	ct.lineTo(canWidth * .73, canHeight * .19);
	ct.lineTo(canWidth * .745, canHeight * .19);
	ct.lineTo(canWidth * .792, canHeight * .25);
	ct.stroke();
	ct.closePath();
	ct.beginPath();
	ct.lineWidth = .4;
	ct.strokeStyle = "#FFFFFF";
	ct.moveTo(0, canHeight * .105);
	ct.lineTo(canWidth * .14, canHeight * .07);
	ct.lineTo(canWidth * .208, canHeight * .117);
	ct.stroke();
	ct.closePath();
	ct.beginPath();
	ct.lineWidth = 1.2;
	ct.moveTo(canWidth * .132, canHeight * .23);
	ct.lineTo(canWidth * .26, canHeight * .04);
	ct.lineTo(canWidth * .36, canHeight * .04);
	ct.lineTo(canWidth * .41, 0);
	ct.stroke();
	ct.closePath();
	ct.beginPath();
	ct.lineWidth = .4;
	ct.strokeStyle = "#ca80ff";
	ct.moveTo(canWidth * .716, canHeight * .17);
	ct.lineTo(canWidth * .76, canHeight * .14);
	ct.lineTo(canWidth * .813, canHeight * .2);
	ct.stroke();
	ct.closePath();
	ct.beginPath();
	ct.lineWidth = 4;
	ct.strokeStyle = "#590099";
	ct.moveTo(canWidth * .78, canHeight * .282);
	ct.lineTo(canWidth * .89, 0);
	ct.stroke();
	ct.closePath();
	ct.beginPath();
	var moonLight = ct.createLinearGradient (0, 0, canWidth, 0);
	moonLight.addColorStop("0.10", "#FFFFFF");
	moonLight.addColorStop("0.52", "#590099");
	moonLight.addColorStop("0.71", "#9f1aff");
	moonLight.addColorStop("0.88", "#590099");
	moonLight.addColorStop("1", "#FFFFFF");
	ct.strokeStyle = moonLight;
	ct.lineWidth = 6;
	ct.lineCap = "round";
	ct.moveTo(0, canHeight * .3);
	ct.bezierCurveTo(canWidth * .30, canHeight * .267, canWidth * .70, canHeight * .267, canWidth, canHeight * .3);
	ct.fill();
	ct.stroke();
	ct.closePath();
}
background();

var moonshine = 60
var moonsize = 3

var moon = function()
{
	ct.clearRect(canWidth * .69, 0, canWidth * .145, canHeight * .13);
	ct.beginPath();
	var moonGrad = ct.createRadialGradient(canWidth * .784, canHeight * .025, moonsize, canWidth * .78, canHeight * .06, moonshine);
	moonGrad.addColorStop(0, "#3b0066");
	moonGrad.addColorStop(0.2, "white");
	moonGrad.addColorStop(0.6, "#590099");
	moonGrad.addColorStop(0.8, "#1e0033");
	moonGrad.addColorStop(1, "black");
	ct.fillStyle = moonGrad;
	ct.fillRect(canWidth * .69, 0, canWidth * .145, canHeight * .13);
	ct.stroke();
	moonshine++;
	moonsize = moonsize - .1;
	if(moonshine >= 60)
	{
		window.setTimeout(moonFlux, 200)
	}
	else
	{
		window.setTimeout(moon, 300)
	}
}

var moonFlux = function()
{
	ct.clearRect(canWidth * .69, 0, canWidth * .145, canHeight * .13);
	ct.beginPath();
	var moonGrad = ct.createRadialGradient(canWidth * .784, canHeight * .025, moonsize, canWidth * .78, canHeight * .06, moonshine);
	moonGrad.addColorStop(0, "#3b0066");
	moonGrad.addColorStop(0.2, "white");
	moonGrad.addColorStop(0.6, "#590099");
	moonGrad.addColorStop(0.8, "#1e0033");
	moonGrad.addColorStop(1, "black");
	ct.fillStyle = moonGrad;
	ct.fillRect(canWidth * .69, 0, canWidth * .145, canHeight * .13);
	ct.stroke();
	moonshine--;
	moonsize = moonsize + .1;
	if(moonshine <= 52)
	{
		window.setTimeout(moon, 300)
	}
	else
	{
		window.setTimeout(moonFlux, 200)
	}
}
moon();

