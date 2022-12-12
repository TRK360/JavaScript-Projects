window.alert("Please see inside and click on buttons to see various responses.")



function myArray() {
var Dog_Thought = [];
Dog_Thought [1] = "Bath ";
Dog_Thought [2] = "Good ";
Dog_Thought [3] = "Food ";
Dog_Thought [4] = "Bed ";
document.getElementById("Dog").innerHTML= "In this moment, Tango is thinking: "+ Dog_Thought[3] + ".";

// Array with parameter selection
}

function myCar(){
let car = {
    Make: "DeLorean ",
    Model: "DMC-12 ",
    Year: "1981 ",
    Color: "Clear Gloss Stainless ",
    description : function() {
        return "This Car is a " + this.Year + this.Color + this.Model;
    }
    
};
document.getElementById("Car").innerHTML=car.description();

}// Array with This function

var Tools = ["Hammer","Phillips Head Screwdriver","Plyers","Flat Head Screwdriver","Drill","Dremel"];
var Content="";
var Y; function for_Loop() {
                for (Y=0; Y<Tools.length; Y++){
Content += Tools[Y] + "<br>";

                }
                document.getElementById("List_of_Tools").innerHTML=Content;
}// For Loop including anything with a character length greater than 0

function my_Counter() {
        var Digit = "";
        var X = 1;
        while (X<4) {
                Digit += "<br>" + X;
                X++;
        }
                document.getElementById("C3").innerHTML=Digit;

}// While Loop limiting number of executions