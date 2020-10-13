function aloe(){
    document.getElementById("disp_one").innerHTML=(typeof "aloe"); //typeof operator//
}

function nan(){
    document.getElementById("disp_one").innerHTML=("0 divided by 0 displays" )+( 0/0);
    
}

function is_nan(){
    document.getElementById("disp_one").innerHTML= isNaN('this is a string');
}

function is_nan2(){
    document.getElementById("disp_one").innerHTML=isNaN('333');
}

function infinity(){
    document.getElementById("disp_one").innerHTML=(3E333);
}

function neg_infinity(){
    document.getElementById("disp_one").innerHTML=(-3E333);
}

function bool_1(){
    document.getElementById("disp_one").innerHTML=(7>1); //begin operator examples//
}

function bool_2(){
    document.getElementById("disp_one").innerHTML=(7<1);
}

function coer(){
    document.getElementById("disp_one").innerHTML=("17"+ 7);

}

function trip(){
    t=12;
    l=12;
    document.getElementById("disp_one").innerHTML=(t===l);
}

function trip2(){
    rr=12;
    qq="12";
    document.getElementById("disp_one").innerHTML=(rr===qq);
}

function trip3(){
    zz=16;
    bb=14;
    document.getElementById("disp_one").innerHTML=(zz===bb);
}

function and(){
    document.getElementById("disp_one").innerHTML=( "6 > 3 && 11 > 5")+( 6 > 3 && 11 > 5)+("4 > 12 && 12 > 3")(4 > 12 && 12 > 3);
}

function or(){
    document.getElementById("disp_one").innerHTML=( 6 > 11 || 11 > 5)+(6 > 11 || 11 > 22);
}

function notfun(){
    document.getElementById("disp_one").innerHTML= !( 5 > 12)+!(30 > 20); //end examples//
}

console.log("5+5="+5+5);                    //console examples//
console.log("10 is less than 4"+ 10<4);
console.log(12==12);
console.log(3==11);

