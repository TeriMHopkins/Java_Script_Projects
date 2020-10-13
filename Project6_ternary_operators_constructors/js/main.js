function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").nodeValue;
    Can_ride=(Height<52)?"You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML=Can_ride + "to ride.";  //asks the height of person to determine if they are tall enough//
}

function Vote_Function() {
    var Age, Can_vote;
    Age=document.getElementById("Age");
    Can_vote=(Age<21)? "You are too young to ": "You are old enough ";
    document.getElementById("Vote").innerHTML=Can_vote + "to vote.";  //checks to see if person is of age to vote//
}

function Vehicle(Make, Model, Year, Color) { //creates an inventory//
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Colt", "1980", "Yellow");   //adds new additions to the invetory//
var Emily=new Vehicle("Subaru", "Forester", "2002", "White");
var Erik=new Vehicle("Chevy", "Nova", "1978", "Light Blue");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " +Erik.Vehicle_Color +"-colored "+Erik.Vehicle_Model +
    " manufactured in " +Erik.Vehicle_Year;
}
var Annie=new Vehicle("Volkswagon", "Eurovan", "1976", "Dark Green");
function Keywords() {
    document.getElementById("New_and_This").innerHTML=
    "Annie drives a " +Annie.Vehicle_Model;
}

function Sandwich(Bread, Protein, Vegetable, Sauce) {  //this could be a sandwich order form//
    this.Sandwich_Bread=Bread;
    this.Sandwich_Protein=Protein;
    this.Sandwich_Vegetable=Vegetable;
    this.Sandwich_Sauce=Sauce;

}

var Joy=new Sandwich("Pita", "Tempeh", "Red peppers", "Hummus" );  //these are new orders//
var Ben=new Sandwich("Hawaiian Roll", "Pulled Pork", "Onions", "BBQ" );
var Charlie=new Sandwich("Wrap", "Chicken","Pickles", "Buffalo");

function myFunction_b() {
    document.getElementById("sandwich_order").innerHTML=
    "Ben has placed a sandwich order :" + Ben.Sandwich_Protein+" on a "+Ben.Sandwich_Bread+   //this could be print out for the kitchen//
    " with "+ Ben.Sandwich_Vegetable+" and "+Ben.Sandwich_Sauce + " sauce.";
}

function Nested_Function() {
    document.getElementById("Counting").innerHTML=Count();  //counts based off number given to prompt//
}
        function Count() {
            var Starting_point = window.prompt("Enter a number");
            function Plus_One() {Starting_point += 1;}
            Plus_One();
            return Starting_point;
        }
    