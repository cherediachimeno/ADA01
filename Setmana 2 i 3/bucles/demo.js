
/*console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
*/

/* EXEMPLE BUCLE WHILE

let edad = 10; // COUNTER

   // 1ºPAS: CONDICIÓ // CONDITION
while (edad < 18) {
    //2º PAS: TOTES LES ACCIONS QUE VOLGUEM
    console.log("AÚN eres menor de edad");
   
    if (edad === 17 || edad === 16){
        console.log("ya casi eres mayor de edad. Tienes 16 o 17");
    }

    //3º PAS: ITERADOR, MODIFICADOR. / ITERATOR
    edad++;
} 

// EXEMPLE BUCLE FOR (MÉS HABITUAL)

     // COUNTER    CONDITION     ITERATOR
for (let edad = 10; edad < 18; edad++)  {
    // ACCIONS!

    if (edad === 13){
        console.log("enhorabona tens 13 anys");
        continue;
     }

    console.log("aún eres menor de edad");

    
}
*/

// BUCLE FOR SEGONS CONVENCIÓ (ÚS DE LA LLETRA i, INICIAL D'INDEX - PER NO UTILITZAR, COUNT, CONTADOR...)
/*
let i // i abreviació de index.

for (let i = 1; i <= 100; i++) {
    console.log(i);
}*/

/*
let contador = 1;

// "MIENTRAS"... AQUÍ ENTREM EN EL BUCLE...

       //CONDICIÓ PER ENTRAR AL BUCLE (I ROMANDRE EN ELL MATEIX).
while (contador <= 300) {
    // LES ACCIONS. CADA COP QUE FEM UNA VOLTA, FAREM AQUESTES ACCIONS...
    console.log(contador);

    // ITERADOR. QUAN ACABEM LES ACCIONS, FES ALGUNA COSA MÉS ABANS DE SORTIR DE LA VOLTA...
    contador = contador + 2;
}*/

/*
 EJEMPLO CON UN OBJETO LITERAL (DIFICULTAD ELEVADA!! OJO!!)
const PELIS = {
    1 : {
        titulo: "Spiderman",
        imagen: "LINK",
    },
    2 : {
        titulo: "James Bond",
        imagen: "LINK",
    },
    3 : {
        titulo: "Harry Potter",
        imagen: "LINK",
    },
    4 : {
        titulo: "Spiderman",
        imagen: "LINK",
    }
}

let numeroPelis = 20;
for (let i = 1; i <= 4; i++){
    console.log("IMPRIMIENDO POR PANTALLA FICHA PELICULA... **** ");
    console.log(PELIS[i].titulo);
}

*/
// PER RECÓRRER UN ARRAY... EN AQUEST CAS, UTILITZEM LA FUNCIÓ LENGTH PER SABER EXACTAMENT LA MIDA
/*
let estudiants = ["Charo", "Zakia", "Linnea"];

for (let i = 0; i < estudiants.length; i++) {
  console.log(estudiants[i]);
}

estudiants.push("Mireia");

for (let contador = 0; contador < estudiants.length; contador++) {
    console.log(estudiants[contador]);
  }
*/
/*
let carrito = ["Ordenador", "Ratón", "Teclado"];

for (let i = 0; i < carrito.length; i++) {
    console.log("imprimiendo por pantalla producto nº..." + i + " : " + carrito[i]);
  }

carrito.push("Mochila para el PC");

for (let i = 0; i < carrito.length; i++) {
    console.log("imprimiendo por pantalla producto nº..." + i + " : " + carrito[i]);
  }

  */

// DO WHILE - DIFERENT. HI HA PART DEL CODI QUE S'INICIALITZARÀ COM A MÍNIM 1 COP.



  
let edad = 15; 


// LA MÁQUINA ARRIBA AQUÍ I COM A MÍNIM EXECUTA 1 COP EL QUE TENIM DINS EL DO!

do {
  console.log("enhorabuena has entrado en el bucle, esto es la parte del DO");
  edad++;

} while (edad <= 20);
