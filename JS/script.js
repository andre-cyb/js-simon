//fare partire un countdown di 30000 ms dove viene mostrato un alert con dei numeri casuali
//allo scadere del timer chiedere i numeri che si sono visti precedentemente

"use strict";




let arrayNumeri = [];

for (let i = 0; i < 5; i++) {
    let numero = randomNumber();
    arrayNumeri.push(numero);
}
console.log(arrayNumeri);

alert("ricorda questi numeri, hai 30 secondi di tempo a disposizione: " + arrayNumeri);






//////////////////////////////////////////////////////////////////7
//FUNZIONI
function randomNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
/* console.log(randomNumber()); */