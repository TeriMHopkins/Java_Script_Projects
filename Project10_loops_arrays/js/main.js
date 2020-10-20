var text= ""
var i = 20;
function down(){
do {
    text += "<br>" +i;
    i--;
}
while (i > 0);
document.getElementById("warning").innerHTML = text;  //while loop enters a line break while counting down from 20//
} 

function up(){
var T="";
var o;
for (o = 1; o < 21; o++) {
    T += o +"<br>";
}
document.getElementById("warning").innerHTML = T;  //for loop that gives var "o" a job counting to 20//
}

var flavors = ["Vanilla", "English Toffee", "Caramel", "Butterscotch", "Peanut butter"];  //some arrays for following functions//
var sizes = ["12oz", "16oz", "20oz", "24oz"];

function constant_function() {
    const Latte = {flavor: flavors[3],size: sizes[0] };
    Latte.size = sizes[3];
    Latte.price = "$4.00";
    document.getElementById("warning").innerHTML= ("Here's your ")+Latte.size + //creates a const with properties, uses the previous arrays//
    (" latte. Your total will be ") + Latte.price;
}

function l_function(){
let Latte = {
    size: "16oz",
    flavor: "Caramel",
    style: "blended",
    receipt: function(){
        return "Here is your "+(this.size +this.flavor +this.style);  //let function using the previous const//
    }
}
document.getElementById("warning").innerHTML=Latte.receipt();
}