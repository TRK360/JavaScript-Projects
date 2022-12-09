window.alert("Please see page herein, there are a series of MORE mathematical demonstrations.  Please click on text or buttons to see the results")

document.write("Beginning Text String to introduce below page.  I wasn't a fan of how the \"document.write()\" function kept refreshing the whole page with the inherent result, so I reformatted to a slightly more efficient model to test with.  Intent of this statement is to include the \"document.write()\" function for assignment purposes.  Thanks!")


function compare1_function(){

    document.getElementById("comp1").innerHTML = "Upon comparing if str \"10\" is the same as value 10, we see: "+("10"==10);  
    
}//this is a string vs number comparison of values

function compare2_function(){

    document.getElementById("comp2").innerHTML = "Upon comparing if str \"10\" is the same as value 10 (while confirming that each element is the same DATA TYPE) we see: "+("10"===10);  //this is an addition operator
    
    
}//this is a string vs number comparison of values and with like data-type
function grtrthan_function(){
    var solution_m = (23>6); 
    
    document.getElementById("grtr").innerHTML = "Upon analyzing if 23 is greater than 6, the result is: "+solution_m;// end result combines with text string
    
}//this is a greater than comparison
function lessthan_function(){
    var solution_x = (31<63); 
    document.getElementById("less").innerHTML = "Upon analyzing if 31 is less than 63, the result is: "+solution_x;// end result combines with text string
}//this is a less than comparison
function isnot_function(){
    
    document.getElementById("isnt").innerHTML = "Upon FALSELY comparing if 20 is greater than 10, we actually see: "+!(20>10);// end result combines with text string
}//this is an is-not comparison (like opposite day)
    
    function aaand_function(){
        var solution_x = (5>2 && 10>90); //this is a multiplication operator
        document.getElementById("aaand").innerHTML = "Upon analyzing if 5 is greater than 2 AND if 10 is greater than 90, we see this condition is:   "+solution_x;// end result combines with text string
    }//this is a combination of comparisons, all of which must be correct to yield a 'true' result
    
    document.body.appendChild(button);//this displays the results in the button itself
    
    
    function orrr_function(){
        var solution_x = (5>2 || 10>90); //this is a multiplication operator
        document.getElementById("orrr").innerHTML = "Upon analyzing if 5 is greater than 2 OR if 10 is greater than 90, we see this condition is:   "+solution_x;// end result combines with text string
    }//this is a combination of comparisons, only one of which must be correct to yield a 'true' result
  
    
    
    
    function My_demo2_Function()	{
        var str = "The value is CONCANTENATING: ";
        var C=1000;
        var str2="30"


        document.getElementById("Button_Text2").innerHTML = str+C+str2;
    }//this is an example of concantenating
    

    
    document.body.appendChild(button);//this displays the results in the button itself
  
    

