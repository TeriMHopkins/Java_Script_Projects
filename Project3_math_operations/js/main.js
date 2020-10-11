
function myFunction_add() {
    addition= 7+7;
    document.getElementById("math").innerHTML="7 + 7 =" +addition;
}

function myFunction_addinc() {
    x= addition;
    x++
    document.getElementById("math").innerHTML="7 + 7 + 1 =" +x;
}
//functions above perform addition//

function myFunction_sub() {
    subtract = 7987-7;
    document.getElementById("math1").innerHTML="7987 - 7 =" + subtract;
}

function myFunction_subdec() {
    xy=subtract;
    xy--
    document.getElementById("math1").innerHTML="7987 - 7 - 1 =" + xy;
}
//functions above perform subtraction//

function myFunction_mult() {
    multiply= 7*7;
    document.getElementById("math2").innerHTML="7 x 7 =" + multiply;

}

function myFunction_multran() {
    window.alert(Math.random() * 49);
document.getElementById("math2");
}
//functions above perform multiplication//

function myFunction_div() {
    divide = 7 / 7;
    document.getElementById("math3").innerHTML="7 / 7 =" + divide; //performs division//
}

function myFunction_all() {
     math_ops = (3+5) * 94 / 4 -9;
    document.getElementById("math4").innerHTML="3 + 5, x 94 / 4 -9 =" + math_ops; //performs different math operations in one//
}

function myFunction_op() {
    per = 94759%98;
    document.getElementById("math_a").innerHTML ="When you divide 94759 by 98 you have a remainder of: "+ per; //produces the remainer percentage//
}

function myFunction_neg() {
    N = 46;
    document.getElementById("math_b").innerHTML = -N;
}


