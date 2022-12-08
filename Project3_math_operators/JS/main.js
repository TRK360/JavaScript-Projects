window.alert("Please see page herein, there are a series of mathematical demonstrations.  Please click on text to see the results")
window.alert(Math.random()*100000+" is your random number for this visit");

function addition_function(){
    var solution_a = 6+3; //this is an addition operator
    
    document.getElementById("addt").innerHTML = "Upon adding 3 to 6, your new sum is: "+solution_a;// end result combines with text string
}
function subtraction_function(){
    var solution_s = 31-6; //this is a subtraction operator
    
    document.getElementById("subt").innerHTML = "Upon subtracting 6 from 31 the remaining value is: "+solution_s;// end result combines with text string
}
function modulus_function(){
    var solution_m = 25 % 6; //this is a modulus operator
    
    document.getElementById("modl").innerHTML = "Upon dividing 25 by 6, there will be a remainder of: "+solution_m;// end result combines with text string
}
function multiplication_function(){
    var solution_x = 2*14; //this is a multiplication operator
    document.getElementById("mult").innerHTML = "Upon multiplying 2 by 14 the result is: "+solution_x;// end result combines with text string
}

    function My_demo_Function()	{
        var str = "The value is climbing: ";
        var B=100;
        B++;

        document.getElementById("Button_Text").innerHTML = str+B;
    }//this is an incremental operator 
    

    
    document.body.appendChild(button);//this displays the results in the button itself
    
    
    
  
    
    
    
    function My_demo2_Function()	{
        var str = "The value is dropping: ";
        var C=1000;
        C--;


        document.getElementById("Button_Text2").innerHTML = str+C;
    }//this is an decremental operator 
    

    
    document.body.appendChild(button);//this displays the results in the button itself
  
    

