console.log("JS OK");

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana
// (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

/*
1- prendo l'elemento dal dom
2- creo una costante con il prezzo al chilometro
3- chiedo all'utente il numero di chilometri che vuole percorrere e lo salvo nella costante kilometer
4- chiedo all'utente l'età del passeggero e l1 salvo nella costante age
5- creo una formula per calcolare il prezzo del biglietto integrale
6- creo due formule if per applicare gli sconti in base all'età
7- metto il prezzo del biglietto in pagina
*/

// 1- prendo l'elemento dal dom

const price = document.getElementById("target");
// console.log(price);

// 2- creo una costante con il prezzo al chilometro
const priceForKm = 0.21;

// 3- chiedo all'utente il numero di chilometri che vuole percorrere e lo salvo nella costante kilometer
const kilometer = parseInt(
  prompt("Quanti chilometri devi percorrere?", 150).trim()
);

// 4- chiedo all'utente l'età del passeggero e l1 salvo nella costante age
const age = parseInt(prompt("Quanti anni hai?", 34).trim());
console.log(kilometer, age);

// 5- creo una formula per calcolare il prezzo del biglietto integrale
const yourPrice = kilometer * priceForKm;
console.log(yourPrice);

// 6- creo due formule if per applicare gli sconti in base all'età
let discount = "You have no discount available!";

if (age < 18) {
  const reducedPrice = (yourPrice - yourPrice * 0.2).toFixed(2);
  discount = `You have a 20% discount. Your total is: ${reducedPrice}€`;
}

if (age >= 65) {
  const reducedPrice = (yourPrice - yourPrice * 0.4).toFixed(2);
  discount = `You have a 40% discount. Your total is: ${reducedPrice}€`;
}

console.log(discount);
