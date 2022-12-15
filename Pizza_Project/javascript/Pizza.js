function getReceipt() {
    var text1="<h4>You Ordered:<h4>";
    var runningTotal = 0;
    var sizeTotal=0;
    var sizeArray = document.getElementsByClassName("size");
        for (var i = 0; i<sizeArray.length; i++) {
            if (sizeArray[i].checked) {
                var selectedSize = sizeArray[i].value;
                text1=text1+selectedSize+"<br>";
                }
        }//for purposes of tracking quantity of items ordered for price and result display needs
if (selectedSize==="Personal Pizza") {sizeTotal=6;}
        else if(selectedSize==="Medium Pizza"){sizeTotal=10;}
        else if(selectedSize==="Large Pizza"){sizeTotal=14;}
        else if(selectedSize==="Ex Large Pizza"){sizeTotal=16;}
        else if(selectedSize==="By Slice"){sizeTotal=4;}

        runningTotal = sizeTotal;
        console.log(selectedSize+" = $"+sizeTotal+".00");
        console.log("size text1: "+text1);
        console.log("subtotal: $"+runningTotal+".00");
        getTopping(runningTotal,text1);

} //responses to optional conditions for size

function getTopping(runningTotal,text1) {

        var toppingTotal = 0;
        var selectedTopping = [];
        var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j<toppingArray.length; j++) {
            if (toppingArray[j].checked) {
                    selectedTopping.push(toppingArray[j].value);
                    console.log("Selected Topping Item(s): ("+toppingArray[j].value+")");
                    text1 = text1+toppingArray[j].value+"<br>";

            }
    } //quantifies selected toppings and keeps track for display

var toppingCount=selectedTopping.length;
    if(toppingCount>1) {
            toppingTotal=(toppingCount-1);

    }
    else {toppingTotal=0;}

runningTotal=(runningTotal+toppingTotal);
console.log("Total selected topping items: "+toppingCount); // end result with 1 free topping factored out

console.log(+toppingCount+" topping -1 free topping = "+toppingCount); //explanation of free topping at console

console.log("topping text1: "+text1); //toppings data at each iteration

console.log("Purchase Total: "+"$"+runningTotal+".00"); //sum of pricing (base price plus 1 dollar for each topping charged for)

document.getElementById("showText").innerHTML=text1; //produces list of toppings and size
document.getElementById("totalPrice").innerHTML="<h4>Total:  <strong>$"+runningTotal+".00"+"</strong></h4>"; // produces sum of cost

};