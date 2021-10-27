

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

setTimeout(promptPush, 300);











//////////////////////////////////////////////////////////////////7
//FUNZIONI
function randomNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function promptPush() {
    let arrayNumeriUtente = [];
    let numeriUtente1 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    if ((numeriUtente1 === "") || (isNaN(numeriUtente1))) {
        alert("NOTA: puoi inserire solo numeri ");
        return;
    }
    let numeriUtente2 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    let numeriUtente3 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    let numeriUtente4 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    let numeriUtente5 = parseInt(prompt("Riesci a ricordare i numeri? prova e inseriscili qua sotto. "));
    arrayNumeriUtente.push(numeriUtente1);
    arrayNumeriUtente.push(numeriUtente2);
    arrayNumeriUtente.push(numeriUtente3);
    arrayNumeriUtente.push(numeriUtente4);
    arrayNumeriUtente.push(numeriUtente5);
    console.log("l'utente ha inserito: " + arrayNumeriUtente);

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

    if (arrayNumeriIndovinati != undefined) {
        alert("complimenti hai indovinato i seguenti numeri: " + arrayNumeriIndovinati);
    }

}

