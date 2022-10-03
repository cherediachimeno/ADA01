// EXEMPLE A CLASE DE PARSEINT... 
/*
let respuesta = parseInt(window.prompt("escriu un número")); // tipus de funcionalitat que agafa el que escrius com a String
let respuesta2 = parseInt(window.prompt("escriu un altre número"));

console.log(sumar(respuesta, respuesta2));
console.log(sumar(5, 5));

function sumar(x, y){
    return x + y;
}

let nombre = "10"; // nombre serà un 10 com a string
let numero = parseInt(nombre); // numero serà un 10 com a number.


*/ 

/*
console.log(greetPerson("Vicky")); // "Hello, Vicky!"
console.log(greetPerson(42)); // "Please provide a name."

function greetPerson(x) {
  if (typeof x === "string"){
     return ("Hello " + x)
  } else {
     return ("Please vichita provide a name.")
  } 
}
*/
// EJEMPLO INTERACCIÓN
/*
// ARRAY -- LLISTA DE PRODUCTES
let productosDisponibles = ["Ordinador", "Ratolí", "Teclat", "Cascos", "Videojoc"];
// EXECUTO FUNCIÓ PER PREGUNTAR...
queQuieres();

function queQuieres(){
    let deseo = window.prompt("dime qué quieres comprar...");
    verDisponibilidad(deseo);
}

function verDisponibilidad(x) {
    
if (productosDisponibles.indexOf(x) === -1) {
    window.alert("Este producto no lo tenemos");
} else {
    window.alert(`Perfecto, aquí tienes tu... ${x}`);
}

let continuar = window.prompt("¿Quieres seguir comprando?");
    if (continuar === "sí" || continuar === "si"){
        queQuieres();
    } else {
        window.alert("muy bien. adiós");
    }
}
*/

// EXERCICI 6 UTILITZANT INDEXOF
/*
console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1

function getIndex([a,b,c,d,e,f], v){

  let array = [a,b,c,d,e,f];

  if (array.indexOf(v) === -1) {
    window.alert("NO tenemos este valor en el array");
  } else {
    window.alert("perfecto. Este número sí lo tenemos");
  }

} */

// EXERCICI 6 SENSE INDEXOF - ús d'un loop
 /*
console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1

function getIndex([a,b,c,d,e,f], v){
  let array = [a,b,c,d,e,f];
    console.log("****EXEMPLE******************");
  for (let i = 0; i < array.length; i++){
        console.log("voltes i voltes el món va donant voltes");
        if (array[i] === v){
            console.log("existeix coincidencia");
        } 
  }
}
*/