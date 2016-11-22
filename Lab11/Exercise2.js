var Nouns = new Array();
  Nouns[0] = "tsunami!";
  Nouns[1] = "earthquake!";
  Nouns[2] = "vocanic eruption!";
  Nouns[3] = "tornado!";
  Nouns[4] = "famine!";


var Adjectives = new Array();
  Adjectives[0] = "purple";
  Adjectives[1] = "galactic";
  Adjectives[2] = "wooden";
  Adjectives[3] = "deadly";
  Adjectives[4] = "sparkly";


function aGenerator(){
    var randomAdjective = Math.floor( Math.random()*4 );
    var randomNoun = Math.floor( Math.random()*4 );

    document.getElementById("Paragraph").innerHTML += "What a " + (Adjectives[randomAdjective]) + " " + (Nouns[randomNoun]) +"!"+"<br/>";
}
