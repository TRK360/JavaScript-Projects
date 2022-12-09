window.alert("Welcome to your Ternary_Operators_Constructors examples...")

document.write("Below we will see if you are old enough to have lived in the last millenai.")



function Test_Function(){
    var 
        Age1,
        VALID;
        Age1 = document.getElementById("Age1").value;
        VALID = (Age1 < 23) ? "Post-2k":"Pre-2k";
        document.getElementById("Solution").innerHTML=VALID + "  Have a great day!";


}
function Count_Function(){
     
        document.getElementById("Counting").innerHTML=Count();   // demonstrating an nested function
        function Count(){
                    var Starting_Point = Age1.value;
                    function Plus_One() {Starting_Point += 1;}
                    Plus_One();
                    return Starting_Point;
        }
    }
        function Vehicle(Make,Model,Year,Color){
            this.Vehicle_Make = Make;
            this.Vehicle_Model= Model;
            this.Vehicle_Year= Year;
            this.Vehicle_Color= Color;
            
            }; // defining core parameters of stored objects "Vehicle"s
        
        var Jack = new Vehicle("Dodge","Viper", 2020, "Red");
        var Emily = new Vehicle("Jeep","TrailHawk", 2019, "White and Black");
        var Erik = new Vehicle("Ford","Pinto", 1972, "Mustard");
        var Mike = new Vehicle("Audi","TT", 2008, "Black");
        // assigning new data to "Vehicle"s
        function myFunction() {
        document.getElementById("Keywords_and_Constructors").innerHTML=
        "Mike Drives a "+Mike.Vehicle_Color+"-colored "+Mike.Vehicle_Model+" manufactured in "+Mike.Vehicle_Year;
        
        }
        // Returned results to display per HTML instructions @ "Keywords_and_Constructors" id


