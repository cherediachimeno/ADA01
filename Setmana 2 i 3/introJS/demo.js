
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    if (keyIsPressed === true) {
      fill("blue");
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }


        // FEM UN PROGRAMA... PERÒ NECESSITAREM "JUGAR" AMB INFORMACIONS DIVERSES... DADES DIVERSES
        // PER GUARDAR / "JUGAR" AMB AQUESTES DADES, UTILITZEM *********VARIABLES**********

            // ANEM A FER UNA VARIABLE (METÀFORA DE CAIXA) I LI POSAREM UN VALOR...
            // DOS FASES. PRIMERA FASE, DECLARAR-LA. SEGONDA FASE, INICIALITZAR-LA (DEFINIR-LA).
            /*
            let edad = 10;
            let edadProfesor;
            edadProfesor = 10.5;

            let empresa = "CodeOp";
            empresa = "Microsoft";
            empresa = "Google";
            empresa = 50;

            let estoyEstudiando = true;
            let estoyTrabajando = false;

            let eresMayorEdad = true;

             // valor vacío)
            let valor = null;
            valor = 10;
            let valor2; // undefined

            let pi = 3.1416;
            pi = 10;*/
        /*
            let edad = 18;
            let carnet = true;

            if (edad >= 18 && carnet == true){
                console.log("molt bé. tens carnet i ets major");
                console.log("***IMPRIMIENDO PÁGINA PARA ALQUILAR COCHE");
            } else {
                console.log("et falta alguna cosa. O el carnet o l'edat");
            }

            let origen = "Tailandesa";
            let bitllet = false;
            
            console.log("anem a comprovar que ets de la UE i tens bitllet...");
                // IF GRAN ON S'HA DE CUMPLIR BITLLET I ORIGEN...
            if (origen === "Unió Europea" && bitllet == true){

                console.log("molt bé. pots agafar l'avió");

            } else if (origen == "Unió Europea" || bitllet == true) {
                console.log("ooh. Quina llàstima! Et falta alguna cosa");

                    // IF NIUAT QUE INTENTA VEURE QUÈ ÉS EL QUE FALLA. 
                if(origen === "Unió Europea"){
                        console.log("et deixem una mica de temps per comprar el bitllet");
                } else {
                    console.log("Millor torna a casa i tramita el visat");
                }

            } else {
                console.log('No tens res. "Ni origen ni bitllet". No ens facis perdre el temps');
            }
            /*
            let edad = 18;
            let carnet = false;


            if(edad >= 18) {
                console.log("ets major d'edat");

                if(carnet == true) {
                    console.log("molt bé. també tens carnet");
                    console.log("***IMPRIMIENDO PÁGINA PARA ALQUILAR COCHE");
                } else {
                    console.log("ho sentim, però sense carnet, res...");
                }
            } 

            */

            const edad = 15;
            const beguda = edad >= 18 ? "pots veure vi" : "et toca suc";
            console.log(beguda);



            if (edad >= 18 ){
                console.log("pots veure vi");
            } else {
                console.log("et toca suc");
            }