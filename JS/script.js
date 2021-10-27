
"use strict";

let arrayNumeri = [];
let arrayNumeriUtente = [];
let arrayNumeriIndovinati = [];
let numero;

for (let i = 0; i < 5; i++) {
    numero = randomNumber();
    arrayNumeri.push(numero);
}
console.log("i numeri generati da indovinare sono: " + arrayNumeri);

alert("ricorda questi numeri:   " + arrayNumeri);

setTimeout(programForPromptControlAndResult, 300);




//////////////////////////////////////////////////////////////////7
//FUNZIONI
function randomNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function programForPromptControlAndResult() {
    let arrayNumeriUtente = [];

    //PROMPT numeri utente e push nell'array vuoto di numeriUtente/////////
    let numeriUtente1 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    if ((numeriUtente1 === "") || (isNaN(numeriUtente1))) {
        alert("NOTA: puoi inserire solo numeri ");
        return;
    }
    let numeriUtente2 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    let numeriUtente3 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    let numeriUtente4 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    let numeriUtente5 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    //push nell'array
    arrayNumeriUtente.push(numeriUtente1);
    arrayNumeriUtente.push(numeriUtente2);
    arrayNumeriUtente.push(numeriUtente3);
    arrayNumeriUtente.push(numeriUtente4);
    arrayNumeriUtente.push(numeriUtente5);
    console.log("l'utente ha inserito: " + arrayNumeriUtente);
    ////////////////


    //CONTROLLO ciclando i numeri utente e vedo se esistono già nell'arrayNumeri, se esistono allora li pusho in arrayIndovinati
    for (let i = 0; i < arrayNumeriUtente.length; i++) {
        let numeroUtente = arrayNumeriUtente[i];
        //console.log(numeroUtente);

        let numeroEsiste = false;
        if (arrayNumeri.includes(numeroUtente)) {
            numeroEsiste = true;
            arrayNumeriIndovinati.push(numeroUtente);
        } else if (arrayNumeriIndovinati === undefined) {
            alert("Mi dispiace non hai indovinato nessun numero");
        }
    }
    console.log(arrayNumeriIndovinati);

    //messaggio alert per visualizzare il risultato
    if (arrayNumeriIndovinati != "") {
        alert(` complimenti hai indovinato ${arrayNumeriIndovinati.length} numeri: ${arrayNumeriIndovinati}`);
    } else {
        alert(` Mi dispiace... non hai indovinato nessun numero`);

    }

}

