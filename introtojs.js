
function usingVariables(){
  /*
    Declare a variable
    [var | let ] [variable name] = [value]
  */

  var nameDT = "Diana" + " Tenezaca";

  var nameM = "Markez " + "Timothy";

  var nameAL = "Alessandro" + " Mendoza";

  var nameC = "Cruz" + "Donovan";

  var nameT = "Tukiyah" + " Tilus ";
  
  var nameZ = "Rebecca " + "Orema";
  
  /* Write name to console using variable */
  console.log(nameDT);

  console.log(nameAL);

  console.log(nameM);

  console.log(nameC); 

  console.log(nameZ);
  
  console.log(nameT);
}

function helloWorld(){
  /*
    Write "Hello world" and your name to the console
    Hello World Rushi!
  */
  console.log("Hello World Diana");

  console.log("Hello World Alessandro!");
 
  console.log("Hello World Tukiyah");

  console.log("Hello World Rebecca");

  console.log("Hello World Markez");

  console.log("Hello World Donovan");
}

function usingIfStatements(){

  var num = 10;
  var key1 = "A";
  var key2 = "B";

  /* Print num if num is equal to 10 */
    if(num == 10){
      console.log(num);
    }
  /* Print num if num is NOT equal to 10 */
    if(num != 10){
      console.log(num);
    }
  /* Print "A" if key1 is A */
  if (key1 == "A"){
    console.log("A");
  }
  /* Print "B" if key2 is B */
  if (key2 == "B"){
    console.log("B");
  } 
  
  /* Print "AB" if key1 is A and key2 is B */
  if (key1 == "A" && key2 == "B"){
    console.log("AB");
  }
  /* Print "A or B" if key1 is A or key2 is B */

  if (key1 == "A" || key2 == "B"){
    console.log("A or B");
  }
  /* Print "AB 10" if key1 is A or key2 is B and num is 10*/
  if (key1 == "A" || key2 == "B" && num == 10){
    console.log("AB 10");
  }
}

var nameDiana = "Diana";
function dianasFunction(name){
  console.log("Hi! I'm " + name);
}
var nameMT = "Markez"
function Markez_Function(name){
  console.log("Yoo! My name is " + name);
}

function CruzFunction(){
  console.log("Hi! I'm Donovan");
}

var nameAless = "Alessandro"
function AlessFunction(name){
  console.log("Who is " + name + "?");
}

var cookie = "Burger King foot lettuce";
function eyes(text){
  console.log(text);
}

function tukiyahsFunction(name){
  console.log("BOMBOCLAT"); 
  
}

function parameterFuncs(){
  dianasFunction(nameDiana);
  Markez_Function(nameMT);
  AlessFunction(nameAless);
  eyes(cookie);
}

