let queVols = window.prompt("què vols fer. Crear un botó o crear una taula?");

if (queVols === "taula"){
    document.getElementById("disseny").innerHTML = `
    <h1>DISSENYANT TAULA... </h1>`
} else if (queVols === "botó" ||queVols ==="boto"){
    document.getElementById("disseny").innerHTML = `
    <h1>DISSENYANT BOTÓ... </h1>`
} else {
    document.getElementById("disseny").innerHTML = `
    <h1>DISSENYANT EL NO RES... (VALOR NO VÀLID) </h1>`
}

// CREANT ELEMENT AMB EL CREATE ELEMENT

const nouElement = document.createElement("h3");
nouElement.innerHTML = "Això és un nou element";
// Append to another element:
document.getElementById("creantElements").appendChild(nouElement);

function handleClick() {
 let nombre = window.prompt("com et dius?");
 document.getElementById("probando").innerHTML = `
    <h1>Hola ${nombre}</h1>
    <h2>NOU BOTÓ</h2>
    <button id="boton2" onclick="clickNuevoBoton()">PINTAR FONS!</button>
 `}

 /*
 document.getElementById("boton").style.color = "red";
 document.getElementById("body").style.backgroundColor = "grey";
*/ 

function clickNuevoBoton() {
    let colorFons = window.prompt("digue'm un color en anglès");
    document.getElementById("body").style.backgroundColor = colorFons;

    // EXEMPLE SIMPLIFICAT
    /*let colorFons = window.prompt("digue'm un color en anglès");
    let BODY_DOM = document.getElementBy("body");
    BODY_DOM.style.backgroundColor = colorFons; */
}



