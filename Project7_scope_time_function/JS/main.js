window.alert("Please see inside and click on text to produce a result.")




var guess = 40 //Global Variable

function Test_Function(){
	if (Price.value < 23) {document.getElementById("Solution").innerHTML="Your price is too low!"}
    else{document.getElementById("Solution").innerHTML="Your price is too high!"}

}//If statement

function Time_Function(){
	var Time = new Date().getHours();
	var Reply;
		if (Time<12==Time>0){
				Reply="It is morning time!  You are going to need $ " + guess;
		}
		else if (Time>=12 == Time<18){
				Reply ="It is the afternoon.  You are going to need $ " + guess;
		}
		else {Reply="It is evening time.  You are going to need $ " + guess;}

	document.getElementById("Time_of_Day").innerHTML=Reply;
}//Time Function Demo including use of global variable and local variable

function Bad_Function(){
		var x=23
		document.getElementById("Intended_Fail").innerHTML = w} // Produces this message in Chrome Dev Tools Console: main.js:30 Uncaught ReferenceError: w is not defined
		//at Bad_Function (main.js:30:56)
		//at HTMLParagraphElement.onclick (index.html:29:56)