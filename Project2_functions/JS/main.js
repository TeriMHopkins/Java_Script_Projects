function functionOne() {
    var text;
    var person = prompt("Your name here");
    if (person == null || person ==""){
        text = "Name required.";
    }else {
       text = "Welcome " + person + "!";}
    document.getElementById("one").innerHTML = text;
}

function functionTwo() {
    var ask;
    var answer = document.getElementById("twentyone").innerHTML
    if (answer < 21)
        answer = "higher";
    if (answer > 21)
        answer="lower";
    document.getElementById("answ").innerHTML = answer;
}