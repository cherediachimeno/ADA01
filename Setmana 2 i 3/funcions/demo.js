// CODI SENSE FUNCIONS... REPETIM UNA VEGADA RERE L'ALTRE... 
// POC PRÀCTIC SI TENIM MÉS D'UN CLIENT
/*

let producte1 = 5.95;
let producte2 = 10.95;
let producte3 = 19.95;
let producte4 = 49.95;
let despesesEnviament = 1.99;

// PRIMER CLIENT. BON DIA.

let total = producte1 + producte2;
console.log("el total de su compra es de " + total);
let respuesta = window.prompt("vol que li enviem a casa?");

if (respuesta === "si" || respuesta === "sí" || respuesta === "SI" || respuesta == "SÍ"){
    total = total + despesesEnviament;
    console.log("perfecte, el total amb les despeses d'enviament és de " + total);
} else {
    console.log("entenem que ho vol ara. El total es de " + total);
}

// SEGON CLIENT. BON DIA.

total = producte1 + producte3 + producte4;
console.log("el total de su compra es de " + total);
respuesta = window.prompt("vol que li enviem a casa?");

if (respuesta === "si" || respuesta === "sí" || respuesta === "SI" || respuesta == "SÍ"){
    total = total + despesesEnviament;
    console.log("perfecte, el total amb les despeses d'enviament és de " + total);
} else {
    console.log("entenem que ho vol ara. El total es de " + total);
}

// */
// CODI AMB FUNCIÓ. NOMÉS UNA I ES RECICLABLE.  
let producte1 = 5.95;
let producte2 = 10.95;
let producte3 = 19.95;
let producte4 = 49.95;
let despesesEnviament = 1.99;

// PRIMER CLIENT. BON DIA.
let total = producte1 + producte2;
despesesGratis();
calculo();

// SEGON CLIENT. BON DIA.
total = producte1 + producte3 + producte4;
despesesGratis();
calculo();

console.log("el dia s'ha acabat. adeu");


// en aquesta funció fem el calcul i preguntem si vol els productes a casa...
function calculo(){
    console.log("el total de su compra es de " + total);
    respuesta = window.prompt("vol que li enviem a casa?");
    
    respuesta.toUpperCase(); // CONVERTEIX RESPUESTA EN MAJUSCULES... també toLowerCase per convertir el text en minus

    if (respuesta === "SI" || respuesta == "SÍ"){
        total = total + despesesEnviament;
        console.log("perfecte, el total amb les despeses d'enviament és de " + total);
    } else {
        console.log("entenem que ho vol ara. El total es de " + total);
    }    
}

function despesesGratis(){
    if (total > 70){
        console.log("enhorabona, gastes més de 70 euros, per tant, despeses gratuites")
        despesesEnviament = 0;
    }
}