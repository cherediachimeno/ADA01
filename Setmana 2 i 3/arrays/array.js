/*
// VULL FER UNA LLISTA D'ESTUDIANTS...
// he de crear sis variables diferents
let estudiante1 = "Ines";
let estudiante2 = "Raquel";
let estudiante3 = "Charo";
let estudiante4 = "Zakia";
let estudiante5 = "Elsa";
let estudiante6 = "Linnea";
let estudiante7 = "Ainara";

// PER ACCEDIR ALS VALORS DE LES VARIABLES...
console.log("Hola " + estudiante1);
estudiante1 = "Inés"; */

// PER FER-HO MÉS FÀCIL, CREAREM UN ARRAY ("LLISTA DE VARIABLES")
let llistaEstudiants = ["Ines", "Raquel", "Charo", "Zakia", "Elsa", "Linnea", "Ainara"];
                    //   0         1         2        3        4        5         6

// PER ACCEDIR ALS VALORS DE L'ARRAY...

console.log("Hola " + llistaEstudiants[0]);
llistaEstudiants[0] = "Inés";

// FUNCIONS QUE PODEM UTILITZAR...
// FUNCIÓ PUSH > AFEGIM UNA NOVA VARIABLE AL ARRAY.

llistaEstudiants.push("Carlos");
console.log("aqui després del push " + llistaEstudiants[7]);


// let llistaEstudiants = [null, "Raquel", "Charo", "Zakia", "Elsa", "Linnea", "Ainara", "Carlos"];

// llistaEstudiants = null;

// let llistaEstudiants = ["Raquel", "Raquel", "Charo", "Zakia", "Elsa", "Linnea", "Ainara", "Carlos"];

console.log("elements al llistat" + llistaEstudiants.length);

// FUNCIÓ POP > ESBORREM ÚLTIM ELEMENT 
llistaEstudiants.pop();
console.log("després del pop..., l'element 0 és ... " + llistaEstudiants[0]);

// FUNCIÓ SHIFT > ESBORREM PRIMER ELEMENT
llistaEstudiants.shift();

//SPLICE
let array=[1,2,3,4,5, 6, 7, 8];
console.log(array[0, 2]);
// CORTE IRREVERSIBLE EN EL ARRAY. SPLICE CORTA EL ARRAY ORIGINAL. LO MODIFICA. 
array.splice(0, 2);
console.log("post SPLICE" + array[3]);

//SLICE
let array2=[1,2,3,4,5];
// COPIAMOS LOS DATOS DESDE EL INDICE Nº 2. NO MODIFICA, NI CORTA, NI DESTRUYE EL ARRAY ORIGINAL.
let corteSandia = array2.slice(2);

console.log("slice" + array2);
