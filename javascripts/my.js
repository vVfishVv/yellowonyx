<script type="text/javascript">
<!--
//assignments
var typedYes = yes;
var enterCount = 0;
//input
typedYes = prompt("Are you going to hit enter? (hit enter or type no)", "yes");
//calculations
while (typedYes == "yes") //start loop
{
	enterCount = enterCount + 1;

typedYes = prompt("Are you going to hit enter again? (hit enter or type no)", "yes");
}//end loop bracket
	
	
//output
document.write("You mashed the enter key " + enterCount + " times!")
document.write("<br>")


// -->
</script>