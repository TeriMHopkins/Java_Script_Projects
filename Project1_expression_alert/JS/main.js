var z=("\"H");
var x=("e");
var v=("l");
var n=(v);
var m=("o");

//the above assigns different letters to variables//


var A=(" Clarice\""+"-Dr. Lecter"); //this assigns a string to a variable//


document.write(z+x+v+n+m+A);//this writes an expression of a combination of variables//


function Function_1() {
    var str="You chose red!";
    var result=str.fontcolor("red");
    document.getElementById("A_1").innerHTML=result; //this function is called by clicking the red button//
}

function Function_2() {
    var str2="You chose blue!";
    var result_2=str2.fontcolor("blue");
    document.getElementById("A_2").innerHTML=result_2; //this function is called by clicking the blue buttom//
}

function Function_3() {
    var B=("Thanks for playing!");
    var C=window.alert(B)
    document.getElementById("A_3").innerHTML=C; //this function is called by performing either of the above functions and results in a pop up//

  
}