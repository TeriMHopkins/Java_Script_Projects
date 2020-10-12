function myDictionary(){
    var Crystal = {
        name: "Amethyst",
        type: "Silicate mineral",
        color: "Purple",
        
    };
    delete Crystal.color;
    document.getElementById("displayhere").innerHTML=Crystal.name+Crystal.type+Crystal.color; //returns all pairs//
}

function myDictionary_n(){
    var Crystal = {
        name: "Amethyst",
        type: "Silicate mineral",
        color: "Purple",
        
    };
    delete Crystal.color;
    document.getElementById("displayhere").innerHTML=Crystal.name; //returns name//
}

function myDictionary_t(){
    var Crystal = {
        name: "Amethyst",
        type: "Silicate mineral",
        color: "Purple",
        
    };
    delete Crystal.color;
    document.getElementById("displayhere").innerHTML=Crystal.type; //returns type//
}

function myDictionary_c(){
    var Crystal = {
        name: "Amethyst",
        type: "Silicate mineral",
        color: "Purple",
        
    };
    delete Crystal.color;
    document.getElementById("displayhere").innerHTML=Crystal.color; //returns color, but color is deleted//
}
