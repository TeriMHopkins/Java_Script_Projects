function full_Sentence() {
    var one="There is no ";
    var two="place like ";
    var three="home ";
    var whole_sentence= one.concat(two, three);
    document.getElementById("concatenate").innerHTML=whole_sentence; //concat method//
}

function slice_method(){
    var sentence="Some people without brains do an awful lot of talking";
    var section=sentence.slice(19,26);
    document.getElementById("Slice").innerHTML=section;                    //slice method//
}

function Case_up(){
    var str="Are you a good witch or a bad witch?";
    var res=str.toUpperCase();
    document.getElementById("witch").innerHTML=res;    //uppercase method //
}

function string_Method(){
    var X =1939;
    document.getElementById("release").innerHTML=("The Wizard of Oz was orignally released in ")+X.toString();  //string method//
}

function precision_Method() {
    var Z=26.14203200
    document.getElementById("box_Office").innerHTML=("The films' cumulative worldwide boxoffice gross is ")+Z.toPrecision(2)+(" million dollars.");  //precision method/
}

function to_fixed() {
    var num =5.3431100;
    document.getElementById("opening").innerHTML =("The opening week boxoffice gross for the rerelease in 1998 was ")+num.toFixed(2)+(" thousand dollars."); //to fixed method//
}

function val_Method() {
    var toto="Toto, I've a feeling we're not in Kansas anymore"  //value of method//
    var val= toto.valueOf();
    document.getElementById("kansas").innerHTML=val;
}
