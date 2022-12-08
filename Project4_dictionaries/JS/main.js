window.alert("Please see inside and click on text to produce a result.")



function my_Dictionary(){
    var Animal={
        Species:"Dog",
        Color:"Brown",
        Breed:"Foxhound Mix",
        Age:6,
        Sound:"Bark!"
    }; // defining core parameters of dictionary

delete Animal.Age // defining Age parameters from dictionary to intentionally cause an error on the result.

document.getElementById("Dictionary").innerHTML = "Produces this sound: "+Animal.Sound + "   and is at the age of: "+Animal.Age;
}// concatenating some text strings for better comprehension of end user
