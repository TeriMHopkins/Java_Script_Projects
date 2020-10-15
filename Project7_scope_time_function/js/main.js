function Appointment(){
    var Date=prompt("enter a day (Tuesday-Saturday)");  //function that sends reply based on user input//
    var Time=prompt("enter a time (11-11pm)");   //fires based off input of tattoo function//
    var Reply;
    if (Time < 11 == Time >0){
        Reply = "Please choose a later time";
    }
    else if (Time > 11 == Time <18) {
        Reply = "We will see you "+Date+" afternoon!"
    }
    else{
        Reply = "We will see you "+Date+" evening!"
    }
    document.getElementById("App_time").innerHTML = Reply;
}


function Tattoo(){
    Age = document.getElementById("age_input").value;
    if (Age <=2003 ){
        Ink = ("Pick a time for your appointment"+(Appointment())+Reply); //determines age and fires appointment function//
    }
    else {
        Ink = "You are too young to get a tattoo.";
    }
    document.getElementById("res").innerHTML = Ink;
}

function Time_foot(){
    var Time_f= new Date().getHours();     //displays different greetings based on user's local time//
    var Reply_f;
    if (Time_f < 12 == Time_f >0){
        Reply_f = "good mornin/'/ and welcome to ";
    }
    else if (Time_f > 12 == Time_f <18) {
        Reply_f = "good afternoon and welcome to";
    }
    else{
        Reply_f = "good evening and welcome to...";
    }
    document.getElementById("foot").innerHTML = Reply_f;
}

var msg= document.getElementById("msg").value;  //function with error for console log debugging purposes//
function contact(){
    msg="we will be in touch!";
    document.getElementById("m").innerHTML= msg;
}
console.log(msg);

