window.alert("Please see inside and click on text to produce a result")

var A="This is the beginning of the string",B=" and this is the end of the string\'s content."

function my_function(){
    var sentence = "i am learning"; //this is one variable of the result of clicking the paragraph text referenced in html
    sentence += "a whole heck of a lot!"; // same as avove variable
    document.getElementById("Concantenate").innerHTML = sentence;// end result combines due to the += notation
}


document.write(A+B);  //this is concantenating the two variables down in the body