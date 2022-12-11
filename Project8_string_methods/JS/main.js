window.alert("Please see inside and click on buttons to see various responses.")



function myString() {
var A = "Hello ";
var B = "I ";
var C = "am ";
var D = "Mike ";
var F = A.concat(B,C,D);
document.getElementById("String").innerHTML= F;

}// concatenating some text strings for sentence generation



function mySlice() {
    var x = "Hello I am Mike!";
    var Y = x.slice(6,15);
    document.getElementById("Slice").innerHTML= Y;
    
    }// slice operation to extract simplified sentence
    var xx = 22/7;
    function myConvert() {
    
        var Y = xx.toString();
        document.getElementById("to_string").innerHTML= Y;
        
        }// 22/7 was the ancient greek's version of pi  

        function myPrecision() {
    
            var Y = xx.toPrecision(4);
            document.getElementById("to_limit").innerHTML= Y;
            
            }// this presends a more simplified variable of the above 