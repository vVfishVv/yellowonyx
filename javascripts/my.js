function buttonMash()
{
//assignments
	var script;
var typedYes = yes;
var enterCount = 0;
var bpm = 0;
//input
typedYes = prompt("Are you going to hit enter? (hit enter or type no)", "yes");
//calculations
while (typedYes == "yes") //start loop
{
	enterCount = enterCount + 1;
    bpm = enterCount / 60;
typedYes = prompt("Hit enter to keep going or type anything else and enter to stop", "yes");
}//end loop bracket
//div get	
script = document.getElementById('script');
//output
script_div.innerHTML = alert("You mashed the enter key at " + bpm + " Beats Per Minute!!");
}